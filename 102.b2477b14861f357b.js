"use strict";(self.webpackChunkStarWarsPortal=self.webpackChunkStarWarsPortal||[]).push([[102],{4102:(O,d,a)=>{a.r(d),a.d(d,{CharactersModule:()=>B});var c=a(6895),f=a(4466),h=a(7577),g=a(5861),m=a(4400),e=a(4650),Z=a(5552),v=a(2340),y=a(529);let A=(()=>{class r{constructor(t){this.http=t,this.speciesUrl=`${v.N.apiUrl}/api/species`}getSpecieById(t){return this.http.get(`${this.speciesUrl}/${t}`)}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(y.eN))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var C=a(5359),_=a(4692);const S=["specieModal"];function T(r,n){if(1&r){const t=e.EpF();e.TgZ(0,"div",1)(1,"h4",2),e._uU(2),e.qZA(),e.TgZ(3,"button",3),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.KtG(s.dismiss("Cross click"))}),e.TgZ(4,"span",4),e._uU(5,"\xd7"),e.qZA()()(),e.TgZ(6,"div",5)(7,"ul",6)(8,"li",7)(9,"strong"),e._uU(10,"Average Height:"),e.qZA(),e._uU(11),e.qZA(),e.TgZ(12,"li",7)(13,"strong"),e._uU(14,"Average Lifespan:"),e.qZA(),e._uU(15),e.qZA(),e.TgZ(16,"li",7)(17,"strong"),e._uU(18,"Classification:"),e.qZA(),e._uU(19),e.qZA(),e.TgZ(20,"li",7)(21,"strong"),e._uU(22,"Designation:"),e.qZA(),e._uU(23),e.qZA(),e.TgZ(24,"li",7)(25,"strong"),e._uU(26,"Eye Colors:"),e.qZA(),e._uU(27),e.qZA(),e.TgZ(28,"li",7)(29,"strong"),e._uU(30,"Hair Colors:"),e.qZA(),e._uU(31),e.qZA(),e.TgZ(32,"li",7)(33,"strong"),e._uU(34,"Language:"),e.qZA(),e._uU(35),e.qZA(),e.TgZ(36,"li",7)(37,"strong"),e._uU(38,"Skin Colors:"),e.qZA(),e._uU(39),e.qZA()()(),e.TgZ(40,"div",8)(41,"button",9),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.KtG(s.close("Save click"))}),e._uU(42,"close"),e.qZA()()}if(2&r){const t=e.oxw();e.xp6(2),e.Oqu(t.specie.name),e.xp6(9),e.hij(" ",t.specie.average_height," "),e.xp6(4),e.hij(" ",t.specie.average_lifespan," "),e.xp6(4),e.hij(" ",t.specie.classification," "),e.xp6(4),e.hij(" ",t.specie.designation," "),e.xp6(4),e.hij(" ",t.specie.eye_colors," "),e.xp6(4),e.hij(" ",t.specie.hair_colors," "),e.xp6(4),e.hij(" ",t.specie.language," "),e.xp6(4),e.hij(" ",t.specie.skin_colors," ")}}let U=(()=>{class r{constructor(t){this.modalService=t}open(t){this.specie=t,this.modalService.open(this.specieModal,{size:"lg"})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(_.FF))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-specie-modal"]],viewQuery:function(t,i){if(1&t&&e.Gf(S,7),2&t){let o;e.iGM(o=e.CRH())&&(i.specieModal=o.first)}},decls:2,vars:0,consts:[["specieModal",""],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body","d-flex"],[1,"list-group","list-group-flush","fill-width"],[1,"list-group-item"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark",3,"click"]],template:function(t,i){1&t&&e.YNc(0,T,43,9,"ng-template",null,0,e.W1O)}}),r})();const x=["specieModal"];function M(r,n){if(1&r){const t=e.EpF();e.TgZ(0,"em",11),e.NdJ("click",function(){const s=e.CHM(t).$implicit,p=e.oxw(2);return e.KtG(p.openSpecieModal(s))}),e._uU(1),e.qZA()}if(2&r){const t=n.$implicit;e.xp6(1),e.hij(" ",t.name," ")}}function b(r,n){if(1&r&&(e.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"h2"),e._uU(4),e.qZA()()(),e.TgZ(5,"div",6)(6,"div",7)(7,"ul",8)(8,"li",9),e._uU(9),e.qZA(),e.TgZ(10,"li",9),e._uU(11),e.qZA(),e.TgZ(12,"li",9),e._uU(13),e.qZA(),e.TgZ(14,"li",9),e._uU(15),e.qZA(),e.TgZ(16,"li",9),e._uU(17),e.qZA(),e.TgZ(18,"li",9),e._uU(19),e.qZA(),e.TgZ(20,"li",9),e._uU(21," Species: \xa0 "),e.YNc(22,M,2,1,"em",10),e._uU(23,"\xa0 "),e.qZA()()()()()),2&r){const t=n.ngIf;e.xp6(4),e.Oqu(t.name),e.xp6(5),e.hij("Eye Color: ",t.eye_color,""),e.xp6(2),e.hij("Mass: ",t.mass,""),e.xp6(2),e.hij("Hair Color: ",t.hair_color,""),e.xp6(2),e.hij("Skin Color: ",t.skin_color,""),e.xp6(2),e.hij("Birth Year: ",t.birth_year,""),e.xp6(2),e.hij("Gender: ",t.gender,""),e.xp6(3),e.Q6J("ngForOf",t.species)}}let k=(()=>{class r{constructor(t,i,o,s){this.activatedRoute=t,this.characterService=i,this.specieService=o,this.store=s,this.character$=this.store.select(p=>p.character)}getCharacterWithSpecies(t){var i=this;return(0,g.Z)(function*(){const o=yield i.characterService.getCharacterById(t).toPromise(),s=yield i.getSpeciesFromUrls(o.species);return{...o,species:s}})()}ngOnInit(){const t=this.activatedRoute.snapshot.paramMap.get("id");this.store.dispatch({type:m.Um.type,payload:t})}openSpecieModal(t){this.specieModal.open(t)}getSpeciesFromUrls(t=[]){var i=this;return(0,g.Z)(function*(){const s=t.map(i.getSpecieIdFromUrl).map(p=>i.specieService.getSpecieById(p).toPromise());return Promise.all(s)})()}getSpecieIdFromUrl(t){return t.split("/")[5]}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(h.gz),e.Y36(Z.A),e.Y36(A),e.Y36(C.yh))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-character-details"]],viewQuery:function(t,i){if(1&t&&e.Gf(x,5),2&t){let o;e.iGM(o=e.CRH())&&(i.specieModal=o.first)}},decls:5,vars:3,consts:[[1,"character-details"],["class","container",4,"ngIf"],["specieModal",""],[1,"container"],[1,"row"],[1,"col-12","padding-top","center-align"],[1,"row","padding-top"],[1,"col-12"],[1,"list-group"],[1,"list-group-item"],["class","specie-link",3,"click",4,"ngFor","ngForOf"],[1,"specie-link",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,b,24,8,"div",1),e.ALo(2,"async"),e.qZA(),e._UZ(3,"app-specie-modal",null,2)),2&t&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,i.character$)))},dependencies:[c.sg,c.O5,U,c.Ov],styles:[".specie-link[_ngcontent-%COMP%]{cursor:pointer;border:1px solid rgba(0,0,0,.125);margin-right:5px}.specie-link[_ngcontent-%COMP%]:hover{font-weight:900}"]}),r})();var l=a(7340),u=a(4719);const q=function(r){return["/characters",r]};function L(r,n){if(1&r&&(e.TgZ(0,"li",18),e._uU(1),e.TgZ(2,"button",19),e._uU(3," Details "),e.qZA()()),2&r){const t=n.$implicit,i=e.oxw(2);e.Q6J("@items",void 0),e.xp6(1),e.hij(" ",t.name," "),e.xp6(1),e.Q6J("routerLink",e.VKq(3,q,i.getCharacterId(t.url)))}}function I(r,n){if(1&r&&(e.ynx(0),e.YNc(1,L,4,5,"li",17),e.BQk()),2&r){const t=n.ngIf;e.xp6(1),e.Q6J("ngForOf",t)}}function F(r,n){1&r&&(e.TgZ(0,"li",18),e._uU(1,"Character not found!"),e.qZA())}const j=[{path:"",component:(()=>{class r{constructor(t){this.store=t,this.characters$=this.store.select(i=>i.characters.characters),this.count$=this.store.select(i=>i.characters.charactersCount),this.currentPage$=this.store.select(i=>i.characters.charactersCurrentPage),this.isSortedByAlphabet=!0,this.searchInput=""}toggleSortCharacters(){this.isSortedByAlphabet=!this.isSortedByAlphabet}getCharacterId(t){return t.split("/")[5]}ngOnInit(){this.store.dispatch({type:"[Characters] Load Characters",payload:{page:1,search:""}})}sortCharactersByAlphabet(t){return t.sort((i,o)=>i.name<o.name?-1:1)}sortCharactersReverseAlphabetical(t){return t.sort((i,o)=>i.name<o.name?1:-1)}setPage(t=1){this.store.dispatch({type:m.l.type,payload:{page:t,search:this.searchInput}})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(C.yh))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-characters-list"]],decls:27,vars:17,consts:[[1,"container"],[1,"row","padding-top"],[1,"col-12"],["for","searchCharacter"],[1,"input-group"],["type","text","id","searchCharacter",1,"form-control",3,"ngModel","ngModelChange","keyup.enter"],[1,"input-group-append"],[1,"btn","btn-outline-secondary",3,"click"],[1,"row"],[1,"btn","btn-outline-secondary","right-float","margin-top",3,"click"],["src","assets/icons/sort-by-alphabet.png","alt","",3,"hidden"],["src","assets/icons/sort-reverse-alphabetical-order.png","alt","",3,"hidden"],[1,"list-group"],[4,"ngIf","ngIfElse"],["emptyList",""],[1,"col-12","d-flex","justify-content-center"],[3,"boundaryLinks","collectionSize","maxSize","rotate","ellipses","page","pageChange"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"],[1,"btn","btn-outline-secondary","right-float",3,"routerLink"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"label",3),e._uU(4,"Search by name:"),e.qZA(),e.TgZ(5,"div",4)(6,"input",5),e.NdJ("ngModelChange",function(s){return i.searchInput=s})("keyup.enter",function(){return i.setPage()}),e.qZA(),e.TgZ(7,"div",6)(8,"button",7),e.NdJ("click",function(){return i.setPage()}),e._uU(9,"Search"),e.qZA()()()()(),e.TgZ(10,"div",8)(11,"div",2)(12,"button",9),e.NdJ("click",function(){return i.toggleSortCharacters()}),e._UZ(13,"img",10)(14,"img",11),e.qZA()()(),e.TgZ(15,"div",1)(16,"div",2)(17,"ul",12),e.YNc(18,I,2,1,"ng-container",13),e.ALo(19,"async"),e.YNc(20,F,2,0,"ng-template",null,14,e.W1O),e.qZA()()(),e.TgZ(22,"div",1)(23,"div",15)(24,"ngb-pagination",16),e.NdJ("pageChange",function(s){return i.setPage(s)}),e.ALo(25,"async"),e.ALo(26,"async"),e.qZA()()()()),2&t){const o=e.MAs(21);e.xp6(6),e.Q6J("ngModel",i.searchInput),e.xp6(7),e.Q6J("hidden",i.isSortedByAlphabet),e.xp6(1),e.Q6J("hidden",!i.isSortedByAlphabet),e.xp6(4),e.Q6J("ngIf",e.lcZ(19,11,i.characters$))("ngIfElse",o),e.xp6(6),e.Q6J("boundaryLinks",!0)("collectionSize",e.lcZ(25,13,i.count$))("maxSize",5)("rotate",!0)("ellipses",!1)("page",e.lcZ(26,15,i.currentPage$))}},dependencies:[c.sg,c.O5,_.N9,u.Fj,u.JJ,u.On,h.rH,c.Ov],data:{animation:[(0,l.X$)("items",[(0,l.eR)(":enter",[(0,l.oB)({transform:"scale(0.5)",opacity:0}),(0,l.jt)("1s cubic-bezier(.8, -0.6, 0.2, 1.5)",(0,l.oB)({transform:"scale(1)",opacity:1}))])])]}}),r})()},{path:":id",component:k}];let J=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[h.Bz.forChild(j),h.Bz]}),r})(),B=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[c.ez,f.m,J]}),r})()}}]);