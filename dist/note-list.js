(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1134:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=n(725);function c(){return o.a.createElement("svg",{className:"icon-feed",xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M2,8.667V12c5.515,0,10,4.485,10,10h3.333C15.333,14.637,9.363,8.667,2,8.667z M2,2v3.333 c9.19,0,16.667,7.477,16.667,16.667H22C22,10.955,13.045,2,2,2z M4.5,17C3.118,17,2,18.12,2,19.5S3.118,22,4.5,22S7,20.88,7,19.5 S5.882,17,4.5,17z"}))}var l=n(4),u=n.n(l),p=n(2),d=n(8),f=n(9),m=n(7),h=n(36),y=n(1080),v=n.n(y);function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var b=/\s*(\S[^\n]*)\s*(\S[^\n]*)?/,g=/(?:#{0,6}\s+)?(\S[^\n]*)\s*(?:#{0,6}\s+)?(\S[^\n]*)?/,N={title:"New Note...",preview:""},S=function(e){return e&&e.data&&e.data.systemTags.includes("markdown")},x=function(e){var t=e&&e.data&&e.data.content||"";t=t.substring(0,300);var n=S(e)?g.exec(t||""):b.exec(t||"");if(!n)return N;var r=w(n,3),o=r[1],i=r[2];if(i&&S(e)){var a=i.replace(/(\s)\s+/g,"$1");i=v()(a,{stripListLeaders:!1})}return{title:o.slice(0,200)||N.title,preview:i||N.preview}},E=new Map,k=function(e,t){return function(n){var r=E.get(n.id),o=e(n);if(void 0===r||o!==r.key){var i={key:o,value:t(n)};E.set(n.id,i),r=i}return r.value}}(function(e){return e.data.modificationDate},x);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"NoteList",function(){return H}),s.a.displayName="AutoSizer",s.b.displayName="List";var C={comfy:1,condensed:0,expanded:4};function L(e,t){var n=L.canvas||(L.canvas=document.createElement("canvas"));n.width=t;var r=n.getContext("2d");return r.font="16px arial",r.measureText(e).width}var M=new Map,_=function(e){return function(t,n){var r=n.noteDisplay,o=n.width;return function(n){var i=n.index,a=t[i],s=k(a).preview,c=t[i].id,l=M.get(c);if(void 0!==l){var u=A(l,4),p=u[0],d=u[1],f=u[2],m=u[3];if(p===o&&d===r&&f===s)return m}var h=e(o,r,s);return M.set(c,[o,r,s,h]),h}}}(function(e,t,n){var r=Math.ceil(L(n,e-24)/(e-24));return 42+21*Math.min(C[t],r)}),q=function e(t,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1e3;if(!n||!i)return I(o).concat([{type:"text",text:r}]);var a=r.search(t);return-1===a?I(o).concat([{type:"text",text:r}]):e(t,n,r.slice(a+n),I(o).concat([{type:"text",text:r.slice(0,a)},{type:"match",text:r.slice(a,a+n)}]),i-1)},z=function(e){return e.map(function(e,t){var n=e.type,r=e.text;return"match"===n?o.a.createElement("span",{key:t,className:"search-match"},r):o.a.createElement("span",{key:t},r)})},H=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return R(P(P(n=function(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?P(e):t}(this,(e=D(t)).call.apply(e,[this].concat(o))))),"handleShortcut",function(e){var t=e.ctrlKey,r=e.key,o=e.metaKey,i=e.shiftKey,a=t||o;return a&&i&&("ArrowUp"===r||"K"===r)?(n.props.onSelectNote(n.props.nextNote.id),e.stopPropagation(),e.preventDefault(),!1):!a||!i||"ArrowDown"!==r&&"J"!==r||(n.props.onSelectNote(n.props.prevNote.id),e.stopPropagation(),e.preventDefault(),!1)}),R(P(P(n)),"refList",function(e){return n.list=e}),R(P(P(n)),"toggleShortcuts",function(e){e?window.addEventListener("keydown",n.handleShortcut,!0):window.removeEventListener("keydown",n.handleShortcut,!0)}),R(P(P(n)),"onPinNote",function(e){return n.props.onPinNote(e,!e.pinned)}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,r["Component"]),function(e,t,n){t&&j(e.prototype,t),n&&j(e,n)}(t,[{key:"componentDidMount",value:function(){var e=this;this.recomputeHeights=Object(p.debounce)(function(){return e.list&&e.list.recomputeRowHeights()},70,{maxWait:1e3}),this.toggleShortcuts(!0),window.addEventListener("resize",this.recomputeHeights)}},{key:"componentDidUpdate",value:function(e){e.noteDisplay===this.props.noteDisplay&&e.notes===this.props.notes&&e.selectedNoteContent===this.props.selectedNoteContent||this.recomputeHeights()}},{key:"componentWillUnmount",value:function(){this.toggleShortcuts(!1),window.removeEventListener("resize",this.recomputeHeights)}},{key:"render",value:function(){var e=this,t=this.props,n=t.filter,i=t.selectedNoteId,a=t.onNoteOpened,l=t.onSelectNote,d=t.onEmptyTrash,f=t.noteDisplay,m=t.showTrash,h=t.notes,y=t.isSmallScreen,v=new RegExp(Object(p.escapeRegExp)(n),"gi"),w=u()("note-list-items",f),b=function(e,t){var n=t.filter,r=t.filterRegExp,i=t.noteDisplay,a=t.selectedNoteId,s=t.onNoteOpened,l=t.onSelectNote,d=t.onPinNote,f=t.isSmallScreen;return function(t){var m=t.index,h=t.rowIndex,y=t.key,v=t.style,w=e[void 0===m?h:m],b=k(w),g=b.title,N=b.preview,S=!Object(p.isEmpty)(w.data.publishURL),x=S&&"condensed"!==i,E=u()("note-list-item",{"note-list-item-selected":!f&&a===w.id,"note-list-item-pinned":w.pinned,"published-note":S}),O=n.length>0?q(r,n.length,g):[{type:"text",text:g}],j=n.length>0?q(r,n.length,N):[{type:"text",text:N}];return o.a.createElement("div",{key:y,style:v,className:E},o.a.createElement("div",{className:"note-list-item-pinner",tabIndex:"0",onClick:d.bind(null,w)}),o.a.createElement("div",{className:"note-list-item-text theme-color-border",tabIndex:"0",onClick:function(){l(w.id),s()}},o.a.createElement("div",{className:"note-list-item-title"},o.a.createElement("span",null,z(O)),x&&o.a.createElement("div",{className:"note-list-item-published-icon"},o.a.createElement(c,null))),"condensed"!==i&&N.trim()&&o.a.createElement("div",{className:"note-list-item-excerpt"},z(j))))}}(h,{filter:n,filterRegExp:v,noteDisplay:f,onNoteOpened:a,onSelectNote:l,onPinNote:this.onPinNote,selectedNoteId:i,isSmallScreen:y}),g=0===h.length,N=o.a.createElement("div",{className:"note-list-empty-trash theme-color-border"},o.a.createElement("button",{type:"button",className:"button button-borderless button-danger",onClick:d},"Empty Trash"));return o.a.createElement("div",{className:u()("note-list",{"is-empty":g})},g?o.a.createElement("span",{className:"note-list-placeholder"},"No Notes"):o.a.createElement(r.Fragment,null,o.a.createElement("div",{className:w},o.a.createElement(s.a,null,function(t){var n=t.height,r=t.width;return o.a.createElement(s.b,{ref:e.refList,estimatedRowSize:42+21*C[f],height:n,noteDisplay:f,notes:e.props.notes,rowCount:e.props.notes.length,rowHeight:"condensed"===f?42:_(e.props.notes,{noteDisplay:f,width:r}),rowRenderer:b,width:r})})),!!m&&N))}}]),t}();R(H,"displayName","NoteList"),R(H,"propTypes",{isSmallScreen:a.a.bool.isRequired,notes:a.a.array.isRequired,selectedNoteId:a.a.any,onNoteOpened:a.a.func.isRequired,onSelectNote:a.a.func.isRequired,onPinNote:a.a.func.isRequired,noteDisplay:a.a.string.isRequired,onEmptyTrash:a.a.any.isRequired,showTrash:a.a.bool});var B=f.a.actionCreators,K=B.emptyTrash,U=B.loadAndSelectNote,J=B.pinNote,W=m.tracks.recordEvent;t.default=Object(d.b)(function(e){var t=e.appState,n=e.settings.noteDisplay,r=Object(h.a)(t),o=Math.max(t.previousIndex,0),i=t.note?t.note:r[o],a=Object(p.get)(i,"id",t.selectedNoteId),s=r.findIndex(function(e){return e.id===a}),c=Math.max(0,s-1),l=Math.min(r.length-1,s+1),u=r[c],d=r[l],f=i&&k(i).preview;return{filter:t.filter,nextNote:u,noteDisplay:n,notes:r,prevNote:d,selectedNotePreview:f,selectedNoteContent:Object(p.get)(i,"data.content"),selectedNoteId:a,showTrash:t.showTrash}},function(e,t){var n=t.noteBucket;return{onEmptyTrash:function(){return e(K({noteBucket:n}))},onSelectNote:function(t){e(U({noteBucket:n,noteId:t})),W("list_note_opened")},onPinNote:function(t,r){return e(J({noteBucket:n,note:t,pin:r}))}}})(H)}}]);