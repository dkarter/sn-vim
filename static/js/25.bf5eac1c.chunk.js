(this["webpackJsonpstandard-notes-editor-template-cra-typescript"]=this["webpackJsonpstandard-notes-editor-template-cra-typescript"]||[]).push([[25,58],{123:function(t,e,a){!function(t){"use strict";var e={noEndTag:!0,soyState:"param-def"},a={alias:{noEndTag:!0},delpackage:{noEndTag:!0},namespace:{noEndTag:!0,soyState:"namespace-def"},"@attribute":e,"@attribute?":e,"@param":e,"@param?":e,"@inject":e,"@inject?":e,"@state":e,template:{soyState:"templ-def",variableScope:!0},literal:{},msg:{},fallbackmsg:{noEndTag:!0,reduceIndent:!0},select:{},plural:{},let:{soyState:"var-def"},if:{},elseif:{noEndTag:!0,reduceIndent:!0},else:{noEndTag:!0,reduceIndent:!0},switch:{},case:{noEndTag:!0,reduceIndent:!0},default:{noEndTag:!0,reduceIndent:!0},foreach:{variableScope:!0,soyState:"for-loop"},ifempty:{noEndTag:!0,reduceIndent:!0},for:{variableScope:!0,soyState:"for-loop"},call:{soyState:"templ-ref"},param:{soyState:"param-ref"},print:{noEndTag:!0},deltemplate:{soyState:"templ-def",variableScope:!0},delcall:{soyState:"templ-ref"},log:{},element:{variableScope:!0}},n=Object.keys(a).filter((function(t){return!a[t].noEndTag||a[t].reduceIndent}));t.defineMode("soy",(function(e){var r=t.getMode(e,"text/plain"),o={html:t.getMode(e,{name:"text/html",multilineTagIndentFactor:2,multilineTagIndentPastTag:!1,allowMissingTagName:!0}),attributes:r,text:r,uri:r,trusted_resource_uri:r,css:t.getMode(e,"text/css"),js:t.getMode(e,{name:"text/javascript",statementIndent:2*e.indentUnit})};function l(t){return t[t.length-1]}function s(t,e,a){if(t.sol()){for(var n=0;n<e.indent&&t.eat(/\s/);n++);if(n)return null}var r=t.string,o=a.exec(r.substr(t.pos));o&&(t.string=r.substr(0,t.pos+o.index));var s=t.hideFirstChars(e.indent,(function(){var a=l(e.localStates);return a.mode.token(t,a.state)}));return t.string=r,s}function i(t,e){for(;t;){if(t.element===e)return!0;t=t.next}return!1}function c(t,e){return{element:e,next:t}}function u(t){t.context&&(t.context.scope&&(t.variables=t.context.scope),t.context=t.context.previousContext)}function p(t,e,a){return i(t,e)?"variable-2":a?"variable":"variable-2 error"}function m(t,e,a){this.previousContext=t,this.tag=e,this.kind=null,this.scope=a}function d(t,e){var a;return t.match(/[[]/)?(e.soyState.push("list-literal"),e.context=new m(e.context,"list-literal",e.variables),e.lookupVariables=!1,null):t.match(/map\b/)?(e.soyState.push("map-literal"),"keyword"):t.match(/record\b/)?(e.soyState.push("record-literal"),"keyword"):t.match(/([\w]+)(?=\()/)?"variable callee":(a=t.match(/^["']/))?(e.soyState.push("string"),e.quoteKind=a[0],"string"):t.match(/^[(]/)?(e.soyState.push("open-parentheses"),null):t.match(/(null|true|false)(?!\w)/)||t.match(/0x([0-9a-fA-F]{2,})/)||t.match(/-?([0-9]*[.])?[0-9]+(e[0-9]*)?/)?"atom":t.match(/(\||[+\-*\/%]|[=!]=|\?:|[<>]=?)/)?"operator":(a=t.match(/^\$([\w]+)/))?p(e.variables,a[1],!e.lookupVariables):(a=t.match(/^\w+/))?/^(?:as|and|or|not|in|if)$/.test(a[0])?"keyword":null:(t.next(),null)}return{startState:function(){return{soyState:[],variables:c(null,"ij"),scopes:null,indent:0,quoteKind:null,context:null,lookupVariables:!0,localStates:[{mode:o.html,state:t.startState(o.html)}]}},copyState:function(e){return{tag:e.tag,soyState:e.soyState.concat([]),variables:e.variables,context:e.context,indent:e.indent,quoteKind:e.quoteKind,lookupVariables:e.lookupVariables,localStates:e.localStates.map((function(e){return{mode:e.mode,state:t.copyState(e.mode,e.state)}}))}},token:function(r,i){switch(l(i.soyState)){case"comment":if(r.match(/^.*?\*\//)?i.soyState.pop():r.skipToEnd(),!i.context||!i.context.scope)for(var h=/@param\??\s+(\S+)/g,y=r.current();S=h.exec(y);)i.variables=c(i.variables,S[1]);return"comment";case"string":var S;return(S=r.match(/^.*?(["']|\\[\s\S])/))?S[1]==i.quoteKind&&(i.quoteKind=null,i.soyState.pop()):r.skipToEnd(),"string"}if(!i.soyState.length||"literal"!=l(i.soyState)){if(r.match(/^\/\*/))return i.soyState.push("comment"),"comment";if(r.match(r.sol()?/^\s*\/\/.*/:/^\s+\/\/.*/))return"comment"}switch(l(i.soyState)){case"templ-def":return(S=r.match(/^\.?([\w]+(?!\.[\w]+)*)/))?(i.soyState.pop(),"def"):(r.next(),null);case"templ-ref":return(S=r.match(/(\.?[a-zA-Z_][a-zA-Z_0-9]+)+/))?(i.soyState.pop(),"."==S[0][0]?"variable-2":"variable"):(S=r.match(/^\$([\w]+)/))?(i.soyState.pop(),p(i.variables,S[1],!i.lookupVariables)):(r.next(),null);case"namespace-def":return(S=r.match(/^\.?([\w\.]+)/))?(i.soyState.pop(),"variable"):(r.next(),null);case"param-def":return(S=r.match(/^\*/))?(i.soyState.pop(),i.soyState.push("param-type"),"type"):(S=r.match(/^\w+/))?(i.variables=c(i.variables,S[0]),i.soyState.pop(),i.soyState.push("param-type"),"def"):(r.next(),null);case"param-ref":return(S=r.match(/^\w+/))?(i.soyState.pop(),"property"):(r.next(),null);case"open-parentheses":return r.match(/[)]/)?(i.soyState.pop(),null):d(r,i);case"param-type":var f=r.peek();return-1!="}]=>,".indexOf(f)?(i.soyState.pop(),null):"["==f?(i.soyState.push("param-type-record"),null):"("==f?(i.soyState.push("param-type-template"),null):"<"==f?(i.soyState.push("param-type-parameter"),null):(S=r.match(/^([\w]+|[?])/))?"type":(r.next(),null);case"param-type-record":return"]"==(f=r.peek())?(i.soyState.pop(),null):r.match(/^\w+/)?(i.soyState.push("param-type"),"property"):(r.next(),null);case"param-type-parameter":return r.match(/^[>]/)?(i.soyState.pop(),null):r.match(/^[<,]/)?(i.soyState.push("param-type"),null):(r.next(),null);case"param-type-template":return r.match(/[>]/)?(i.soyState.pop(),i.soyState.push("param-type"),null):r.match(/^\w+/)?(i.soyState.push("param-type"),"def"):(r.next(),null);case"var-def":return(S=r.match(/^\$([\w]+)/))?(i.variables=c(i.variables,S[1]),i.soyState.pop(),"def"):(r.next(),null);case"for-loop":return r.match(/\bin\b/)?(i.soyState.pop(),"keyword"):"$"==r.peek()?(i.soyState.push("var-def"),null):(r.next(),null);case"record-literal":return r.match(/^[)]/)?(i.soyState.pop(),null):r.match(/[(,]/)?(i.soyState.push("map-value"),i.soyState.push("record-key"),null):(r.next(),null);case"map-literal":return r.match(/^[)]/)?(i.soyState.pop(),null):r.match(/[(,]/)?(i.soyState.push("map-value"),i.soyState.push("map-value"),null):(r.next(),null);case"list-literal":return r.match("]")?(i.soyState.pop(),i.lookupVariables=!0,u(i),null):r.match(/\bfor\b/)?(i.lookupVariables=!0,i.soyState.push("for-loop"),"keyword"):d(r,i);case"record-key":return r.match(/[\w]+/)?"property":r.match(/^[:]/)?(i.soyState.pop(),null):(r.next(),null);case"map-value":return")"==r.peek()||","==r.peek()||r.match(/^[:)]/)?(i.soyState.pop(),null):d(r,i);case"import":return r.eat(";")?(i.soyState.pop(),i.indent-=2*e.indentUnit,null):r.match(/\w+(?=\s+as)/)?"variable":(S=r.match(/\w+/))?/(from|as)/.test(S[0])?"keyword":"def":(S=r.match(/^["']/))?(i.soyState.push("string"),i.quoteKind=S[0],"string"):(r.next(),null);case"tag":void 0===i.tag?(w=!0,M=""):M=(w="/"==i.tag[0])?i.tag.substring(1):i.tag;var g=a[M];if(r.match(/^\/?}/)){var v="/}"==r.current();return v&&!w&&u(i),"/template"==i.tag||"/deltemplate"==i.tag?(i.variables=c(null,"ij"),i.indent=0):i.indent-=e.indentUnit*(v||-1==n.indexOf(i.tag)?2:1),i.soyState.pop(),"keyword"}if(r.match(/^([\w?]+)(?==)/)){if(i.context&&i.context.tag==M&&"kind"==r.current()&&(S=r.match(/^="([^"]+)/,!1))){var b=S[1];i.context.kind=b;var x=o[b]||o.html;(I=l(i.localStates)).mode.indent&&(i.indent+=I.mode.indent(I.state,"","")),i.localStates.push({mode:x,state:t.startState(x)})}return"attribute"}return d(r,i);case"template-call-expression":return r.match(/^([\w-?]+)(?==)/)?"attribute":r.eat(">")||r.eat("/>")?(i.soyState.pop(),"keyword"):d(r,i);case"literal":return r.match("{/literal}",!1)?(i.soyState.pop(),this.token(r,i)):s(r,i,/\{\/literal}/)}if(r.match("{literal}"))return i.indent+=e.indentUnit,i.soyState.push("literal"),i.context=new m(i.context,"literal",i.variables),"keyword";if(S=r.match(/^\{([/@\\]?\w+\??)(?=$|[\s}]|\/[/*])/)){var k=i.tag;i.tag=S[1];var w="/"==i.tag[0],T=!!a[i.tag],M=w?i.tag.substring(1):i.tag;g=a[M],"/switch"!=i.tag&&(i.indent+=((w||g&&g.reduceIndent)&&"switch"!=k?1:2)*e.indentUnit),i.soyState.push("tag");var E=!1;if(g)if(w||g.soyState&&i.soyState.push(g.soyState),g.noEndTag||!T&&w){if(w)if(i.context&&i.context.tag==M){if(i.context){var I;i.context.kind&&(i.localStates.pop(),(I=l(i.localStates)).mode.indent&&(i.indent-=I.mode.indent(I.state,"",""))),u(i)}}else E=!0}else i.context=new m(i.context,i.tag,g.variableScope?i.variables:null);else w&&(E=!0);return(E?"error ":"")+"keyword"}return r.eat("{")?(i.tag="print",i.indent+=2*e.indentUnit,i.soyState.push("tag"),"keyword"):!i.context&&r.match(/\bimport\b/)?(i.soyState.push("import"),i.indent+=2*e.indentUnit,"keyword"):(S=r.match("<{"))?(i.soyState.push("template-call-expression"),i.indent+=2*e.indentUnit,i.soyState.push("tag"),"keyword"):(S=r.match("</>"))?(i.indent-=1*e.indentUnit,"keyword"):s(r,i,/\{|\s+\/\/|\/\*/)},indent:function(a,n,r){var o=a.indent,s=l(a.soyState);if("comment"==s)return t.Pass;if("literal"==s)/^\{\/literal}/.test(n)&&(o-=e.indentUnit);else{if(/^\s*\{\/(template|deltemplate)\b/.test(n))return 0;/^\{(\/|(fallbackmsg|elseif|else|ifempty)\b)/.test(n)&&(o-=e.indentUnit),"switch"!=a.tag&&/^\{(case|default)\b/.test(n)&&(o-=e.indentUnit),/^\{\/switch\b/.test(n)&&(o-=e.indentUnit)}var i=l(a.localStates);return o&&i.mode.indent&&(o+=i.mode.indent(i.state,n,r)),o},innerMode:function(t){return t.soyState.length&&"literal"!=l(t.soyState)?null:l(t.localStates)},electricInput:/^\s*\{(\/|\/template|\/deltemplate|\/switch|fallbackmsg|elseif|else|case|default|ifempty|\/literal\})$/,lineComment:"//",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",useInnerComments:!1,fold:"indent"}}),"htmlmixed"),t.registerHelper("wordChars","soy",/[\w$]/),t.registerHelper("hintWords","soy",Object.keys(a).concat(["css","debugger"])),t.defineMIME("text/x-soy","soy")}(a(1),a(32))},32:function(t,e,a){!function(t){"use strict";var e={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]};function a(t,e,a){var n=t.current(),r=n.search(e);return r>-1?t.backUp(n.length-r):n.match(/<\/?$/)&&(t.backUp(n.length),t.match(e,!1)||t.match(n)),a}var n={};function r(t){var e=n[t];return e||(n[t]=new RegExp("\\s+"+t+"\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*"))}function o(t,e){var a=t.match(r(e));return a?/^\s*(.*?)\s*$/.exec(a[2])[1]:""}function l(t,e){return new RegExp((e?"^":"")+"</s*"+t+"s*>","i")}function s(t,e){for(var a in t)for(var n=e[a]||(e[a]=[]),r=t[a],o=r.length-1;o>=0;o--)n.unshift(r[o])}function i(t,e){for(var a=0;a<t.length;a++){var n=t[a];if(!n[0]||n[1].test(o(e,n[0])))return n[2]}}t.defineMode("htmlmixed",(function(n,r){var o=t.getMode(n,{name:"xml",htmlMode:!0,multilineTagIndentFactor:r.multilineTagIndentFactor,multilineTagIndentPastTag:r.multilineTagIndentPastTag,allowMissingTagName:r.allowMissingTagName}),c={},u=r&&r.tags,p=r&&r.scriptTypes;if(s(e,c),u&&s(u,c),p)for(var m=p.length-1;m>=0;m--)c.script.unshift(["type",p[m].matches,p[m].mode]);function d(e,r){var s,u=o.token(e,r.htmlState),p=/\btag\b/.test(u);if(p&&!/[<>\s\/]/.test(e.current())&&(s=r.htmlState.tagName&&r.htmlState.tagName.toLowerCase())&&c.hasOwnProperty(s))r.inTag=s+" ";else if(r.inTag&&p&&/>$/.test(e.current())){var m=/^([\S]+) (.*)/.exec(r.inTag);r.inTag=null;var h=">"==e.current()&&i(c[m[1]],m[2]),y=t.getMode(n,h),S=l(m[1],!0),f=l(m[1],!1);r.token=function(t,e){return t.match(S,!1)?(e.token=d,e.localState=e.localMode=null,null):a(t,f,e.localMode.token(t,e.localState))},r.localMode=y,r.localState=t.startState(y,o.indent(r.htmlState,"",""))}else r.inTag&&(r.inTag+=e.current(),e.eol()&&(r.inTag+=" "));return u}return{startState:function(){return{token:d,inTag:null,localMode:null,localState:null,htmlState:t.startState(o)}},copyState:function(e){var a;return e.localState&&(a=t.copyState(e.localMode,e.localState)),{token:e.token,inTag:e.inTag,localMode:e.localMode,localState:a,htmlState:t.copyState(o,e.htmlState)}},token:function(t,e){return e.token(t,e)},indent:function(e,a,n){return!e.localMode||/^\s*<\//.test(a)?o.indent(e.htmlState,a,n):e.localMode.indent?e.localMode.indent(e.localState,a,n):t.Pass},innerMode:function(t){return{state:t.localState||t.htmlState,mode:t.localMode||o}}}}),"xml","javascript","css"),t.defineMIME("text/html","htmlmixed")}(a(1),a(7),a(34),a(33))}}]);
//# sourceMappingURL=25.bf5eac1c.chunk.js.map