(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fe47070"],{6859:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"page-title"},[r("h3",[e._v("Планирование")]),r("h4",[e._v(e._s(e._f("currency")(e.info.bill,"UAH")))])]),e.loading?r("Loader"):e.categories.length?r("section",e._l(e.categories,(function(t){return r("div",{key:t.id},[r("p",[r("strong",[e._v(e._s(t.title)+":")]),e._v(" "+e._s(e._f("currency")(t.spend))+" из "+e._s(e._f("currency")(t.limit))+" ")]),r("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.tooltip,expression:"cat.tooltip"}],staticClass:"progress"},[r("div",{staticClass:"determinate",class:[t.progressColor],style:{width:t.progressPercent+"%"}})])])})),0):r("p",{staticClass:"center"},[e._v("Категорий пока нет. "),r("router-link",{attrs:{to:"/categories"}},[e._v("Добавить новую категорию")])],1)],1)},o=[],i=r("1da1"),c=r("5530"),a=(r("96cf"),r("d81d"),r("4de4"),r("99af"),r("2f62")),s=r("5bb3"),u={name:"planning",data:function(){return{loading:!0,categories:[]}},computed:Object(c["a"])({},Object(a["c"])(["info"])),mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchRecords");case 2:return r=t.sent,t.next=5,e.$store.dispatch("fetchCategories");case 5:n=t.sent,e.categories=n.map((function(e){var t=r.filter((function(t){return t.categoryId===e.id})).filter((function(e){return"outcome"===e.type})).reduce((function(e,t){return e+ +t.amount}),0),n=100*t/e.limit,o=n>100?100:n,i=n<60?"green":n<100?"yellow":"red",a=e.limit-t,u="".concat(a<0?"Превышение на":"Осталось"," ").concat(Object(s["a"])(Math.abs(a)));return Object(c["a"])(Object(c["a"])({},e),{},{progressPercent:o,progressColor:i,spend:t,tooltip:u})})),e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}},l=u,d=r("2877"),f=Object(d["a"])(l,n,o,!1,null,null,null);t["default"]=f.exports},"99af":function(e,t,r){"use strict";var n=r("23e7"),o=r("d039"),i=r("e8b5"),c=r("861d"),a=r("7b0b"),s=r("50c4"),u=r("8418"),l=r("65f0"),d=r("1dde"),f=r("b622"),p=r("2d00"),g=f("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",b=p>=51||!o((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),m=d("concat"),_=function(e){if(!c(e))return!1;var t=e[g];return void 0!==t?!!t:i(e)},w=!b||!m;n({target:"Array",proto:!0,forced:w},{concat:function(e){var t,r,n,o,i,c=a(this),d=l(c,0),f=0;for(t=-1,n=arguments.length;t<n;t++)if(i=-1===t?c:arguments[t],_(i)){if(o=s(i.length),f+o>v)throw TypeError(h);for(r=0;r<o;r++,f++)r in i&&u(d,f,i[r])}else{if(f>=v)throw TypeError(h);u(d,f++,i)}return d.length=f,d}})}}]);
//# sourceMappingURL=chunk-0fe47070.0b96fe52.js.map