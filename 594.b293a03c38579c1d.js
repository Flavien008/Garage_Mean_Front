"use strict";(self.webpackChunkdatta_able_free_angular_admin_template=self.webpackChunkdatta_able_free_angular_admin_template||[]).push([[594],{4594:(c,s,n)=>{n.r(s),n.d(s,{default:()=>h});var u=n(6895),l=n(8492),t=n(4006),m=n(529),g=n(2340),e=n(1571);function d(r,i){1&r&&(e.TgZ(0,"div",21),e._uU(1," Veuillez remplir chaque formulaire ! "),e.qZA())}const _=function(){return["/auth/signin"]};let h=(()=>{class r{constructor(o,a){this.http=o,this.router=a,this.loading=!1,this.error=!1}ngOnInit(){this.form=new t.cw({nom:new t.NI(""),login:new t.NI(""),password:new t.NI(""),role:new t.NI("client"),tel:new t.NI(""),email:new t.NI("")})}onSubmit(){var o;this.loading=!0,null!=localStorage.getItem("user")&&(o=JSON.parse(localStorage.getItem("user")).token,JSON.parse(localStorage.getItem("user"))),console.log(this.form.value);let p=new m.WM({Authorization:"Bearer "+o});""!=this.form.value.nom&&""!=this.form.value.login&&""!=this.form.value.password?(this.error=!1,this.http.post(`${g.N.baseUrl}/signup`,this.form.value,{headers:p}).subscribe(f=>{console.log(f),this.loading=!1,this.router.navigate(["/auth/signin"])})):this.error=!0}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(m.eN),e.Y36(l.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-auth-signup"]],standalone:!0,features:[e.jDz],decls:31,vars:4,consts:[[1,"auth-wrapper"],[1,"auth-content"],[1,"auth-bg"],[1,"r"],[1,"r","s"],[1,"card"],[1,"card-body","text-center"],[1,"mb-4"],[1,"feather","icon-user-plus","auth-icon"],[3,"formGroup","ngSubmit"],[1,"input-group","mb-3"],["formControlName","nom","type","text","placeholder","Nom",1,"form-control"],["formControlName","login","type","text","placeholder","Login",1,"form-control"],[1,"input-group","mb-4"],["type","password","name","password","formControlName","password","placeholder","Password",1,"form-control"],["formControlName","tel","type","text","placeholder","Telephone",1,"form-control"],["formControlName","email","type","email","placeholder","Email",1,"form-control"],["class","alert alert-danger alert-dismissible fade show","role","alert",4,"ngIf"],["type","submit",1,"btn","btn-primary","shadow-2","mb-4"],[1,"mb-0","text-muted"],[3,"routerLink"],["role","alert",1,"alert","alert-danger","alert-dismissible","fade","show"]],template:function(o,a){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"span",3)(4,"span",4)(5,"span",4)(6,"span",3),e.qZA(),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7),e._UZ(10,"i",8),e.qZA(),e.TgZ(11,"h3",7),e._uU(12,"Sign up"),e.qZA(),e.TgZ(13,"form",9),e.NdJ("ngSubmit",function(){return a.onSubmit()}),e.TgZ(14,"div",10),e._UZ(15,"input",11),e.qZA(),e.TgZ(16,"div",10),e._UZ(17,"input",12),e.qZA(),e.TgZ(18,"div",13),e._UZ(19,"input",14),e.qZA(),e.TgZ(20,"div",13),e._UZ(21,"input",15),e.qZA(),e.TgZ(22,"div",13),e._UZ(23,"input",16),e.qZA(),e.YNc(24,d,2,0,"div",17),e.TgZ(25,"button",18),e._uU(26,"Sign up"),e.qZA()(),e.TgZ(27,"p",19),e._uU(28," Vous avez deja un compte? "),e.TgZ(29,"a",20),e._uU(30," Log in"),e.qZA()()()()()()),2&o&&(e.xp6(13),e.Q6J("formGroup",a.form),e.xp6(11),e.Q6J("ngIf",a.error),e.xp6(5),e.Q6J("routerLink",e.DdM(3,_)))},dependencies:[u.ez,u.O5,l.Bz,l.rH,t.UX,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u]}),r})()}}]);