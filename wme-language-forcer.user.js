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
// @version        1.4
// @author         tunisiano187 '2018
// @license        MIT/BSD/X11
// @compatible     chrome firefox
// @supportURL      mailto:incoming+WMEScripts/WME-language-forcer@incoming.gitlab.com
// @contributionURL http://ko-fi.com/tunisiano
// @grant          none
// ==/UserScript==
if(window.location.search.indexOf("reset-WME-prefered-language") > -1) {
    localStorage.removeItem('WME-prefered-language');
    alert("Language resetted")
}
var language = "";
if('WME-prefered-language' in localStorage) {
    language = localStorage.getItem('WME-prefered-language');
  }
else
{
    language=prompt("Wich language do you want to use ? (ex:fr, de, ..)", I18n.locale);
    language=language.toLowerCase();
    localStorage.setItem('WME-prefered-language',language);
}

if (location.pathname.indexOf("/" + language + "/editor") !== 0 && location.pathname.indexOf("/user/editor") == -1) {
  setTimeout(function() {
      var fullpath = window.location.pathname+window.location.search;
      while(fullpath.substring(1,7) != "editor")
      {
          fullpath = fullpath.substring(1);
      }
    window.location.replace = window.location.replace('https://www.waze.com/' + language + fullpath);
  }, 1000);
}