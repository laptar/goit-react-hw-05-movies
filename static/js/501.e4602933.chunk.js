"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[501],{8501:function(t,r,n){n.r(r),n.d(r,{default:function(){return s}});var e=n(885),a=n(2791),u=n(6871),c=n(5351),i=n(184),s=function(){var t=(0,a.useState)(null),r=(0,e.Z)(t,2),n=r[0],s=r[1],o=(0,u.UO)().movieId;if((0,a.useEffect)((function(){(0,c.zv)(o).then((function(t){return s(t)}))}),[o]),n)return(0,i.jsx)("ul",{children:n.cast.map((function(t){var r=t.id,n=t.profile_path,e=t.name,a=t.character;return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{width:"100",src:"https://image.tmdb.org/t/p/w500/"+n,alt:e}),(0,i.jsx)("p",{children:e}),(0,i.jsx)("p",{children:a})]},r)}))})}},5351:function(t,r,n){n.d(r,{M3:function(){return s},TP:function(){return f},qF:function(){return o},tx:function(){return v},zv:function(){return p}});var e=n(5861),a=n(7757),u=n.n(a),c=n(4569),i=n.n(c)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"cb1d0f4a7bc8495540b668929e8899ef",language:"en-US",page:1,include_adult:!1}}),s=function(){var t=(0,e.Z)(u().mark((function t(){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/trending/all/day");case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(u().mark((function t(r){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/search/movie",{params:r});case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(r){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("movie/".concat(r));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(u().mark((function t(r){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("movie/".concat(r,"/credits"));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(u().mark((function t(r){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("movie/".concat(r,"/reviews"));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=501.e4602933.chunk.js.map