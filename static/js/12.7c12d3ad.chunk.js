(this["webpackJsonpstandard-notes-editor-template-cra-typescript"]=this["webpackJsonpstandard-notes-editor-template-cra-typescript"]||[]).push([[12,58],{133:function(t,e,n){!function(t){"use strict";t.defineMode("tornado:inner",(function(){var t=["and","as","assert","autoescape","block","break","class","comment","context","continue","datetime","def","del","elif","else","end","escape","except","exec","extends","false","finally","for","from","global","if","import","in","include","is","json_encode","lambda","length","linkify","load","module","none","not","or","pass","print","put","raise","raw","return","self","set","squeeze","super","true","try","url_escape","while","with","without","xhtml_escape","yield"];function e(t,e){t.eatWhile(/[^\{]/);var a=t.next();if("{"==a&&(a=t.eat(/\{|%|#/)))return e.tokenize=n(a),"tag"}function n(n){return"{"==n&&(n="}"),function(a,o){return a.next()==n&&a.eat("}")?(o.tokenize=e,"tag"):a.match(t)?"keyword":"#"==n?"comment":"string"}}return t=new RegExp("^(("+t.join(")|(")+"))\\b"),{startState:function(){return{tokenize:e}},token:function(t,e){return e.tokenize(t,e)}}})),t.defineMode("tornado",(function(e){var n=t.getMode(e,"text/html"),a=t.getMode(e,"tornado:inner");return t.overlayMode(n,a)})),t.defineMIME("text/x-tornado","tornado")}(n(1),n(32),n(152))},152:function(t,e,n){!function(t){"use strict";t.overlayMode=function(e,n,a){return{startState:function(){return{base:t.startState(e),overlay:t.startState(n),basePos:0,baseCur:null,overlayPos:0,overlayCur:null,streamSeen:null}},copyState:function(a){return{base:t.copyState(e,a.base),overlay:t.copyState(n,a.overlay),basePos:a.basePos,baseCur:null,overlayPos:a.overlayPos,overlayCur:null}},token:function(t,o){return(t!=o.streamSeen||Math.min(o.basePos,o.overlayPos)<t.start)&&(o.streamSeen=t,o.basePos=o.overlayPos=t.start),t.start==o.basePos&&(o.baseCur=e.token(t,o.base),o.basePos=t.pos),t.start==o.overlayPos&&(t.pos=t.start,o.overlayCur=n.token(t,o.overlay),o.overlayPos=t.pos),t.pos=Math.min(o.basePos,o.overlayPos),null==o.overlayCur?o.baseCur:null!=o.baseCur&&o.overlay.combineTokens||a&&null==o.overlay.combineTokens?o.baseCur+" "+o.overlayCur:o.overlayCur},indent:e.indent&&function(t,n,a){return e.indent(t.base,n,a)},electricChars:e.electricChars,innerMode:function(t){return{state:t.base,mode:e}},blankLine:function(t){var o,r;return e.blankLine&&(o=e.blankLine(t.base)),n.blankLine&&(r=n.blankLine(t.overlay)),null==r?o:a&&null!=o?o+" "+r:r}}}}(n(1))},32:function(t,e,n){!function(t){"use strict";var e={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]};function n(t,e,n){var a=t.current(),o=a.search(e);return o>-1?t.backUp(a.length-o):a.match(/<\/?$/)&&(t.backUp(a.length),t.match(e,!1)||t.match(a)),n}var a={};function o(t){var e=a[t];return e||(a[t]=new RegExp("\\s+"+t+"\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*"))}function r(t,e){var n=t.match(o(e));return n?/^\s*(.*?)\s*$/.exec(n[2])[1]:""}function l(t,e){return new RegExp((e?"^":"")+"</s*"+t+"s*>","i")}function s(t,e){for(var n in t)for(var a=e[n]||(e[n]=[]),o=t[n],r=o.length-1;r>=0;r--)a.unshift(o[r])}function i(t,e){for(var n=0;n<t.length;n++){var a=t[n];if(!a[0]||a[1].test(r(e,a[0])))return a[2]}}t.defineMode("htmlmixed",(function(a,o){var r=t.getMode(a,{name:"xml",htmlMode:!0,multilineTagIndentFactor:o.multilineTagIndentFactor,multilineTagIndentPastTag:o.multilineTagIndentPastTag,allowMissingTagName:o.allowMissingTagName}),c={},u=o&&o.tags,d=o&&o.scriptTypes;if(s(e,c),u&&s(u,c),d)for(var f=d.length-1;f>=0;f--)c.script.unshift(["type",d[f].matches,d[f].mode]);function m(e,o){var s,u=r.token(e,o.htmlState),d=/\btag\b/.test(u);if(d&&!/[<>\s\/]/.test(e.current())&&(s=o.htmlState.tagName&&o.htmlState.tagName.toLowerCase())&&c.hasOwnProperty(s))o.inTag=s+" ";else if(o.inTag&&d&&/>$/.test(e.current())){var f=/^([\S]+) (.*)/.exec(o.inTag);o.inTag=null;var p=">"==e.current()&&i(c[f[1]],f[2]),v=t.getMode(a,p),y=l(f[1],!0),h=l(f[1],!1);o.token=function(t,e){return t.match(y,!1)?(e.token=m,e.localState=e.localMode=null,null):n(t,h,e.localMode.token(t,e.localState))},o.localMode=v,o.localState=t.startState(v,r.indent(o.htmlState,"",""))}else o.inTag&&(o.inTag+=e.current(),e.eol()&&(o.inTag+=" "));return u}return{startState:function(){return{token:m,inTag:null,localMode:null,localState:null,htmlState:t.startState(r)}},copyState:function(e){var n;return e.localState&&(n=t.copyState(e.localMode,e.localState)),{token:e.token,inTag:e.inTag,localMode:e.localMode,localState:n,htmlState:t.copyState(r,e.htmlState)}},token:function(t,e){return e.token(t,e)},indent:function(e,n,a){return!e.localMode||/^\s*<\//.test(n)?r.indent(e.htmlState,n,a):e.localMode.indent?e.localMode.indent(e.localState,n,a):t.Pass},innerMode:function(t){return{state:t.localState||t.htmlState,mode:t.localMode||r}}}}),"xml","javascript","css"),t.defineMIME("text/html","htmlmixed")}(n(1),n(7),n(34),n(33))}}]);
//# sourceMappingURL=12.7c12d3ad.chunk.js.map