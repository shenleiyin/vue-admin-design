(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3922ffab"],{1757:function(e,t,a){"use strict";a("3997")},3997:function(e,t,a){},b522:function(e,t,a){"use strict";var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"hints-wrapper"},[t("div",{staticClass:"hint-title"},[t("i",{staticClass:"vue-dsn-icon-tishi"}),t("span",[e._t("hintName")],2)]),t("div",{staticClass:"hint-info"},[e._t("hintInfo")],2)])},s=[],n={name:"Hints"},i=n,r=(a("1757"),a("2877")),d=Object(r["a"])(i,l,s,!1,null,null,null);t["a"]=d.exports},e0e4:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"ele-tree-wrapper"},[t("Hints",[t("template",{slot:"hintName"},[e._v("Tree树形控件")]),t("template",{slot:"hintInfo"},[t("p",[e._v("element-tree：基于elementUI的Tree组件，可用于清晰的层级结构展示信息，并能展开或折叠")]),t("p",[e._v("地址：访问 "),t("el-link",{attrs:{type:"success",href:"https://element.eleme.cn/#/zh-CN/component/tree",target:"_blank"}},[e._v("element-tree")])],1)])],2),t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:8}},[t("el-card",{attrs:{shadow:"always"}},[t("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[e._v("可选择节点")]),t("div",{staticStyle:{height:"360px"}},[t("el-tree",{attrs:{data:e.treeData,"node-key":"id","show-checkbox":"","default-expand-all":"","default-checked-keys":[5],props:e.defaultProps},on:{"check-change":e.handleCheckChange}})],1)])],1),t("el-col",{attrs:{span:8}},[t("el-card",{attrs:{shadow:"always"}},[t("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[e._v("懒加载节点")]),t("div",{staticStyle:{height:"360px"}},[t("el-tree",{attrs:{props:e.props,load:e.loadNode,lazy:"","show-checkbox":""},on:{"check-change":e.handleCheckChange}})],1)])],1),t("el-col",{attrs:{span:8}},[t("el-card",{attrs:{shadow:"always"}},[t("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[e._v("可拖拽节点")]),t("div",{staticStyle:{height:"360px"}},[t("el-tree",{attrs:{data:e.treeData,"node-key":"id","default-expand-all":"",props:e.defaultProps,draggable:""}})],1)])],1)],1)],1)},s=[],n=a("b522");const i=[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2",disabled:!0}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2",children:[{id:11,label:"三级 3-2-1"},{id:12,label:"三级 3-2-2"},{id:13,label:"三级 3-2-3"}]}]}];var r={name:"EleTree",components:{Hints:n["a"]},data(){return{treeData:i,props:{label:"name",children:"zones",isLeaf:"leaf"},defaultProps:{children:"children",label:"label"},count:1}},methods:{loadNode(e,t){return 0===e.level?t([{name:"region1"},{name:"region2"}]):e.level>2?t([]):void setTimeout(()=>{const e=[{name:"zone"+this.count++,leaf:!0},{name:"zone"+this.count++},{name:"zone"+this.count++,leaf:!0}];t(e)},500)},handleCheckChange(e,t,a){console.log(e,t,a)}}},d=r,o=a("2877"),c=Object(o["a"])(d,l,s,!1,null,null,null);t["default"]=c.exports}}]);