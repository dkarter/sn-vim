(this["webpackJsonpstandard-notes-editor-template-cra-typescript"]=this["webpackJsonpstandard-notes-editor-template-cra-typescript"]||[]).push([[91],{43:function(e,r,t){!function(e){"use strict";e.defineMode("sass",(function(r){var t=e.mimeModes["text/css"],n=t.propertyKeywords||{},o=t.colorKeywords||{},i=t.valueKeywords||{},a=t.fontProperties||{};function u(e){return new RegExp("^"+e.join("|"))}var s,f=new RegExp("^"+["true","false","null","auto"].join("|")),c=u(["\\(","\\)","=",">","<","==",">=","<=","\\+","-","\\!=","/","\\*","%","and","or","not",";","\\{","\\}",":"]),p=/^::?[a-zA-Z_][\w\-]*/;function l(e){return!e.peek()||e.match(/\s+$/,!1)}function h(e,r){var t=e.peek();return")"===t?(e.next(),r.tokenizer=y,"operator"):"("===t?(e.next(),e.eatSpace(),"operator"):"'"===t||'"'===t?(r.tokenizer=d(e.next()),"string"):(r.tokenizer=d(")",!1),"string")}function m(e,r){return function(t,n){return t.sol()&&t.indentation()<=e?(n.tokenizer=y,y(t,n)):(r&&t.skipTo("*/")?(t.next(),t.next(),n.tokenizer=y):t.skipToEnd(),"comment")}}function d(e,r){function t(n,o){var i=n.next(),a=n.peek(),u=n.string.charAt(n.pos-2);return"\\"!==i&&a===e||i===e&&"\\"!==u?(i!==e&&r&&n.next(),l(n)&&(o.cursorHalf=0),o.tokenizer=y,"string"):"#"===i&&"{"===a?(o.tokenizer=k(t),n.next(),"operator"):"string"}return null==r&&(r=!0),t}function k(e){return function(r,t){return"}"===r.peek()?(r.next(),t.tokenizer=e,"operator"):y(r,t)}}function w(e){if(0==e.indentCount){e.indentCount++;var t=e.scopes[0].offset+r.indentUnit;e.scopes.unshift({offset:t})}}function x(e){1!=e.scopes.length&&e.scopes.shift()}function y(e,r){var t=e.peek();if(e.match("/*"))return r.tokenizer=m(e.indentation(),!0),r.tokenizer(e,r);if(e.match("//"))return r.tokenizer=m(e.indentation(),!1),r.tokenizer(e,r);if(e.match("#{"))return r.tokenizer=k(y),"operator";if('"'===t||"'"===t)return e.next(),r.tokenizer=d(t),"string";if(r.cursorHalf){if("#"===t&&(e.next(),e.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/)))return l(e)&&(r.cursorHalf=0),"number";if(e.match(/^-?[0-9\.]+/))return l(e)&&(r.cursorHalf=0),"number";if(e.match(/^(px|em|in)\b/))return l(e)&&(r.cursorHalf=0),"unit";if(e.match(f))return l(e)&&(r.cursorHalf=0),"keyword";if(e.match(/^url/)&&"("===e.peek())return r.tokenizer=h,l(e)&&(r.cursorHalf=0),"atom";if("$"===t)return e.next(),e.eatWhile(/[\w-]/),l(e)&&(r.cursorHalf=0),"variable-2";if("!"===t)return e.next(),r.cursorHalf=0,e.match(/^[\w]+/)?"keyword":"operator";if(e.match(c))return l(e)&&(r.cursorHalf=0),"operator";if(e.eatWhile(/[\w-]/))return l(e)&&(r.cursorHalf=0),s=e.current().toLowerCase(),i.hasOwnProperty(s)?"atom":o.hasOwnProperty(s)?"keyword":n.hasOwnProperty(s)?(r.prevProp=e.current().toLowerCase(),"property"):"tag";if(l(e))return r.cursorHalf=0,null}else{if("-"===t&&e.match(/^-\w+-/))return"meta";if("."===t){if(e.next(),e.match(/^[\w-]+/))return w(r),"qualifier";if("#"===e.peek())return w(r),"tag"}if("#"===t){if(e.next(),e.match(/^[\w-]+/))return w(r),"builtin";if("#"===e.peek())return w(r),"tag"}if("$"===t)return e.next(),e.eatWhile(/[\w-]/),"variable-2";if(e.match(/^-?[0-9\.]+/))return"number";if(e.match(/^(px|em|in)\b/))return"unit";if(e.match(f))return"keyword";if(e.match(/^url/)&&"("===e.peek())return r.tokenizer=h,"atom";if("="===t&&e.match(/^=[\w-]+/))return w(r),"meta";if("+"===t&&e.match(/^\+[\w-]+/))return"variable-3";if("@"===t&&e.match("@extend")&&(e.match(/\s*[\w]/)||x(r)),e.match(/^@(else if|if|media|else|for|each|while|mixin|function)/))return w(r),"def";if("@"===t)return e.next(),e.eatWhile(/[\w-]/),"def";if(e.eatWhile(/[\w-]/)){if(e.match(/ *: *[\w-\+\$#!\("']/,!1)){s=e.current().toLowerCase();var u=r.prevProp+"-"+s;return n.hasOwnProperty(u)?"property":n.hasOwnProperty(s)?(r.prevProp=s,"property"):a.hasOwnProperty(s)?"property":"tag"}return e.match(/ *:/,!1)?(w(r),r.cursorHalf=1,r.prevProp=e.current().toLowerCase(),"property"):(e.match(/ *,/,!1)||w(r),"tag")}if(":"===t)return e.match(p)?"variable-3":(e.next(),r.cursorHalf=1,"operator")}return e.match(c)?"operator":(e.next(),null)}function v(e,t){e.sol()&&(t.indentCount=0);var n=t.tokenizer(e,t),o=e.current();if("@return"!==o&&"}"!==o||x(t),null!==n){for(var i=e.pos-o.length+r.indentUnit*t.indentCount,a=[],u=0;u<t.scopes.length;u++){var s=t.scopes[u];s.offset<=i&&a.push(s)}t.scopes=a}return n}return{startState:function(){return{tokenizer:y,scopes:[{offset:0,type:"sass"}],indentCount:0,cursorHalf:0,definedVars:[],definedMixins:[]}},token:function(e,r){var t=v(e,r);return r.lastToken={style:t,content:e.current()},t},indent:function(e){return e.scopes[0].offset}}}),"css"),e.defineMIME("text/x-sass","sass")}(t(1),t(33))}}]);
//# sourceMappingURL=91.2fa7dbf0.chunk.js.map