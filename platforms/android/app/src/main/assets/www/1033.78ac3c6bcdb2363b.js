"use strict";(self.webpackChunkWorkShiftCalendar=self.webpackChunkWorkShiftCalendar||[]).push([[1033],{1033:function(v,s,n){n.r(s),n.d(s,{ion_img:function(){return a}});var d=n(5671),h=n(3144),e=n(2361),l=n(8686),c=n(206),a=function(){function o(i){var t=this;(0,d.Z)(this,o),(0,e.r)(this,i),this.ionImgWillLoad=(0,e.e)(this,"ionImgWillLoad",7),this.ionImgDidLoad=(0,e.e)(this,"ionImgDidLoad",7),this.ionError=(0,e.e)(this,"ionError",7),this.inheritedAttributes={},this.onLoad=function(){t.ionImgDidLoad.emit()},this.onError=function(){t.ionError.emit()}}return(0,h.Z)(o,[{key:"srcChanged",value:function(){this.addIO()}},{key:"componentWillLoad",value:function(){this.inheritedAttributes=(0,c.i)(this.el,["draggable"])}},{key:"componentDidLoad",value:function(){this.addIO()}},{key:"addIO",value:function(){var t=this;void 0!==this.src&&("undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver(function(r){r[r.length-1].isIntersecting&&(t.load(),t.removeIO())}),this.io.observe(this.el)):setTimeout(function(){return t.load()},200))}},{key:"load",value:function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}},{key:"removeIO",value:function(){this.io&&(this.io.disconnect(),this.io=void 0)}},{key:"render",value:function(){var t=this.loadSrc,r=this.alt,f=this.onLoad,g=this.loadError,b=this.inheritedAttributes.draggable;return(0,e.h)(e.H,{class:(0,l.b)(this)},(0,e.h)("img",{decoding:"async",src:t,alt:r,onLoad:f,onError:g,part:"image",draggable:_(b)}))}},{key:"el",get:function(){return(0,e.i)(this)}}],[{key:"watchers",get:function(){return{src:["srcChanged"]}}}]),o}(),_=function(i){switch(i){case"true":return!0;case"false":return!1;default:return}};a.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}]);