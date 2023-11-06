(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07b02aa2"],{1757:function(e,l,a){"use strict";a("3997")},"1c63":function(e,l,a){"use strict";a.r(l);var t=function(){var e=this,l=e._self._c;return l("div",{staticClass:"form-list-wrapper"},[l("Hints",[l("template",{slot:"hintName"},[e._v("Form表单组件")]),l("template",{slot:"hintInfo"},[l("p",[e._v("element-Form：使用elementUI的Form组件，可用以收集、校验和提交数据等操作")]),l("p",[e._v("地址：访问 "),l("el-link",{attrs:{type:"success",href:"https://element.eleme.cn/2.13/#/zh-CN/component/form",target:"_blank"}},[e._v("element-Form")])],1)])],2),l("el-card",{attrs:{shadow:"always"}},[l("el-form",{ref:"ruleForm",staticClass:"form-list",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"230px"}},[l("el-form-item",{attrs:{label:"输入框（长度限制）：",prop:"inputLimit"}},[l("el-input",{attrs:{maxlength:"15","show-word-limit":"",placeholder:"请输入"},model:{value:e.ruleForm.inputLimit,callback:function(l){e.$set(e.ruleForm,"inputLimit",l)},expression:"ruleForm.inputLimit"}})],1),l("el-form-item",{attrs:{label:"纯数字（纯数字）：",prop:"inputNum"}},[l("el-input",{attrs:{maxlength:"11",placeholder:"请输入数字"},model:{value:e.ruleForm.inputNum,callback:function(l){e.$set(e.ruleForm,"inputNum",e._n(l))},expression:"ruleForm.inputNum"}})],1),l("el-form-item",{attrs:{label:"输入框（密码隐藏）：",prop:"password"}},[l("el-input",{attrs:{placeholder:"请输入密码",maxlength:"16","show-password":""},model:{value:e.ruleForm.password,callback:function(l){e.$set(e.ruleForm,"password",l)},expression:"ruleForm.password"}})],1),l("el-form-item",{attrs:{label:"select选择器（自定义）：",required:""}},[l("el-col",{attrs:{span:10}},[l("el-form-item",{attrs:{prop:"select1"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.select1,callback:function(l){e.$set(e.ruleForm,"select1",l)},expression:"ruleForm.select1"}},e._l(e.selectData,(function(a){return l("el-option",{key:a.value,attrs:{label:a.label,value:a.value}},[l("span",{staticStyle:{float:"left"}},[e._v(e._s(a.label))]),l("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(a.value))])])})),1)],1)],1),l("el-col",{staticClass:"tip-title",attrs:{span:4}},[e._v("（可搜索）")]),l("el-col",{attrs:{span:10}},[l("el-form-item",{attrs:{prop:"select2"}},[l("el-select",{attrs:{filterable:"",placeholder:"请选择或输入"},model:{value:e.ruleForm.select2,callback:function(l){e.$set(e.ruleForm,"select2",l)},expression:"ruleForm.select2"}},e._l(e.selectData,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),l("el-form-item",{attrs:{label:"日期和时间选择器：",required:""}},[l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{prop:"dateVal"}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.dateVal,callback:function(l){e.$set(e.ruleForm,"dateVal",l)},expression:"ruleForm.dateVal"}})],1)],1),l("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{prop:"timeVal"}},[l("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.ruleForm.timeVal,callback:function(l){e.$set(e.ruleForm,"timeVal",l)},expression:"ruleForm.timeVal"}})],1)],1)],1),l("el-form-item",{attrs:{label:"switch开关（隐藏下面表单）：",prop:"switch"}},[l("el-switch",{model:{value:e.ruleForm.switch,callback:function(l){e.$set(e.ruleForm,"switch",l)},expression:"ruleForm.switch"}})],1),e.ruleForm.switch?l("div",[l("el-form-item",{attrs:{label:"滑块条（初始值）：",prop:"slider"}},[l("el-slider",{model:{value:e.ruleForm.slider,callback:function(l){e.$set(e.ruleForm,"slider",l)},expression:"ruleForm.slider"}})],1),l("el-form-item",{attrs:{label:"级联选择器（自定义）："}},[l("el-col",{attrs:{span:10}},[l("el-form-item",{attrs:{prop:"cascader1"}},[l("el-cascader",{attrs:{options:e.cascaderData,props:{expandTrigger:"hover"}},scopedSlots:e._u([{key:"default",fn:function({node:a,data:t}){return[l("span",[e._v(e._s(t.label))]),a.isLeaf?e._e():l("span",[e._v("("+e._s(t.children.length)+")")])]}}],null,!1,1207422022),model:{value:e.ruleForm.cascader1,callback:function(l){e.$set(e.ruleForm,"cascader1",l)},expression:"ruleForm.cascader1"}})],1)],1),l("el-col",{staticClass:"tip-title",attrs:{span:4}},[e._v("（懒加载）")]),l("el-col",{attrs:{span:10}},[l("el-form-item",{attrs:{prop:"cascader2"}},[l("el-cascader",{attrs:{props:e.customProps},model:{value:e.ruleForm.cascader2,callback:function(l){e.$set(e.ruleForm,"cascader2",l)},expression:"ruleForm.cascader2"}})],1)],1)],1),l("el-form-item",{attrs:{label:"单选框（带禁止）：",prop:"radio"}},[l("el-radio-group",{model:{value:e.ruleForm.radio,callback:function(l){e.$set(e.ruleForm,"radio",l)},expression:"ruleForm.radio"}},[l("el-radio",{attrs:{label:"免费"}}),l("el-radio",{attrs:{label:"收费"}}),l("el-radio",{attrs:{label:"赞助"}}),l("el-radio",{attrs:{label:"线上",disabled:""}}),l("el-radio",{attrs:{label:"线下",disabled:""}})],1)],1),l("el-form-item",{attrs:{label:"多选框（带禁止）：",prop:"checkbox"}},[l("el-checkbox-group",{model:{value:e.ruleForm.checkbox,callback:function(l){e.$set(e.ruleForm,"checkbox",l)},expression:"ruleForm.checkbox"}},[l("el-checkbox",{attrs:{label:"游泳"}}),l("el-checkbox",{attrs:{label:"跑步"}}),l("el-checkbox",{attrs:{label:"健身"}}),l("el-checkbox",{attrs:{label:"阅读"}}),l("el-checkbox",{attrs:{label:"电影",disabled:""}}),l("el-checkbox",{attrs:{label:"音乐",disabled:""}})],1)],1),l("el-form-item",{attrs:{label:"文本域（长度限制）：",prop:"content"}},[l("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"请输入内容",maxlength:"50","show-word-limit":""},model:{value:e.ruleForm.content,callback:function(l){e.$set(e.ruleForm,"content",l)},expression:"ruleForm.content"}})],1)],1):e._e(),l("el-form-item",{staticClass:"submit-box"},[l("el-button",{attrs:{type:"primary"},on:{click:function(l){return e.submitForm("ruleForm")}}},[e._v("提交")]),l("el-button",{on:{click:function(l){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)],1)},r=[],s=a("b522");const o=[{value:"Beijing",label:"北京"},{value:"Shanghai",label:"上海"},{value:"Nanjing",label:"南京"},{value:"Chengdu",label:"成都"},{value:"Shenzhen",label:"深圳"},{value:"Guangzhou",label:"广州"}],i=[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"layout 布局"},{value:"color",label:"Color 色彩"},{value:"typography",label:"Typography 字体"},{value:"icon",label:"Icon 图标"},{value:"button",label:"Button 按钮"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio 单选框"},{value:"checkbox",label:"Checkbox 多选框"},{value:"input",label:"Input 输入框"},{value:"input-number",label:"InputNumber 计数器"},{value:"select",label:"Select 选择器"},{value:"cascader",label:"Cascader 级联选择器"},{value:"switch",label:"Switch 开关"},{value:"slider",label:"Slider 滑块"},{value:"time-picker",label:"TimePicker 时间选择器"},{value:"date-picker",label:"DatePicker 日期选择器"},{value:"datetime-picker",label:"DateTimePicker 日期时间选择器"},{value:"upload",label:"Upload 上传"},{value:"rate",label:"Rate 评分"},{value:"form",label:"Form 表单"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table 表格"},{value:"tag",label:"Tag 标签"},{value:"progress",label:"Progress 进度条"},{value:"tree",label:"Tree 树形控件"},{value:"pagination",label:"Pagination 分页"},{value:"badge",label:"Badge 标记"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert 警告"},{value:"loading",label:"Loading 加载"},{value:"message",label:"Message 消息提示"},{value:"message-box",label:"MessageBox 弹框"},{value:"notification",label:"Notification 通知"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"NavMenu 导航菜单"},{value:"tabs",label:"Tabs 标签页"},{value:"breadcrumb",label:"Breadcrumb 面包屑"},{value:"dropdown",label:"Dropdown 下拉菜单"},{value:"steps",label:"Steps 步骤条"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog 对话框"},{value:"tooltip",label:"Tooltip 文字提示"},{value:"popover",label:"Popover 弹出框"},{value:"card",label:"Card 卡片"},{value:"carousel",label:"Carousel 走马灯"},{value:"collapse",label:"Collapse 折叠面板"}]}]},{value:"ziyuan",label:"资源",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"组件交互文档"}]}];var u={name:"Form",components:{Hints:s["a"]},data(){return{ruleForm:{inputLimit:"",inputNum:"",select1:"",select2:"",dateVal:"",timeVal:"",switch:!0,slider:32,cascader1:[],cascader2:[],radio:"线下",checkbox:["音乐"],content:""},selectData:o,cascaderData:i,colors:["#99A9BF","#F7BA2A","#FF9900"],customProps:{lazy:!0,lazyLoad(e,l){let a=0;const{level:t}=e;setTimeout(()=>{const e=Array.from({length:t+1}).map(e=>({value:++a,label:"选项"+a,leaf:t>=2}));l(e)},1e3)}},rules:{inputLimit:[{required:!0,message:"内容不能为空",trigger:"blur"}],inputNum:[{required:!0,message:"内容不能为空",trigger:"blur"},{type:"number",message:"内容必须为数字值",trigger:"blur"}],password:[{required:!0,message:"内容不能为空",trigger:"blur"},{min:6,max:16,message:"密码长度在 6 到 16 个字符",trigger:["blur","change"]},{pattern:/^[a-zA-Z0-9_-]{6,16}$/,message:"密码只支持字母、数字和下划线",trigger:["blur","change"]}],select1:[{required:!0,message:"请选择",trigger:"change"}],select2:[{required:!0,message:"请选择",trigger:"change"}],dateVal:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],timeVal:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}]}}},methods:{submitForm(e){this.$refs[e].validate(e=>{if(!e)return console.log("提交失败!"),!1;alert("提交成功!")})},resetForm(e){this.$refs[e].resetFields()}}},c=u,n=(a("f106"),a("2877")),m=Object(n["a"])(c,t,r,!1,null,null,null);l["default"]=m.exports},3997:function(e,l,a){},b522:function(e,l,a){"use strict";var t=function(){var e=this,l=e._self._c;return l("div",{staticClass:"hints-wrapper"},[l("div",{staticClass:"hint-title"},[l("i",{staticClass:"vue-dsn-icon-tishi"}),l("span",[e._t("hintName")],2)]),l("div",{staticClass:"hint-info"},[e._t("hintInfo")],2)])},r=[],s={name:"Hints"},o=s,i=(a("1757"),a("2877")),u=Object(i["a"])(o,t,r,!1,null,null,null);l["a"]=u.exports},b94b:function(e,l,a){},f106:function(e,l,a){"use strict";a("b94b")}}]);