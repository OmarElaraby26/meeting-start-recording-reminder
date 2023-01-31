// ==UserScript==
// @name         meeting start recording reminder
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  meeting start recording reminder
// @author       https://www.linkedin.com/in/omar-elaraby/
// @icon         https://img.icons8.com/color/512/google-meet--v1.png
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const minutes = 2;

    let id;
    id = setInterval(() => {
        if (confirm(`*****Remember to start recording*****\nChoose 'OK' to stop this reminder.\nChoose 'Cancel' to remind you again after ${minutes} minutes.`)) clearInterval(id);
    }, minutes * 60 * 1000);
})();
