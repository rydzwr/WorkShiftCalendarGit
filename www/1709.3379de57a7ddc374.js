"use strict";(self.webpackChunkWorkShiftCalendar=self.webpackChunkWorkShiftCalendar||[]).push([[1709],{1709:function(tt,M,o){o.r(M),o.d(M,{ion_range:function(){return O}});var b=o(4942),W=o(5861),N=o(5671),j=o(3144),I=o(7757),S=o.n(I),i=o(2361),G=o(8686),d=o(206),B=o(5062),L=o(7300),O=function(){function c(n){var t=this;(0,N.Z)(this,c),(0,i.r)(this,n),this.ionChange=(0,i.e)(this,"ionChange",7),this.ionStyle=(0,i.e)(this,"ionStyle",7),this.ionFocus=(0,i.e)(this,"ionFocus",7),this.ionBlur=(0,i.e)(this,"ionBlur",7),this.didLoad=!1,this.noUpdate=!1,this.hasFocus=!1,this.inheritedAttributes={},this.ratioA=0,this.ratioB=0,this.debounce=0,this.name="",this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.pinFormatter=function(e){return Math.round(e)},this.snaps=!1,this.step=1,this.ticks=!0,this.disabled=!1,this.value=0,this.clampBounds=function(e){return(0,d.k)(t.min,e,t.max)},this.ensureValueInBounds=function(e){return t.dualKnobs?{lower:t.clampBounds(e.lower),upper:t.clampBounds(e.upper)}:t.clampBounds(e)},this.setupGesture=(0,W.Z)(S().mark(function e(){var r;return S().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!(r=t.rangeSlider)){s.next=6;break}return s.next=4,Promise.resolve().then(o.bind(o,1363));case 4:t.gesture=s.sent.createGesture({el:r,gestureName:"range",gesturePriority:100,threshold:0,onStart:function(l){return t.onStart(l)},onMove:function(l){return t.onMove(l)},onEnd:function(l){return t.onEnd(l)}}),t.gesture.enable(!t.disabled);case 6:case"end":return s.stop()}},e)})),this.handleKeyboard=function(e,r){var a=t.step;a=a>0?a:1,a/=t.max-t.min,r||(a*=-1),"A"===e?t.ratioA=(0,d.k)(0,t.ratioA+a,1):t.ratioB=(0,d.k)(0,t.ratioB+a,1),t.updateValue()},this.onBlur=function(){t.hasFocus&&(t.hasFocus=!1,t.ionBlur.emit(),t.emitStyle())},this.onFocus=function(){t.hasFocus||(t.hasFocus=!0,t.ionFocus.emit(),t.emitStyle())}}return(0,j.Z)(c,[{key:"debounceChanged",value:function(){this.ionChange=(0,d.h)(this.ionChange,this.debounce)}},{key:"minChanged",value:function(){this.noUpdate||this.updateRatio()}},{key:"maxChanged",value:function(){this.noUpdate||this.updateRatio()}},{key:"disabledChanged",value:function(){this.gesture&&this.gesture.enable(!this.disabled),this.emitStyle()}},{key:"valueChanged",value:function(t){this.noUpdate||this.updateRatio(),t=this.ensureValueInBounds(t),this.ionChange.emit({value:t})}},{key:"componentWillLoad",value:function(){this.rangeId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"ion-r-".concat(X++),this.inheritedAttributes=(0,d.i)(this.el,["aria-label"])}},{key:"componentDidLoad",value:function(){this.setupGesture(),this.didLoad=!0}},{key:"connectedCallback",value:function(){this.updateRatio(),this.debounceChanged(),this.disabledChanged(),this.didLoad&&this.setupGesture()}},{key:"disconnectedCallback",value:function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"getValue",value:function(){var t=this.value||0;return this.dualKnobs?"object"==typeof t?t:{lower:0,upper:t}:"object"==typeof t?t.upper:t}},{key:"emitStyle",value:function(){this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled})}},{key:"onStart",value:function(t){var e=this.rect=this.rangeSlider.getBoundingClientRect(),r=t.currentX,a=(0,d.k)(0,(r-e.left)/e.width,1);(0,B.i)(this.el)&&(a=1-a),this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-a)<Math.abs(this.ratioB-a)?"A":"B",this.setFocus(this.pressedKnob),this.update(r)}},{key:"onMove",value:function(t){this.update(t.currentX)}},{key:"onEnd",value:function(t){this.update(t.currentX),this.pressedKnob=void 0}},{key:"update",value:function(t){var e=this.rect,r=(0,d.k)(0,(t-e.left)/e.width,1);(0,B.i)(this.el)&&(r=1-r),this.snaps&&(r=m(D(r,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=r:this.ratioB=r,this.updateValue()}},{key:"valA",get:function(){return D(this.ratioA,this.min,this.max,this.step)}},{key:"valB",get:function(){return D(this.ratioB,this.min,this.max,this.step)}},{key:"ratioLower",get:function(){return this.dualKnobs?Math.min(this.ratioA,this.ratioB):0}},{key:"ratioUpper",get:function(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA}},{key:"updateRatio",value:function(){var t=this.getValue(),e=this.min,r=this.max;this.dualKnobs?(this.ratioA=m(t.lower,e,r),this.ratioB=m(t.upper,e,r)):this.ratioA=m(t,e,r)}},{key:"updateValue",value:function(){this.noUpdate=!0;var t=this.valA,e=this.valB;this.value=this.dualKnobs?{lower:Math.min(t,e),upper:Math.max(t,e)}:t,this.noUpdate=!1}},{key:"setFocus",value:function(t){if(this.el.shadowRoot){var e=this.el.shadowRoot.querySelector("A"===t?".range-knob-a":".range-knob-b");e&&e.focus()}}},{key:"render",value:function(){var t,e,r=this,a=this.min,s=this.max,h=this.step,l=this.el,w=this.handleKeyboard,k=this.pressedKnob,u=this.disabled,f=this.pin,_=this.ratioLower,y=this.ratioUpper,P=this.inheritedAttributes,A=this.rangeId,g=this.pinFormatter,v=(0,d.d)(l,A).labelText;null==v&&(v=P["aria-label"]);var H=(0,G.b)(this),J="".concat(100*_,"%"),$="".concat(100-100*y,"%"),C=(0,B.i)(this.el),z=C?"right":"left",Q=C?"left":"right",q=((0,b.Z)(t={},z,J),(0,b.Z)(t,Q,$),t),T=[];if(this.snaps&&this.ticks)for(var K=a;K<=s;K+=h){var E=m(K,a,s),U={ratio:E,active:E>=_&&E<=y};U[z]="".concat(100*E,"%"),T.push(U)}return(0,d.e)(!0,l,this.name,JSON.stringify(this.getValue()),u),(0,i.h)(i.H,{onFocusin:this.onFocus,onFocusout:this.onBlur,id:A,class:(0,L.c)(this.color,(e={},(0,b.Z)(e,H,!0),(0,b.Z)(e,"in-item",(0,L.h)("ion-item",l)),(0,b.Z)(e,"range-disabled",u),(0,b.Z)(e,"range-pressed",void 0!==k),(0,b.Z)(e,"range-has-pin",f),e))},(0,i.h)("slot",{name:"start"}),(0,i.h)("div",{class:"range-slider",ref:function(R){return r.rangeSlider=R}},T.map(function(x){return(0,i.h)("div",{style:(R=x,(0,b.Z)({},z,R[z])),role:"presentation",class:{"range-tick":!0,"range-tick-active":x.active},part:x.active?"tick-active":"tick"});var R}),(0,i.h)("div",{class:"range-bar",role:"presentation",part:"bar"}),(0,i.h)("div",{class:"range-bar range-bar-active",role:"presentation",style:q,part:"bar-active"}),F(C,{knob:"A",pressed:"A"===k,value:this.valA,ratio:this.ratioA,pin:f,pinFormatter:g,disabled:u,handleKeyboard:w,min:a,max:s,labelText:v}),this.dualKnobs&&F(C,{knob:"B",pressed:"B"===k,value:this.valB,ratio:this.ratioB,pin:f,pinFormatter:g,disabled:u,handleKeyboard:w,min:a,max:s,labelText:v})),(0,i.h)("slot",{name:"end"}))}},{key:"el",get:function(){return(0,i.i)(this)}}],[{key:"watchers",get:function(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}}]),c}(),F=function(n,t){var g,e=t.knob,r=t.value,s=t.min,h=t.max,l=t.disabled,k=t.pin,u=t.handleKeyboard,f=t.labelText,_=t.pinFormatter;return(0,i.h)("div",{onKeyDown:function(g){var p=g.key;"ArrowLeft"===p||"ArrowDown"===p?(u(e,!1),g.preventDefault(),g.stopPropagation()):("ArrowRight"===p||"ArrowUp"===p)&&(u(e,!0),g.preventDefault(),g.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-a":"A"===e,"range-knob-b":"B"===e,"range-knob-pressed":t.pressed,"range-knob-min":r===s,"range-knob-max":r===h},style:(g={},g[n?"right":"left"]="".concat(100*t.ratio,"%"),g),role:"slider",tabindex:l?-1:0,"aria-label":f,"aria-valuemin":s,"aria-valuemax":h,"aria-disabled":l?"true":null,"aria-valuenow":r},k&&(0,i.h)("div",{class:"range-pin",role:"presentation",part:"pin"},_(r)),(0,i.h)("div",{class:"range-knob",role:"presentation",part:"knob"}))},D=function(n,t,e,r){var a=(e-t)*n;return r>0&&(a=Math.round(a/r)*r+t),(0,d.k)(t,a,e)},m=function(n,t,e){return(0,d.k)(0,(n-t)/(e-t),1)},X=0;O.style={ios:":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0 3px 1px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.13), 0 0 0 1px rgba(0, 0, 0, 0.02);--knob-size:28px;--bar-height:2px;--bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,  28px,  0) scale(0.01);transform:translate3d(0,  28px,  0) scale(0.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:12px;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,  0,  0) scale(1);transform:translate3d(0,  0,  0) scale(1)}:host(.range-disabled){opacity:0.5}",md:':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.26);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #3880ff);--pin-color:var(--ion-color-primary-contrast, #fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(0.67);transform:scale(0.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color, border, -webkit-transform;transition-property:background-color, border, -webkit-transform;transition-property:transform, background-color, border;transition-property:transform, background-color, border, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translate3d(0,  0,  0) scale(0.01);transform:translate3d(0,  0,  0) scale(0.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background 120ms ease, -webkit-transform 120ms ease;transition:background 120ms ease, -webkit-transform 120ms ease;transition:transform 120ms ease, background 120ms ease;transition:transform 120ms ease, background 120ms ease, -webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color);text-align:center}.range-pin::before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset;right:unset;right:50%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin::before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,  -24px,  0) scale(1);transform:translate3d(0,  -24px,  0) scale(1)}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, #bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(0.55);transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, #bfbfbf)}'}}}]);