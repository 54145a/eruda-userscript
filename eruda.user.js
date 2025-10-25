// ==UserScript==
// @name         Eruda
// @description  Simple userscript that loads eruda console.
// @match        *://*/*?*loaderuda=1*
// @version      2025-10-25
// @namespace    https://pkuschool.yuque.com/tqpgmr
// @require      https://pkuschool.yuque.com/r/resources/download/45398745
// @grant        none
// ==/UserScript==
(function () {
    "use strict";
    if(!window.eruda) return;
    try {
        //let initCmdId;
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
