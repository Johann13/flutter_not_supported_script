// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]"
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
    return p.toString() === "[object SafariRemoteNotification]";
})(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 71
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

var notSupported = isEdge || isIE;

if (notSupported) {
    document.body.innerHTML += 
    '<div style="width:100%;height:100%;text-align:center; color:#ffffff">' +
        '<p>This Browser is not Supported yet.</p>' +
        '<p>Try Firefox, Safari or any Chromium based Browser' + 
        'like Chrome or Brave instead.</p>' +
        '<p>Sorry for the inconvenience</p>' +
        '</div>';
 }