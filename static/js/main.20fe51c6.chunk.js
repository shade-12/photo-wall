(this["webpackJsonpphoto-wall"]=this["webpackJsonpphoto-wall"]||[]).push([[0],{104:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),c=a.n(o),l=a(168),i=a(91),s=a(171),m=Object(i.a)({palette:{primary:{light:"#ffcad4",main:"#ffe5d9",dark:"#f4acb7",contrastText:"#355070"},secondary:{light:"#d8e2dc",main:"#9d8189"}},typography:{fontFamily:"Raleway"}}),u=Object(s.a)(m),p=(a(104),a(37)),f=a(90),h=a.n(f),g=a(173),d=a(160),b=a(172),E=a(170),v=a(162),y=a(163),w=a(87),j=a.n(w),k=a(86),O=a.n(k),C=a(84),N=a.n(C),S=a(85),x=a.n(S),P=a(83),I=a.n(P),R=Object(d.a)((function(e){return{root:{backgroundColor:e.palette.primary.dark,color:e.palette.primary.contrastText,padding:"1rem"},avatar:{height:"15vw",width:"15vw",margin:"1rem"},chipContainer:{"& > *":{margin:e.spacing(.5)}},gridItem:{width:"fit-content"}}}));var A=function(){var e=R();return r.a.createElement(v.a,{container:!0,direction:"row",alignContent:"center",className:e.root},r.a.createElement(v.a,{item:!0,className:e.gridItem},r.a.createElement(b.a,{alt:"github-avatar",src:I.a,className:e.avatar})),r.a.createElement(v.a,{item:!0,container:!0,direction:"column",className:e.gridItem,style:{margin:"1rem"}},r.a.createElement(y.a,{variant:"h4",gutterBottom:!0},r.a.createElement("b",null,"Shade Wong")),r.a.createElement(v.a,{item:!0,container:!0,className:e.chipContainer},r.a.createElement(E.a,{label:"University of British Columbia",color:"primary"}),r.a.createElement(E.a,{label:"BASc Computer Engineering",color:"secondary"}),r.a.createElement(E.a,{label:"AWS Certified Developer - Associate",color:"primary"})),r.a.createElement("br",null),r.a.createElement(y.a,{variant:"h6",gutterBottom:!0},r.a.createElement("b",null,"Connect with me")),r.a.createElement(v.a,{item:!0,container:!0,className:e.chipContainer},r.a.createElement(E.a,{label:"Github",clickable:!0,color:"secondary",icon:r.a.createElement(N.a,{fontSize:"small"}),component:"a",href:"https://github.com/shade-12",target:"_blank"}),r.a.createElement(E.a,{label:"LinkedIn",clickable:!0,color:"primary",icon:r.a.createElement(x.a,{fontSize:"small"}),component:"a",href:"https://www.linkedin.com/in/shade-wong-ab4a91192/",target:"_blank"}),r.a.createElement(E.a,{label:"Email",clickable:!0,color:"secondary",icon:r.a.createElement(O.a,{fontSize:"small"}),component:"a",href:"mailto:shadeying@alumni.ubc.ca",target:"_blank"}),r.a.createElement(E.a,{label:"R\xe9sum\xe9",clickable:!0,color:"primary",icon:r.a.createElement(j.a,{fontSize:"small"}),component:"a",href:"https://drive.google.com/file/d/1v4IVJ_GtVa7t8C5I-ntOXouewwRu63Pa/view?usp=sharing",target:"_blank"}))))},B=a(164),G=a(166),z=a(169),J=Object(d.a)((function(e){return Object(B.a)({root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden"}})}));var M=function(e){var t=J(),a=e.photoArray,o=e.rearrange,c=e.doneRearrange,l=Object(n.useState)([]),i=Object(p.a)(l,2),s=i[0],m=i[1];Object(n.useEffect)((function(){o&&u()}),[o]);var u=function(){var e=5,t=a.map((function(t){var a,n=Math.min((a=5,Math.floor(Math.random()*Math.floor(a))+1),e);return n<e?e-=n:e=5,r.a.createElement(z.a,{key:t.src,cols:n},r.a.createElement("img",{src:t.src,alt:t.title}))}));m(t),c()};return r.a.createElement(g.a,{className:t.root},r.a.createElement(G.a,{cellHeight:300,spacing:8,cols:5},s))},W=a(167),F=a(89),_=a.n(F),T=a(88),U=a.n(T),V=a(56),D=a.n(V),L=function(e){return new Promise((function(t,a){var n=new FormData;n.append("photo",e),D.a.post("".concat("","/photos/upload"),n,{headers:{Accept:"application/json","Accept-Language":"en-US,en;q=0.8","Content-Type":"multipart/form-data"}}).then((function(e){return t(e)})).catch((function(e){return a(JSON.stringify(e))}))}))},q=Object(d.a)((function(e){return Object(B.a)({root:{display:"flex",flexWrap:"wrap",justifyContent:"center",overflow:"hidden","& > *":{margin:e.spacing(.5)}},button:{textTransform:"none"},input:{display:"none"}})}));function H(e){var t=q(),a=e.startRearrange;return r.a.createElement(g.a,{m:3,className:t.root},r.a.createElement("input",{accept:"image/*",className:t.input,type:"file",id:"upload-photo",onChange:function(t){var a;t.target.files.length<1&&alert("Please select a photo to upload."),t.target.files.length>1&&alert("Please upload one photo at a time."),t.target.files[0].size>5e6&&alert("Please upload a photo smaller than 5 MB."),a=t.target.files[0].type,["image/jpeg","image/jpg","image/png","image/svg","image/gif"].includes(a)||alert("Only JPG, PNG, GIF and SVG photos are supported at this time."),L(t.target.files[0]).then((function(t){"function"===typeof e.cb&&e.cb(t.data)})).catch((function(e){return console.log("uploadPhoto::error - ".concat(e))}))}}),r.a.createElement("label",{htmlFor:"upload-photo"},r.a.createElement(y.a,{variant:"h6"},r.a.createElement(W.a,{variant:"contained",component:"span",color:"secondary",startIcon:r.a.createElement(U.a,null),className:t.button},r.a.createElement("b",null,"Upload photo")))),r.a.createElement(y.a,{variant:"h6"},r.a.createElement(W.a,{variant:"contained",color:"primary",startIcon:r.a.createElement(_.a,null),className:t.button,onClick:function(){return a()}},r.a.createElement("b",null,"Generate different layout"))))}H.defaultProps={cb:function(){}};var X=H,$=function(){return new Promise((function(e,t){D.a.get("".concat("","/photos")).then((function(t){return e(t)})).catch((function(e){return t(JSON.stringify(e))}))}))},K=h()((function(){return{appContainer:{display:"flex",flexFlow:"column wrap",justifyContent:"center"}}}));var Q=function(){var e=K(),t=Object(n.useState)([]),a=Object(p.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(!1),i=Object(p.a)(l,2),s=i[0],m=i[1];Object(n.useEffect)((function(){return u()}),[]);var u=function(){$().then((function(e){var t=e.data.map((function(e){return{src:"https://photo-wall-shade-12.s3-us-west-2.amazonaws.com/"+e,title:e.substring(25)}}));c(t),m(!0)})).catch((function(e){return console.log("getPhotos::error - ".concat(e))}))};return r.a.createElement(g.a,{m:4,className:e.appContainer},r.a.createElement(A,null),r.a.createElement(X,{cb:function(e){var t={src:e,title:e.substring(80)};c((function(e){return[t].concat(e)})),m(!0)},startRearrange:function(){console.log("startRearrange::info - running..."),m(!0)}}),r.a.createElement(M,{photoArray:o,rearrange:s,doneRearrange:function(){console.log("doneRearrange::info - done."),m(!1)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{theme:u},r.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,a){e.exports=a.p+"static/media/github-avatar.27e8789f.svg"},97:function(e,t,a){e.exports=a(144)}},[[97,1,2]]]);
//# sourceMappingURL=main.20fe51c6.chunk.js.map