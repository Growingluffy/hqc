var cssdropdown={disappeardelay:250,disablemenuclick:!1,enableswipe:1,enableiframeshim:1,dropmenuobj:null,ie:document.all,firefox:document.getElementById&&!document.all,swipetimer:void 0,bottomclip:0,getposOffset:function(e,t){for(var i="left"==t?e.offsetLeft:e.offsetTop,o=e.offsetParent;null!=o;)i="left"==t?i+o.offsetLeft:i+o.offsetTop,o=o.offsetParent;return i},swipeeffect:function(){this.bottomclip<parseInt(this.dropmenuobj.offsetHeight)&&(this.bottomclip+=10+this.bottomclip/10,this.dropmenuobj.style.clip="rect(0 auto "+this.bottomclip+"px 0)",this.swipetimer=setTimeout("cssdropdown.swipeeffect()",10))},showhide:function(e,t){(this.ie||this.firefox)&&(this.dropmenuobj.style.left=this.dropmenuobj.style.top="-500px"),"click"==t.type&&e.visibility==hidden||"mouseover"==t.type?(1==this.enableswipe&&("undefined"!=typeof this.swipetimer&&clearTimeout(this.swipetimer),e.clip="rect(0 auto 0 0)",this.bottomclip=0,this.swipeeffect()),e.visibility="visible"):"click"==t.type&&(e.visibility="hidden")},iecompattest:function(){return document.compatMode&&"BackCompat"!=document.compatMode?document.documentElement:document.body},clearbrowseredge:function(e,t){var i=0;if("rightedge"==t){var o=this.ie&&!window.opera?this.iecompattest().scrollLeft+this.iecompattest().clientWidth-15:window.pageXOffset+window.innerWidth-15;this.dropmenuobj.contentmeasure=this.dropmenuobj.offsetWidth,o-this.dropmenuobj.x<this.dropmenuobj.contentmeasure&&(i=this.dropmenuobj.contentmeasure-e.offsetWidth)}else{var s=this.ie&&!window.opera?this.iecompattest().scrollTop:window.pageYOffset,o=this.ie&&!window.opera?this.iecompattest().scrollTop+this.iecompattest().clientHeight-15:window.pageYOffset+window.innerHeight-18;this.dropmenuobj.contentmeasure=this.dropmenuobj.offsetHeight,o-this.dropmenuobj.y<this.dropmenuobj.contentmeasure&&(i=this.dropmenuobj.contentmeasure+e.offsetHeight,this.dropmenuobj.y-s<this.dropmenuobj.contentmeasure&&(i=this.dropmenuobj.y+e.offsetHeight-s))}return i},dropit:function(e,t,i){if(null!=this.dropmenuobj&&(this.dropmenuobj.style.visibility="hidden"),this.clearhidemenu(),this.ie||this.firefox){if(e.onmouseout=function(){cssdropdown.delayhidemenu()},e.onclick=function(){return!cssdropdown.disablemenuclick},this.dropmenuobj=document.getElementById(i),!this.dropmenuobj)return;this.dropmenuobj.onmouseover=function(){cssdropdown.clearhidemenu()},this.dropmenuobj.onmouseout=function(e){cssdropdown.dynamichide(e)},this.dropmenuobj.onclick=function(){cssdropdown.delayhidemenu()},this.showhide(this.dropmenuobj.style,t),this.dropmenuobj.x=this.getposOffset(e,"left"),this.dropmenuobj.y=this.getposOffset(e,"top"),this.dropmenuobj.style.left=this.dropmenuobj.x-this.clearbrowseredge(e,"rightedge")+"px",this.dropmenuobj.style.top=this.dropmenuobj.y-this.clearbrowseredge(e,"bottomedge")+e.offsetHeight+1+"px",this.positionshim()}},positionshim:function(){this.enableiframeshim&&"undefined"!=typeof this.shimobject&&("visible"==this.dropmenuobj.style.visibility&&(this.shimobject.style.width=this.dropmenuobj.offsetWidth+"px",this.shimobject.style.height=this.dropmenuobj.offsetHeight+"px",this.shimobject.style.left=this.dropmenuobj.style.left,this.shimobject.style.top=this.dropmenuobj.style.top),this.shimobject.style.display="visible"==this.dropmenuobj.style.visibility?"block":"none")},hideshim:function(){this.enableiframeshim&&"undefined"!=typeof this.shimobject&&(this.shimobject.style.display="none")},contains_firefox:function(e,t){for(;t.parentNode;)if((t=t.parentNode)==e)return!0;return!1},dynamichide:function(e){var t=window.event?window.event:e;this.ie&&!this.dropmenuobj.contains(t.toElement)?this.delayhidemenu():this.firefox&&e.currentTarget!=t.relatedTarget&&!this.contains_firefox(t.currentTarget,t.relatedTarget)&&this.delayhidemenu()},delayhidemenu:function(){this.delayhide=setTimeout("cssdropdown.dropmenuobj.style.visibility='hidden'; cssdropdown.hideshim()",this.disappeardelay)},clearhidemenu:function(){"undefined"!=this.delayhide&&clearTimeout(this.delayhide)},startchrome:function(){for(var e=0;e<arguments.length;e++)for(var t=document.getElementById(arguments[e]).getElementsByTagName("a"),i=0;i<t.length;i++)if(t[i].getAttribute("rel")){{t[i].getAttribute("rel")}t[i].onmouseover=function(e){var t="undefined"!=typeof e?e:window.event;cssdropdown.dropit(this,t,this.getAttribute("rel"))}}window.createPopup&&!window.XmlHttpRequest&&(document.write('<IFRAME id="iframeshim"  src="" style="display: none; left: 0; top: 0; z-index: 90; position: absolute; filter: progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)" frameBorder="0" scrolling="no"></IFRAME>'),this.shimobject=document.getElementById("iframeshim"))}};