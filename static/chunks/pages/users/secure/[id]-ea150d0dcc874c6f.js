(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[833],{6070:function(r,e,a){"use strict";a.d(e,{Z:function(){return R}});var t=a(3366),n=a(7462),o=a(7294),i=a(6010),s=a(4780),l=a(917),u=a(1796),d=a(6622),f=a(2097),c=a(7074),b=a(5959),m=a(1588),v=a(4867);function h(r){return(0,v.Z)("MuiLinearProgress",r)}(0,m.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var p=a(5893);let g=["className","color","value","valueBuffer","variant"],Z=r=>r,y,x,C,w,P,k,$=(0,l.F4)(y||(y=Z`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),j=(0,l.F4)(x||(x=Z`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),_=(0,l.F4)(C||(C=Z`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),N=r=>{let{classes:e,variant:a,color:t}=r,n={root:["root",`color${(0,d.Z)(t)}`,a],dashed:["dashed",`dashedColor${(0,d.Z)(t)}`],bar1:["bar",`barColor${(0,d.Z)(t)}`,("indeterminate"===a||"query"===a)&&"bar1Indeterminate","determinate"===a&&"bar1Determinate","buffer"===a&&"bar1Buffer"],bar2:["bar","buffer"!==a&&`barColor${(0,d.Z)(t)}`,"buffer"===a&&`color${(0,d.Z)(t)}`,("indeterminate"===a||"query"===a)&&"bar2Indeterminate","buffer"===a&&"bar2Buffer"]};return(0,s.Z)(n,h,e)},S=(r,e)=>"inherit"===e?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:"light"===r.palette.mode?(0,u.$n)(r.palette[e].main,.62):(0,u._j)(r.palette[e].main,.5),I=(0,c.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver(r,e){let{ownerState:a}=r;return[e.root,e[`color${(0,d.Z)(a.color)}`],e[a.variant]]}})(({ownerState:r,theme:e})=>(0,n.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:S(e,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"})),B=(0,c.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver(r,e){let{ownerState:a}=r;return[e.dashed,e[`dashedColor${(0,d.Z)(a.color)}`]]}})(({ownerState:r,theme:e})=>{let a=S(e,r.color);return(0,n.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},(0,l.iv)(w||(w=Z`
    animation: ${0} 3s infinite linear;
  `),_)),L=(0,c.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver(r,e){let{ownerState:a}=r;return[e.bar,e[`barColor${(0,d.Z)(a.color)}`],("indeterminate"===a.variant||"query"===a.variant)&&e.bar1Indeterminate,"determinate"===a.variant&&e.bar1Determinate,"buffer"===a.variant&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>(0,n.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"determinate"===r.variant&&{transition:"transform .4s linear"},"buffer"===r.variant&&{zIndex:1,transition:"transform .4s linear"}),({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(P||(P=Z`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),$)),q=(0,c.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver(r,e){let{ownerState:a}=r;return[e.bar,e[`barColor${(0,d.Z)(a.color)}`],("indeterminate"===a.variant||"query"===a.variant)&&e.bar2Indeterminate,"buffer"===a.variant&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>(0,n.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:S(e,r.color),transition:"transform .4s linear"}),({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(k||(k=Z`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),j)),M=o.forwardRef(function(r,e){let a=(0,b.Z)({props:r,name:"MuiLinearProgress"}),{className:o,color:s="primary",value:l,valueBuffer:u,variant:d="indeterminate"}=a,c=(0,t.Z)(a,g),m=(0,n.Z)({},a,{color:s,variant:d}),v=N(m),h=(0,f.Z)(),Z={},y={bar1:{},bar2:{}};if(("determinate"===d||"buffer"===d)&&void 0!==l){Z["aria-valuenow"]=Math.round(l),Z["aria-valuemin"]=0,Z["aria-valuemax"]=100;let x=l-100;"rtl"===h.direction&&(x=-x),y.bar1.transform=`translateX(${x}%)`}if("buffer"===d&&void 0!==u){let C=(u||0)-100;"rtl"===h.direction&&(C=-C),y.bar2.transform=`translateX(${C}%)`}return(0,p.jsxs)(I,(0,n.Z)({className:(0,i.Z)(v.root,o),ownerState:m,role:"progressbar"},Z,{ref:e},c,{children:["buffer"===d?(0,p.jsx)(B,{className:v.dashed,ownerState:m}):null,(0,p.jsx)(L,{className:v.bar1,ownerState:m,style:y.bar1}),"determinate"===d?null:(0,p.jsx)(q,{className:v.bar2,ownerState:m,style:y.bar2})]}))});var R=M},1207:function(r,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/secure/[id]",function(){return a(4255)}])},4255:function(r,e,a){"use strict";a.r(e),a.d(e,{__N_SSP:function(){return b},default:function(){return m}});var t=a(5893),n=a(7160),o=a.n(n),i=a(7902),s=a(7294),l=a(1163),u=a(1953),d=a(6070);let f=(0,s.lazy)(()=>Promise.resolve().then(a.bind(a,8774))),c=(0,s.lazy)(()=>a.e(423).then(a.bind(a,2423)));var b=!0;function m(r){let{user:e}=r,{query:a}=(0,l.useRouter)(),[n,b]=(0,s.useState)("idle");return(0,s.useEffect)(()=>{b("admin"===localStorage.getItem("ROLE")?"admin":"non-admin")},[]),(0,t.jsxs)(i.Zn,{children:[(0,t.jsxs)("h2",{children:["Query injection. User role: ",n?"admin":"non-admin"]}),(0,t.jsx)(s.Suspense,{fallback:(0,t.jsx)(u.Z,{sx:{width:"100%"},children:(0,t.jsx)(d.Z,{})}),children:"non-admin"===n?(0,t.jsx)(c,{to:"/users"}):(0,t.jsx)("div",{className:o().grid,children:e?(0,t.jsx)(f,{value:e}):(0,t.jsxs)("div",{className:o().card,children:["User ID#",a.id," was not found."]})})})]})}}},function(r){r.O(0,[129,902,774,888,179],function(){return r(r.s=1207)}),_N_E=r.O()}]);