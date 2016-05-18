// ==UserScript==
// @name         Isleward - Damage Numbers
// @namespace    Isleward.Mod
// @version      0.1
// @description  Sample provided by Big Bad Waffle. Every time damage is dealt to any target, this mod creates a white popup with the damage mount on a random position that disappears after 1s.
// @author       Ravenheart
// @include      http://isleward-test.herokuapp.com/*
// @grant        none
// ==/UserScript==

(function () {
    var scriptElement = document.createElement( "script" );
    scriptElement.type = "text/javascript";
    scriptElement.src = "https://cdn.rawgit.com/Isleward-Modding-Group/Samples/master/damageNumbers.js";
    document.body.appendChild( scriptElement );
})();
