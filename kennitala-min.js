!function(){function a(a){var b=a.substr(0,2);return b>0&&31>=b}function b(a){var b=a.substr(0,2);return b>40&&71>=b}function c(a){var b=""+a;return b=b.replace(/(\D)+/g,"")}var d={};d.isPerson=function(b){var d=c(b);if(10!==d.length)return!1;if(!a(d))return!1;var e=3*d.charAt(0)+2*d.charAt(1)+7*d.charAt(2)+6*d.charAt(3)+5*d.charAt(4)+4*d.charAt(5)+3*d.charAt(6)+2*d.charAt(7),f=11-e%11,g=d.substr(8,1);return 11==f&&0==g||f==g},d.isCompany=function(a){var d=c(a);if(10!==d.length)return!1;if(!b(d))return!1;var e=3*d.charAt(0)+2*d.charAt(1)+7*d.charAt(2)+6*d.charAt(3)+5*d.charAt(4)+4*d.charAt(5)+3*d.charAt(6)+2*d.charAt(7),f=11-e%11,g=d.substr(8,1);return 11==f&&0==g||f==g},d.clean=function(a){return c(a)},"undefined"!=typeof module&&module.exports?module.exports=d:"function"==typeof define&&define.amd?define(d):window&&(window.kennitala=d)}();