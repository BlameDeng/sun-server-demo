(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70ec5b5e"],{"2be1":function(t,e,n){"use strict";var s=n("acd5"),a=n.n(s);a.a},4015:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user"},[n("nav",{staticClass:"user-navbar"},[n("div",{staticClass:"user-avatar"},[n("x-icon",{staticClass:"icon",attrs:{name:"avatar"}}),t.user?n("span",[t._v(t._s(t.user.nickyname||t.user.username))]):t._e()],1),n("div",{staticClass:"index",class:{active:"Index"===t.currentComponent},on:{click:function(e){t.changeComponent("Index")}}},[t._v("我的首页")]),n("div",{staticClass:"account",class:{active:"Account"===t.currentComponent},on:{click:function(e){t.changeComponent("Account")}}},[t._v("账户设置")])]),n("main",{staticClass:"main"},[n("keep-alive",[n(t.currentComponent,{tag:"component"})],1)],1)])},a=[],i=n("61e6"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[t.user?n("div",{staticClass:"profile"},[n("h4",{staticClass:"title"},[t._v("个人资料")]),n("div",{staticClass:"user-info"},[n("p",[n("label",[t._v("用户名：")]),t._v("\n                "+t._s(t.user.username)+"\n            ")]),n("p",[n("label",[t._v("昵称：")]),n("sun-input",{staticStyle:{width:"240px"},model:{value:t.nickyname,callback:function(e){t.nickyname=e},expression:"nickyname"}})],1),n("p",[n("label",[t._v("性别：")]),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"gender"}],attrs:{type:"radio",value:"male"},domProps:{checked:t._q(t.gender,"male")},on:{change:function(e){t.gender="male"}}}),t._v("男")]),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"gender"}],attrs:{type:"radio",value:"female"},domProps:{checked:t._q(t.gender,"female")},on:{change:function(e){t.gender="female"}}}),t._v("女")])])]),n("div",{staticClass:"btn",attrs:{role:"button"},on:{click:t.onSave}},[t._v("保存")])]):t._e(),n("h4",{staticClass:"title"},[t._v("\n        猜你喜欢\n    ")]),n("div",{staticClass:"recommend"},[t.recommend&&t.recommend.length?t._l(t.recommend,function(e){return n("div",{key:e.id,staticClass:"sku-wrapper"},[n("sun-sku",{attrs:{product:e},on:{"add-to-cart":function(e){t.handleAddToCart(e)}}})],1)}):t._e()],2)])},o=[],r=n("7a07"),u=n("fad4"),d=n("fda6"),l={name:"Index",mixins:[d["a"]],components:{sunInput:r["a"],sunSku:u["a"]},data:function(){return{nickyname:"",gender:""}},watch:{user:{handler:function(t){t&&(this.nickyname=t.nickyname,this.gender=t.gender||"")},deep:!0,immediate:!0}},methods:{onSave:function(){this.changeProfile({nickyname:this.nickyname,gender:this.gender})},handleAddToCart:function(t){this.addToCart({count:1,id:t.id})}}},p=l,m=(n("718c"),n("2877")),f=Object(m["a"])(p,c,o,!1,null,"1599d296",null);f.options.__file="index.vue";var h=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"account"},[n("div",{staticClass:"title-wrapper"},[n("h4",{staticClass:"title",class:{active:"password"===t.currentTab}},[n("span",{on:{click:function(e){t.onClickTab("password")}}},[t._v("\n                修改密码\n            ")])]),n("h4",{staticClass:"title",class:{active:"address"===t.currentTab}},[n("span",{on:{click:function(e){t.onClickTab("address")}}},[t._v("\n                我的收货地址\n            ")])])]),"password"===t.currentTab?n("div",{staticClass:"password"},[n("p",[n("label",[t._v("原密码：")]),n("sun-input",{staticStyle:{width:"240px"},attrs:{type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("p",[n("label",[t._v("新密码：")]),n("sun-input",{staticStyle:{width:"240px"},attrs:{type:"password"},model:{value:t.newPassword,callback:function(e){t.newPassword=e},expression:"newPassword"}})],1),n("p",[n("label",[t._v("确认新密码：")]),n("sun-input",{staticStyle:{width:"240px"},attrs:{type:"password"},model:{value:t.newPasswordConfirm,callback:function(e){t.newPasswordConfirm=e},expression:"newPasswordConfirm"}})],1)]):n("div",{staticClass:"address"},[n("div",{staticClass:"wrapper"},[n("p",[n("label",[t._v("收货人：")]),n("sun-input",{staticStyle:{width:"200px"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("p",[n("label",[t._v("手机号码：")]),n("sun-input",{staticStyle:{width:"200px"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)]),n("p",[n("label",[t._v("地址信息：")]),n("sun-input",{staticStyle:{width:"500px"},attrs:{placeholder:"省/市/区"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),n("p",[n("label",[t._v("详细地址：")]),n("sun-input",{staticStyle:{width:"500px"},attrs:{placeholder:"详细地址，如：门牌、街道、村镇"},model:{value:t.detail,callback:function(e){t.detail=e},expression:"detail"}})],1),t.receiver?n("p",[t._v("\n            现有收货地址："),n("span",[t._v(t._s((t.receiver.name||"")+" "+(t.receiver.phone||"")+" "+(t.receiver.address||"")+" "+(t.receiver.detail||"")))])]):t._e()]),n("div",{staticClass:"btn",attrs:{role:"button"},on:{click:t.onSave}},[t._v("保存")])])},g=[],w=(n("7f7f"),n("ac6a"),{name:"Account",mixins:[d["a"]],components:{sunInput:r["a"]},data:function(){return{currentTab:"password",password:"",newPassword:"",newPasswordConfirm:"",name:"",phone:"",address:"",detail:""}},mounted:function(){this.getReceiver()},methods:{onClickTab:function(t){this.currentTab=t},onSave:function(){"password"===this.currentTab?this.onChangePassword():"address"===this.currentTab&&this.changeAddress()},onChangePassword:function(){var t=this,e=/.{6,18}/;if(this.password&&this.newPassword&&this.newPasswordConfirm)if(this.newPassword!==this.password)if(this.newPassword===this.newPasswordConfirm){var n=!0,s=[this.password,this.newPassword,this.newPasswordConfirm];s.forEach(function(t){e.test(t)||(n=e.test(t))}),n?this.changePassword({username:this.user.username,password:this.password,newPassword:this.newPassword}).then(function(e){t.$success({message:"密码修改成功"}),t.password="",t.newPassword="",t.newPasswordConfirm=""}).catch(function(e){t.$error({message:e.msg})}):this.$info({message:"密码为6到18位字符！"})}else this.$info({message:"两次输入的新密码不一致！"});else this.$info({message:"新密码不能与原密码相同！"});else this.$info({message:"密码不能为空！"})},changeAddress:function(){var t=this;this.name&&this.phone&&this.address&&this.detail?/^[\d]+$/.test(this.phone)?this.updateReceiver({name:this.name,phone:this.phone,address:this.address,detail:this.detail}).then(function(e){t.$success({message:"修改收货人信息成功"})}).catch(function(e){t.$error({message:e.msg})}):this.$info({message:"手机号码必须为数字！"}):this.$info({message:"联系人、手机号码、地址不能为空！"})}}}),C=w,_=(n("2be1"),Object(m["a"])(C,v,g,!1,null,"5fdbf902",null));_.options.__file="account.vue";var b=_.exports,k={name:"User",mixins:[d["a"]],components:{xIcon:i["a"],Index:h,Account:b},data:function(){return{currentComponent:"Index"}},watch:{user:{handler:function(t,e){t&&!e?this.getRecommend({gender:t.gender||""}):t&&t.gender!==e.gender&&this.getRecommend({gender:t.gender||""})},deep:!0,immediate:!0},isLogin:{handler:function(t){!t&&this.$router.push("/login")},immediate:!0}},mounted:function(){document.title="账户管理"},methods:{changeComponent:function(t){this.currentComponent=t}}},x=k,S=(n("427c"),Object(m["a"])(x,s,a,!1,null,"7def0198",null));S.options.__file="user.vue";e["default"]=S.exports},"427c":function(t,e,n){"use strict";var s=n("5dd2"),a=n.n(s);a.a},"50a5":function(t,e,n){},"5dd2":function(t,e,n){},"718c":function(t,e,n){"use strict";var s=n("787f"),a=n.n(s);a.a},"787f":function(t,e,n){},"7a07":function(t,e,n){"use strict";var s=function(){var t,e,n=this,s=n.$createElement,a=n._self._c||s;return a("div",{staticClass:"sun-input"},[n.icon?a("x-icon",{staticClass:"icon",class:{focus:n.focus||n.value},attrs:{name:n.icon}}):n._e(),a("input",{class:(t={},t["no-icon"]=!n.icon,t),attrs:{type:n.type},domProps:{value:n.value},on:{focus:n.onFocus,blur:n.onBlur,input:n.onInput,change:n.onChange}}),n.placeholder?a("label",{class:(e={focus:n.focus||n.value},e["no-icon"]=!n.icon,e)},[n._v(n._s(n.placeholder))]):n._e()],1)},a=[],i=n("61e6"),c={name:"sunInput",components:{xIcon:i["a"]},props:{placeholder:String,value:String,icon:String,type:{type:String,default:"text"}},data:function(){return{focus:!1}},methods:{onFocus:function(t){this.focus=!0,this.$emit("focus",t)},onBlur:function(t){this.focus=!1,this.$emit("blur",t)},onInput:function(t){this.$emit("input",t.target.value)},onChange:function(t){this.$emit("change",t)}}},o=c,r=(n("976f"),n("2877")),u=Object(r["a"])(o,s,a,!1,null,"77e11649",null);u.options.__file="input.vue";e["a"]=u.exports},"7f7f":function(t,e,n){var s=n("86cc").f,a=Function.prototype,i=/^\s*function ([^ (]*)/,c="name";c in a||n("9e1e")&&s(a,c,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},8738:function(t,e,n){},"976f":function(t,e,n){"use strict";var s=n("50a5"),a=n.n(s);a.a},ac6a:function(t,e,n){for(var s=n("cadf"),a=n("0d58"),i=n("2aba"),c=n("7726"),o=n("32e9"),r=n("84f2"),u=n("2b4c"),d=u("iterator"),l=u("toStringTag"),p=r.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=a(m),h=0;h<f.length;h++){var v,g=f[h],w=m[g],C=c[g],_=C&&C.prototype;if(_&&(_[d]||o(_,d,p),_[l]||o(_,l,g),r[g]=p,w))for(v in s)_[v]||i(_,v,s[v],!0)}},acd5:function(t,e,n){},ee6d:function(t,e,n){"use strict";var s=n("8738"),a=n.n(s);a.a},fad4:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sun-sku"},[n("div",{staticClass:"show-img",on:{click:function(e){t.onDetail(t.product)}}},[t.product.discount<t.product.price?n("div",{staticClass:"icon-wrapper"},[n("x-icon",{staticClass:"icon",attrs:{name:"sale"}})],1):t._e(),"main"===t.currentImg?n("img",{attrs:{src:t.product.main_image}}):n("img",{attrs:{src:t.product.sub_image}})]),n("div",{staticClass:"focus-img"},[n("div",{staticClass:"cover",class:{active:"main"===t.currentImg},on:{mouseenter:function(e){t.currentImg="main"}}},[n("img",{attrs:{src:t.product.main_image}})]),n("div",{staticClass:"feature",class:{active:"sub"===t.currentImg},on:{mouseenter:function(e){t.currentImg="sub"}}},[n("img",{attrs:{src:t.product.sub_image}})])]),n("div",{staticClass:"goods-price"},[n("div",{staticClass:"price"},[n("span",[t._v("￥")]),n("span",{staticClass:"number"},[t._v(t._s(t.product.price))]),n("span",[t._v(".00")])]),t.product.discount<t.product.price?n("div",{staticClass:"origin-price"},[n("span",[t._v("￥"+t._s(t.product.price)+".00")])]):t._e()]),n("div",{staticClass:"title",on:{click:function(e){t.onDetail(t.product)}}},[t._v("\n        "+t._s(t.product.title)+"\n    ")]),n("div",{staticClass:"actions"},[n("div",{staticClass:"detail",attrs:{role:"button"},on:{click:function(e){t.onDetail(t.product)}}},[n("x-icon",{staticClass:"icon",attrs:{name:"detail"}}),t._v("\n            查看详情\n        ")],1),n("div",{staticClass:"add-to-cart",attrs:{role:"button"},on:{click:function(e){t.onAddToCart(t.product)}}},[n("x-icon",{staticClass:"icon",attrs:{name:"cart"}}),t._v("\n            加入购物车\n        ")],1)])])},a=[],i=n("61e6"),c={name:"SunSku",components:{xIcon:i["a"]},props:{product:{type:Object,required:!0}},data:function(){return{currentImg:"main"}},methods:{onDetail:function(t){window.open("/product.html?id=".concat(t.id),"_blank")},onAddToCart:function(t){this.$emit("add-to-cart",t)}}},o=c,r=(n("ee6d"),n("2877")),u=Object(r["a"])(o,s,a,!1,null,"00fa731a",null);u.options.__file="sku.vue";e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-70ec5b5e.bb4661ed.js.map