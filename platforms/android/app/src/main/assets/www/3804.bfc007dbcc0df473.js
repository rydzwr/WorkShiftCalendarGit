"use strict";(self.webpackChunkWorkShiftCalendar=self.webpackChunkWorkShiftCalendar||[]).push([[3804],{3804:function(Xe,$,m){m.r($),m.d($,{ion_popover:function(){return Q}});var R=m(4942),re=m(5671),oe=m(3144),j=m(5861),ne=m(7757),A=m.n(ne),b=m(2361),z=m(8686),F=m(2407),E=m(206),W=m(3986),ie=m(7300),ae=m(358),k=m(6304),V=(m(527),function(r,e,t){var o=e.getBoundingClientRect(),n=o.height,i=o.width;return"cover"===r&&t&&(i=t.getBoundingClientRect().width),{contentWidth:i,contentHeight:n}}),H=function(r,e){return e&&"ION-ITEM"===e.tagName?r.findIndex(function(t){return t===e}):-1},pe=function(r,e){return r[H(r,e)+1]},de=function(r,e){return r[H(r,e)-1]},K=function(r){var t=(0,E.g)(r).querySelector("button");t&&(0,E.r)(function(){return t.focus()})},fe=function(r){return r.hasAttribute("data-ion-popover-trigger")},B=function(r,e,t,o,n,i,a,s,l,c,f){var v,h={top:0,left:0,width:0,height:0};if("event"===i){if(!f)return l;h={top:f.clientY,left:f.clientX,width:1,height:1}}else{var x=c||(null===(v=null==f?void 0:f.detail)||void 0===v?void 0:v.ionShadowTarget)||(null==f?void 0:f.target);if(!x)return l;var I=x.getBoundingClientRect();h={top:I.top,left:I.left,width:I.width,height:I.height}}var w=ge(a,h,e,t,o,n,r),y=me(s,a,h,e,t),T=w.top+y.top,P=w.left+y.left,O=he(a,o,n,T,P,e,t,r),_=O.arrowTop,C=O.arrowLeft,g=ue(a,s,r);return{top:T,left:P,referenceCoordinates:h,arrowTop:_,arrowLeft:C,originX:g.originX,originY:g.originY}},ue=function(r,e,t){switch(r){case"top":return{originX:q(e),originY:"bottom"};case"bottom":return{originX:q(e),originY:"top"};case"left":return{originX:"right",originY:X(e)};case"right":return{originX:"left",originY:X(e)};case"start":return{originX:t?"left":"right",originY:X(e)};case"end":return{originX:t?"right":"left",originY:X(e)}}},q=function(r){switch(r){case"start":return"left";case"center":return"center";case"end":return"right"}},X=function(r){switch(r){case"start":return"top";case"center":return"center";case"end":return"bottom"}},he=function(r,e,t,o,n,i,a,s){var l={arrowTop:o+a/2-e/2,arrowLeft:n+i-e/2},c={arrowTop:o+a/2-e/2,arrowLeft:n-1.5*e};switch(r){case"top":return{arrowTop:o+a,arrowLeft:n+i/2-e/2};case"bottom":return{arrowTop:o-t,arrowLeft:n+i/2-e/2};case"left":return l;case"right":return c;case"start":return s?c:l;case"end":return s?l:c;default:return{arrowTop:0,arrowLeft:0}}},ge=function(r,e,t,o,n,i,a){var s={top:e.top,left:e.left-t-n},l={top:e.top,left:e.left+e.width+n};switch(r){case"top":return{top:e.top-o-i,left:e.left};case"right":return l;case"bottom":return{top:e.top+e.height+i,left:e.left};case"left":return s;case"start":return a?l:s;case"end":return a?s:l}},me=function(r,e,t,o,n){switch(r){case"center":return we(e,t,o,n);case"end":return be(e,t,o,n);default:return{top:0,left:0}}},be=function(r,e,t,o){switch(r){case"start":case"end":case"left":case"right":return{top:-(o-e.height),left:0};default:return{top:0,left:-(t-e.width)}}},we=function(r,e,t,o){switch(r){case"start":case"end":case"left":case"right":return{top:-(o/2-e.height/2),left:0};default:return{top:0,left:-(t/2-e.width/2)}}},J=function(r,e,t,o,n,i,a,s,l,c,f,v){var T,h=arguments.length>12&&void 0!==arguments[12]?arguments[12]:0,u=arguments.length>13&&void 0!==arguments[13]?arguments[13]:0,p=arguments.length>14&&void 0!==arguments[14]?arguments[14]:0,x=h,w=t,y=e,P=c,O=f,_=!1,C=!1,g=v?v.top+v.height:i/2-s/2,L=v?v.height:0,S=!1;return w<o+l?(w=o,_=!0,P="left"):a+o+w+l>n&&(C=!0,w=n-a-o,P="right"),g+L+s>i&&("top"===r||"bottom"===r)&&(g-s>0?(x=(y=g-s-L-(p-1))+s,O="bottom",S=!0):T=o),{top:y,left:w,bottom:T,originX:P,originY:O,checkSafeAreaLeft:_,checkSafeAreaRight:C,arrowTop:x,arrowLeft:u,addPopoverBottomClass:S}},ke=function(r,e){var t,o=e.event,n=e.size,i=e.trigger,a=e.reference,s=e.side,l=e.align,c=r.ownerDocument,f="rtl"===c.dir,v=c.defaultView.innerWidth,h=c.defaultView.innerHeight,u=(0,E.g)(r),p=u.querySelector(".popover-content"),x=u.querySelector(".popover-arrow"),I=i||(null===(t=null==o?void 0:o.detail)||void 0===t?void 0:t.ionShadowTarget)||(null==o?void 0:o.target),w=V(n,p,I),y=w.contentWidth,T=w.contentHeight,P=function(r){if(!r)return{arrowWidth:0,arrowHeight:0};var e=r.getBoundingClientRect();return{arrowWidth:e.width,arrowHeight:e.height}}(x),_=P.arrowHeight,g=B(f,y,T,P.arrowWidth,_,a,s,l,{top:h/2-T/2,left:v/2-y/2,originX:f?"right":"left",originY:"top"},i,o),D=J(s,g.top,g.left,"cover"===n?0:5,v,h,y,T,"cover"===n?0:25,g.originX,g.originY,g.referenceCoordinates,g.arrowTop,g.arrowLeft,_),G=D.originX,U=D.originY,M=D.top,N=D.left,Y=D.bottom,Ce=D.checkSafeAreaLeft,Le=D.checkSafeAreaRight,Se=D.arrowTop,We=D.arrowLeft,Ne=D.addPopoverBottomClass,Re=(0,k.c)(),ee=(0,k.c)(),te=(0,k.c)();return ee.addElement(u.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),te.addElement(u.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),Re.easing("ease").duration(100).beforeAddWrite(function(){"cover"===n&&r.style.setProperty("--width","".concat(y,"px")),Ne&&r.classList.add("popover-bottom"),void 0!==Y&&p.style.setProperty("bottom","".concat(Y,"px"));var Z="".concat(N,"px");if(Ce&&(Z="".concat(N,"px").concat(" + var(--ion-safe-area-left, 0)")),Le&&(Z="".concat(N,"px").concat(" - var(--ion-safe-area-right, 0)")),p.style.setProperty("top","calc(".concat(M,"px + var(--offset-y, 0))")),p.style.setProperty("left","calc(".concat(Z," + var(--offset-x, 0))")),p.style.setProperty("transform-origin","".concat(U," ").concat(G)),null!==x){var Ke=function(r){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>3?arguments[3]:void 0;return!(!(arguments.length>2?arguments[2]:void 0)&&!o||"top"!==r&&"bottom"!==r&&e)}(s,g.top!==M||g.left!==N,o,i);Ke?(x.style.setProperty("top","calc(".concat(Se,"px + var(--offset-y, 0))")),x.style.setProperty("left","calc(".concat(We,"px + var(--offset-x, 0))"))):x.style.setProperty("display","none")}}).addAnimation([ee,te])},xe=function(r){var e=(0,E.g)(r),t=e.querySelector(".popover-content"),o=e.querySelector(".popover-arrow"),n=(0,k.c)(),i=(0,k.c)(),a=(0,k.c)();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),a.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),n.easing("ease").afterAddWrite(function(){r.style.removeProperty("--width"),r.classList.remove("popover-bottom"),t.style.removeProperty("top"),t.style.removeProperty("left"),t.style.removeProperty("bottom"),t.style.removeProperty("transform-origin"),o&&(o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("display"))}).duration(300).addAnimation([i,a])},De=function(r,e){var t,o=e.event,n=e.size,i=e.trigger,a=e.reference,s=e.side,l=e.align,c=r.ownerDocument,f="rtl"===c.dir,v=c.defaultView.innerWidth,h=c.defaultView.innerHeight,u=(0,E.g)(r),p=u.querySelector(".popover-content"),x=i||(null===(t=null==o?void 0:o.detail)||void 0===t?void 0:t.ionShadowTarget)||(null==o?void 0:o.target),I=V(n,p,x),w=I.contentWidth,y=I.contentHeight,P=B(f,w,y,0,0,a,s,l,{top:h/2-y/2,left:v/2-w/2,originX:f?"right":"left",originY:"top"},i,o),_=J(s,P.top,P.left,"cover"===n?0:12,v,h,w,y,0,P.originX,P.originY,P.referenceCoordinates),C=_.originX,g=_.originY,L=_.top,S=_.left,D=_.bottom,G=(0,k.c)(),U=(0,k.c)(),M=(0,k.c)(),N=(0,k.c)(),Y=(0,k.c)();return U.addElement(u.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),M.addElement(u.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1),N.addElement(p).beforeStyles({top:"calc(".concat(L,"px + var(--offset-y, 0px))"),left:"calc(".concat(S,"px + var(--offset-x, 0px))"),"transform-origin":"".concat(g," ").concat(C)}).beforeAddWrite(function(){void 0!==D&&p.style.setProperty("bottom","".concat(D,"px"))}).fromTo("transform","scale(0.8)","scale(1)"),Y.addElement(u.querySelector(".popover-viewport")).fromTo("opacity",.01,1),G.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite(function(){"cover"===n&&r.style.setProperty("--width","".concat(w,"px")),"bottom"===g&&r.classList.add("popover-bottom")}).addAnimation([U,M,N,Y])},Ae=function(r){var e=(0,E.g)(r),t=e.querySelector(".popover-content"),o=(0,k.c)(),n=(0,k.c)(),i=(0,k.c)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.easing("ease").afterAddWrite(function(){r.style.removeProperty("--width"),r.classList.remove("popover-bottom"),t.style.removeProperty("top"),t.style.removeProperty("left"),t.style.removeProperty("bottom"),t.style.removeProperty("transform-origin")}).duration(150).addAnimation([n,i])},Q=function(){function d(r){var e=this;(0,re.Z)(this,d),(0,b.r)(this,r),this.didPresent=(0,b.e)(this,"ionPopoverDidPresent",7),this.willPresent=(0,b.e)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,b.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,b.e)(this,"ionPopoverDidDismiss",7),this.didPresentShorthand=(0,b.e)(this,"didPresent",7),this.willPresentShorthand=(0,b.e)(this,"willPresent",7),this.willDismissShorthand=(0,b.e)(this,"willDismiss",7),this.didDismissShorthand=(0,b.e)(this,"didDismiss",7),this.parentPopover=null,this.popoverIndex=Oe++,this.coreDelegate=(0,F.C)(),this.inline=!1,this.focusDescendantOnPresent=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.triggerAction="click",this.size="auto",this.dismissOnSelect=!1,this.reference="trigger",this.side="bottom",this.arrow=!0,this.isOpen=!1,this.keyboardEvents=!1,this.onDismiss=function(t){t.stopPropagation(),t.preventDefault(),e.dismiss()},this.onBackdropTap=function(){e.dismiss(void 0,W.B)},this.onLifecycle=function(t){var o=e.usersElement,n=Ee[t.type];if(o&&n){var i=new CustomEvent(n,{bubbles:!1,cancelable:!1,detail:t.detail});o.dispatchEvent(i)}},this.configureTriggerInteraction=function(){var t=e.trigger,o=e.triggerAction,n=e.el,i=e.destroyTriggerInteraction;i&&i();var a=e.triggerEl=void 0!==t?document.getElementById(t):null;!a||(e.destroyTriggerInteraction=function(r,e,t){var i,o=[];switch(e){case"hover":var n;o=[{eventName:"mouseenter",callback:(i=(0,j.Z)(A().mark(function s(l){return A().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:l.stopPropagation(),n&&clearTimeout(n),n=setTimeout(function(){(0,E.r)(function(){t.presentFromTrigger(l),n=void 0})},100);case 3:case"end":return f.stop()}},s)})),function a(s){return i.apply(this,arguments)})},{eventName:"mouseleave",callback:function(a){n&&clearTimeout(n);var s=a.relatedTarget;!s||s.closest("ion-popover")!==t&&t.dismiss(void 0,void 0,!1)}},{eventName:"click",callback:function(a){return a.stopPropagation()}},{eventName:"ionPopoverActivateTrigger",callback:function(a){return t.presentFromTrigger(a,!0)}}];break;case"context-menu":o=[{eventName:"contextmenu",callback:function(a){a.preventDefault(),t.presentFromTrigger(a)}},{eventName:"click",callback:function(a){return a.stopPropagation()}},{eventName:"ionPopoverActivateTrigger",callback:function(a){return t.presentFromTrigger(a,!0)}}];break;default:o=[{eventName:"click",callback:function(a){return t.presentFromTrigger(a)}},{eventName:"ionPopoverActivateTrigger",callback:function(a){return t.presentFromTrigger(a,!0)}}]}return o.forEach(function(i){return r.addEventListener(i.eventName,i.callback)}),r.setAttribute("data-ion-popover-trigger","true"),function(){o.forEach(function(i){return r.removeEventListener(i.eventName,i.callback)}),r.removeAttribute("data-ion-popover-trigger")}}(a,o,n))},this.configureKeyboardInteraction=function(){var t=e.destroyKeyboardInteraction,o=e.el;t&&t(),e.destroyKeyboardInteraction=function(r){var e=function(){var t=(0,j.Z)(A().mark(function o(n){var i,a,l,c,f,v,h;return A().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:i=document.activeElement,a=[];try{a=Array.from(r.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch(x){}p.t0=n.key,p.next="ArrowLeft"===p.t0?6:"ArrowDown"===p.t0?11:"ArrowUp"===p.t0?15:"Home"===p.t0?19:"End"===p.t0?23:"ArrowRight"===p.t0||" "===p.t0||"Enter"===p.t0?27:29;break;case 6:return p.next=8,r.getParentPopover();case 8:return p.sent&&r.dismiss(void 0,void 0,!1),p.abrupt("break",29);case 11:return n.preventDefault(),void 0!==(l=pe(a,i))&&K(l),p.abrupt("break",29);case 15:return n.preventDefault(),void 0!==(c=de(a,i))&&K(c),p.abrupt("break",29);case 19:return n.preventDefault(),void 0!==(f=a[0])&&K(f),p.abrupt("break",29);case 23:return n.preventDefault(),void 0!==(v=a[a.length-1])&&K(v),p.abrupt("break",29);case 27:return i&&fe(i)&&(h=new CustomEvent("ionPopoverActivateTrigger"),i.dispatchEvent(h)),p.abrupt("break",29);case 29:case"end":return p.stop()}},o)}));return function(n){return t.apply(this,arguments)}}();return r.addEventListener("keydown",e),function(){return r.removeEventListener("keydown",e)}}(o)},this.configureDismissInteraction=function(){var t=e.destroyDismissInteraction,o=e.parentPopover,n=e.triggerAction,i=e.triggerEl,a=e.el;!o||!i||(t&&t(),e.destroyDismissInteraction=function(r,e,t,o){var n=[],a=(0,E.g)(o).querySelector(".popover-content");return(n="hover"===e?[{eventName:"mouseenter",callback:function(l){document.elementFromPoint(l.clientX,l.clientY)!==r&&t.dismiss(void 0,void 0,!1)}}]:[{eventName:"click",callback:function(l){l.target.closest("[data-ion-popover-trigger]")!==r?t.dismiss(void 0,void 0,!1):l.stopPropagation()}}]).forEach(function(s){return a.addEventListener(s.eventName,s.callback)}),function(){n.forEach(function(s){return a.removeEventListener(s.eventName,s.callback)})}}(i,n,a,o))}}return(0,oe.Z)(d,[{key:"onTriggerChange",value:function(){this.configureTriggerInteraction()}},{key:"onIsOpenChange",value:function(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()}},{key:"connectedCallback",value:function(){(0,W.e)(this.el)}},{key:"componentWillLoad",value:function(){this.popoverId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"ion-popover-".concat(this.popoverIndex),this.parentPopover=this.el.closest("ion-popover:not(#".concat(this.popoverId,")")),void 0===this.alignment&&(this.alignment="ios"===(0,z.b)(this)?"center":"start")}},{key:"componentDidLoad",value:function(){var e=this,t=this.parentPopover;!0===this.isOpen&&(0,E.r)(function(){return e.present()}),t&&(0,E.a)(t,"ionPopoverWillDismiss",function(){e.dismiss(void 0,void 0,!1)}),this.configureTriggerInteraction()}},{key:"presentFromTrigger",value:(r=(0,j.Z)(A().mark(function t(o){var i=arguments;return A().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.focusDescendantOnPresent=i.length>1&&void 0!==i[1]&&i[1],s.next=4,this.present(o);case 4:this.focusDescendantOnPresent=!1;case 5:case"end":return s.stop()}},t,this)})),function e(t){return r.apply(this,arguments)})},{key:"getDelegate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};var t=this.el.parentNode,o=this.inline=null!==t&&!this.hasController,n=this.workingDelegate=o?this.delegate||this.coreDelegate:this.delegate;return{inline:o,delegate:n}}},{key:"present",value:function(){var r=(0,j.Z)(A().mark(function t(o){var n,i,a,s;return A().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!this.presented){c.next=2;break}return c.abrupt("return");case 2:if(void 0===this.currentTransition){c.next=5;break}return c.next=5,this.currentTransition;case 5:return n=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),i=this.getDelegate(!0),a=i.inline,s=i.delegate,c.next=9,(0,F.a)(s,this.el,this.component,["popover-viewport"],n,a);case 9:return this.usersElement=c.sent,c.next=12,(0,ae.e)(this.usersElement);case 12:return this.keyboardEvents||this.configureKeyboardInteraction(),this.configureDismissInteraction(),this.currentTransition=(0,W.d)(this,"popoverEnter",ke,De,{event:o||this.event,size:this.size,trigger:this.triggerEl,reference:this.reference,side:this.side,align:this.alignment}),c.next=17,this.currentTransition;case 17:this.currentTransition=void 0,this.focusDescendantOnPresent&&(0,W.j)(this.el,this.el);case 19:case"end":return c.stop()}},t,this)}));return function e(t){return r.apply(this,arguments)}}()},{key:"dismiss",value:function(){var r=(0,j.Z)(A().mark(function t(o,n){var i,a,s,l,c,f,v=arguments;return A().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(i=!(v.length>2&&void 0!==v[2])||v[2],void 0===this.currentTransition){u.next=4;break}return u.next=4,this.currentTransition;case 4:return a=this.destroyKeyboardInteraction,s=this.destroyDismissInteraction,i&&this.parentPopover&&this.parentPopover.dismiss(o,n,i),this.currentTransition=(0,W.f)(this,o,n,"popoverLeave",xe,Ae,this.event),u.next=9,this.currentTransition;case 9:if(!(l=u.sent)){u.next=16;break}return a&&(a(),this.destroyKeyboardInteraction=void 0),s&&(s(),this.destroyDismissInteraction=void 0),c=this.getDelegate(),f=c.delegate,u.next=16,(0,F.d)(f,this.usersElement);case 16:return this.currentTransition=void 0,u.abrupt("return",l);case 18:case"end":return u.stop()}},t,this)}));return function e(t,o){return r.apply(this,arguments)}}()},{key:"getParentPopover",value:function(){var r=(0,j.Z)(A().mark(function t(){return A().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",this.parentPopover);case 1:case"end":return n.stop()}},t,this)}));return function e(){return r.apply(this,arguments)}}()},{key:"onDidDismiss",value:function(){return(0,W.g)(this.el,"ionPopoverDidDismiss")}},{key:"onWillDismiss",value:function(){return(0,W.g)(this.el,"ionPopoverWillDismiss")}},{key:"render",value:function(){var e,t=this,o=(0,z.b)(this),n=this.onLifecycle,i=this.popoverId,a=this.parentPopover,s=this.dismissOnSelect,l=this.side,c=this.arrow,f=this.htmlAttributes,v=(0,z.a)("desktop"),h=c&&!a&&!v;return(0,b.h)(b.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},f,{style:{zIndex:"".concat(2e4+this.overlayIndex)},id:i,class:Object.assign(Object.assign({},(0,ie.g)(this.cssClass)),(e={},(0,R.Z)(e,o,!0),(0,R.Z)(e,"popover-translucent",this.translucent),(0,R.Z)(e,"overlay-hidden",!0),(0,R.Z)(e,"popover-desktop",v),(0,R.Z)(e,"popover-side-".concat(l),!0),(0,R.Z)(e,"popover-nested",!!a),e)),onIonPopoverDidPresent:n,onIonPopoverWillPresent:n,onIonPopoverWillDismiss:n,onIonPopoverDidDismiss:n,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap}),!a&&(0,b.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),(0,b.h)("div",{class:"popover-wrapper ion-overlay-wrapper",onClick:s?function(){return t.dismiss()}:void 0},h&&(0,b.h)("div",{class:"popover-arrow",part:"arrow"}),(0,b.h)("div",{class:"popover-content",part:"content"},(0,b.h)("slot",null))))}},{key:"el",get:function(){return(0,b.i)(this)}}],[{key:"watchers",get:function(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}}}]),d;var r}(),Ee={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"},Oe=0;Q.style={ios:':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, #e6e6e6)}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl] .popover-arrow::after,:host-context([dir=rtl]) .popover-arrow::after{left:unset;right:unset;right:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl] .popover-content,:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}"}}}]);