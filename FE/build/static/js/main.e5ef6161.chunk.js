(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{54:function(e,t,n){e.exports=n(83)},83:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),s=n(31),u=n(46),i=n(103),p=n(111),l=n(105),d=n(109),f=n(107),v=n(106),m=n(110),E=n(108),O=Object(i.a)({root:{maxWidth:500},media:{height:140}});var h=function(e){var t=e.vacation,n=O();return r.a.createElement(p.a,{className:n.root},r.a.createElement(l.a,null,r.a.createElement(v.a,{component:"img",className:n.media,src:t.image,title:t.description}),r.a.createElement(f.a,null,r.a.createElement(E.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.destination),r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"p"},t.description))),r.a.createElement(d.a,null,r.a.createElement(m.a,{variant:"contained",size:"small",color:"primary"},"Order"),r.a.createElement(m.a,{size:"small",color:"secondary"},"Learn More")))},b=Object(i.a)({vacationsRoot:{display:"grid",gridColumnGap:"10px",gridRowGap:"15px",gridTemplateColumns:"2fr 2fr 2fr"}});var x=function(e){var t=e.getVacations,n=e.vacations,c=r.a.useState([]),o=Object(u.a)(c,2),s=o[0],i=o[1];Object(a.useEffect)((function(){t&&t()}),[]),Object(a.useEffect)((function(){var e=n.map((function(e){return r.a.createElement(h,{vacation:e})}));i(e)}),[n]);var p=b();return r.a.createElement("div",{className:p.vacationsRoot},s)},T=function(e){return{type:"GET_VACATIONS_ERROR",payload:e}},_=n(15),w={vacations:[]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;return Object(_.a)(e,(function(e){switch(t.type){case"GET_VACATIONS_SUCCESS":e.vacations=t.payload}}))},g=function(e){return function(e){return e.vacations||w}(e).vacations},S={getVacations:function(){return{type:"GET_VACATIONS"}}},j=Object(s.b)((function(e){return{vacations:g(e)}}),S)(x),k=n(16),A=n(47),C={},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return Object(_.a)(e,(function(e){t.type}))},R={username:"",password:""},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;return Object(_.b)(e,(function(e){switch(t.type){case"app/LoginPage/LOGIN_FIELD_CHANGE":if("password"===t.fieldName){e.password=t.value;break}e.username=t.value}}))},I={user:{},orders:[]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return Object(_.a)(e,(function(e){switch(t.type){case"GET_PROFILE_SUCCESS":e.user=t.payload.user,e.orders=t.payload.orders}}))},L=n(19),V=n.n(L);V.a.defaults.expires=1;var D,P=window.location.hostname,H=function(e){var t=e.token,n=(e.tokenExpiryTime,e.user);V.a.set("token",t,{domain:P,path:""}),V.a.set("user",JSON.stringify(n),{domain:P,path:""})},F=function(){V.a.remove("token",{domain:P,path:""}),V.a.remove("user",{domain:P,path:""})},J={token:V.a.get("token",{domain:P,path:""}),user:V.a.get("user",{domain:P,path:""})},z=J.token,B={token:z,user:(D=J.user,D&&JSON.parse(D)),isAuthenticated:!!z},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;return Object(_.a)(e,(function(e){switch(t.type){case"GET_AUTH_SUCCESS":e.token=t.payload.token,e.user=t.payload.user,e.isAuthenticated=!0;break;case"GET_AUTH_ERROR":break;case"LOG_OUT":delete e.token,delete e.user,e.isAuthenticated=!1}}))},X=Object(k.c)({loginPage:U,app:G,profile:N,vacations:y,auth:M}),W=n(6),q=n.n(W),K=n(8),Q=n(24),Y=n.n(Q),Z="http://localhost:9000/";Y.a.interceptors.response.use((function(e){return e.data}));var $=function(){var e=q.a.mark(c),t=q.a.mark(o),n=q.a.mark(s),a=q.a.mark(u),r={};function c(t,n){var a,c;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="http://localhost:9000/"+t,c={headers:r},e.next=4,Y.a.post(a,n,c);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)}function o(e,n){var a,c;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Z+e,c={headers:r,params:n},t.next=4,Y.a.post(a,c);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)}function s(e,t){var a,c;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=Z+e,c={headers:r},n.next=4,Y.a.put(a,t,c);case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)}function u(e,t){var n,c;return q.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=Z+e,c={headers:r,params:t},a.next=4,Y.a.put(n,c);case 4:return a.abrupt("return",a.sent);case 5:case"end":return a.stop()}}),a)}return{setCredentials:function(e){r.Authorization="Bearer ".concat(e)},post:c,getData:o,putData:s,deleteData:u}}(),ee={AUTHENTICATE:{url:"auth",subUrl:""},USER_DATA:{url:"users",subUrl:"me"},GET_VACATIONS:{url:"vacations"},GET_PROFILE:{url:"profile"}},te=function(e){var t="";if(e&&ee[e]){var n=ee[e];n.url&&(t=n.url),n.subUrl&&n.subUrl.length>0&&(t+="/".concat(n.subUrl))}return t},ne=q.a.mark(re),ae=q.a.mark(ce);function re(){var e,t;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=te("GET_VACATIONS"),n.next=4,Object(K.b)($.getData,e);case 4:return t=n.sent,n.next=7,Object(K.c)({type:"GET_VACATIONS_SUCCESS",payload:t});case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(K.c)(T(n.t0));case 13:case"end":return n.stop()}}),ne,null,[[0,9]])}function ce(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=K.a,e.next=3,Object(K.e)("GET_VACATIONS",re);case 3:return e.t1=e.sent,e.t2=[e.t1],e.next=7,(0,e.t0)(e.t2);case 7:case"end":return e.stop()}}),ae)}var oe=function(e){return{type:"GET_PROFILE_ERROR",payload:e}},se=q.a.mark(ie),ue=q.a.mark(pe);function ie(){var e,t;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=te("GET_PROFILE"),n.next=4,Object(K.b)($.getData,e);case 4:return t=n.sent,n.next=7,Object(K.c)({type:"GET_PROFILE_SUCCESS",payload:t});case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(K.c)(oe(n.t0));case 13:case"end":return n.stop()}}),se,null,[[0,9]])}function pe(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=K.a,e.next=3,Object(K.e)("GET_PROFILE",ie);case 3:return e.t1=e.sent,e.t2=[e.t1],e.next=7,(0,e.t0)(e.t2);case 7:case"end":return e.stop()}}),ue)}var le=function(e){return{type:"GET_AUTH_ERROR",payload:e}},de=n(32),fe=function(e){return e.Auth||R},ve=function(){return Object(de.a)(fe,(function(e){return e}))},me=q.a.mark(he),Ee=q.a.mark(be),Oe=q.a.mark(xe);function he(e){var t,n,a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(K.d)(ve());case 3:return e.sent,t={username:"admin@gmail.com",password:"1234"},n=te("AUTHENTICATE"),e.next=8,Object(K.b)($.post,n,t);case 8:return a=e.sent,e.next=11,Object(K.b)(H,a);case 11:return e.next=13,Object(K.c)({type:"GET_AUTH_SUCCESS",payload:a});case 13:e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(0),e.next=19,Object(K.c)(le(e.t0));case 19:case"end":return e.stop()}}),me,null,[[0,15]])}function be(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.b)(F);case 2:case"end":return e.stop()}}),Ee)}function xe(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=K.a,e.next=3,Object(K.e)("GET_AUTH",he);case 3:return e.t1=e.sent,e.next=6,Object(K.e)("LOG_OUT",be);case 6:return e.t2=e.sent,e.t3=[e.t1,e.t2],e.next=10,(0,e.t0)(e.t3);case 10:case"end":return e.stop()}}),Oe)}var Te=q.a.mark(_e);function _e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.a)([ce(),pe(),xe()]);case 2:case"end":return e.stop()}}),Te)}var we=Object(A.a)(),ye=[we],ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||k.d,Se=Object(k.e)(X,ge(k.a.apply(void 0,ye)));we.run(_e);var je=Se;o.a.render(r.a.createElement(s.a,{store:je},r.a.createElement(j,null)),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.e5ef6161.chunk.js.map