import{k as T,A as X,r as t,h as A,e as q,p as V,j as e,f as w,H as B,F as R,J as y,_ as v,L as D,K as p,a as x,c as M,B as $,C as G}from"./index-c52a1109.js";import{F as r}from"./Form-ee3cd23b.js";import{R as I}from"./Row-886e41f2.js";import{M as C}from"./Modal-cf264b0d.js";import{u as H}from"./useWindowTitle-276ea800.js";const S=R("h4");S.displayName="DivStyledAsH4";const U=T("alert-heading",{Component:S}),O=T("alert-link",{Component:X}),P=t.forwardRef((s,a)=>{const{bsPrefix:n,show:i=!0,closeLabel:l="Close alert",closeVariant:c,className:o,children:m,variant:u="primary",onClose:h,dismissible:d,transition:j=y,...b}=A(s,{show:"onClose"}),f=q(n,"alert"),E=V(L=>{h&&h(!1,L)}),g=j===!0?y:j,_=e.jsxs("div",{role:"alert",...g?void 0:b,ref:a,className:w(o,f,u&&`${f}-${u}`,d&&`${f}-dismissible`),children:[d&&e.jsx(B,{onClick:E,"aria-label":l,variant:c}),m]});return g?e.jsx(g,{unmountOnExit:!0,...b,ref:void 0,in:i,children:_}):i?_:null});P.displayName="Alert";const z=Object.assign(P,{Link:O,Heading:U}),W=t.lazy(()=>v(()=>import("./CarritoVacio-cb9a0264.js"),["assets/CarritoVacio-cb9a0264.js","assets/index-c52a1109.js","assets/index-1793a3e6.css","assets/Form-ee3cd23b.js","assets/Row-886e41f2.js","assets/Modal-cf264b0d.js","assets/useWindowTitle-276ea800.js"])),Y=t.lazy(()=>v(()=>import("./Fila-ded85acf.js"),["assets/Fila-ded85acf.js","assets/index-c52a1109.js","assets/index-1793a3e6.css","assets/index.esm-5af871a5.js","assets/Form-ee3cd23b.js"])),J=t.lazy(()=>v(()=>import("./Table-8d637ec6.js"),["assets/Table-8d637ec6.js","assets/index-c52a1109.js","assets/index-1793a3e6.css"]));function K(){const{user:s,users:a}=t.useContext(D),{carrito:n}=a[s];return n.length===0?e.jsx(W,{}):e.jsxs(J,{hover:!0,responsive:!0,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{children:"Nombre"}),e.jsx("th",{children:"Costo"}),e.jsx("th",{children:"Cantidad"}),e.jsx("th",{children:"Subtotal"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:n.map(i=>e.jsx(Y,{...i},`producto_${i.name}_${i.id}`))})]})}const Q=37.74;function Z(){const{cantidadCosto:s,cantidadCostoUSD:a,tipoDeEnvio:n,multiplicarYSumar:i}=t.useContext(p),l=i(s)/Q+i(a),c=l*n/100||0;function o(m){return new Intl.NumberFormat("es-UY",{style:"currency",currency:"USD"}).format(m)}return e.jsxs("section",{className:"border rounded",children:[e.jsxs("article",{className:"d-flex justify-content-between m-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"m-0",children:"Subtotal"}),e.jsx("small",{className:"text-muted",children:"Costo unitario del producto por cantidad"})]}),e.jsx("small",{className:"text-muted align-self-center number",children:o(l)})]}),e.jsx("hr",{}),e.jsxs("article",{className:"d-flex justify-content-between m-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"m-0",children:"Costo de envío"}),e.jsx("small",{className:"text-muted",children:"Según el tipo de envío"})]}),e.jsx("small",{className:"text-muted align-self-center number",children:o(c)})]}),e.jsx("hr",{}),e.jsxs("article",{className:"d-flex justify-content-between m-3",children:[e.jsx("h3",{className:"m-0",children:"Total ($)"}),e.jsx("strong",{className:"align-self-center number",children:o(l+c)})]})]})}function ee(){return e.jsxs("section",{children:[e.jsx(x,{md:6,children:e.jsxs(r.Group,{controlId:`calle_${t.useId()}`,children:[e.jsx(r.Label,{children:"Calle"}),e.jsx(r.Control,{required:!0,type:"text",name:"calle"}),e.jsx(r.Control.Feedback,{type:"invalid",children:"Ingrese una calle."})]})}),e.jsx(x,{md:6,children:e.jsxs(r.Group,{controlId:`numero_${t.useId()}`,children:[e.jsx(r.Label,{children:"Número"}),e.jsx(r.Control,{required:!0,type:"text",name:"numero"}),e.jsx(r.Control.Feedback,{type:"invalid",children:"Ingrese un número."})]})}),e.jsx(x,{md:6,children:e.jsxs(r.Group,{controlId:`esquina_${t.useId()}`,children:[e.jsx(r.Label,{children:"Esquina"}),e.jsx(r.Control,{required:!0,type:"text",name:"esquina"}),e.jsx(r.Control.Feedback,{type:"invalid",children:"Ingrese una esquina."})]})})]})}function N(s){const[a,n]=t.useState(s);return{value:a,onChange:l=>{n(l.target.value)}}}const F=t.createContext();function te(s){const[a,n]=t.useState(s);return{value:a,onChange:l=>{const o=l.target.value.replace(/[^0-9/]/g,"");o.length>2&&o.charAt(2)!=="/"?n(o.substring(0,2)+"/"+o.substring(2)):n(o)}}}function ae(s){const[a,n]=t.useState(s);function i(l){const o=l.target.value.replace(/\s/g,"").replace(/(\d{4})/g,"$1 ").trim();n(o)}return{value:a,onChange:i}}function re({children:s}){const[a,n]=t.useState(""),{setModalValidity:i}=t.useContext(p),l={...ae(""),ref:t.useRef()},c={...N(""),ref:t.useRef()},o={...te(""),ref:t.useRef()},m={numeroTarjetaInput:l,numeroSeguridadInput:c,vencimientoInput:o},u={...N(""),ref:t.useRef()},h={numeroCuentaBancariaInput:u};return t.useEffect(()=>{i(()=>a?[l,c,o,u].every(d=>{var j;return(j=d.ref.current)==null?void 0:j.validity.valid}):!1)},[a,l.value,c.value,o.value,u.value]),e.jsx(F.Provider,{value:{formaDePagoCheck:a,setFormaDePagoCheck:n,hooksTarjeta:m,hooksBanco:h},children:s})}function k(){const{setFormaDePago:s}=t.useContext(p),{formaDePagoCheck:a,setFormaDePagoCheck:n,hooksTarjeta:i,hooksBanco:l}=t.useContext(F),{numeroTarjetaInput:c,numeroSeguridadInput:o,vencimientoInput:m}=i,{numeroCuentaBancariaInput:u}=l,h=`forma_de_pago_${t.useId()}`;return e.jsxs(e.Fragment,{children:[e.jsx(r.Check,{required:!0,type:"radio",name:h,id:`tarjeta_${t.useId()}`,label:"Tarjeta de Crédito",value:"tarjeta",checked:a==="tarjeta",onChange:d=>{n(d.target.value),s("Tarjeta de Crédito")}}),e.jsxs(I,{as:"section",className:"mt-1 p-2",children:[e.jsxs(r.Group,{as:x,md:"6",controlId:`numero_${t.useId()}`,children:[e.jsx(r.Label,{children:"Número de tarjeta"}),e.jsx(r.Control,{className:"number",type:"text",name:"numero_de_tarjeta",placeholder:"XXXX XXXX XXXX XXXX",pattern:"(?:\\d{4} ){3}\\d{4}",title:"Por favor, ingrese un número de tarjeta válido",maxLength:19,required:!0,disabled:a!=="tarjeta",...c})]}),e.jsxs(r.Group,{as:x,md:"6",controlId:`codigo_${t.useId()}`,children:[e.jsx(r.Label,{children:"Código de seguridad"}),e.jsx(r.Control,{className:"number",type:"text",placeholder:"XXX",required:!0,disabled:a!=="tarjeta",pattern:"\\d{3}",maxLength:3,name:"codigo_de_seguridad",...o})]}),e.jsxs(r.Group,{as:x,md:"6",controlId:`vencimiento_${t.useId()}`,children:[e.jsx(r.Label,{children:"Vencimiento "}),e.jsx(r.Control,{className:"number",type:"text",placeholder:"MM/AA",required:!0,disabled:a!=="tarjeta",pattern:"^(0[1-9]|1[0-2])\\/(2[2-9]|[3-9][0-9])$",name:"fecha_de_vencimiento",maxLength:5,...m})]})]}),e.jsx("hr",{}),e.jsx(r.Check,{required:!0,type:"radio",name:h,id:`banco_${t.useId()}`,label:"Transferencia bancaria",value:"banco",checked:a==="banco",onChange:d=>{n(d.target.value),s("Transferencia bancaria")}}),e.jsx(I,{as:"section",className:"mt-1 p-2",children:e.jsxs(r.Group,{as:x,md:"6",controlId:`vencimiento_${t.useId()}`,children:[e.jsx(r.Label,{children:"Número de Cuenta"}),e.jsx(r.Control,{className:"number",name:"numero_de_cuenta",type:"text",placeholder:"",required:!0,disabled:a!=="banco",...u})]})})]})}function ne(){const{formaDePago:s,formValidated:a,modalValidity:n}=t.useContext(p),[i,l]=t.useState(!1),c=()=>l(!1),o=()=>l(!0);return e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:`${a?n?"is-valid":"is-invalid":""} m-0`,children:[s," ",e.jsx(M,{onClick:o,children:"Seleccionar"})]}),e.jsx("div",{className:"invalid-feedback",children:"Debe seleccionar una forma de pago y completarla correctamente."}),e.jsxs(re,{children:[e.jsx("div",{className:"d-none",children:e.jsx(k,{})}),e.jsxs(C,{show:i,onHide:c,contentClassName:a&&"was-validated",children:[e.jsx(C.Header,{closeButton:!0,children:e.jsx(C.Title,{as:"h3",children:"Forma de Pago"})}),e.jsx(C.Body,{children:e.jsx(k,{})}),e.jsx(C.Footer,{children:e.jsx($,{variant:"primary",onClick:c,children:"Cerrar"})})]})]})]})}function se(){const{tipoDeEnvio:s,setTipoDeEnvio:a}=t.useContext(p);return e.jsxs("section",{children:[e.jsx(r.Check,{required:!0,id:`presencial_${t.useId()}`,type:"radio",name:"tipo_de_envio",label:"Retiro presencial (0%)",value:0,checked:s==0,onChange:n=>a(n.target.value)}),e.jsx(r.Check,{required:!0,id:`standard_${t.useId()}`,type:"radio",name:"tipo_de_envio",label:"Standard 12 a 15 días (5%)",value:5,checked:s==5,onChange:n=>a(n.target.value)}),e.jsx(r.Check,{required:!0,id:`express_${t.useId()}`,type:"radio",name:"tipo_de_envio",label:"Express 5 a 8 días (7%)",value:7,checked:s==7,onChange:n=>a(n.target.value)}),e.jsx(r.Check,{required:!0,id:`premium_${t.useId()}`,type:"radio",name:"tipo_de_envio",label:"Premium 2 a 5 días (15%)",value:15,checked:s==15,onChange:n=>a(n.target.value)})]})}function ue(){const{formValidated:s,setFormValidated:a,formID:n}=t.useContext(p),{user:i,users:l,vaciarCarrito:c}=t.useContext(D),{carrito:o}=l[i],[m,u]=t.useState(!1);H({windowTitle:"Mi carrito"});const h=d=>{d.preventDefault(),d.stopPropagation(),d.target.checkValidity()&&o.length!==0?(c({email:i}),a(!1),u(!0)):a(!0)};return e.jsxs(G,{as:"main",children:[e.jsx("h1",{className:"text-center",children:"Carrito de compras"}),e.jsxs(r,{id:n,noValidate:!0,validated:s,onSubmit:h,children:[e.jsx("h2",{children:"Artículos"}),e.jsx(t.Suspense,{children:e.jsx(K,{})}),e.jsx("h2",{children:"Tipo de Envío"}),e.jsx(se,{}),e.jsx("h2",{children:"Dirección"}),e.jsx(ee,{}),e.jsx("h2",{children:"Coste"}),e.jsx(Z,{}),e.jsx("hr",{}),e.jsx("h2",{children:"Forma de pago"}),e.jsx(ne,{}),e.jsx("section",{className:"mt-2 d-grid gap-2",children:e.jsx($,{type:"submit",children:"Comprar"})})]}),m&&e.jsx(z,{variant:"success",dismissible:!0,children:"¡Compra realizada con éxito!"})]})}export{ue as default};