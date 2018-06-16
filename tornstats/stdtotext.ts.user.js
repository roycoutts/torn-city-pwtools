// ==UserScript==
// @name         Extract Table for TornStats
// @namespace    paulwratt.tornstats
// @version      1.02
// @description  Output selected table data to text
// @author       paulwratt [2027970]
// @homepage     https://paulwratt.github.io/torn-city-pwtools/
// @updateURL    https://github.com/paulwratt/torn-city-pwtools/raw/master/tornstats/stdtotext.ts.user.js
// @run-at       document-end
// @include      https://www.tornstats.com/spyhq.php*
// @include      https://www.tornstats.com/exports/spies/*
// @exclude      https://www.tornstats.com/spyhq.php?action=e*
// ==/UserScript==

'use strict';

if (location.href.indexOf('tornstats.com') !== -1) {
    var pw_tsScript = document.createElement('script');
    var pw_tsCode = document.createTextNode((<><![CDATA[
pw_tsWin = null;
function pw_tsDoExport(){
  var xE = '';
  var xF = document.forms[0];
  for (i=0; i<xF.length; i++){
    if (xF.elements[i].type=='checkbox' && xF.elements[i].getAttribute('name')=='ids[]'){
      if (xF.elements[i].checked){
        xE = xE + 'Name:' + xF.elements[i].parentNode.innerText + '<br>\n';
        xE = xE + 'Level: ' + xF.elements[i].parentNode.nextElementSibling.nextElementSibling.innerText + '<br>\n';
        xE = xE + '<br>\n';
        xE = xE + 'You managed to get the following results:<br>\n';
        xE = xE + 'Speed: ' + xF.elements[i].parentNode.nextElementSibling.nextElementSibling.nextElementSibling.innerText + '<br>\n';
        xE = xE + 'Strength: ' + xF.elements[i].parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText + '<br>\n';
        xE = xE + 'Defense: ' + xF.elements[i].parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText + '<br>\n';
        xE = xE + 'Dexterity: ' + xF.elements[i].parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText + '<br>\n';
        xE = xE + 'Total: ' + xF.elements[i].parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText + '<br>\n';
//      xE = xE + '<br>\n';
        xE = xE + '== Date: ' + xF.elements[i].parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText + '<br>\n';
        xE = xE + '<br>\n';
      }
    }
  }
  if (xE.length > 0) {
    pw_tsWin = window.open();
    pw_tsWin.document.writeln(xE);
    xE = '';
  }
}
]]></>).toString());
    pw_tsScript.appendChild(pw_tsCode);
    document.body.appendChild(pw_tsScript);

    var btnWrapper = document.createElement('div');
    btnWrapper.className = 'export-button';
    btnWrapper.innerHTML = '<center><input type=button value=" Export " onClick="pw_tsDoExport()"></center><br><p>&nbsp</p>';
    document.body.appendChild(btnWrapper);
    
}