(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51c53527"],{"0772":function(t,s,a){"use strict";a("b208")},1757:function(t,s,a){"use strict";a("3997")},"36ff":function(t,s,a){"use strict";a.r(s);var l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"avatar-upload"},[s("Hints",[s("template",{slot:"hintName"},[t._v("图片上传组件")]),s("template",{slot:"hintInfo"},[s("p",[t._v("elementUI-upload：使用elementUI的upload组件，并具有多种列表展示方式")]),s("p",[t._v("地址：访问 "),s("el-link",{attrs:{type:"success",href:"https://element.eleme.cn/2.13/#/zh-CN/component/upload",target:"_blank"}},[t._v("elementUI-upload")])],1)])],2),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("el-card",{attrs:{shadow:"always","body-style":{padding:"0px"}}},[s("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v("图片拖拽上传")]),s("div",{staticClass:"content-box"},[s("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/",drag:"",multiple:""}},[s("i",{staticClass:"el-icon-upload"}),s("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),s("em",[t._v("点击上传")])]),s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg、jpeg、gif、png、bmp文件，且不超过500kb")])])],1)])],1),s("el-col",{attrs:{span:8}},[s("el-card",{attrs:{shadow:"always","body-style":{padding:"0px"}}},[s("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v("图片列表缩略图")]),s("div",{staticClass:"content-box"},[s("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","file-list":t.fileList,"list-type":"picture"}},[s("el-button",{staticClass:"icon-small",attrs:{size:"small",type:"primary"}},[s("i",{staticClass:"el-icon-upload"}),t._v("点击上传")]),s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg、jpeg、gif、png、bmp文件，且不超过500kb")])],1)],1)])],1),s("el-col",{attrs:{span:8}},[s("el-card",{attrs:{shadow:"always","body-style":{padding:"0px"}}},[s("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v("照片墙展示")]),s("div",{staticClass:"content-box"},[s("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":t.handlePreview}},[s("i",{staticClass:"el-icon-plus"})]),s("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(s){t.dialogVisible=s}}},[s("img",{attrs:{width:"100%",src:t.dialogImageUrl}})])],1)])],1)],1)],1)},i=[],e=a("b522"),o={name:"AvatarUpload",components:{Hints:e["a"]},data(){return{filesFormat:".jpg, .jpeg, .gif, .png, .bmp",fileList:[{name:"beautiful-girl.jpg",url:"https://cdn.jsdelivr.net/gh/baimingxuan/media-store/images/img04.jpg"}],dialogImageUrl:"",dialogVisible:!1}},methods:{handlePreview(t){this.dialogImageUrl=t.url,this.dialogVisible=!0}}},n=o,p=(a("0772"),a("2877")),d=Object(p["a"])(n,l,i,!1,null,null,null);s["default"]=d.exports},3997:function(t,s,a){},b208:function(t,s,a){},b522:function(t,s,a){"use strict";var l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"hints-wrapper"},[s("div",{staticClass:"hint-title"},[s("i",{staticClass:"vue-dsn-icon-tishi"}),s("span",[t._t("hintName")],2)]),s("div",{staticClass:"hint-info"},[t._t("hintInfo")],2)])},i=[],e={name:"Hints"},o=e,n=(a("1757"),a("2877")),p=Object(n["a"])(o,l,i,!1,null,null,null);s["a"]=p.exports}}]);