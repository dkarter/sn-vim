(this["webpackJsonpstandard-notes-editor-template-cra-typescript"]=this["webpackJsonpstandard-notes-editor-template-cra-typescript"]||[]).push([[84],{109:function(e,t,n){!function(e){"use strict";e.defineMode("puppet",(function(){var e={},t=/({)?([a-z][a-z0-9_]*)?((::[a-z][a-z0-9_]*)*::)?[a-zA-Z0-9_]+(})?/;function n(t,n){for(var i=n.split(" "),a=0;a<i.length;a++)e[i[a]]=t}function i(e,t){for(var n,i,a=!1;!e.eol()&&(n=e.next())!=t.pending;){if("$"===n&&"\\"!=i&&'"'==t.pending){a=!0;break}i=n}return a&&e.backUp(1),n==t.pending?t.continueString=!1:t.continueString=!0,"string"}function a(n,a){var o=n.match(/[\w]+/,!1),s=n.match(/(\s+)?\w+\s+=>.*/,!1),r=n.match(/(\s+)?[\w:_]+(\s+)?{/,!1),c=n.match(/(\s+)?[@]{1,2}[\w:_]+(\s+)?{/,!1),u=n.next();if("$"===u)return n.match(t)?a.continueString?"variable-2":"variable":"error";if(a.continueString)return n.backUp(1),i(n,a);if(a.inDefinition){if(n.match(/(\s+)?[\w:_]+(\s+)?/))return"def";n.match(/\s+{/),a.inDefinition=!1}return a.inInclude?(n.match(/(\s+)?\S+(\s+)?/),a.inInclude=!1,"def"):n.match(/(\s+)?\w+\(/)?(n.backUp(1),"def"):s?(n.match(/(\s+)?\w+/),"tag"):o&&e.hasOwnProperty(o)?(n.backUp(1),n.match(/[\w]+/),n.match(/\s+\S+\s+{/,!1)&&(a.inDefinition=!0),"include"==o&&(a.inInclude=!0),e[o]):/(^|\s+)[A-Z][\w:_]+/.test(o)?(n.backUp(1),n.match(/(^|\s+)[A-Z][\w:_]+/),"def"):r?(n.match(/(\s+)?[\w:_]+/),"def"):c?(n.match(/(\s+)?[@]{1,2}/),"special"):"#"==u?(n.skipToEnd(),"comment"):"'"==u||'"'==u?(a.pending=u,i(n,a)):"{"==u||"}"==u?"bracket":"/"==u?(n.match(/^[^\/]*\//),"variable-3"):u.match(/[0-9]/)?(n.eatWhile(/[0-9]+/),"number"):"="==u?(">"==n.peek()&&n.next(),"operator"):(n.eatWhile(/[\w-]/),null)}return n("keyword","class define site node include import inherits"),n("keyword","case if else in and elsif default or"),n("atom","false true running present absent file directory undef"),n("builtin","action augeas burst chain computer cron destination dport exec file filebucket group host icmp iniface interface jump k5login limit log_level log_prefix macauthorization mailalias maillist mcx mount nagios_command nagios_contact nagios_contactgroup nagios_host nagios_hostdependency nagios_hostescalation nagios_hostextinfo nagios_hostgroup nagios_service nagios_servicedependency nagios_serviceescalation nagios_serviceextinfo nagios_servicegroup nagios_timeperiod name notify outiface package proto reject resources router schedule scheduled_task selboolean selmodule service source sport ssh_authorized_key sshkey stage state table tidy todest toports tosource user vlan yumrepo zfs zone zpool"),{startState:function(){var e={inDefinition:!1,inInclude:!1,continueString:!1,pending:!1};return e},token:function(e,t){return e.eatSpace()?null:a(e,t)}}})),e.defineMIME("text/x-puppet","puppet")}(n(1))}}]);
//# sourceMappingURL=84.25c69f6e.chunk.js.map