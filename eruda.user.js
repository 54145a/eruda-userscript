// ==UserScript==
// @name         Eruda
// @namespace    https://54145a.github.io/
// @version      2025-02-22
// @downloadURL  https://github.com/54145a/eruda-userscript/raw/refs/heads/main/eruda.user.js
// @updateURL    https://github.com/54145a/eruda-userscript/raw/refs/heads/main/eruda.user.js
// @description  Simple userscript to load eruda.
// @author       145a
// @match        *://*/*eruda=1*
// @run-at       document-body
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      https://cdn.jsdelivr.net/npm/eruda
// @grant        none
// @connect      *

// ==/UserScript==

(function() {
    window.eruda.init();
    window.eruda.show();
})();