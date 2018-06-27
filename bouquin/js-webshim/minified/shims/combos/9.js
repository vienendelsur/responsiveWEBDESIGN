(function(d){if(!Modernizr.genericDOM){var f=document,j,h,o=/<([\w:]+)/,i={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};d.webshims.fixHTML5=function(d){if("string"!=typeof d||i[(o.exec(d)||["",""])[1].toLowerCase()])return d;if(!h){j=f.body;if(!j)return d;h=f.createElement("div");h.style.display="none"}var s=h.cloneNode(!1);j.appendChild(s);s.innerHTML=d;j.removeChild(s);return s.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(d,f,j,h,o){var i=f.modules,n=/\s*,\s*/,s={},u={},p={},g={},v={},y=d.fn.val,A=function(b,a,c,e,k){return k?y.call(d(b)):y.call(d(b),c)};d.fn.val=function(b){var a=this[0];arguments.length&&null==b&&(b="");if(!arguments.length)return!a||1!==a.nodeType?y.call(this):d.prop(a,"value",b,"val",!0);if(d.isArray(b))return y.apply(this,arguments);var c=d.isFunction(b);return this.each(function(e){a=this;1===a.nodeType&&(c?(e=b.call(a,e,d.prop(a,"value",o,"val",
!0)),null==e&&(e=""),d.prop(a,"value",e,"val")):d.prop(a,"value",b,"val"))})};var w="_webshimsLib"+Math.round(1E3*Math.random()),m=function(b,a,c){b=b.jquery?b[0]:b;if(!b)return c||{};var e=d.data(b,w);c!==o&&(e||(e=d.data(b,w,{})),a&&(e[a]=c));return a?e&&e[a]:e};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(b){d.fn[b.name]=function(){return this.map(function(){var a=m(this,
"shadowData");return a&&a[b.prop]||this})}});["removeAttr","prop","attr"].forEach(function(b){s[b]=d[b];d[b]=function(a,c,e,k,f){var i="val"==k,n=!i?s[b]:A;if(!a||!u[c]||1!==a.nodeType||!i&&k&&"attr"==b&&d.attrFn[c])return n(a,c,e,k,f);var C=(a.nodeName||"").toLowerCase(),g=p[C],B="attr"==b&&(!1===e||null===e)?"removeAttr":b,h,l,m;g||(g=p["*"]);g&&(g=g[c]);g&&(h=g[B]);if(h){if("value"==c)l=h.isVal,h.isVal=i;if("removeAttr"===B)return h.value.call(a);if(e===o)return h.get?h.get.call(a):h.value;h.set&&
("attr"==b&&!0===e&&(e=c),m=h.set.call(a,e));if("value"==c)h.isVal=l}else m=n(a,c,e,k,f);if((e!==o||"removeAttr"===B)&&v[C]&&v[C][c]){var j;j="removeAttr"==B?!1:"prop"==B?!!e:!0;v[C][c].forEach(function(c){if(!c.only||(c.only="prop"==b)||"attr"==c.only&&"prop"!=b)c.call(a,e,j,i?"val":B,b)})}return m};g[b]=function(a,c,e){p[a]||(p[a]={});p[a][c]||(p[a][c]={});var k=p[a][c][b],i=function(a,d,k){return d&&d[a]?d[a]:k&&k[a]?k[a]:"prop"==b&&"value"==c?function(a){return e.isVal?A(this,c,a,!1,0===arguments.length):
s[b](this,c,a)}:"prop"==b&&"value"==a&&e.value.apply?function(a){var e=s[b](this,c);e&&e.apply&&(e=e.apply(this,arguments));return e}:function(a){return s[b](this,c,a)}};p[a][c][b]=e;if(e.value===o){if(!e.set)e.set=e.writeable?i("set",e,k):f.cfg.useStrict&&"prop"==c?function(){throw c+" is readonly on "+a;}:d.noop;if(!e.get)e.get=i("get",e,k)}["value","get","set"].forEach(function(a){e[a]&&(e["_sup"+a]=i(a,k))})}});var q=!d.browser.msie||8<parseInt(d.browser.version,10),l=function(){var b=f.getPrototypeOf(h.createElement("foobar")),
a=Object.prototype.hasOwnProperty;return function(c,e,d){var i=h.createElement(c),g=f.getPrototypeOf(i);if(q&&g&&b!==g&&(!i[e]||!a.call(i,e))){var n=i[e];d._supvalue=function(){return n&&n.apply?n.apply(this,arguments):n};g[e]=d.value}else d._supvalue=function(){var a=m(this,"propValue");return a&&a[e]&&a[e].apply?a[e].apply(this,arguments):a&&a[e]},t.extendValue(c,e,d.value);d.value._supvalue=d._supvalue}}(),t=function(){var b={};f.addReady(function(a,c){var e={},i=function(b){e[b]||(e[b]=d(a.getElementsByTagName(b)),
c[0]&&d.nodeName(c[0],b)&&(e[b]=e[b].add(c)))};d.each(b,function(a,b){i(a);!b||!b.forEach?f.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){e[a].each(b)})});e=null});var a,c=d([]),e=function(c,e){b[c]?b[c].push(e):b[c]=[e];d.isDOMReady&&(a||d(h.getElementsByTagName(c))).each(e)};return{createTmpCache:function(b){d.isDOMReady&&(a=a||d(h.getElementsByTagName(b)));return a||c},flushTmpCache:function(){a=null},content:function(a,b){e(a,function(){var a=d.attr(this,b);null!=a&&d.attr(this,
b,a)})},createElement:function(a,b){e(a,b)},extendValue:function(a,b,c){e(a,function(){d(this).each(function(){m(this,"propValue",{})[b]=this[b];this[b]=c})})}}}(),z=function(b,a){if(b.defaultValue===o)b.defaultValue="";if(!b.removeAttr)b.removeAttr={value:function(){b[a||"prop"].set.call(this,b.defaultValue);b.removeAttr._supvalue.call(this)}}};d.extend(f,{getID:function(){var b=(new Date).getTime();return function(a){var a=d(a),c=a.attr("id");c||(b++,c="ID-"+b,a.attr("id",c));return c}}(),extendUNDEFProp:function(b,
a){d.each(a,function(a,e){a in b||(b[a]=e)})},createPropDefault:z,data:m,moveToFirstEvent:function(){var b=d._data?"_data":"data";return function(a,c,e){if((a=(d[b](a,"events")||{})[c])&&1<a.length)c=a.pop(),e||(e="bind"),"bind"==e&&a.delegateCount?a.splice(a.delegateCount,0,c):a.unshift(c)}}(),addShadowDom:function(b,a,c){c=c||{};b.jquery&&(b=b[0]);a.jquery&&(a=a[0]);if(!c.shadowFocusElement)c.shadowFocusElement=a;var e=d.data(b,w)||d.data(b,w,{}),k=d.data(a,w)||d.data(a,w,{});e.hasShadow=a;k.nativeElement=
b;k.shadowData=e.shadowData={nativeElement:b,shadowElement:a,shadowFocusElement:c.shadowFocusElement};c.shadowChilds&&c.shadowChilds.each(function(){m(this,"shadowData",k.shadowData)});if(c.data)e.shadowData.data=c.data,k.shadowData.data=c.data;c=null},propTypes:{standard:function(b){z(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,""+a)},get:function(){return b.attr.get.call(this)||b.defaultValue}}},"boolean":function(b){z(b);if(!b.prop)b.prop={set:function(a){a?b.attr.set.call(this,
""):b.removeAttr.value.call(this)},get:function(){return null!=b.attr.get.call(this)}}}},reflectProperties:function(b,a){"string"==typeof a&&(a=a.split(n));a.forEach(function(a){f.defineNodeNamesProperty(b,a,{prop:{set:function(b){d.attr(this,a,b)},get:function(){return d.attr(this,a)||""}}})})},defineNodeNameProperty:function(b,a,c){u[a]=!0;if(c.reflect)f.propTypes[c.propType||"standard"](c);["prop","attr","removeAttr"].forEach(function(e){var k=c[e];k&&(k="prop"===e?d.extend({writeable:!0},k):d.extend({},
k,{writeable:!0}),g[e](b,a,k),"*"!=b&&f.cfg.extendNative&&"prop"==e&&k.value&&d.isFunction(k.value)&&l(b,a,k),c[e]=k)});c.initAttr&&t.content(b,a);return c},defineNodeNameProperties:function(b,a,c,e){for(var d in a)!e&&a[d].initAttr&&t.createTmpCache(b),c&&(a[d][c]?f.log("override: "+b+"["+d+"] for "+c):(a[d][c]={},["value","set","get"].forEach(function(b){b in a[d]&&(a[d][c][b]=a[d][b],delete a[d][b])}))),a[d]=f.defineNodeNameProperty(b,d,a[d]);e||t.flushTmpCache();return a},createElement:function(b,
a,c){var e;d.isFunction(a)&&(a={after:a});t.createTmpCache(b);a.before&&t.createElement(b,a.before);c&&(e=f.defineNodeNameProperties(b,c,!1,!0));a.after&&t.createElement(b,a.after);t.flushTmpCache();return e},onNodeNamesPropertyModify:function(b,a,c,e){"string"==typeof b&&(b=b.split(n));d.isFunction(c)&&(c={set:c});b.forEach(function(b){v[b]||(v[b]={});"string"==typeof a&&(a=a.split(n));c.initAttr&&t.createTmpCache(b);a.forEach(function(a){v[b][a]||(v[b][a]=[],u[a]=!0);if(c.set){if(e)c.set.only=e;
v[b][a].push(c.set)}c.initAttr&&t.content(b,a)});t.flushTmpCache()})},defineNodeNamesBooleanProperty:function(b,a,c){c||(c={});if(d.isFunction(c))c.set=c;f.defineNodeNamesProperty(b,a,{attr:{set:function(b){this.setAttribute(a,b);c.set&&c.set.call(this,!0)},get:function(){return null==this.getAttribute(a)?o:a}},removeAttr:{value:function(){this.removeAttribute(a);c.set&&c.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:c.initAttr||!1})},contentAttr:function(b,a,c){if(b.nodeName){if(c===
o)return c=(b.attributes[a]||{}).value,null==c?o:c;"boolean"==typeof c?c?b.setAttribute(a,a):b.removeAttribute(a):b.setAttribute(a,c)}},activeLang:function(){var b=[],a={},c,e,k=/:\/\/|^\.*\//,n=function(a,b,c){return b&&c&&-1!==d.inArray(b,c.availabeLangs||[])?(a.loading=!0,c=c.langSrc,k.test(c)||(c=f.cfg.basePath+c),f.loader.loadScript(c+b+".js",function(){a.langObj[b]?(a.loading=!1,h(a,!0)):d(function(){a.langObj[b]&&h(a,!0);a.loading=!1})}),!0):!1},g=function(b){a[b]&&a[b].forEach(function(a){a.callback()})},
h=function(a,b){if(a.activeLang!=c&&a.activeLang!==e){var d=i[a.module].options;if(a.langObj[c]||e&&a.langObj[e])a.activeLang=c,a.callback(a.langObj[c]||a.langObj[e],c),g(a.module);else if(!b&&!n(a,c,d)&&!n(a,e,d)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],c),g(a.module)}};return function(i){if("string"==typeof i&&i!==c)c=i,e=c.split("-")[0],c==e&&(e=!1),d.each(b,function(a,b){h(b)});else if("object"==typeof i)if(i.register)a[i.register]||(a[i.register]=[]),a[i.register].push(i),
i.callback();else{if(!i.activeLang)i.activeLang="";b.push(i);h(i)}return c}}()});d.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(b,a){f[b]=function(b,d,i,g){"string"==typeof b&&(b=b.split(n));var h={};b.forEach(function(b){h[b]=f[a](b,d,i,g)});return h}});f.isReady("webshimLocalization",!0)});
(function(d,f){var j=d.webshims.browserVersion;if(!(d.browser.mozilla&&5<j)&&(!d.browser.msie||12>j&&7<j)){var h={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},o=function(d,f){d.getAttribute("role")||d.setAttribute("role",f)};d.webshims.addReady(function(i,n){d.each(h,function(f,h){for(var j=d(f,i).add(n.filter(f)),p=0,s=j.length;p<s;p++)o(j[p],h)});if(i===f){var j=f.getElementsByTagName("header")[0],u=f.getElementsByTagName("footer"),p=u.length;
j&&!d(j).closest("section, article")[0]&&o(j,"banner");p&&(j=u[p-1],d(j).closest("section, article")[0]||o(j,"contentinfo"))}})}})(jQuery,document);
(function(d,f,j){var h=f.audio&&f.video,o=!1;if(h)d=document.createElement("video"),f.videoBuffered="buffered"in d,o="loop"in d,j.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(",")),f.videoBuffered||(j.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:f.videoBuffered,d:["dom-support"]}),j.reTest("mediaelement-native-fix"));jQuery.webshims.register("mediaelement-core",function(d,f,j,u,p){var g=f.mediaelement,v=f.cfg.mediaelement,
y=function(b,a){var b=d(b),c={src:b.attr("src")||"",elem:b,srcProp:b.prop("src")};if(!c.src)return c;var e=b.attr("type");if(e)c.type=e,c.container=d.trim(e.split(";")[0]);else if(a||(a=b[0].nodeName.toLowerCase(),"source"==a&&(a=(b.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),e=g.getTypeForSrc(c.src,a))c.type=e,c.container=e,f.warn("you should always provide a proper mime-type using the source element. "+c.src+" detected as: "+e),d.nodeName(b[0],"source")&&b.attr("type",
e);if(e=b.attr("media"))c.media=e;return c},A=swfobject.hasFlashPlayerVersion("9.0.115"),w=function(){f.ready("mediaelement-swf",function(){if(!g.createSWF)f.modules["mediaelement-swf"].test=d.noop,f.reTest(["mediaelement-swf"],h)})};g.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8",
"m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};g.mimeTypes.source=d.extend({},g.mimeTypes.audio,g.mimeTypes.video);g.getTypeForSrc=function(b,a){if(-1!=b.indexOf("youtube.com/watch?"))return"video/youtube";var b=
b.split("?")[0].split("."),b=b[b.length-1],c;d.each(g.mimeTypes[a],function(a,d){if(-1!==d.indexOf(b))return c=a,!1});return c};g.srces=function(b,a){b=d(b);if(a)b.removeAttr("src").removeAttr("type").find("source").remove(),d.isArray(a)||(a=[a]),a.forEach(function(a){var d=u.createElement("source");"string"==typeof a&&(a={src:a});d.setAttribute("src",a.src);a.type&&d.setAttribute("type",a.type);a.media&&d.setAttribute("media",a.media);b.append(d)});else{var a=[],c=b[0].nodeName.toLowerCase(),e=y(b,
c);e.src?a.push(e):d("source",b).each(function(){e=y(this,c);e.src&&a.push(e)});return a}};d.fn.loadMediaSrc=function(b,a){return this.each(function(){a!==p&&(d(this).removeAttr("poster"),a&&d.attr(this,"poster",a));g.srces(this,b);d(this).mediaLoad()})};g.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
g.canSwfPlaySrces=function(b,a){var c="";A&&(b=d(b),a=a||g.srces(b),d.each(a,function(a,b){if(b.container&&b.src&&-1!=g.swfMimeTypes.indexOf(b.container))return c=b,!1}));return c};var m={};g.canNativePlaySrces=function(b,a){var c="";if(h){var b=d(b),e=(b[0].nodeName||"").toLowerCase();if(!m[e])return c;a=a||g.srces(b);d.each(a,function(a,d){if(d.type&&m[e].prop._supvalue.call(b[0],d.type))return c=d,!1})}return c};g.setError=function(b,a){a||(a="can't play sources");d(b).pause().data("mediaerror",
a);f.warn("mediaelementError: "+a);setTimeout(function(){d(b).data("mediaerror")&&d(b).trigger("mediaerror")},1)};var q=function(){var b;return function(a,d,e){f.ready("mediaelement-swf",function(){g.createSWF?g.createSWF(a,d,e):b||(b=!0,w(),q(a,d,e))})}}(),l=function(b,a,d,e,f){d||!1!==d&&a&&"flash"==a.isActive?(d=g.canSwfPlaySrces(b,e))?q(b,d,a):f?g.setError(b,!1):l(b,a,!1,e,!0):(d=g.canNativePlaySrces(b,e))?a&&"flash"==a.isActive&&g.setActive(b,"html5",a):f?(g.setError(b,!1),a&&"flash"==a.isActive&&
g.setActive(b,"html5",a)):l(b,a,!0,e,!0)},t=/^(?:embed|object)$/i,z=function(b,a){var c=f.data(b,"mediaelementBase")||f.data(b,"mediaelementBase",{}),e=g.srces(b),h=b.parentNode;clearTimeout(c.loadTimer);d.data(b,"mediaerror",!1);if(e.length&&h&&!t.test(h.nodeName||""))a=a||f.data(b,"mediaelement"),l(b,a,v.preferFlash||p,e)};d(u).bind("ended",function(b){var a=f.data(b.target,"mediaelement");(!o||a&&"html5"!=a.isActive||d.prop(b.target,"loop"))&&setTimeout(function(){!d.prop(b.target,"paused")&&d.prop(b.target,
"loop")&&d(b.target).prop("currentTime",0).play()},1)});o||f.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(b){var a=f.defineNodeNameProperty(b,"load",{prop:{value:function(){var b=f.data(this,"mediaelement");z(this,b);h&&(!b||"html5"==b.isActive)&&a.prop._supvalue&&a.prop._supvalue.apply(this,arguments)}}});m[b]=f.defineNodeNameProperty(b,"canPlayType",{prop:{value:function(a){var e="";h&&m[b].prop._supvalue&&(e=m[b].prop._supvalue.call(this,a),"no"==
e&&(e=""));!e&&A&&(a=d.trim((a||"").split(";")[0]),-1!=g.swfMimeTypes.indexOf(a)&&(e="maybe"));return e}}})});f.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var b=this,a=f.data(b,"mediaelementBase")||f.data(b,"mediaelementBase",{});clearTimeout(a.loadTimer);a.loadTimer=setTimeout(function(){z(b);b=null},9)}});h&&f.isReady("mediaelement-core",!0);f.addReady(function(b,a){d("video, audio",b).add(a.filter("video, audio")).each(function(){d.browser.msie&&8<f.browserVersion&&
d.prop(this,"paused")&&!d.prop(this,"readyState")&&d(this).is('audio[preload="none"][controls]:not([autoplay])')?d(this).prop("preload","metadata").mediaLoad():z(this);if(h){var a,b,g=this,j=function(){var a=d.prop(g,"buffered");if(a){for(var b="",c=0,e=a.length;c<e;c++)b+=a.end(c);return b}},l=function(){var a=j();a!=b&&(b=a,d(g).triggerHandler("progress"))};d(this).bind("play loadstart progress",function(d){"progress"==d.type&&(b=j());clearTimeout(a);a=setTimeout(l,999)}).bind("emptied stalled mediaerror abort suspend",
function(d){"emptied"==d.type&&(b=!1);clearTimeout(a)})}})});h&&A&&f.ready("WINDOWLOAD mediaelement",w)})})(jQuery,Modernizr,jQuery.webshims);
jQuery.webshims.register("mediaelement-swf",function(d,f,j,h,o,i){var n=f.mediaelement,s=j.swfobject,u=Modernizr.audio&&Modernizr.video,p=s.hasFlashPlayerVersion("9.0.115"),g=0,j={paused:!0,ended:!1,currentSrc:"",duration:j.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(a){if(a)f.error("buffered index size error");else return 0},end:function(a){if(a)f.error("buffered index size error");else return 0},length:0}},v=Object.keys(j),y={currentTime:0,volume:1,
muted:!1};Object.keys(y);var A=d.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,_metadata:!1,_durationCalcs:-1,_callMeta:!1,currentTime:0,_ppFlag:o},j,y),w=/^jwplayer-/,m=function(a){if(a=h.getElementById(a.replace(w,"")))return a=f.data(a,"mediaelement"),"flash"==a.isActive?a:null},q=function(a){return(a=f.data(a,"mediaelement"))&&"flash"==a.isActive?a:null},l=function(a,b){b=d.Event(b);b.preventDefault();d.event.trigger(b,o,a)},t=i.playerPath||f.cfg.basePath+
"jwplayer/"+(i.playerName||"player.swf"),z=i.pluginPath||f.cfg.basePath+"swf/jwwebshims.swf";f.extendUNDEFProp(i.jwParams,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent"});f.extendUNDEFProp(i.jwVars,{screencolor:"ffffffff"});f.extendUNDEFProp(i.jwAttrs,{bgcolor:"#000000"});var b=function(a,b){var c=a.duration;if(!(c&&0<a._durationCalcs)){try{if(a.duration=a.jwapi.getPlaylist()[0].duration,!a.duration||0>=a.duration||a.duration===a._lastDuration)a.duration=c}catch(e){}a.duration&&
a.duration!=a._lastDuration?(l(a._elem,"durationchange"),("audio"==a._elemNodeName||a._callMeta)&&n.jwEvents.Model.META(d.extend({duration:a.duration},b),a),a._durationCalcs--):a._durationCalcs++}},a=function(b,d){3>b&&clearTimeout(d._canplaythroughTimer);if(3<=b&&3>d.readyState)d.readyState=b,l(d._elem,"canplay"),clearTimeout(d._canplaythroughTimer),d._canplaythroughTimer=setTimeout(function(){a(4,d)},4E3);if(4<=b&&4>d.readyState)d.readyState=b,l(d._elem,"canplaythrough");d.readyState=b};n.jwEvents=
{View:{PLAY:function(a){var b=m(a.id);if(b&&!b.stopPlayPause&&(b._ppFlag=!0,b.paused==a.state)){b.paused=!a.state;if(b.ended)b.ended=!1;l(b._elem,a.state?"play":"pause")}}},Model:{BUFFER:function(c){var r=m(c.id);if(r&&"percentage"in c&&r._bufferedEnd!=c.percentage){r.networkState=100==c.percentage?1:2;(isNaN(r.duration)||5<c.percentage&&25>c.percentage||100===c.percentage)&&b(r,c);if(r.ended)r.ended=!1;if(r.duration){2<c.percentage&&20>c.percentage?a(3,r):20<c.percentage&&a(4,r);if(r._bufferedEnd&&
r._bufferedEnd>c.percentage)r._bufferedStart=r.currentTime||0;r._bufferedEnd=c.percentage;r.buffered.length=1;if(100==c.percentage)r.networkState=1,a(4,r);d.event.trigger("progress",o,r._elem,!0)}}},META:function(b,d){if(d=d&&d.networkState?d:m(b.id))if("duration"in b){if(!d._metadata||!((!b.height||d.videoHeight==b.height)&&b.duration===d.duration)){d._metadata=!0;var c=d.duration;if(b.duration)d.duration=b.duration;d._lastDuration=d.duration;if(b.height||b.width)d.videoHeight=b.height||0,d.videoWidth=
b.width||0;if(!d.networkState)d.networkState=2;1>d.readyState&&a(1,d);d.duration&&c!==d.duration&&l(d._elem,"durationchange");l(d._elem,"loadedmetadata")}}else d._callMeta=!0},TIME:function(d){var c=m(d.id);if(c&&c.currentTime!==d.position){c.currentTime=d.position;c.duration&&c.duration<c.currentTime&&b(c,d);2>c.readyState&&a(2,c);if(c.ended)c.ended=!1;l(c._elem,"timeupdate")}},STATE:function(d){var c=m(d.id);if(c)switch(d.newstate){case "BUFFERING":if(c.ended)c.ended=!1;a(1,c);l(c._elem,"waiting");
break;case "PLAYING":c.paused=!1;c._ppFlag=!0;c.duration||b(c,d);3>c.readyState&&a(3,c);if(c.ended)c.ended=!1;l(c._elem,"playing");break;case "PAUSED":if(!c.paused&&!c.stopPlayPause)c.paused=!0,c._ppFlag=!0,l(c._elem,"pause");break;case "COMPLETED":4>c.readyState&&a(4,c),c.ended=!0,l(c._elem,"ended")}}},Controller:{ERROR:function(a){var b=m(a.id);b&&n.setError(b._elem,a.message)},SEEK:function(a){var b=m(a.id);if(b){if(b.ended)b.ended=!1;if(b.paused)try{b.jwapi.sendEvent("play","false")}catch(d){}if(b.currentTime!=
a.position)b.currentTime=a.position,l(b._elem,"timeupdate")}},VOLUME:function(a){var b=m(a.id);if(b&&(a=a.percentage/100,b.volume!=a))b.volume=a,l(b._elem,"volumechange")},MUTE:function(a){if(!a.state){var b=m(a.id);if(b&&b.muted!=a.state)b.muted=a.state,l(b._elem,"volumechange")}}}};var c=function(a){d.each(n.jwEvents,function(b,c){d.each(c,function(d){a.jwapi["add"+b+"Listener"](d,"jQuery.webshims.mediaelement.jwEvents."+b+"."+d)})})},e=function(a){a&&(a._ppFlag===o&&d.prop(a._elem,"autoplay")||
!a.paused)&&setTimeout(function(){if("flash"==a.isActive&&(a._ppFlag===o||!a.paused))try{d(a._elem).play()}catch(b){}},1)},k=function(a){if(a&&"video"==a._elemNodeName){var b,c,e,f,g,x,i,h,j=function(j,k){if(k&&j&&!(1>k||1>j||"flash"!=a.isActive))if(b&&(b.remove(),b=!1),f=j,g=k,clearTimeout(i),c="auto"==a._elem.style.width,e="auto"==a._elem.style.height,c||e){x=x||d(a._elem).getShadowElement();var l;c&&!e?(l=x.height(),j*=l/k,k=l):!c&&e&&(l=x.width(),k*=l/j,j=l);h=!0;setTimeout(function(){h=!1},9);
x.css({width:j,height:k})}},k=function(){if(!("flash"!=a.isActive||d.prop(a._elem,"readyState")&&d.prop(this,"videoWidth"))){var f=d.prop(a._elem,"poster");if(f&&(c="auto"==a._elem.style.width,e="auto"==a._elem.style.height,c||e))b&&(b.remove(),b=!1),b=d('<img style="position: absolute; height: auto; width: auto; top: 0px; left: 0px; visibility: hidden;" />'),b.bind("load error alreadycomplete",function(){clearTimeout(i);var a=this,c=a.naturalWidth||a.width||a.offsetWidth,e=a.naturalHeight||a.height||
a.offsetHeight;e&&c?(j(c,e),a=null):setTimeout(function(){c=a.naturalWidth||a.width||a.offsetWidth;e=a.naturalHeight||a.height||a.offsetHeight;j(c,e);b&&(b.remove(),b=!1);a=null},9);d(this).unbind()}).prop("src",f).appendTo("body").each(function(){this.complete||this.error?d(this).triggerHandler("alreadycomplete"):(clearTimeout(i),i=setTimeout(function(){d(a._elem).triggerHandler("error")},9999))})}};d(a._elem).bind("loadedmetadata",function(){j(d.prop(this,"videoWidth"),d.prop(this,"videoHeight"))}).bind("emptied",
k).bind("swfstageresize",function(){h||j(f,g)}).bind("emptied",function(){f=void 0;g=void 0}).triggerHandler("swfstageresize");k();d.prop(a._elem,"readyState")&&j(d.prop(a._elem,"videoWidth"),d.prop(a._elem,"videoHeight"))}};n.playerResize=function(a){a&&(a=h.getElementById(a.replace(w,"")))&&d(a).triggerHandler("swfstageresize")};d(h).bind("emptied",function(a){a=q(a.target);e(a)});var E;n.jwPlayerReady=function(a){var b=m(a.id);if(b&&b.jwapi){clearTimeout(E);b.jwData=a;b.shadowElem.removeClass("flashblocker-assumed");
b.wasSwfReady?d(b._elem).mediaLoad():(a=parseFloat(a.version,10),(5.6>a||6<=a)&&f.warn("mediaelement-swf is only testet with jwplayer 5.6+"),d.prop(b._elem,"volume",b.volume),d.prop(b._elem,"muted",b.muted),c(b));b.wasSwfReady=!0;var a=b.actionQueue.length,J=0,g;if(a&&"flash"==b.isActive)for(;b.actionQueue.length&&a>J;)J++,g=b.actionQueue.shift(),b.jwapi[g.fn].apply(b.jwapi,g.args);if(b.actionQueue.length)b.actionQueue=[];e(b)}};var F=d.noop;if(u){var K={play:1,playing:1},C="play,pause,playing,canplay,progress,waiting,ended,loadedmetadata,durationchange,emptied".split(","),
H=C.map(function(a){return a+".webshimspolyfill"}).join(" "),B=function(a){var b=f.data(a.target,"mediaelement");b&&(a.originalEvent&&a.originalEvent.type===a.type)==("flash"==b.activating)&&(a.stopImmediatePropagation(),K[a.type]&&b.isActive!=b.activating&&d(a.target).pause())},F=function(a){d(a).unbind(H).bind(H,B);C.forEach(function(b){f.moveToFirstEvent(a,b)})};F(h)}n.setActive=function(a,b,c){c||(c=f.data(a,"mediaelement"));if(c&&c.isActive!=b){"html5"!=b&&"flash"!=b&&f.warn("wrong type for mediaelement activating: "+
b);var e=f.data(a,"shadowData");c.activating=b;d(a).pause();c.isActive=b;"flash"==b?(e.shadowElement=e.shadowFocusElement=c.shadowElem[0],d(a).hide().getShadowElement().show()):(d(a).show().getShadowElement().hide(),e.shadowElement=e.shadowFocusElement=!1)}};var L=function(){var b="_bufferedEnd,_bufferedStart,_metadata,_ppFlag,currentSrc,currentTime,duration,ended,networkState,paused,videoHeight,videoWidth,_callMeta,_durationCalcs".split(","),d=b.length;return function(c){if(c){var e=d,f=c.networkState;
for(a(0,c);--e;)delete c[b[e]];c.actionQueue=[];c.buffered.length=0;f&&l(c._elem,"emptied")}}}(),I=function(a,b){var c=a._elem,e=a.shadowElem;d(c)[b?"addClass":"removeClass"]("webshims-controls");"audio"==a._elemNodeName&&!b?e.css({width:0,height:0}):e.css({width:c.style.width||d(c).width(),height:c.style.height||d(c).height()})};n.createSWF=function(a,b,c){if(p){1>g?g=1:g++;var e=d.extend({},i.jwVars,{image:d.prop(a,"poster")||"",file:b.srcProp}),h=d(a).data("jwvars")||{};if(c&&c.swfCreated)n.setActive(a,
"flash",c),L(c),c.currentSrc=b.srcProp,d.extend(e,h),i.changeJW(e,a,b,c,"load"),D(a,"sendEvent",["LOAD",e]);else{var j=d.prop(a,"controls"),x="jwplayer-"+f.getID(a),l=d.extend({},i.jwParams,d(a).data("jwparams")),m=a.nodeName.toLowerCase(),o=d.extend({},i.jwAttrs,{name:x,id:x},d(a).data("jwattrs")),q=d('<div class="polyfill-'+m+' polyfill-mediaelement" id="wrapper-'+x+'"><div id="'+x+'"></div>').css({position:"relative",overflow:"hidden"}),c=f.data(a,"mediaelement",f.objectCreate(A,{actionQueue:{value:[]},
shadowElem:{value:q},_elemNodeName:{value:m},_elem:{value:a},currentSrc:{value:b.srcProp},swfCreated:{value:!0},buffered:{value:{start:function(a){if(a>=c.buffered.length)f.error("buffered index size error");else return 0},end:function(a){if(a>=c.buffered.length)f.error("buffered index size error");else return(c.duration-c._bufferedStart)*c._bufferedEnd/100+c._bufferedStart},length:0}}}));I(c,j);q.insertBefore(a);u&&d.extend(c,{volume:d.prop(a,"volume"),muted:d.prop(a,"muted")});d.extend(e,{id:x,
controlbar:j?i.jwVars.controlbar||("video"==m?"over":"bottom"):"video"==m?"none":"bottom",icons:""+(j&&"video"==m)},h,{playerready:"jQuery.webshims.mediaelement.jwPlayerReady"});e.plugins=e.plugins?e.plugins+(","+z):z;f.addShadowDom(a,q);F(a);n.setActive(a,"flash",c);i.changeJW(e,a,b,c,"embed");k(c);s.embedSWF(t,x,"100%","100%","9.0.0",!1,e,l,o,function(b){if(b.success)c.jwapi=b.ref,j||d(b.ref).attr("tabindex","-1").css("outline","none"),setTimeout(function(){if(!b.ref.parentNode&&q[0].parentNode||
"none"==b.ref.style.display)q.addClass("flashblocker-assumed"),d(a).trigger("flashblocker"),f.warn("flashblocker assumed");d(b.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})},9),E||(clearTimeout(E),E=setTimeout(function(){var a=d(b.ref);1<a[0].offsetWidth&&1<a[0].offsetHeight&&0===location.protocol.indexOf("file:")?f.warn("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):
(2>a[0].offsetWidth||2>a[0].offsetHeight)&&f.info("JS-SWF connection can't be established on hidden or unconnected flash objects")},8E3))})}}else setTimeout(function(){d(a).mediaLoad()},1)};var D=function(a,b,c,d){return(d=d||q(a))?(d.jwapi&&d.jwapi[b]?d.jwapi[b].apply(d.jwapi,c||[]):(d.actionQueue.push({fn:b,args:c}),10<d.actionQueue.length&&setTimeout(function(){5<d.actionQueue.length&&d.actionQueue.shift()},99)),d):!1};["audio","video"].forEach(function(a){var b={},c,e=function(d){"audio"==a&&
("videoHeight"==d||"videoWidth"==d)||(b[d]={get:function(){var a=q(this);return a?a[d]:u&&c[d].prop._supget?c[d].prop._supget.apply(this):A[d]},writeable:!1})},g=function(a,c){e(a);delete b[a].writeable;b[a].set=c};g("volume",function(a){var b=q(this);if(b){if(a*=100,!isNaN(a)){var d=b.muted;(0>a||100<a)&&f.error("volume greater or less than allowed "+a/100);D(this,"sendEvent",["VOLUME",a],b);if(d)try{b.jwapi.sendEvent("mute","true")}catch(e){}a/=100;if(!(b.volume==a||"flash"!=b.isActive))b.volume=
a,l(b._elem,"volumechange")}}else if(c.volume.prop._supset)return c.volume.prop._supset.apply(this,arguments)});g("muted",function(a){var b=q(this);if(b){if(a=!!a,D(this,"sendEvent",["mute",""+a],b),!(b.muted==a||"flash"!=b.isActive))b.muted=a,l(b._elem,"volumechange")}else if(c.muted.prop._supset)return c.muted.prop._supset.apply(this,arguments)});g("currentTime",function(a){var b=q(this);if(b){if(a*=1,!isNaN(a)){if(b.paused)clearTimeout(b.stopPlayPause),b.stopPlayPause=setTimeout(function(){b.paused=
!0;b.stopPlayPause=!1},50);D(this,"sendEvent",["SEEK",""+a],b);if(b.paused){if(0<b.readyState)b.currentTime=a,l(b._elem,"timeupdate");try{b.jwapi.sendEvent("play","false")}catch(d){}}}}else if(c.currentTime.prop._supset)return c.currentTime.prop._supset.apply(this,arguments)});["play","pause"].forEach(function(a){b[a]={value:function(){var b=q(this);if(b)b.stopPlayPause&&clearTimeout(b.stopPlayPause),D(this,"sendEvent",["play","play"==a],b),setTimeout(function(){if("flash"==b.isActive&&(b._ppFlag=
!0,b.paused!=("play"!=a)))b.paused="play"!=a,l(b._elem,a)},1);else if(c[a].prop._supvalue)return c[a].prop._supvalue.apply(this,arguments)}}});v.forEach(e);f.onNodeNamesPropertyModify(a,"controls",function(b,c){var e=q(this);d(this)[c?"addClass":"removeClass"]("webshims-controls");if(e){try{D(this,c?"showControls":"hideControls",[a],e)}catch(g){f.warn("you need to generate a crossdomain.xml")}"audio"==a&&I(e,c);d(e.jwapi).attr("tabindex",c?"0":"-1")}});c=f.defineNodeNameProperties(a,b,"prop")});if(p){var M=
d.cleanData,N=d.browser.msie&&9>f.browserVersion,O={object:1,OBJECT:1};d.cleanData=function(a){var b,c,d;if(a&&(c=a.length)&&g)for(b=0;b<c;b++)if(O[a[b].nodeName]){if("sendEvent"in a[b]){g--;try{a[b].sendEvent("play",!1)}catch(e){}}if(N)try{for(d in a[b])"function"==typeof a[b][d]&&(a[b][d]=null)}catch(f){}}return M.apply(this,arguments)}}if(!u){var G=h.createElement("a");["poster","src"].forEach(function(a){f.defineNodeNamesProperty("src"==a?["audio","video","source"]:["video"],a,{prop:{get:function(){var b=
this.getAttribute(a);if(null==b)return"";G.setAttribute("href",b+"");return!d.support.hrefNormalized?G.getAttribute("href",4):G.href},set:function(b){d.attr(this,a,b)}}})});["autoplay","controls"].forEach(function(a){f.defineNodeNamesBooleanProperty(["audio","video"],a)});f.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},
NETWORK_NO_SOURCE:{value:3}},"prop")}});
