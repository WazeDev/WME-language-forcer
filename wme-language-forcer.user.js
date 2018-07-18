// ==UserScript==
// @name        WME Language Forcer
// @namespace   https://www.bowlman.org
// @description Script to redirect to your language automaticaly
// @include     /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor([^\/].*)?$/
// @version     0.1
// @grant       none
// ==/UserScript==

if (window.location.pathname.indexOf('/fr/editor/') == -1 && window.location != window.location.href.replace('/editor/', '/fr/editor/')) {
  setTimeout(function() {
    window.location = window.location.href.replace('/editor/', '/fr/editor/');
  }, 1000);
}