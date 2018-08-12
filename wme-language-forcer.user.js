// ==UserScript==
// @name           WME Language Forcer
// @name:fr        WME Language Forcer
// @namespace      https://gitlab.com/WMEScripts
// @description    Script to redirect to your language automaticaly
// @description:fr  Ce script vous redirige vers votre langue définie automatiquement
// @match          https://editor-beta.waze.com/*editor*
// @match          https://beta.waze.com/*editor*
// @match          https://www.waze.com/*editor*
// @match          https://editor-beta.waze.com/*editor/*
// @match          https://beta.waze.com/*editor/*
// @match          https://www.waze.com/*/editor/*
// @version        2018.08.12.02
// @author         tunisiano187 '2018
// @license        MIT/BSD/X11
// @compatible     chrome firefox
// @supportURL      mailto:incoming+WMEScripts/WME-language-forcer@incoming.gitlab.com
// @contributionURL http://ko-fi.com/tunisiano
// @grant          none
// ==/UserScript==

    ///////////////////////////////////////
    //  Verification de la mise à jour   //
    ///////////////////////////////////////
    var WMElanguageforcerUpdateNotes = "Nouvelle version de WMElanguageforcer : " + WMElanguageforcerVersion;
    if (localStorage.getItem('WMElanguageforcerVersion') === WMElanguageforcerVersion && 'WMElanguageforcerVersion' in localStorage) {

    } else if ('WMElanguageforcerVersion' in localStorage) {
        alert(WMElanguageforcerUpdateNotes);
        localStorage.setItem('WMElanguageforcerVersion', WMElanguageforcerVersion);
    } else {
        localStorage.setItem('WMElanguageforcerVersion', WMElanguageforcerVersion);
    }

    ///////////////////////////////////////
    //  Début du script                  //
    ///////////////////////////////////////
    
var language = "";
var ts = Math.round((new Date()).getTime() / 1000);
if(window.location.hash == ("#reset-WME-prefered-language")) {
    localStorage.removeItem('WME-prefered-language');
    alert("Language resetted");
    window.location.href = "https://www.waze.com/editor/";
}
else if($(".not-found")[0]) {
    if ('WME-prefered-language-last-refresh' in localStorage){
        var prevts = localStorage.getItem('WME-prefered-language-last-refresh');
        if(Math.round(ts-5)>prevts) {
            window.location.href = "https://www.waze.com/editor/#reset-WME-prefered-language";
        }
    }
  }
else if('WME-prefered-language' in localStorage) {
    language = localStorage.getItem('WME-prefered-language');
  }
else
{
    language=prompt("Wich language do you want to use ? (ex:fr, de, ..)", I18n.locale);
    language=language.toLowerCase();
    localStorage.setItem('WME-prefered-language',language);
}
$(window).load(function() {
    $('<a href="https://www.waze.com/editor/#reset-WME-prefered-language">(' + language.toUpperCase() + ')</a>').insertAfter(".profile-link");
});
if (location.pathname.indexOf("/" + language + "/editor") !== 0 && location.pathname.indexOf("/user/editor") == -1) {
  setTimeout(function() {
      var fullpath = window.location.pathname+window.location.search;
      while(fullpath.substring(1,7) != "editor")
      {
          fullpath = fullpath.substring(1);
      }
      localStorage.setItem('WME-prefered-language-last-refresh',ts);
    window.location.replace = window.location.replace('https://www.waze.com/' + language + fullpath);
  }, 1000);
}