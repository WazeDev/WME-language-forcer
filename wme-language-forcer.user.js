// ==UserScript==
// @name        WME Language Forcer
// @namespace   https://www.bowlman.org
// @description Script to redirect to your language automaticaly
// @include     /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor([^\/].*)?$/
// @version     0.1
// @author         tunisiano187 '2018 based on Rick Zabel '2014
// @license        MIT/BSD/X11
// @updateURL      https://gitlab.com/WMEScripts/WME-language-forcer/raw/master/wme-language-forcer.user.js
// @compatible     chrome firefox
// @supportURL      mailto:incoming+WMEScripts/WME-language-forcer@incoming.gitlab.com
// @contributionURL https://flattr.com/@tunisiano
// @grant       none
// ==/UserScript==

if (window.location.pathname.indexOf('/fr/editor/') == -1 && window.location != window.location.href.replace('/editor/', '/fr/editor/')) {
  setTimeout(function() {
    window.location = window.location.href.replace('/editor/', '/fr/editor/');
  }, 1000);
}