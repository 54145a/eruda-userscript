// ==UserScript==
// @name         Eruda
// @namespace    https://54145a.github.io/
// @version      2025-02-22
// @description  Simple userscript to load eruda.
// @author       145a
// @match        *://*/*eruda=1*
// @run-at       document-body
// @icon         https://www.tampermonkey.net/favicon.ico
// @require      https://cdn.jsdelivr.net/npm/eruda
// @grant        none
// @connect      *

// ==/UserScript==

(function() {
    window.eruda.init();
    window.eruda.show();
})();