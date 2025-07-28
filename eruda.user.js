// ==UserScript==
// @name         Eruda
// @description  Simple userscript that loads eruda console.
// @match        *://*/*?*loaderuda=1*
// @version      2025-06-20
// @namespace    https://github.com/54145a
// @downloadURL  https://github.com/54145a/eruda-userscript/raw/refs/heads/main/eruda.user.js
// @updateURL    https://github.com/54145a/eruda-userscript/raw/refs/heads/main/eruda.user.js
// @require      https://cdn.jsdelivr.net/npm/eruda
// @grant        none
// ==/UserScript==
(function () {
    //GM_registerMenuCommand
    //GM_unregisterMenuCommand
    "use strict";
    if(!window.eruda) return;
    try {
        let initCmdId;
        function initEruda() {
            //GM_unregisterMenuCommand(initCmdId);
            window.eruda.init();
            window.eruda.show();
            //window.eruda.get("console").config.set("displayIfErr", true);
        }
        //initCmdId = GM_registerMenuCommand("init()", initEruda)
        initEruda();
    } catch (e) {
        prompt("", e);
    }
}());
