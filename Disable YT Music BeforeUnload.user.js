// ==UserScript==
// @name         Disable YT Music BeforeUnload
// @match        https://music.youtube.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==
(function() {
    // 1. Neutralize any existing onbeforeunload handler
    window.onbeforeunload = null;
    // 2. Hook addEventListener to block future 'beforeunload' registrations
    const origAddEventListener = window.addEventListener;
    window.addEventListener = function(type, listener, options) {
        if (type === 'beforeunload') {
            console.warn("Blocked a 'beforeunload' listener from being added.");
            return;  // Prevent adding any beforeunload event
        }
        return origAddEventListener.call(this, type, listener, options);
    };
    // 3. (Optional) Remove any beforeunload events added via other means (if accessible)
    // 4. Ensure no unload prompt: no handler should call preventDefault or set returnValue.
})();