(this["webpackJsonpstandard-notes-editor-template-cra-typescript"]=this["webpackJsonpstandard-notes-editor-template-cra-typescript"]||[]).push([[33],{52:function(n,t,e){!function(n){"use strict";n.defineMode("cmake",(function(){var n=/({)?[a-zA-Z0-9_]+(})?/;function t(n,t){for(var e,i,a=!1;!n.eol()&&(e=n.next())!=t.pending;){if("$"===e&&"\\"!=i&&'"'==t.pending){a=!0;break}i=e}return a&&n.backUp(1),e==t.pending?t.continueString=!1:t.continueString=!0,"string"}function e(e,i){var a=e.next();return"$"===a?e.match(n)?"variable-2":"variable":i.continueString?(e.backUp(1),t(e,i)):e.match(/(\s+)?\w+\(/)||e.match(/(\s+)?\w+\ \(/)?(e.backUp(1),"def"):"#"==a?(e.skipToEnd(),"comment"):"'"==a||'"'==a?(i.pending=a,t(e,i)):"("==a||")"==a?"bracket":a.match(/[0-9]/)?"number":(e.eatWhile(/[\w-]/),null)}return{startState:function(){var n={inDefinition:!1,inInclude:!1,continueString:!1,pending:!1};return n},token:function(n,t){return n.eatSpace()?null:e(n,t)}}})),n.defineMIME("text/x-cmake","cmake")}(e(1))}}]);
//# sourceMappingURL=33.6f842bc7.chunk.js.map