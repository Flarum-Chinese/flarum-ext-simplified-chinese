System.register("suspend/main",["flarum/extend","flarum/app","flarum/components/PermissionGrid"],function(e){"use strict";var n,t,s;return{setters:[function(e){n=e.extend},function(e){t=e["default"]},function(e){s=e["default"]}],execute:function(){t.initializers.add("suspend",function(){n(s.prototype,"moderateItems",function(e){e.add("suspendUsers",{label:"冻结用户",permission:"user.suspend"})})})}}});