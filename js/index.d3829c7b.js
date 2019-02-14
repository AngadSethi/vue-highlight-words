(function(t){function e(e){for(var n,a,o=e[0],h=e[1],l=e[2],u=0,g=[];u<o.length;u++)a=o[u],i[a]&&g.push(i[a][0]),i[a]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(t[n]=h[n]);c&&c(e);while(g.length)g.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,o=1;o<r.length;o++){var h=r[o];0!==i[h]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},i={index:0},s=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-highlight-words/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],h=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=h;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("a1ec")},a1ec:function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("h1",[t._v("vue highlight words")]),r("div",[r("h3",[t._v("Keywords:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.words,expression:"words"}],attrs:{type:"text"},domProps:{value:t.words},on:{input:function(e){e.target.composing||(t.words=e.target.value)}}})]),r("div",[r("h3",[t._v("Text:")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{rows:"5"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),r("div",{staticClass:"output"},[r("h3",[t._v("Output:")]),t._m(0),r("HighlightWords",{staticClass:"wrapper",attrs:{highlightClassName:"highlight",highlightTag:"i",searchWords:t.keywords,autoEscape:!0,textToHighlight:t.text}}),t._m(1),r("HighlightWords",{staticClass:"wrapper",attrs:{highlightClassName:"highlight",highlightTag:t.strongProps,searchWords:t.keywords,autoEscape:!0,textToHighlight:t.text}}),t._m(2),r("HighlightWords",{staticClass:"wrapper",attrs:{highlightClassName:"highlight",highlightTag:t.strongSlot,searchWords:t.keywords,autoEscape:!0,textToHighlight:t.text},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.highlightIndex,i=e.children;return r("span",{},[r("small",[t._v("["+t._s(n)+"]:")]),t._v("\n        "+t._s(i)+"\n      ")])}}])}),t._m(3),r("HighlightWords",{staticClass:"wrapper",attrs:{highlightClassName:"highlight",highlightTag:"strong",searchWords:t.keywords,autoEscape:!0,textToHighlight:t.text},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.highlightIndex,i=e.children;return[r("small",[t._v("["+t._s(n)+"]:")]),t._v("\n      "+t._s(i)+"\n    ")]}}])})],1),t._m(4)])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h4",[t._v("\n      plain html\n      "),r("code",[t._v("<i>")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h4",[t._v("\n      component\n      "),r("code",[t._v("highlightTag")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h4",[t._v("\n      component\n      "),r("code",[t._v("highlightTag")]),t._v(" with\n      "),r("code",[t._v("slot-scope")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h4",[r("code",[t._v("<strong>")]),t._v(" tag with 2.6.0+ scoped slot")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{attrs:{href:"https://github.com/Astray-git/vue-highlight-words"}},[r("img",{staticStyle:{position:"absolute",top:"0",right:"0",border:"0"},attrs:{src:"https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png",alt:"Fork me on GitHub"}})])}],a=(r("28a5"),r("5176")),o=r.n(a),h=r("cebc"),l=(r("c5f6"),r("e55f")),c={functional:!0,props:{activeClassName:String,activeIndex:Number,activeStyle:Object,autoEscape:Boolean,findChunks:Function,highlightClassName:String,highlightStyle:Object,highlightTag:[Object,Function,String],sanitize:Function,searchWords:{type:Array,validator:function(t){return t.every(function(t){return"string"===typeof t})},required:!0},textToHighlight:{type:String,required:!0},unhighlightClassName:String,unhighlightStyle:Object},render:function(t,e){var r,n=e.props,i=n.activeClassName,s=void 0===i?"":i,a=n.activeIndex,c=void 0===a?-1:a,u=n.activeStyle,g=n.autoEscape,d=n.caseSensitive,p=void 0!==d&&d,f=n.findChunks,v=n.highlightClassName,m=void 0===v?"":v,_=n.highlightStyle,y=void 0===_?{}:_,x=n.highlightTag,b=void 0===x?"mark":x,w=n.sanitize,S=n.searchWords,O=n.textToHighlight,T=n.unhighlightClassName,k=void 0===T?"":T,j=n.unhighlightStyle,C=e.data,E=Object(l["findAll"])({autoEscape:g,caseSensitive:p,findChunks:f,sanitize:w,searchWords:S,textToHighlight:O}),H=b,N=-1,W="";return t("span",Object(h["a"])({},C),E.map(function(e,n){var i=O.substr(e.start,e.end-e.start);if(e.highlight){N++;var a=N===+c;W="".concat(m," ").concat(a?s:""),r=!0===a&&null!=u?o()({},y,u):y;var h={class:W,key:n,style:r};return"string"!==typeof H&&(h.props={highlightIndex:N}),C.scopedSlots?t(H,h,[C.scopedSlots.default({children:i,highlightIndex:N})]):t(H,h,i)}return t("span",{class:k,key:n,style:j},i)}))}},u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("strong",[r("small",[t._v("["+t._s(t.highlightIndex)+"]:")]),t._t("default")],2)},g=[],d={props:["highlightIndex"]},p=d,f=r("2877"),v=Object(f["a"])(p,u,g,!1,null,null,null),m=v.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("strong",[t._t("default")],2)},y=[],x={},b=Object(f["a"])(x,_,y,!1,null,null,null),w=b.exports,S={name:"app",components:{HighlightWords:c},data:function(){return{text:"The dog is chasing the cat. Or perhaps they are just playing?",words:"and or the",strongProps:m,strongSlot:w}},computed:{keywords:function(){return this.words.split(" ")}}},O=S,T=Object(f["a"])(O,i,s,!1,null,null,null),k=T.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(k)}}).$mount("#app")}});
//# sourceMappingURL=index.d3829c7b.js.map