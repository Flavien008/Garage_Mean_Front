"use strict";(self.webpackChunkdatta_able_free_angular_admin_template=self.webpackChunkdatta_able_free_angular_admin_template||[]).push([[72],{4072:(A,u,l)=>{l.r(u),l.d(u,{default:()=>_});var p=l(6895),d=l(2876),e=l(1894),g=l(529),h=l(2340),o=l(1571),f=l(8492),m=l(4006),C=l(4631);function v(t,r){if(1&t){const n=o.EpF();o.TgZ(0,"ngx-dropzone-image-preview",17),o.NdJ("removed",function(){const s=o.CHM(n).$implicit,Z=o.oxw();return o.KtG(Z.onRemove(s))}),o.TgZ(1,"ngx-dropzone-label"),o._uU(2),o.qZA()()}if(2&t){const n=r.$implicit;o.Q6J("file",n)("removable",!0),o.xp6(2),o.AsE("",n.name," (",n.type,")")}}function T(t,r){1&t&&(o.TgZ(0,"div",18),o._uU(1," Veuillez remplir chaque formulaire ! "),o.qZA())}function x(t,r){1&t&&(o.TgZ(0,"button",19),o._uU(1,"Valider"),o.qZA())}function i(t,r){1&t&&(o.TgZ(0,"div",20)(1,"button",21),o._UZ(2,"span",22),o._uU(3," Chargement... "),o.qZA()())}let _=(()=>{class t{constructor(n,a){this.http=n,this.router=a,this.files=[],this.loading=!1,this.error=!1,this.base64textString="",this.formData={id_utilisateur:"",type:"",modele:"",matriculation:"",img:""}}ngOnInit(){console.log("Initialisation du composant")}onSelect(n){console.log(n),this.files.push(...n.addedFiles)}onFileChange(n){const a=n.addedFiles;if(console.log("miov a eto"),a.length>0){const c=a[0],s=new FileReader;s.onload=this._handleReaderLoaded.bind(this),s.readAsDataURL(c)}}_handleReaderLoaded(n){this.base64textString=n.target.result,this.formData.img=this.base64textString,console.log(this.base64textString)}onRemove(n){console.log(n),this.files.splice(this.files.indexOf(n),1)}onSubmit(){var n,a;this.loading=!0,null!=localStorage.getItem("user")&&(n=JSON.parse(localStorage.getItem("user")).token,a=JSON.parse(localStorage.getItem("user")).userId,this.formData.id_utilisateur=a),console.log(this.formData);let c=new g.WM({Authorization:"Bearer "+n});""!=this.formData.img&&""!=this.formData.type&&""!=this.formData.modele&&""!=this.formData.matriculation?(this.error=!1,this.http.post(`${h.N.baseUrl}/voitures`,this.formData,{headers:c}).subscribe(s=>{console.log(s),this.loading=!1,this.router.navigate(["/voiture/list"])})):(this.error=!0,this.loading=!1)}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(g.eN),o.Y36(f.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-ajout"]],standalone:!0,features:[o.jDz],decls:32,vars:9,consts:[[1,"row"],[1,"col-sm-12"],["cardTitle","Ajout voiture",3,"options"],[3,"ngSubmit"],["form","ngForm"],[1,"col-md-6"],[1,"form-group"],["for","exampleInputEmail1"],["type","text","name","type",1,"form-control",3,"ngModel","ngModelChange"],["for","exampleInputPassword1"],["type","text","name","modele",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","matriculation",1,"form-control",3,"ngModel","ngModelChange"],["ngx-dropzone","",1,"custom-dropzone",3,"accept","change"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"file","removable","removed",4,"ngFor","ngForOf"],["class","alert alert-danger alert-dismissible fade show","role","alert",4,"ngIf"],["type","submit","class","btn btn-primary",4,"ngIf"],["class","text-center",4,"ngIf"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"file","removable","removed"],["role","alert",1,"alert","alert-danger","alert-dismissible","fade","show"],["type","submit",1,"btn","btn-primary"],[1,"text-center"],["type","button","disabled","",1,"btn","btn-primary"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(n,a){1&n&&(o.TgZ(0,"div",0)(1,"div",1)(2,"app-card",2),o._UZ(3,"hr"),o.TgZ(4,"form",3,4),o.NdJ("ngSubmit",function(){return a.onSubmit()}),o.TgZ(6,"div",0)(7,"div",5)(8,"div",6)(9,"label",7),o._uU(10,"Type de la voiture"),o.qZA(),o.TgZ(11,"input",8),o.NdJ("ngModelChange",function(s){return a.formData.type=s}),o.qZA()(),o.TgZ(12,"div",6)(13,"label",9),o._uU(14,"Mod\xe8le"),o.qZA(),o.TgZ(15,"input",10),o.NdJ("ngModelChange",function(s){return a.formData.modele=s}),o.qZA()(),o.TgZ(16,"div",6)(17,"label",9),o._uU(18,"Immatriculation"),o.qZA(),o.TgZ(19,"input",11),o.NdJ("ngModelChange",function(s){return a.formData.matriculation=s}),o.qZA()(),o._UZ(20,"br"),o.qZA(),o.TgZ(21,"div",5)(22,"div",12),o.NdJ("change",function(s){return a.onSelect(s)})("change",function(s){return a.onFileChange(s)}),o.TgZ(23,"ngx-dropzone-label")(24,"div")(25,"h2"),o._uU(26,"Image de la voiture"),o.qZA()()(),o.YNc(27,v,3,4,"ngx-dropzone-image-preview",13),o.qZA()(),o.YNc(28,T,2,0,"div",14),o.YNc(29,x,2,0,"button",15),o.YNc(30,i,4,0,"div",16),o.qZA()(),o._UZ(31,"hr"),o.qZA()()()),2&n&&(o.xp6(2),o.Q6J("options",!1),o.xp6(9),o.Q6J("ngModel",a.formData.type),o.xp6(4),o.Q6J("ngModel",a.formData.modele),o.xp6(4),o.Q6J("ngModel",a.formData.matriculation),o.xp6(3),o.Q6J("accept","image/*"),o.xp6(5),o.Q6J("ngForOf",a.files),o.xp6(1),o.Q6J("ngIf",a.error),o.xp6(1),o.Q6J("ngIf",!a.loading),o.xp6(1),o.Q6J("ngIf",a.loading))},dependencies:[p.ez,p.sg,p.O5,d.m,m._Y,m.Fj,m.JJ,m.JL,m.On,m.F,C.A,e.bB,e._f,e.NP,e.sv],styles:["ngx-dropzone[_ngcontent-%COMP%], .custom-dropzone[_ngcontent-%COMP%]{margin:20px}.custom-dropzone[_ngcontent-%COMP%]{height:170px;background:rgb(209,207,223);color:#fff;border:5px dashed rgb(127,120,145);border-radius:5px;font-size:10px}.custom-dropzone.ngx-dz-hovered[_ngcontent-%COMP%]{border:5px solid rgb(211,195,195)}"]}),t})()},4631:(A,u,l)=>{l.d(u,{A:()=>x});var p=l(9061),d=l(7340),e=l(1571),g=l(6895);function h(i,_){if(1&i&&(e.TgZ(0,"h5"),e._uU(1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Oqu(t.cardTitle)}}function o(i,_){if(1&i){const t=e.EpF();e.TgZ(0,"div",8)(1,"div",9)(2,"button",10),e._UZ(3,"i",11),e.qZA(),e.TgZ(4,"ul",12)(5,"li",13),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2),a=e.MAs(1);return e.KtG(n.fullCardToggle(a,"",!0))}),e.TgZ(6,"a",14)(7,"span"),e._UZ(8,"i",15),e._uU(9),e.qZA()()(),e.TgZ(10,"li",16),e.NdJ("click",function(n){e.CHM(t);const a=e.oxw(2);return e.KtG(a.collapsedCardToggle(n))}),e.TgZ(11,"a",14)(12,"span"),e._UZ(13,"i",15),e._uU(14),e.qZA(),e.TgZ(15,"span",17),e._UZ(16,"i",18),e.qZA()()(),e.TgZ(17,"li",19),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.cardRefresh())}),e.TgZ(18,"a",14),e._UZ(19,"i",20),e._uU(20," Reload"),e.qZA()(),e.TgZ(21,"li",21),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.cardRemoveAction())}),e.TgZ(22,"a",14),e._UZ(23,"i",22),e._uU(24," Remove"),e.qZA()()()()()}if(2&i){const t=e.oxw(2);e.xp6(8),e.Q6J("ngClass",t.fullIcon),e.xp6(1),e.hij(" ","full-card"===t.cardClass?"Restore":"Maximize",""),e.xp6(4),e.Q6J("ngClass",t.collapsedIcon),e.xp6(1),e.hij(" ","collapsed"===t.collapsedCard?"Expand":"Collapse"," ")}}function f(i,_){1&i&&e.Hsn(0,1,["*ngIf","customHeader"])}function m(i,_){if(1&i&&(e.TgZ(0,"div",5),e.YNc(1,h,2,1,"h5",6),e.YNc(2,o,25,4,"div",7),e.YNc(3,f,1,0,"ng-content",6),e.qZA()),2&i){const t=e.oxw();e.Q6J("ngClass",t.headerClass),e.xp6(1),e.Q6J("ngIf",!t.customHeader),e.xp6(1),e.Q6J("ngIf",t.options&&!t.customHeader),e.xp6(1),e.Q6J("ngIf",t.customHeader)}}function C(i,_){1&i&&(e.TgZ(0,"div",23),e._UZ(1,"i",24),e.qZA())}const v=["*",[["",8,"app-card-header"]]],T=["*",".app-card-header"];let x=(()=>{class i{constructor(t){t.placement="bottom-right",this.customHeader=!1,this.options=!0,this.hidHeader=!1,this.cardTitle="Card Title",this.fullIcon="icon-maximize",this.isAnimating=!1,this.collapsedCard="expanded",this.collapsedIcon="icon-minus",this.loadCard=!1,this.cardRemove="open"}ngOnInit(){(!this.options||this.hidHeader||this.customHeader)&&(this.collapsedCard="false")}fullCardToggle(t,r,n){r="full-card"===this.cardClass?"zoomOut":"zoomIn",this.fullIcon="full-card"===this.cardClass?"icon-maximize":"icon-minimize",this.cardClass="full-card"===this.cardClass?this.cardClass:"full-card",n&&(this.animation=r),this.isAnimating=!0,setTimeout(()=>{this.cardClass="zoomOut"===r?"":this.cardClass,"full-card"===this.cardClass?document.querySelector("body").style.overflow="hidden":document.querySelector("body").removeAttribute("style")},500)}collapsedCardToggle(t){this.collapsedCard="collapsed"===this.collapsedCard?"expanded":"collapsed",this.collapsedIcon="collapsed"===this.collapsedCard?"icon-plus":"icon-minus"}cardRefresh(){this.loadCard=!0,this.cardClass="card-load",setTimeout(()=>{this.loadCard=!1,this.cardClass="expanded"},3e3)}cardRemoveAction(){this.cardRemove="closed"===this.cardRemove?"open":"closed"}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(p.jL))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-card"]],inputs:{cardTitle:"cardTitle",cardClass:"cardClass",blockClass:"blockClass",headerClass:"headerClass",options:"options",hidHeader:"hidHeader",customHeader:"customHeader"},features:[e._Bn([p.jL])],ngContentSelectors:T,decls:7,vars:6,consts:[[1,"card",3,"ngClass"],["toAnimate",""],["class","card-header",3,"ngClass",4,"ngIf"],[1,"card-block",3,"ngClass"],["class","card-loader",4,"ngIf"],[1,"card-header",3,"ngClass"],[4,"ngIf"],["class","card-header-right",4,"ngIf"],[1,"card-header-right"],["ngbDropdown","",1,"btn-group","card-option","dropdown"],["type","button","ngbDropdownToggle","",1,"btn","dropdown-toggle","btn-icon"],[1,"feather","icon-more-horizontal"],["ngbDropdownMenu","",1,"list-unstyled","card-option","dropdown-menu","dropdown-menu-right"],[1,"dropdown-item","full-card",3,"click"],["href","javascript:"],[1,"feather",3,"ngClass"],[1,"dropdown-item","minimize-card",3,"click"],[2,"display","none"],[1,"feather","icon-plus"],[1,"dropdown-item","reload-card",3,"click"],[1,"feather","icon-refresh-cw"],[1,"dropdown-item","close-card",3,"click"],[1,"feather","icon-trash"],[1,"card-loader"],[1,"pct-loader1","anim-rotate"]],template:function(t,r){1&t&&(e.F$t(v),e.TgZ(0,"div",0,1),e.YNc(2,m,4,4,"div",2),e.TgZ(3,"div")(4,"div",3),e.Hsn(5),e.qZA()(),e.YNc(6,C,2,0,"div",4),e.qZA()),2&t&&(e.Q6J("ngClass",r.cardClass)("@cardRemove",r.cardRemove),e.xp6(2),e.Q6J("ngIf",!r.hidHeader),e.xp6(1),e.Q6J("@collapsedCard",r.collapsedCard),e.xp6(1),e.Q6J("ngClass",r.blockClass),e.xp6(2),e.Q6J("ngIf",r.loadCard))},dependencies:[g.mk,g.O5,p.jt,p.iD,p.Vi],styles:[".card.full-card[_ngcontent-%COMP%]{position:fixed!important;top:0!important;left:0!important;z-index:99999;border-radius:0;width:100vw!important;height:100vh!important}"],data:{animation:[(0,d.X$)("collapsedCard",[(0,d.SB)("collapsed, void",(0,d.oB)({overflow:"hidden",height:"0px"})),(0,d.SB)("expanded",(0,d.oB)({overflow:"hidden",height:d.l3})),(0,d.eR)("collapsed <=> expanded",[(0,d.jt)("400ms ease-in-out")])]),(0,d.X$)("cardRemove",[(0,d.SB)("open",(0,d.oB)({opacity:1})),(0,d.SB)("closed",(0,d.oB)({opacity:0,display:"none"})),(0,d.eR)("open <=> closed",(0,d.jt)("400ms"))])]}}),i})()}}]);