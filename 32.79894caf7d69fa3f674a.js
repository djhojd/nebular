(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"4Ssn":function(l,n,t){"use strict";var e=t("CcnG");t("S+eJ"),t.d(n,"d",function(){return u}),t.d(n,"h",function(){return r}),t.d(n,"a",function(){return a}),t.d(n,"e",function(){return o}),t.d(n,"c",function(){return s}),t.d(n,"g",function(){return i}),t.d(n,"b",function(){return c}),t.d(n,"f",function(){return b});var u=e.rb({encapsulation:2,styles:[],data:{}});function r(l){return e.Nb(0,[e.Cb(null,0)],null,null)}var a=e.rb({encapsulation:2,styles:[],data:{}});function o(l){return e.Nb(0,[e.Cb(null,0)],null,null)}var s=e.rb({encapsulation:2,styles:[],data:{}});function i(l){return e.Nb(0,[e.Cb(null,0)],null,null)}var c=e.rb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}"]],data:{}});function b(l){return e.Nb(0,[e.Cb(null,0),e.Cb(null,1),e.Cb(null,2),e.Cb(null,3)],null,null)}},c2hK:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=function(){return function(){}}(),r=t("pMnS"),a=t("7s4d"),o=["body{height:30rem}[_nghost-%COMP%]{display:block;margin:0 auto;max-width:50rem}.nb-spinner-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1 0 4rem;flex:1 0 4rem}"],s=t("aJCS"),i=t("jXul"),c=function(){return function(){this.label="Loading"}}(),b=e.rb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.title-placeholder[_ngcontent-%COMP%]{height:1.8rem;margin-bottom:.5rem;width:80%}.text-placeholder[_ngcontent-%COMP%]{height:4rem;margin-bottom:1rem}.link-placeholder[_ngcontent-%COMP%]{height:1.25rem;width:5rem}.nb-theme-default   [_nghost-%COMP%]   [class$=placeholder][_ngcontent-%COMP%]{background:rgba(235,239,245,.6)}.nb-theme-cosmic   [_nghost-%COMP%]   [class$=placeholder][_ngcontent-%COMP%]{background:rgba(47,41,107,.6)}.nb-theme-corporate   [_nghost-%COMP%]   [class$=placeholder][_ngcontent-%COMP%]{background:rgba(241,245,248,.6)}"]],data:{}});function d(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,0,"div",[["class","title-placeholder"]],null,null,null,null,null)),(l()(),e.tb(1,0,null,null,0,"div",[["class","text-placeholder"]],null,null,null,null,null)),(l()(),e.tb(2,0,null,null,0,"div",[["class","link-placeholder"]],null,null,null,null,null))],null,null)}var h=t("67Y/"),p=t("vubp"),g=function(){function l(l){this.http=l}return l.prototype.load=function(l,n){var t=(l-1)%7*n;return this.http.get("assets/data/news.json").pipe(Object(h.a)(function(l){return l.splice(t,n)}),Object(p.a)(1500))},l}(),m=function(){return function(){}}(),f=e.rb({encapsulation:2,styles:[],data:{}});function D(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,6,"article",[],null,null,null,null,null)),(l()(),e.tb(1,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Lb(2,null,["",""])),(l()(),e.tb(3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(4,null,["",""])),(l()(),e.tb(5,0,null,null,1,"a",[],[[1,"href",4]],null,null,null,null)),(l()(),e.Lb(-1,null,["Read full article"]))],null,function(l,n){var t=n.component;l(n,2,0,t.post.title),l(n,4,0,t.post.text),l(n,5,0,t.post.link)})}var x=t("4Ssn"),w=t("S+eJ"),v=t("66B6"),y=t("eBxF"),S=t("kztb"),N=t("V+dw"),P=t("Ip0R"),O=t("t/Na"),A=t("dEwP"),T=t("t9fZ"),C=t("Qgas");function k(l,n,t){return 0===t?[n]:(l.push(n),l)}t("cwSc");var I=function(){function l(l,n,t,e,u,r,a){this.newsService=l,this.router=n,this.route=t,this.scrollService=e,this.layoutService=u,this.platformId=r,this.window=a,this.news=[],this.topPlaceholders=[],this.bottomPlaceholders=[],this.pageSize=10,this.loadingNext=!1,this.loadingPrevious=!1,Object(P.B)(this.platformId)&&this.window.history.scrollRestoration&&(this.initialScrollRestoration=a.history.scrollRestoration,history.scrollRestoration="manual")}return l.prototype.ngOnInit=function(){var l=this.route.snapshot.queryParams.page;this.startPage=l?Number.parseInt(l,10):100,this.pageToLoadNext=this.startPage},l.prototype.ngOnDestroy=function(){this.initialScrollRestoration&&(this.window.history.scrollRestoration=this.initialScrollRestoration)},l.prototype.updateUrl=function(l){this.router.navigate(["."],{queryParams:{page:l},replaceUrl:!0,relativeTo:this.route,queryParamsHandling:"merge"})},l.prototype.loadPrevious=function(){var l=this;this.loadingPrevious||1===this.startPage||(this.loadingPrevious=!0,this.topPlaceholders=new Array(this.pageSize),this.restoreScrollPosition(),this.startPage--,this.newsService.load(this.startPage,this.pageSize).subscribe(function(n){var t;l.topPlaceholders=[],(t=l.news).unshift.apply(t,n),l.loadingPrevious=!1},function(n){return l.startPage++}))},l.prototype.loadNext=function(){var l=this;this.loadingNext||(this.loadingNext=!0,this.bottomPlaceholders=new Array(this.pageSize),this.newsService.load(this.pageToLoadNext,this.pageSize).subscribe(function(n){var t;l.bottomPlaceholders=[],(t=l.news).push.apply(t,n),l.loadingNext=!1,l.pageToLoadNext++}))},l.prototype.restoreScrollPosition=function(){var l=this;Object(A.a)(this.layoutService.getDimensions(),this.scrollService.getPosition(),this.listItems.changes.pipe(Object(T.a)(1)),this.layoutService.getDimensions(),this.scrollService.getPosition()).pipe(Object(C.a)(k,[])).subscribe(function(n){var t=n[4].y,e=n[3].scrollHeight-n[0].scrollHeight;n[1].y+e!==t&&l.scrollService.scrollTo(null,t+e)})},l}(),R=t("ZYCi"),L=t("MGne"),F=e.rb({encapsulation:0,styles:[o],data:{}});function z(l){return e.Nb(0,[(l()(),e.tb(0,0,[[2,0],[1,0]],null,3,"nb-list-item",[],[[1,"role",0]],null,null,s.d,s.b)),e.sb(1,49152,[[3,4]],0,i.b,[],null,null),(l()(),e.tb(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,d,b)),e.sb(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Db(n,1).role),l(n,2,0,e.Db(n,3).label)})}function B(l){return e.Nb(0,[(l()(),e.tb(0,0,[[2,0],[1,0]],null,3,"nb-list-item",[],[[1,"role",0]],null,null,s.d,s.b)),e.sb(1,49152,[[3,4]],0,i.b,[],null,null),(l()(),e.tb(2,0,null,0,1,"nb-news-post",[],null,null,null,D,f)),e.sb(3,49152,null,0,m,[],{post:[0,"post"]},null)],function(l,n){l(n,3,0,n.context.$implicit)},function(l,n){l(n,0,0,e.Db(n,1).role)})}function M(l){return e.Nb(0,[(l()(),e.tb(0,0,[[2,0],[1,0]],null,3,"nb-list-item",[],[[1,"role",0]],null,null,s.d,s.b)),e.sb(1,49152,[[3,4]],0,i.b,[],null,null),(l()(),e.tb(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,d,b)),e.sb(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Db(n,1).role),l(n,2,0,e.Db(n,3).label)})}function j(l){return e.Nb(0,[e.Jb(671088640,1,{listItems:1}),(l()(),e.tb(1,0,null,null,13,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,x.f,x.b)),e.sb(2,49152,null,0,w.b,[],null,null),(l()(),e.tb(3,0,null,2,11,"nb-list",[["listenWindowScroll",""],["nbInfiniteList",""],["nbListPageTracker",""]],[[1,"role",0]],[[null,"topThreshold"],[null,"bottomThreshold"],[null,"pageChange"],[null,"scroll"]],function(l,n,t){var u=!0,r=l.component;return"scroll"===n&&(u=!1!==e.Db(l,7).onElementScroll()&&u),"topThreshold"===n&&(u=!1!==r.loadPrevious()&&u),"bottomThreshold"===n&&(u=!1!==r.loadNext()&&u),"pageChange"===n&&(u=!1!==r.updateUrl(t)&&u),u},s.c,s.a)),e.sb(4,49152,null,0,i.a,[],null,null),e.sb(5,4341760,null,1,v.a,[],{pageSize:[0,"pageSize"],startPage:[1,"startPage"]},{pageChange:"pageChange"}),e.Jb(603979776,2,{listItems:1}),e.sb(7,4341760,null,1,y.a,[e.k,S.a,N.a],{threshold:[0,"threshold"],listenWindowScroll:[1,"listenWindowScroll"]},{bottomThreshold:"bottomThreshold",topThreshold:"topThreshold"}),e.Jb(603979776,3,{listItems:1}),(l()(),e.kb(16777216,null,0,1,null,z)),e.sb(10,278528,null,0,P.m,[e.R,e.N,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.kb(16777216,null,0,1,null,B)),e.sb(12,278528,null,0,P.m,[e.R,e.N,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.kb(16777216,null,0,1,null,M)),e.sb(14,278528,null,0,P.m,[e.R,e.N,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,5,0,t.pageSize,t.startPage),l(n,7,0,500,""),l(n,10,0,t.topPlaceholders),l(n,12,0,t.news),l(n,14,0,t.bottomPlaceholders)},function(l,n){l(n,1,1,[e.Db(n,2).xxsmall,e.Db(n,2).xsmall,e.Db(n,2).small,e.Db(n,2).medium,e.Db(n,2).large,e.Db(n,2).xlarge,e.Db(n,2).xxlarge,e.Db(n,2).active,e.Db(n,2).disabled,e.Db(n,2).primary,e.Db(n,2).info,e.Db(n,2).success,e.Db(n,2).warning,e.Db(n,2).danger,e.Db(n,2).hasAccent,e.Db(n,2).primaryAccent,e.Db(n,2).infoAccent,e.Db(n,2).successAccent,e.Db(n,2).warningAccent,e.Db(n,2).dangerAccent,e.Db(n,2).activeAccent,e.Db(n,2).disabledAccent]),l(n,3,0,e.Db(n,4).role)})}function J(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,2,"ng-component",[],null,null,null,j,F)),e.Ib(512,null,g,g,[O.c]),e.sb(2,245760,null,0,I,[g,R.l,R.a,S.a,N.a,e.B,L.f],null,null)],function(l,n){l(n,2,0)},null)}var _=e.pb("ng-component",I,J,{},{},[]),E=function(){function l(l){this.newsService=l,this.firstCard={news:[],placeholders:[],loading:!1,pageToLoadNext:1},this.secondCard={news:[],placeholders:[],loading:!1,pageToLoadNext:1},this.pageSize=10}return l.prototype.loadNext=function(l){l.loading||(l.loading=!0,l.placeholders=new Array(this.pageSize),this.newsService.load(l.pageToLoadNext,this.pageSize).subscribe(function(n){var t;l.placeholders=[],(t=l.news).push.apply(t,n),l.loading=!1,l.pageToLoadNext++}))},l}(),W=e.rb({encapsulation:0,styles:[o,["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex}nb-card[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1 1 45%;flex:1 1 45%;margin:0 2.5%}nb-card.own-scroll[_ngcontent-%COMP%]{height:30rem}"]],data:{}});function q(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,s.d,s.b)),e.sb(1,49152,[[1,4]],0,i.b,[],null,null),(l()(),e.tb(2,0,null,0,1,"nb-news-post",[],null,null,null,D,f)),e.sb(3,49152,null,0,m,[],{post:[0,"post"]},null)],function(l,n){l(n,3,0,n.context.$implicit)},function(l,n){l(n,0,0,e.Db(n,1).role)})}function $(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,s.d,s.b)),e.sb(1,49152,[[1,4]],0,i.b,[],null,null),(l()(),e.tb(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,d,b)),e.sb(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Db(n,1).role),l(n,2,0,e.Db(n,3).label)})}function U(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,s.d,s.b)),e.sb(1,49152,[[2,4]],0,i.b,[],null,null),(l()(),e.tb(2,0,null,0,1,"nb-news-post",[],null,null,null,D,f)),e.sb(3,49152,null,0,m,[],{post:[0,"post"]},null)],function(l,n){l(n,3,0,n.context.$implicit)},function(l,n){l(n,0,0,e.Db(n,1).role)})}function H(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,s.d,s.b)),e.sb(1,49152,[[2,4]],0,i.b,[],null,null),(l()(),e.tb(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,d,b)),e.sb(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Db(n,1).role),l(n,2,0,e.Db(n,3).label)})}function Y(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,12,"nb-card",[["class","own-scroll"]],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,x.f,x.b)),e.sb(1,49152,null,0,w.b,[],null,null),(l()(),e.tb(2,0,null,0,2,"nb-card-header",[],null,null,null,x.h,x.d)),e.sb(3,49152,null,0,w.d,[],null,null),(l()(),e.Lb(-1,0,[" Own scroll "])),(l()(),e.tb(5,0,null,2,7,"nb-list",[["nbInfiniteList",""]],[[1,"role",0]],[[null,"bottomThreshold"],[null,"scroll"]],function(l,n,t){var u=!0,r=l.component;return"scroll"===n&&(u=!1!==e.Db(l,7).onElementScroll()&&u),"bottomThreshold"===n&&(u=!1!==r.loadNext(r.firstCard)&&u),u},s.c,s.a)),e.sb(6,49152,null,0,i.a,[],null,null),e.sb(7,4341760,null,1,y.a,[e.k,S.a,N.a],{threshold:[0,"threshold"]},{bottomThreshold:"bottomThreshold"}),e.Jb(603979776,1,{listItems:1}),(l()(),e.kb(16777216,null,0,1,null,q)),e.sb(10,278528,null,0,P.m,[e.R,e.N,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.kb(16777216,null,0,1,null,$)),e.sb(12,278528,null,0,P.m,[e.R,e.N,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.tb(13,0,null,null,12,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,x.f,x.b)),e.sb(14,49152,null,0,w.b,[],null,null),(l()(),e.tb(15,0,null,0,2,"nb-card-header",[],null,null,null,x.h,x.d)),e.sb(16,49152,null,0,w.d,[],null,null),(l()(),e.Lb(-1,0,[" Window scroll "])),(l()(),e.tb(18,0,null,2,7,"nb-list",[["listenWindowScroll",""],["nbInfiniteList",""]],[[1,"role",0]],[[null,"bottomThreshold"],[null,"scroll"]],function(l,n,t){var u=!0,r=l.component;return"scroll"===n&&(u=!1!==e.Db(l,20).onElementScroll()&&u),"bottomThreshold"===n&&(u=!1!==r.loadNext(r.secondCard)&&u),u},s.c,s.a)),e.sb(19,49152,null,0,i.a,[],null,null),e.sb(20,4341760,null,1,y.a,[e.k,S.a,N.a],{threshold:[0,"threshold"],listenWindowScroll:[1,"listenWindowScroll"]},{bottomThreshold:"bottomThreshold"}),e.Jb(603979776,2,{listItems:1}),(l()(),e.kb(16777216,null,0,1,null,U)),e.sb(23,278528,null,0,P.m,[e.R,e.N,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.kb(16777216,null,0,1,null,H)),e.sb(25,278528,null,0,P.m,[e.R,e.N,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,7,0,500),l(n,10,0,t.firstCard.news),l(n,12,0,t.firstCard.placeholders),l(n,20,0,500,""),l(n,23,0,t.secondCard.news),l(n,25,0,t.secondCard.placeholders)},function(l,n){l(n,0,1,[e.Db(n,1).xxsmall,e.Db(n,1).xsmall,e.Db(n,1).small,e.Db(n,1).medium,e.Db(n,1).large,e.Db(n,1).xlarge,e.Db(n,1).xxlarge,e.Db(n,1).active,e.Db(n,1).disabled,e.Db(n,1).primary,e.Db(n,1).info,e.Db(n,1).success,e.Db(n,1).warning,e.Db(n,1).danger,e.Db(n,1).hasAccent,e.Db(n,1).primaryAccent,e.Db(n,1).infoAccent,e.Db(n,1).successAccent,e.Db(n,1).warningAccent,e.Db(n,1).dangerAccent,e.Db(n,1).activeAccent,e.Db(n,1).disabledAccent]),l(n,5,0,e.Db(n,6).role),l(n,13,1,[e.Db(n,14).xxsmall,e.Db(n,14).xsmall,e.Db(n,14).small,e.Db(n,14).medium,e.Db(n,14).large,e.Db(n,14).xlarge,e.Db(n,14).xxlarge,e.Db(n,14).active,e.Db(n,14).disabled,e.Db(n,14).primary,e.Db(n,14).info,e.Db(n,14).success,e.Db(n,14).warning,e.Db(n,14).danger,e.Db(n,14).hasAccent,e.Db(n,14).primaryAccent,e.Db(n,14).infoAccent,e.Db(n,14).successAccent,e.Db(n,14).warningAccent,e.Db(n,14).dangerAccent,e.Db(n,14).activeAccent,e.Db(n,14).disabledAccent]),l(n,18,0,e.Db(n,19).role)})}function G(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,2,"ng-component",[],null,null,null,Y,W)),e.Ib(512,null,g,g,[O.c]),e.sb(2,49152,null,0,E,[g],null,null)],null,null)}var K=e.pb("ng-component",E,G,{},{},[]),Q=function(){function l(l){this.newsService=l,this.news=[],this.placeholders=[],this.pageSize=10,this.pageToLoadNext=1,this.loading=!1}return l.prototype.loadNext=function(){var l=this;this.loading||(this.loading=!0,this.placeholders=new Array(this.pageSize),this.newsService.load(this.pageToLoadNext,this.pageSize).subscribe(function(n){var t;l.placeholders=[],(t=l.news).push.apply(t,n),l.loading=!1,l.pageToLoadNext++}))},l}(),V=e.rb({encapsulation:0,styles:[o],data:{}});function Z(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,s.d,s.b)),e.sb(1,49152,[[1,4]],0,i.b,[],null,null),(l()(),e.tb(2,0,null,0,1,"nb-news-post",[],null,null,null,D,f)),e.sb(3,49152,null,0,m,[],{post:[0,"post"]},null)],function(l,n){l(n,3,0,n.context.$implicit)},function(l,n){l(n,0,0,e.Db(n,1).role)})}function X(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,s.d,s.b)),e.sb(1,49152,[[1,4]],0,i.b,[],null,null),(l()(),e.tb(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,d,b)),e.sb(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Db(n,1).role),l(n,2,0,e.Db(n,3).label)})}function ll(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,9,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,x.f,x.b)),e.sb(1,49152,null,0,w.b,[],null,null),(l()(),e.tb(2,0,null,2,7,"nb-list",[["listenWindowScroll",""],["nbInfiniteList",""]],[[1,"role",0]],[[null,"bottomThreshold"],[null,"scroll"]],function(l,n,t){var u=!0,r=l.component;return"scroll"===n&&(u=!1!==e.Db(l,4).onElementScroll()&&u),"bottomThreshold"===n&&(u=!1!==r.loadNext()&&u),u},s.c,s.a)),e.sb(3,49152,null,0,i.a,[],null,null),e.sb(4,4341760,null,1,y.a,[e.k,S.a,N.a],{threshold:[0,"threshold"],listenWindowScroll:[1,"listenWindowScroll"]},{bottomThreshold:"bottomThreshold"}),e.Jb(603979776,1,{listItems:1}),(l()(),e.kb(16777216,null,0,1,null,Z)),e.sb(7,278528,null,0,P.m,[e.R,e.N,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.kb(16777216,null,0,1,null,X)),e.sb(9,278528,null,0,P.m,[e.R,e.N,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,4,0,500,""),l(n,7,0,t.news),l(n,9,0,t.placeholders)},function(l,n){l(n,0,1,[e.Db(n,1).xxsmall,e.Db(n,1).xsmall,e.Db(n,1).small,e.Db(n,1).medium,e.Db(n,1).large,e.Db(n,1).xlarge,e.Db(n,1).xxlarge,e.Db(n,1).active,e.Db(n,1).disabled,e.Db(n,1).primary,e.Db(n,1).info,e.Db(n,1).success,e.Db(n,1).warning,e.Db(n,1).danger,e.Db(n,1).hasAccent,e.Db(n,1).primaryAccent,e.Db(n,1).infoAccent,e.Db(n,1).successAccent,e.Db(n,1).warningAccent,e.Db(n,1).dangerAccent,e.Db(n,1).activeAccent,e.Db(n,1).disabledAccent]),l(n,2,0,e.Db(n,3).role)})}function nl(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,2,"ng-component",[],null,null,null,ll,V)),e.Ib(512,null,g,g,[O.c]),e.sb(2,49152,null,0,Q,[g],null,null)],null,null)}var tl=e.pb("ng-component",Q,nl,{},{},[]),el=t("1Ei1"),ul=t("VnD/"),rl=t("FA0J"),al=function(){function l(l,n,t,e,u,r){this.newsService=l,this.router=n,this.route=t,this.scrollService=e,this.platformId=u,this.window=r,this.news=[],this.placeholders=[],this.pageSize=10,this.loadingNext=!1,this.loadingPrevious=!1,Object(P.B)(this.platformId)&&this.window.history.scrollRestoration&&(this.initialScrollRestoration=r.history.scrollRestoration,history.scrollRestoration="manual")}return l.prototype.ngOnInit=function(){var l=this.route.snapshot.queryParams.page;this.startPage=l?Number.parseInt(l,10):1,this.pageToLoadNext=this.startPage},l.prototype.ngOnDestroy=function(){this.initialScrollRestoration&&(this.window.history.scrollRestoration=this.initialScrollRestoration)},l.prototype.updateUrl=function(l){this.router.navigate(["."],{queryParams:{page:l},replaceUrl:!0,relativeTo:this.route,queryParamsHandling:"merge"})},l.prototype.loadPrevious=function(){var l=this;this.loadingPrevious||1===this.startPage||(this.loadingPrevious=!0,this.newsService.load(this.startPage-1,this.pageSize).subscribe(function(n){var t;(t=l.news).unshift.apply(t,n),l.loadingPrevious=!1,l.restoreScrollPosition(),l.startPage--}))},l.prototype.loadNext=function(){var l=this;this.loadingNext||(this.loadingNext=!0,this.placeholders=new Array(this.pageSize),this.newsService.load(this.pageToLoadNext,this.pageSize).subscribe(function(n){var t;l.placeholders=[],(t=l.news).push.apply(t,n),l.loadingNext=!1,l.pageToLoadNext++}))},l.prototype.restoreScrollPosition=function(){var l=this,n=this.listItems.length>0?this.listItems.first.nativeElement:null;this.listItems.changes.pipe(Object(h.a)(function(){return l.listItems.first.nativeElement}),Object(ul.a)(function(l){return l!==n}),Object(T.a)(1)).subscribe(function(){for(var t=0,e=0,u=l.listItems.toArray();e<u.length;e++){var r=u[e].nativeElement;if(r===n)break;t+=Object(rl.b)(r)}l.scrollService.scrollTo(null,t)})},l}(),ol=e.rb({encapsulation:0,styles:[o],data:{}});function sl(l){return e.Nb(0,[(l()(),e.tb(0,0,[[2,0],[1,0]],null,3,"nb-list-item",[],[[1,"role",0]],null,null,s.d,s.b)),e.sb(1,49152,[[3,4]],0,i.b,[],null,null),(l()(),e.tb(2,0,null,0,1,"nb-news-post",[],null,null,null,D,f)),e.sb(3,49152,null,0,m,[],{post:[0,"post"]},null)],function(l,n){l(n,3,0,n.context.$implicit)},function(l,n){l(n,0,0,e.Db(n,1).role)})}function il(l){return e.Nb(0,[(l()(),e.tb(0,0,[[2,0],[1,0]],null,3,"nb-list-item",[],[[1,"role",0]],null,null,s.d,s.b)),e.sb(1,49152,[[3,4]],0,i.b,[],null,null),(l()(),e.tb(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,d,b)),e.sb(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Db(n,1).role),l(n,2,0,e.Db(n,3).label)})}function cl(l){return e.Nb(0,[e.Jb(671088640,1,{listItems:1}),(l()(),e.tb(1,0,null,null,13,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,x.f,x.b)),e.sb(2,49152,null,0,w.b,[],null,null),(l()(),e.tb(3,16777216,null,2,1,"div",[],[[2,"nb-spinner-container",null]],null,null,null,null)),e.sb(4,81920,null,0,el.a,[e.R,e.j,e.E,e.k],{nbSpinner:[0,"nbSpinner"]},null),(l()(),e.tb(5,0,null,2,9,"nb-list",[["listenWindowScroll",""],["nbInfiniteList",""],["nbListPageTracker",""]],[[1,"role",0]],[[null,"topThreshold"],[null,"bottomThreshold"],[null,"pageChange"],[null,"scroll"]],function(l,n,t){var u=!0,r=l.component;return"scroll"===n&&(u=!1!==e.Db(l,9).onElementScroll()&&u),"topThreshold"===n&&(u=!1!==r.loadPrevious()&&u),"bottomThreshold"===n&&(u=!1!==r.loadNext()&&u),"pageChange"===n&&(u=!1!==r.updateUrl(t)&&u),u},s.c,s.a)),e.sb(6,49152,null,0,i.a,[],null,null),e.sb(7,4341760,null,1,v.a,[],{pageSize:[0,"pageSize"],startPage:[1,"startPage"]},{pageChange:"pageChange"}),e.Jb(603979776,2,{listItems:1}),e.sb(9,4341760,null,1,y.a,[e.k,S.a,N.a],{threshold:[0,"threshold"],listenWindowScroll:[1,"listenWindowScroll"]},{bottomThreshold:"bottomThreshold",topThreshold:"topThreshold"}),e.Jb(603979776,3,{listItems:1}),(l()(),e.kb(16777216,null,0,1,null,sl)),e.sb(12,278528,null,0,P.m,[e.R,e.N,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.kb(16777216,null,0,1,null,il)),e.sb(14,278528,null,0,P.m,[e.R,e.N,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,4,0,t.loadingPrevious),l(n,7,0,t.pageSize,t.startPage),l(n,9,0,500,""),l(n,12,0,t.news),l(n,14,0,t.placeholders)},function(l,n){l(n,1,1,[e.Db(n,2).xxsmall,e.Db(n,2).xsmall,e.Db(n,2).small,e.Db(n,2).medium,e.Db(n,2).large,e.Db(n,2).xlarge,e.Db(n,2).xxlarge,e.Db(n,2).active,e.Db(n,2).disabled,e.Db(n,2).primary,e.Db(n,2).info,e.Db(n,2).success,e.Db(n,2).warning,e.Db(n,2).danger,e.Db(n,2).hasAccent,e.Db(n,2).primaryAccent,e.Db(n,2).infoAccent,e.Db(n,2).successAccent,e.Db(n,2).warningAccent,e.Db(n,2).dangerAccent,e.Db(n,2).activeAccent,e.Db(n,2).disabledAccent]),l(n,3,0,e.Db(n,4).isSpinnerExist),l(n,5,0,e.Db(n,6).role)})}function bl(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,2,"ng-component",[],null,null,null,cl,ol)),e.Ib(512,null,g,g,[O.c]),e.sb(2,245760,null,0,al,[g,R.l,R.a,S.a,e.B,L.f],null,null)],function(l,n){l(n,2,0)},null)}var dl=e.pb("ng-component",al,bl,{},{},[]),hl=t("gIcY"),pl=t("n81q"),gl=t("i6JN"),ml=t("0AKQ"),fl=t("YNTD"),Dl=function(){return function(){}}();t.d(n,"InfiniteListModuleNgFactory",function(){return xl});var xl=e.qb(u,[],function(l){return e.Ab([e.Bb(512,e.j,e.eb,[[8,[r.a,a.a,_,K,tl,dl]],[3,e.j],e.x]),e.Bb(4608,P.p,P.o,[e.u,[2,P.E]]),e.Bb(4608,hl.A,hl.A,[]),e.Bb(1073742336,P.c,P.c,[]),e.Bb(1073742336,pl.a,pl.a,[]),e.Bb(1073742336,hl.y,hl.y,[]),e.Bb(1073742336,hl.i,hl.i,[]),e.Bb(1073742336,R.p,R.p,[[2,R.v],[2,R.l]]),e.Bb(1073742336,gl.a,gl.a,[]),e.Bb(1073742336,ml.a,ml.a,[]),e.Bb(1073742336,fl.a,fl.a,[]),e.Bb(1073742336,Dl,Dl,[]),e.Bb(1073742336,u,u,[]),e.Bb(1024,R.j,function(){return[[{path:"infinite-list-placeholders.component",component:I},{path:"infinite-list-scroll-modes.component",component:E},{path:"infinite-list-showcase.component",component:Q},{path:"infinite-news-list.component",component:al}]]},[])])})}}]);