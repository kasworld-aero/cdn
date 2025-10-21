(() => {
  // Get current script tag
  const currentScript = document.currentScript || [...document.scripts].pop();
  const src = currentScript?.getAttribute('src') || '';

  // Base URL of this script
  const baseUrl = src.substring(0, src.lastIndexOf('/') + 1);

  // Parse query parameters
  const query = src.split('?')[1] || '';
  const params = new URLSearchParams(query);

  // Get lists
  const jsFiles = params.get('js')?.split(',').filter(Boolean) || [];
  const cssFiles = params.get('css')?.split(',').filter(Boolean) || [];

  // Helper: skip full URLs, only relative paths
  const isRelative = (path) => !/^https?:\/\//i.test(path);

  // --- Load JS (relative only) ---
  const loadJS = (name) => new Promise((resolve, reject) => {
    if (!isRelative(name)) return resolve(); // skip full URLs
    if (document.querySelector(`script[data-lib="${name}"]`)) return resolve();

    const script = document.createElement('script');
    script.src = `${baseUrl}lib/js/${name}.js`;
    script.async = true;
    script.dataset.lib = name;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load JS: ${name}`));
    document.head.appendChild(script);
  });

  // --- Load CSS (relative only) ---
  const loadCSS = (name) => new Promise((resolve, reject) => {
    if (!isRelative(name)) return resolve(); // skip full URLs
    if (document.querySelector(`link[data-lib="${name}"]`)) return resolve();

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${baseUrl}lib/css/${name}.css`;
    link.dataset.lib = name;
    link.onload = resolve;
    link.onerror = () => reject(new Error(`Failed to load CSS: ${name}`));
    document.head.appendChild(link);
  });

  // --- Load CSS first, then JS ---
  Promise.all(cssFiles.map(loadCSS))
    .then(() => Promise.all(jsFiles.map(loadJS)))
    .then(() => {
      console.log('✅ All relative libraries loaded', { js: jsFiles, css: cssFiles, baseUrl });
      document.dispatchEvent(new CustomEvent('libsLoaded', {
        detail: { js: jsFiles, css: cssFiles, baseUrl }
      }));
    })
    .catch(err => console.error('❌ Relative library loading error:', err));
})();
