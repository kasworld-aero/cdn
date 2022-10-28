function loadScriptsSequential(scriptsToLoad) {

    function loadNextScript() {
        var done = false;
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.onreadystatechange = function () {
            if (this.readyState == 'complete' || this.readyState == 'loaded') {
                scriptLoaded();
            }
        }
        script.onload = scriptLoaded;
        script.src = scriptsToLoad.shift(); // grab next script off front of array
        head.appendChild(script);

        function scriptLoaded() {
            // check done variable to make sure we aren't getting notified more than once on the same script
            if (!done) {
                script.onreadystatechange = script.onload = null;   // kill memory leak in IE
                done = true;
                if (scriptsToLoad.length != 0) {
                    loadNextScript();
                }
            }
        }
    }

    loadNextScript();
}
