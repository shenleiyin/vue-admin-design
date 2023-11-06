(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1031023e"],{"216a4":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"table-classic-wrapper"},[t("Hints",[t("template",{slot:"hintName"},[e._v("Table表格组件")]),t("template",{slot:"hintInfo"},[t("p",[e._v("element-Table：使用elementUI的Table组件，可用于展示多条结构类似的数据，并对其进行相关操作")]),t("p",[e._v("地址：访问 "),t("el-link",{attrs:{type:"success",href:"https://element.eleme.cn/2.13/TableClassic.vue#/zh-CN/component/table",target:"_blank"}},[e._v("element-Table")])],1)])],2),t("el-card",{attrs:{shadow:"always"}},[t("div",{staticClass:"control-btns"},[t("el-button",{attrs:{type:"primary"},on:{click:e.handleCreate}},[e._v("新建数据")]),t("el-button",{attrs:{type:"primary"},on:{click:e.handleImport}},[e._v("导入数据")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.exportVisible=!0}}},[e._v("导出数据")]),t("el-button",{attrs:{type:"danger"},on:{click:e.batchDelete}},[e._v("批量删除")])],1),t("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:e.listQuery,"label-width":"90px"}},[t("el-form-item",{attrs:{label:"编号"}},[t("el-input",{attrs:{placeholder:"编号"},model:{value:e.listQuery.id,callback:function(t){e.$set(e.listQuery,"id",t)},expression:"listQuery.id"}})],1),t("el-form-item",{attrs:{label:"手机"}},[t("el-input",{attrs:{placeholder:"手机"},model:{value:e.listQuery.phone,callback:function(t){e.$set(e.listQuery,"phone",t)},expression:"listQuery.phone"}})],1),t("el-form-item",{attrs:{label:"婚姻状况"}},[t("el-select",{attrs:{placeholder:"婚姻状况"},model:{value:e.listQuery.married,callback:function(t){e.$set(e.listQuery,"married",t)},expression:"listQuery.married"}},[t("el-option",{attrs:{value:0,label:"单身"}}),t("el-option",{attrs:{value:1,label:"未婚"}}),t("el-option",{attrs:{value:2,label:"已婚"}}),t("el-option",{attrs:{value:3,label:"离异"}})],1)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",size:"medium"},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"60"}}),t("el-table-column",{attrs:{prop:"id",label:"编号",align:"center",width:"120",sortable:""}}),t("el-table-column",{attrs:{prop:"name",label:"姓名",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-popover",{attrs:{trigger:"hover",placement:"top"}},[t("p",[e._v("姓名: "+e._s(a.row.name))]),t("p",[e._v("手机: "+e._s(a.row.phone))]),t("p",[e._v("爱好: "+e._s(a.row.hobby))]),t("div",{attrs:{slot:"reference"},slot:"reference"},[t("el-tag",{attrs:{size:"medium"}},[e._v(e._s(a.row.name))])],1)])]}}])}),t("el-table-column",{attrs:{label:"性别",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.sex))]}}])}),t("el-table-column",{attrs:{prop:"phone",label:"手机",align:"center"}}),t("el-table-column",{attrs:{prop:"education",label:"学历",align:"center"}}),t("el-table-column",{attrs:{label:"婚姻状况",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-select",{staticStyle:{width:"80px"},on:{change:function(t){return e.selectChange(a.row)}},model:{value:a.row.married,callback:function(t){e.$set(a.row,"married",t)},expression:"scope.row.married"}},[t("el-option",{attrs:{value:0,label:"单身"}}),t("el-option",{attrs:{value:1,label:"未婚"}}),t("el-option",{attrs:{value:2,label:"已婚"}}),t("el-option",{attrs:{value:3,label:"离异"}})],1)]}}])}),t("el-table-column",{attrs:{label:"禁止编辑",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-switch",{on:{change:function(t){return e.stateChange(a.row)}},model:{value:a.row.forbid,callback:function(t){e.$set(a.row,"forbid",t)},expression:"scope.row.forbid"}})]}}])}),t("el-table-column",{attrs:{prop:"hobby",label:"爱好",align:"center",width:"300","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"操作",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"mini",disabled:a.row.forbid},on:{click:function(t){return e.handleEdit(a.$index,a.row)}}},[e._v("编辑")]),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(a.$index,a.row)}}},[e._v("删除")])]}}])})],1),t("Pagination",{attrs:{total:e.total,page:e.listQuery.currentPage,limit:e.listQuery.pageSize},on:{"update:page":function(t){return e.$set(e.listQuery,"currentPage",t)},"update:limit":function(t){return e.$set(e.listQuery,"pageSize",t)},pagination:e.fetchData}}),t("el-dialog",{staticClass:"dialog-form",attrs:{title:"编辑",visible:e.formVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(t){e.formVisible=t}}},[t("el-form",{ref:"dialogForm",attrs:{model:e.dialogForm,rules:e.formRules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"姓名：",prop:"name"}},[t("el-input",{model:{value:e.dialogForm.name,callback:function(t){e.$set(e.dialogForm,"name",t)},expression:"dialogForm.name"}})],1),t("el-form-item",{attrs:{label:"手机：",prop:"phone"}},[t("el-input",{model:{value:e.dialogForm.phone,callback:function(t){e.$set(e.dialogForm,"phone",t)},expression:"dialogForm.phone"}})],1),t("el-form-item",{attrs:{label:"婚姻状况：",prop:"married"}},[t("el-select",{model:{value:e.dialogForm.married,callback:function(t){e.$set(e.dialogForm,"married",t)},expression:"dialogForm.married"}},[t("el-option",{attrs:{value:0,label:"单身"}}),t("el-option",{attrs:{value:1,label:"未婚"}}),t("el-option",{attrs:{value:2,label:"已婚"}}),t("el-option",{attrs:{value:3,label:"离异"}})],1)],1),t("el-form-item",{attrs:{label:"爱好：",prop:"hobby"}},[t("el-checkbox-group",{model:{value:e.dialogForm.hobby,callback:function(t){e.$set(e.dialogForm,"hobby",t)},expression:"dialogForm.hobby"}},[t("el-checkbox",{attrs:{label:"羽毛球",name:"hobby"}}),t("el-checkbox",{attrs:{label:"乒乓球",name:"hobby"}}),t("el-checkbox",{attrs:{label:"篮球",name:"hobby"}}),t("el-checkbox",{attrs:{label:"排球",name:"hobby"}}),t("el-checkbox",{attrs:{label:"网球",name:"hobby"}}),t("el-checkbox",{attrs:{label:"旱冰",name:"hobby"}}),t("el-checkbox",{attrs:{label:"滑雪",name:"hobby"}}),t("el-checkbox",{attrs:{label:"跳高",name:"hobby"}}),t("el-checkbox",{attrs:{label:"冲浪",name:"hobby"}})],1)],1),t("div",{staticClass:"footer-item"},[t("el-button",{on:{click:e.cancleForm}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary",disabled:e.isSubmit},on:{click:function(t){return e.submitForm("dialogForm")}}},[e._v("确 定")])],1)],1)],1),t("el-dialog",{attrs:{title:"导入数据",visible:e.importVisible,width:"20%"},on:{"update:visible":function(t){e.importVisible=t}}},[t("div",{staticClass:"upload-box"},[t("span",[e._v("选择文件：")]),t("Upload",{attrs:{"files-format":e.filesFormat}},[t("i",{staticClass:"vue-dsn-icon-upload"}),e._v("上传文件 ")])],1),t("div",{staticClass:"hints"},[e._v("TIP：请选择要导出数据的格式。")]),t("span",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.cancleImport}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.confirmImport}},[e._v("确 定")])],1)]),t("el-dialog",{attrs:{title:"导出数据",visible:e.exportVisible,width:"30%"},on:{"update:visible":function(t){e.exportVisible=t}}},[t("div",{staticClass:"export-data"},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.exportTable("xlsx")}}},[e._v("EXCEL格式")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.exportTable("csv")}}},[e._v("CSV格式")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.exportTable("txt")}}},[e._v("TXT格式")])],1),t("div",{staticClass:"hints"},[e._v("TIP：请选择要导出数据的格式。")])])],1)],1)},i=[],o=a("d722"),r=a("cd77"),n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"pagination-wrapper"},[t("el-pagination",{attrs:{background:e.background,"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,total:e.total,layout:e.layout},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},s=[],c={name:"Pagination",props:{page:{type:Number,default:1,required:!0},limit:{type:Number,default:10,required:!0},background:{type:Boolean,default:!0},pageSizes:{type:Array,default:()=>[10,15,20,50]},total:{type:Number,default:0,required:!0},layout:{type:String,default:"total, prev, pager, next, sizes, jumper"}},computed:{currentPage:{get(){return this.page},set(e){this.$emit("update:page",e)}},pageSize:{get(){return this.limit},set(e){this.emit("update:limit",e)}}},methods:{handleSizeChange(e){this.$emit("pagination",{page:this.currentPage,limit:e})},handleCurrentChange(e){this.$emit("pagination",{page:e,limit:this.pageSize})}}},u=c,p=(a("a35d"),a("2877")),d=Object(p["a"])(u,n,s,!1,null,null,null),m=d.exports,b=function(){var e=this,t=e._self._c;return t("el-upload",{staticClass:"files-upload",attrs:{action:e.url,accept:e.filesFormat,multiple:e.isMultiple,"show-file-list":e.isShowList,"on-success":e.uploadSuccess,"on-error":e.uploadError}},[e._t("default")],2)},h=[],g={name:"Upload",props:{url:{type:String,default:""},filesFormat:{type:String,default:""},isMultiple:{type:Boolean,default:!1},isShowList:{type:Boolean,default:!1}},methods:{uploadSuccess(e,t){if([200,0].includes(e.code)){const t=e.data;this.$emit("on-success",t)}else this.$emit("on-error"),this.$message.error(e.msg)},uploadError(e,t){this.$emit("on-error")}}},f=g,v=(a("e768"),Object(p["a"])(f,b,h,!1,null,null,null)),y=v.exports,x=a("b522"),k={name:"Table",components:{Pagination:m,Upload:y,Hints:x["a"]},data(){return{listLoading:!0,listQuery:{id:void 0,phone:void 0,married:void 0,currentPage:1,pageSize:10},dialogForm:{name:void 0,phone:void 0,married:void 0,hobby:[]},total:0,tableData:[],multipleSelection:[],formVisible:!1,formRules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^1[3456789]\d{9}$/,message:"请输入正确的手机号",trigger:"blur"}]},isSubmit:!1,importVisible:!1,filesFormat:".txt, .csv, .xls, .xlsx",exportVisible:!1}},created(){this.fetchData()},methods:{handleSelectionChange(e){this.multipleSelection=e},handleCreate(){this.formVisible=!0,this.dialogForm.name=void 0,this.dialogForm.phone=void 0,this.dialogForm.married=void 0,this.dialogForm.hobby=[]},handleEdit(e,t){console.log(e,t),this.formVisible=!0,this.dialogForm.name=t.name,this.dialogForm.phone=t.phone,this.dialogForm.married=t.married,this.dialogForm.hobby=t.hobby.split("、")},handleDelete(e,t){console.log(e,t),this.$confirm("此操作将删除选中数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$message({type:"success",message:"删除成功!"})}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})},batchDelete(){this.multipleSelection.length<1?this.$message({message:"请先选择要删除的数据！",type:"warning"}):this.handleDelete()},handleClose(){this.formVisible=!1,this.$refs.dialogForm.resetFields()},fetchData(){this.listLoading=!0,Object(o["a"])(this.listQuery).then(e=>{const t=e.data;0===t.code&&(this.total=t.data.total,this.tableData=t.data.list,this.listLoading=!1)}).catch(()=>{this.listLoading=!1})},onSubmit(){this.listQuery.currentPage=1,this.fetchData()},handleImport(){this.importVisible=!0},submitForm(e){this.$refs[e].validate(e=>{if(!e)return this.isSubmit=!1,!1;this.formVisible=!1})},cancleForm(){this.$refs.dialogForm.resetFields(),this.formVisible=!1},confirmImport(){this.importVisible=!1},cancleImport(){this.importVisible=!1},exportTable(e){if(this.tableData.length){const t={header:["编号","姓名","性别","手机","学历","婚姻状况","禁止编辑","爱好"],key:["id","name","sex","phone","education","married","forbid","hobby"],data:this.tableData,autoWidth:!0,fileName:"综合表格",bookType:e};r["a"].exportDataToExcel(t),this.exportVisible=!1}},selectChange(e){},stateChange(e){}}},w=k,_=(a("74c1"),Object(p["a"])(w,l,i,!1,null,null,null));t["default"]=_.exports},"74c1":function(e,t,a){"use strict";a("c0e0")},"88f6":function(e,t,a){},9290:function(e,t,a){},a35d:function(e,t,a){"use strict";a("9290")},c0e0:function(e,t,a){},d722:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var l=a("bc3a"),i=a.n(l);function o(e){return i()({url:"https://cdn.jsdelivr.net/gh/baimingxuan/media-store/mock-data/table-list.json",method:"get",param:e})}},e768:function(e,t,a){"use strict";a("88f6")}}]);