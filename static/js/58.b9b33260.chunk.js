(this["webpackJsonpstandard-notes-editor-template-cra-typescript"]=this["webpackJsonpstandard-notes-editor-template-cra-typescript"]||[]).push([[58],{32:function(t,e,a){!function(t){"use strict";var e={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]};function a(t,e,a){var n=t.current(),l=n.search(e);return l>-1?t.backUp(n.length-l):n.match(/<\/?$/)&&(t.backUp(n.length),t.match(e,!1)||t.match(n)),a}var n={};function l(t){var e=n[t];return e||(n[t]=new RegExp("\\s+"+t+"\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*"))}function o(t,e){var a=t.match(l(e));return a?/^\s*(.*?)\s*$/.exec(a[2])[1]:""}function r(t,e){return new RegExp((e?"^":"")+"</s*"+t+"s*>","i")}function c(t,e){for(var a in t)for(var n=e[a]||(e[a]=[]),l=t[a],o=l.length-1;o>=0;o--)n.unshift(l[o])}function i(t,e){for(var a=0;a<t.length;a++){var n=t[a];if(!n[0]||n[1].test(o(e,n[0])))return n[2]}}t.defineMode("htmlmixed",(function(n,l){var o=t.getMode(n,{name:"xml",htmlMode:!0,multilineTagIndentFactor:l.multilineTagIndentFactor,multilineTagIndentPastTag:l.multilineTagIndentPastTag,allowMissingTagName:l.allowMissingTagName}),s={},u=l&&l.tags,d=l&&l.scriptTypes;if(c(e,s),u&&c(u,s),d)for(var m=d.length-1;m>=0;m--)s.script.unshift(["type",d[m].matches,d[m].mode]);function p(e,l){var c,u=o.token(e,l.htmlState),d=/\btag\b/.test(u);if(d&&!/[<>\s\/]/.test(e.current())&&(c=l.htmlState.tagName&&l.htmlState.tagName.toLowerCase())&&s.hasOwnProperty(c))l.inTag=c+" ";else if(l.inTag&&d&&/>$/.test(e.current())){var m=/^([\S]+) (.*)/.exec(l.inTag);l.inTag=null;var g=">"==e.current()&&i(s[m[1]],m[2]),h=t.getMode(n,g),f=r(m[1],!0),S=r(m[1],!1);l.token=function(t,e){return t.match(f,!1)?(e.token=p,e.localState=e.localMode=null,null):a(t,S,e.localMode.token(t,e.localState))},l.localMode=h,l.localState=t.startState(h,o.indent(l.htmlState,"",""))}else l.inTag&&(l.inTag+=e.current(),e.eol()&&(l.inTag+=" "));return u}return{startState:function(){return{token:p,inTag:null,localMode:null,localState:null,htmlState:t.startState(o)}},copyState:function(e){var a;return e.localState&&(a=t.copyState(e.localMode,e.localState)),{token:e.token,inTag:e.inTag,localMode:e.localMode,localState:a,htmlState:t.copyState(o,e.htmlState)}},token:function(t,e){return e.token(t,e)},indent:function(e,a,n){return!e.localMode||/^\s*<\//.test(a)?o.indent(e.htmlState,a,n):e.localMode.indent?e.localMode.indent(e.localState,a,n):t.Pass},innerMode:function(t){return{state:t.localState||t.htmlState,mode:t.localMode||o}}}}),"xml","javascript","css"),t.defineMIME("text/html","htmlmixed")}(a(1),a(7),a(34),a(33))}}]);
//# sourceMappingURL=58.b9b33260.chunk.js.map