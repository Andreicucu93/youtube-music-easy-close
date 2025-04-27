// ==UserScript==
// @name         Disable YT Music BeforeUnload
// @match        https://music.youtube.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==
(function() {
    // 1. Neutralize any existing onbeforeunload handler
    window.onbeforeunload = null;
    const origAddEventListener = window.addEventListener;
    window.addEventListener = function(type, listener, options) {
        if (type === 'beforeunload') {
            console.warn("Blocked a 'beforeunload' listener from being added.");
            return;  // Prevent adding any beforeunload event
        }
        return origAddEventListener.call(this, type, listener, options);
    };

})();
