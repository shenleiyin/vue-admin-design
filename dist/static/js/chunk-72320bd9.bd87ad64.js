(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72320bd9"],{"5bc5":function(e,t,a){"use strict";a("e8cc")},ad43:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"export-excel-wrapper"},[t("Hints",[t("template",{slot:"hintName"},[e._v("JS-xlsx插件")]),t("template",{slot:"hintInfo"},[t("p",[e._v("JS-xlsx：由SheetJS出品的一款非常方便的只需要纯JS即可读取和导出excel的工具库，功能强大，支持xlsx、csv、txt等格式")]),t("p",[e._v("github地址：访问 "),t("el-link",{attrs:{type:"success",href:"https://github.com/SheetJS/sheetjs",target:"_blank"}},[e._v("JS-xlsx")])],1)])],2),t("el-card",{attrs:{shadow:"always"}},[t("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{inline:!0,model:e.exportParam,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"文件名:"}},[t("el-input",{attrs:{placeholder:"文件名"},model:{value:e.exportParam.fileName,callback:function(t){e.$set(e.exportParam,"fileName",t)},expression:"exportParam.fileName"}})],1),t("el-form-item",{attrs:{label:"自动宽度:"}},[t("el-radio-group",{model:{value:e.exportParam.autoWidth,callback:function(t){e.$set(e.exportParam,"autoWidth",t)},expression:"exportParam.autoWidth"}},[t("el-radio",{attrs:{label:!0}},[e._v("自动")]),t("el-radio",{attrs:{label:!1}},[e._v("固定")])],1)],1),t("el-form-item",{attrs:{label:"文件类型:"}},[t("el-select",{attrs:{placeholder:"文件类型"},model:{value:e.exportParam.type,callback:function(t){e.$set(e.exportParam,"type",t)},expression:"exportParam.type"}},[t("el-option",{attrs:{value:"xlsx",label:"xlsx"}}),t("el-option",{attrs:{value:"csv",label:"csv"}}),t("el-option",{attrs:{value:"txt",label:"txt"}})],1)],1),t("el-form-item",[t("el-button",{staticStyle:{"margin-left":"30px"},attrs:{type:"primary"},on:{click:e.handleExport}},[e._v("导出Excel")])],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",size:"medium"},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"50",align:"center"}}),t("el-table-column",{attrs:{prop:"id",label:"编号",align:"center"}}),t("el-table-column",{attrs:{prop:"name",label:"姓名",align:"center"}}),t("el-table-column",{attrs:{prop:"sex",label:"性别",align:"center"}}),t("el-table-column",{attrs:{prop:"phone",label:"手机",align:"center"}}),t("el-table-column",{attrs:{prop:"education",label:"学历",align:"center"}}),t("el-table-column",{attrs:{prop:"hobby",label:"爱好",align:"center",width:"300"}})],1)],1)],1)},i=[],o=(a("14d9"),a("d722")),r=a("cd77"),n=a("b522"),s={name:"ExportExcel",components:{Hints:n["a"]},data(){return{listLoading:!0,exportParam:{fileName:"",autoWidth:!0,type:"xlsx"},tableData:[],multipleSelection:[]}},created(){this.fetchData()},methods:{fetchData(){this.listLoading=!0,Object(o["a"])(this.exportParam).then(e=>{const t=e.data;0===t.code&&(t.data.list.forEach(e=>{const{id:t,name:a,sex:l,phone:i,education:o,hobby:r}=e;this.tableData.push({id:t,name:a,sex:l,phone:i,education:o,hobby:r})}),this.listLoading=!1)}).catch(()=>{this.listLoading=!1})},handleSelectionChange(e){this.multipleSelection=e},handleExport(){if(this.multipleSelection.length){const e={header:["编号","姓名","性别","手机","学历","爱好"],key:["id","name","sex","phone","education","hobby"],data:this.multipleSelection,autoWidth:this.exportParam.autoWidth,fileName:this.exportParam.fileName,bookType:this.exportParam.type};r["a"].exportDataToExcel(e),this.$refs.multipleTable.clearSelection()}else this.$message.warning("请勾选要导出的数据项！")}}},c=s,p=(a("5bc5"),a("2877")),m=Object(p["a"])(c,l,i,!1,null,null,null);t["default"]=m.exports},d722:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var l=a("bc3a"),i=a.n(l);function o(e){return i()({url:"https://cdn.jsdelivr.net/gh/baimingxuan/media-store/mock-data/table-list.json",method:"get",param:e})}},e8cc:function(e,t,a){}}]);