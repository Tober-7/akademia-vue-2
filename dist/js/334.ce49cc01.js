"use strict";(self["webpackChunkakademia_vue_2"]=self["webpackChunkakademia_vue_2"]||[]).push([[334],{6334:function(e,t,s){s.r(t),s.d(t,{default:function(){return K}});var i=s(3396),a=s(7139),l=s(9242);const n={key:0},u={class:"overlay"},c=(0,i._)("span",{class:"text title"},"Delete?",-1),d={class:"overlay-options"},o={key:1},r={class:"overlay"},p=(0,i._)("span",{class:"text title"},"Change Values",-1),h={class:"overlay-inputs"},m={class:"overlay-options"},v={class:"container-right"},y=(0,i._)("div",{class:"header"},null,-1),_=(0,i._)("div",{class:"container-loading"},[(0,i._)("span",{class:"text title dark center"},"Loading")],-1),k=(0,i._)("div",{class:"header"},null,-1),I={class:"container-loading"},g=(0,i._)("span",{class:"text title dark"},"Error:",-1),x={class:"header"},b=(0,i._)("span",{class:"text blue button"},"Back",-1),w=[b],C={class:"text title"},D={class:"container-items"},f={class:"input-checkbox-div"},V=["checked","onChange"],$={class:"text title"},L=["onClick"],q={class:"list-detail-item"};function Z(e,t,s,b,Z,H){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",{class:(0,a.C_)(["container-overlay",{disabled:!Z.overlay}])},[Z.overlayDelete?((0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("div",u,[c,(0,i._)("div",d,[(0,i._)("span",{class:"text blue button",onClick:t[0]||(t[0]=e=>H.deleteList(!1,!1))},"Cancel"),(0,i._)("a",{class:"text blue button",onClick:[t[1]||(t[1]=e=>H.deleteList(!1,!0)),t[2]||(t[2]=(0,l.iM)(((...e)=>H.openLists&&H.openLists(...e)),["prevent"]))],href:""},"Delete")])])])):Z.overlayValues?((0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",r,[p,(0,i._)("div",h,[(0,i.wy)((0,i._)("input",{class:"input text",type:"number",min:"0",max:"1000","onUpdate:modelValue":t[3]||(t[3]=e=>Z.quantityInput=e),onKeyup:t[4]||(t[4]=(0,l.D2)((e=>H.changeItemValues(!1,!0,null)),["enter"]))},null,544),[[l.nr,Z.quantityInput]]),(0,i.wy)((0,i._)("input",{class:"input text",type:"text",placeholder:"ks, kg, ml...",maxlength:"18",spellcheck:"false","onUpdate:modelValue":t[5]||(t[5]=e=>Z.unitInput=e),onKeyup:t[6]||(t[6]=(0,l.D2)((e=>H.changeItemValues(!1,!0,null)),["enter"]))},null,544),[[l.nr,Z.unitInput]])]),(0,i._)("div",m,[(0,i._)("span",{class:"text blue button",onClick:t[7]||(t[7]=e=>H.changeItemValues(!1,!1,null))},"Cancel"),(0,i._)("a",{class:"text blue button",onClick:t[8]||(t[8]=e=>H.changeItemValues(!1,!0,null))},"Submit")])])])):(0,i.kq)("",!0)],2),(0,i._)("div",v,[Z.list?Z.list.error?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[k,(0,i._)("div",I,[g,(0,i.Uk)(" "+(0,a.zw)(Z.list.error),1)])],64)):((0,i.wg)(),(0,i.iD)(i.HY,{key:2},[(0,i._)("div",x,[(0,i._)("a",{href:"",onClick:t[9]||(t[9]=(0,l.iM)(((...e)=>H.openLists&&H.openLists(...e)),["prevent"]))},w),(0,i._)("span",C,(0,a.zw)(Z.list.title),1),(0,i._)("span",{class:"text red button",onClick:t[10]||(t[10]=e=>H.deleteList(!0,!1))},"Delete")]),(0,i._)("div",D,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(Z.list.items,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"list-detail-item",key:`item-${e.id}`},[(0,i._)("div",null,[(0,i._)("div",f,[(0,i._)("input",{class:"input-checkbox",checked:H.isChecked(e),type:"checkbox",onChange:t=>H.updateCheckbox(e)},null,40,V)]),(0,i._)("span",$,(0,a.zw)(e.name),1)]),(0,i._)("span",{class:"text blue button",onClick:t=>H.changeItemValues(!0,!1,e)},(0,a.zw)(e.value+" "+e.unit),9,L)])))),128)),(0,i._)("div",q,[(0,i.wy)((0,i._)("input",{class:"input text",type:"text",placeholder:"Ingredients...",spellcheck:"false","onUpdate:modelValue":t[11]||(t[11]=e=>Z.addItemInput=e),onKeyup:t[12]||(t[12]=(0,l.D2)(((...e)=>H.addItem&&H.addItem(...e)),["enter"]))},null,544),[[l.nr,Z.addItemInput]])])])],64)):((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[y,_],64))])],64)}var H=s(4161),Y={data(){return{list:null,addItemInput:"",quantityInput:"",unitInput:"",tempItem:null,overlay:!1,overlayDelete:!1,overlayValues:!1}},methods:{async update(){try{const{data:{data:e}}=await H.Z.get("/api/v1/shopping-lists"),t=e.find((({id:e})=>e==this.$route.params.id));this.list=t}catch(e){console.error("Error:",e),this.list={error:e}}},async updateCheckbox({id:e}){try{const t=this.list.items.find((({id:t})=>t==e));await H.Z.put(`/api/v1/shopping-lists/${this.$route.params.id}/items/${e}`,{id:t.id,name:t.name,value:t.value,unit:t.unit,is_checked:!t.is_checked})}catch(t){console.error("Error:",t)}},async addItem(){try{if(""==this.addItemInput)return;const e=this.addItemInput;this.addItemInput="",await H.Z.post(`/api/v1/shopping-lists/${this.$route.params.id}/items`,{id:0!=this.list.items.length?this.list.items[0].id+1:0,name:e,value:"1",unit:"piece",is_checked:!1})}catch(e){console.error("Error:",e)}},async deleteList(e,t){e&&(this.overlayDelete=e,this.overlayValues=!e),this.overlay=e,t&&await H.Z.delete(`/api/v1/shopping-lists/${this.$route.params.id}`)},async changeItemValues(e,t,s){s&&(this.tempItem=s,this.quantityInput=s.value,this.unitInput=s.unit),e&&(this.overlayValues=e,this.overlayDelete=!e),this.overlay=e,t&&this.tempItem&&await H.Z.put(`/api/v1/shopping-lists/${this.$route.params.id}/items/${this.tempItem.id}`,{id:this.tempItem.id,name:this.tempItem.name,value:this.quantityInput,unit:this.unitInput,is_checked:this.tempItem.is_checked})},isChecked({id:e}){return!!this.list.items.find((t=>t.id==e)).is_checked},openLists(){this.$router.replace({name:"Shopping List - List"})}},async mounted(){this.update()},async updated(){this.update()}},z=s(89);const E=(0,z.Z)(Y,[["render",Z]]);var K=E}}]);
//# sourceMappingURL=334.ce49cc01.js.map