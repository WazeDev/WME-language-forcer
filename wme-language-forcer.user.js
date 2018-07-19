// ==UserScript==
// @name           WME Language Forcer
// @namespace      https://www.bowlman.org
// @description    Script to redirect to your language automaticaly
// @match          https://editor-beta.waze.com/*editor*
// @match          https://beta.waze.com/*editor*
// @match          https://www.waze.com/*editor*
// @match          https://editor-beta.waze.com/*editor/*
// @match          https://beta.waze.com/*editor/*
// @match          https://www.waze.com/*/editor/*
// @version        1.2
// @author         tunisiano187 '2018
// @license        MIT/BSD/X11
// @compatible     chrome firefox
// @supportURL      mailto:incoming+WMEScripts/WME-language-forcer@incoming.gitlab.com
// @contributionURL https://flattr.com/@tunisiano
// @grant          none
// ==/UserScript==

if (location.pathname.indexOf("/fr/editor") != 0 && location.pathname.indexOf("/user/editor") == -1) {
  setTimeout(function() {
      var fullpath = window.location.pathname+window.location.search;
      while(fullpath.substring(1,7) != "editor")
      {
          fullpath = fullpath.substring(1);
      }
    window.location.replace = window.location.replace('https://www.waze.com/fr' + fullpath);
  }, 1000);
}