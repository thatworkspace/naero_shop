import{m as u,r as n,w as g,j as s,J as C}from"./index-4-g7C5eA.js";import{C as j,a as f}from"./CCardBody-Bw7oagfH.js";import{C as b}from"./CCardHeader-Bmw0R4Jx.js";import{C as y}from"./CInputGroup-BrZgjIIG.js";import{C as N}from"./CFormInput-tBHjdnx4.js";import{C as v}from"./CRow-OcYn1Zir.js";import{c as S}from"./index.es-v7lyHgBb.js";import"./CFormControlWrapper-B5Byh9EQ.js";import"./CFormControlValidation-WESAoRrS.js";import"./CFormLabel-Dg53z-7Y.js";const w=["أدرار","الشلف","الأغواط","أم البواقي","باتنة","بجاية","بسكرة","بشار","البليدة","البويرة","تمنراست","تبسة","تلمسان","تيارت","تيزي وزو","الجزائر","الجلفة","جيجل","سطيف","سعيدة","سكيكدة","سيدي بلعباس","عنابة","قالمة","قسنطينة","المدية","مستغانم","المسيلة","معسكر","ورقلة","وهران","البيض","إليزي","برج بوعريريج","بومرداس","الطارف","تندوف","تيسمسيلت","الوادي","خنشلة","سوق أهراس","تيبازة","ميلة","عين الدفلة","النعامة","عين تيموشنت","غرداية","غليزان","تيميمون","برج باجي مختار","أولاد جلال","بني عباس","عين صالح","عين قزام","تقرت","جانت","المغير","المنيعة"],k=()=>{const{t,i18n:l}=u(),[r,o]=n.useState([]),[d,c]=n.useState(!1);n.useEffect(()=>{m(),document.title="Admin - Shipping"},[]);const m=async()=>{c(!0);const a=await g(w);o(a),c(!1)},p=(a,e)=>{const i=[...r];i[a].price=e,o(i)},h=async(a,e)=>{await C(a,e)},x=s.jsx(s.Fragment,{children:s.jsx(s.Fragment,{children:s.jsxs(j,{className:"mb-4",children:[s.jsx(b,{children:t("admin_dashboard.wilayas.all_wilaya")}),s.jsxs(f,{className:"px-1 px-sm-4",children:[d&&s.jsx("div",{className:"text-center",children:s.jsx("div",{className:"spinner-border ",role:"status"})}),r.length>0&&r.map((a,e)=>s.jsx("div",{className:"py-1",children:s.jsx("div",{className:"flex-grow-1 bd-highlight px-0",children:s.jsxs(y,{className:" mb-0",children:[s.jsxs("div",{className:"input-group-text",id:"basic-addon1",children:[a.number," - ",a.name]}),s.jsx(N,{type:"number",value:a.price,onChange:i=>p(e,parseFloat(i.target.value))}),s.jsx("div",{className:"input-group-text",id:"basic-addon1",children:t(`common.${l.language}Currency`)}),s.jsx("button",{className:"btn btn-primary",onClick:()=>h(a.id,a.price),children:"Save"})]})})},a.id))]})]})})});return s.jsx(s.Fragment,{children:s.jsx(v,{children:s.jsx(S,{xs:12,className:"px-0 px-sm-2",children:x})})})};export{k as default};
