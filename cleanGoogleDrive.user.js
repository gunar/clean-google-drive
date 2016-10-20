// ==UserScript==
// @name         Clean Google Drive
// @version      1.0
// @description  remove clutter from google drive
// @author       http://github.com/gunar
// @match        https://drive.google.com/drive/*
// ==/UserScript==

(function() {
  'use strict';

  function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
  }

  addGlobalStyle('.a-t-l-Sc, .a-t-l-Dg, .a-t-l-sa-bk { display: none }');

})();
