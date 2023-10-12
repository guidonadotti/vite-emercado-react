import{V as K,k as E,r as o,e as T,j as n,f as m,W as Ee,F as Te,X as $e,Y as ke,p as L,n as je,m as be,Z as z,$ as Be,a0 as xe,J,a1 as Ae,a2 as De,a3 as Oe,a4 as Fe}from"./index-c52a1109.js";var p;function _(t){if((!p&&p!==0||t)&&K){var a=document.createElement("div");a.style.position="absolute",a.style.top="-9999px",a.style.width="50px",a.style.height="50px",a.style.overflow="scroll",document.body.appendChild(a),p=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return p}const Ie=E("modal-body"),V=o.forwardRef(({bsPrefix:t,className:a,contentClassName:i,centered:c,size:r,fullscreen:s,children:y,scrollable:w,...R},v)=>{t=T(t,"modal");const u=`${t}-dialog`,l=typeof s=="string"?`${t}-fullscreen-${s}`:`${t}-fullscreen`;return n.jsx("div",{...R,ref:v,className:m(u,a,r&&`${t}-${r}`,c&&`${u}-centered`,w&&`${u}-scrollable`,s&&l),children:n.jsx("div",{className:m(`${t}-content`,i),children:y})})});V.displayName="ModalDialog";const X=V,He=E("modal-footer"),Y=o.forwardRef(({bsPrefix:t,className:a,closeLabel:i="Close",closeButton:c=!1,...r},s)=>(t=T(t,"modal-header"),n.jsx(Ee,{ref:s,...r,className:m(a,t),closeLabel:i,closeButton:c})));Y.displayName="ModalHeader";const We=Y,Ue=Te("h4"),Le=E("modal-title",{Component:Ue});function ze(t){return n.jsx(J,{...t,timeout:null})}function _e(t){return n.jsx(J,{...t,timeout:null})}const Z=o.forwardRef(({bsPrefix:t,className:a,style:i,dialogClassName:c,contentClassName:r,children:s,dialogAs:y=X,"aria-labelledby":w,"aria-describedby":R,"aria-label":v,show:u=!1,animation:l=!0,backdrop:h=!0,keyboard:q=!0,onEscapeKeyDown:$,onShow:G,onHide:M,container:Q,autoFocus:P=!0,enforceFocus:ee=!0,restoreFocus:te=!0,restoreFocusOptions:ae,onEntered:oe,onExit:k,onExiting:ne,onEnter:j,onEntering:b,onExited:B,backdropClassName:x,manager:A,...se},le)=>{const[re,de]=o.useState({}),[ie,D]=o.useState(!1),S=o.useRef(!1),C=o.useRef(!1),f=o.useRef(null),[g,ce]=$e(),ue=ke(le,ce),O=L(M),fe=je();t=T(t,"modal");const ge=o.useMemo(()=>({onHide:O}),[O]);function F(){return A||Ae({isRTL:fe})}function I(e){if(!K)return;const d=F().getScrollbarWidth()>0,U=e.scrollHeight>Oe(e).documentElement.clientHeight;de({paddingRight:d&&!U?_():void 0,paddingLeft:!d&&U?_():void 0})}const N=L(()=>{g&&I(g.dialog)});be(()=>{z(window,"resize",N),f.current==null||f.current()});const me=()=>{S.current=!0},he=e=>{S.current&&g&&e.target===g.dialog&&(C.current=!0),S.current=!1},H=()=>{D(!0),f.current=Fe(g.dialog,()=>{D(!1)})},Me=e=>{e.target===e.currentTarget&&H()},pe=e=>{if(h==="static"){Me(e);return}if(C.current||e.target!==e.currentTarget){C.current=!1;return}M==null||M()},ye=e=>{q?$==null||$(e):(e.preventDefault(),h==="static"&&H())},we=(e,d)=>{e&&I(e),j==null||j(e,d)},Re=e=>{f.current==null||f.current(),k==null||k(e)},ve=(e,d)=>{b==null||b(e,d),De(window,"resize",N)},Se=e=>{e&&(e.style.display=""),B==null||B(e),z(window,"resize",N)},Ce=o.useCallback(e=>n.jsx("div",{...e,className:m(`${t}-backdrop`,x,!l&&"show")}),[l,x,t]),W={...i,...re};W.display="block";const Ne=e=>n.jsx("div",{role:"dialog",...e,style:W,className:m(a,t,ie&&`${t}-static`,!l&&"show"),onClick:h?pe:void 0,onMouseUp:he,"aria-label":v,"aria-labelledby":w,"aria-describedby":R,children:n.jsx(y,{...se,onMouseDown:me,className:c,contentClassName:r,children:s})});return n.jsx(Be.Provider,{value:ge,children:n.jsx(xe,{show:u,ref:ue,backdrop:h,container:Q,keyboard:!0,autoFocus:P,enforceFocus:ee,restoreFocus:te,restoreFocusOptions:ae,onEscapeKeyDown:ye,onShow:G,onHide:M,onEnter:we,onEntering:ve,onEntered:oe,onExit:Re,onExiting:ne,onExited:Se,manager:F(),transition:l?ze:void 0,backdropTransition:l?_e:void 0,renderBackdrop:Ce,renderDialog:Ne})})});Z.displayName="Modal";const Je=Object.assign(Z,{Body:Ie,Header:We,Title:Le,Footer:He,Dialog:X,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});export{Je as M};
