(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33afd878"],{"43e4":function(e,t,a){"use strict";a("f463")},"64a1":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"image-synthesizer"},[t("Hints",[t("template",{slot:"hintName"},[e._v("图片合成")]),t("template",{slot:"hintInfo"},[t("p",[e._v("基于VueDRR拖拽功能，在其上通过叠加图片、文字等，实现图片的叠加伪合成功能")]),t("p",[e._v("VueDRR：基于vue-draggable-resizable的vue组件，可以实现拖动、拉伸和旋转功能")])])],2),t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:16}},[t("el-card",{attrs:{shadow:"always"}},[t("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[e._v("合成区域")]),t("div",{staticClass:"box-wrapper"},[t("div",{staticClass:"drag-container",style:e.containerStyle},e._l(e.elements,(function(a,i){return t("ElementDrr",{key:i,style:e.elementZIndex(a.type),attrs:{element:a,handles:e.dragHandles(a.type)},on:{updateActiveEle:e.updateActiveEle}},["image"===a.type?t("img",{attrs:{src:a.src,draggable:"false"}}):e._e(),"text"===a.type?t("ImageRichText",{attrs:{element:a,"active-ele-text":e.activeEleText},model:{value:a.text,callback:function(t){e.$set(a,"text",t)},expression:"item.text"}}):e._e()],1)})),1)])])],1),t("el-col",{attrs:{span:8}},[t("el-card",{attrs:{shadow:"always"}},[t("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[e._v("设置区域")]),t("div",{staticClass:"box-content"},[t("el-form",{staticClass:"form-wrapper",attrs:{"label-width":"70px"}},[t("el-form-item",{attrs:{label:"选择底图"}},[t("UploadImage",{attrs:{"btn-name":"选择底图"},on:{"on-success":e.handleSuccess}})],1),t("el-form-item",{attrs:{label:"添加文本"}},[t("el-button",{on:{click:e.addText}},[e._v("添加文本")])],1),t("el-form-item",{attrs:{label:"添加图片"}},[t("UploadImage",{on:{"on-success":e.handleAddImage}})],1),t("el-form-item",{attrs:{label:"删除元素"}},[t("el-button",{attrs:{type:"danger"},on:{click:e.deleteActiveEle}},[e._v("删除元素")])],1)],1),"text"===e.activeEle.type?t("TextSetting",{attrs:{"active-ele-text":e.activeEleText}}):e._e()],1)])],1)],1)],1)},s=[],n=(a("14d9"),a("b522")),l=a("272e"),r=a("4e87"),c=a("892b"),h=a("6b45"),d=a("ed08"),o={name:"ImageSynthesizer",components:{Hints:n["a"],ElementDrr:l["a"],ImageRichText:r["a"],TextSetting:c["a"],UploadImage:h["a"]},data(){return{container:{width:0,height:0,bgImageSrc:"https://cdn.jsdelivr.net/gh/baimingxuan/media-store/images/img01.jpg"},elements:[],activeEle:{},eleNum:0}},computed:{containerStyle(){return{width:this.container.width+"px",height:this.container.height+"px",backgroundImage:"url('"+this.container.bgImageSrc+"')"}},activeEleText(){if("text"===this.activeEle.type)return this.activeEle}},created(){this.getDragContainerSize(1920,1200),this.addText(),this.addImage({active:!1,src:"https://cdn.jsdelivr.net/gh/baimingxuan/media-store/images/img05.jpeg",size:53248,width:132,height:132})},methods:{dragHandles(e){if("text"===e)return["e","w"]},elementZIndex(e){let t=1;switch(e){case"text":t=3;break;case"image":t=2;break}return{zIndex:t}},handleSuccess(e){this.container.bgImageSrc=e;const t=new Image;t.src=e,t.onload=()=>{this.getDragContainerSize(t.width,t.height)}},getDragContainerSize(e,t){const[a,i]=[850,550],s=Object(d["b"])(e,t,a,i);this.container.width=s.width,this.container.height=s.height},addText(){const e=++this.eleNum,t={active:!0,text:"请输入文本",type:"text",tag:"text_"+e,x:300,y:100,w:180,h:36,style:{textAlign:"left",lineHeight:"24px",fontSize:"24px",fontFamily:"微软黑体",fontWeight:400,color:"#f70707",backgroundColor:"#05f8e8",overflow:"hidden"}};this.elements.length>4?this.$message.warning("图片上最多叠加5个元素！"):(this.elements.push(t),this.updateActiveEle(t))},addImage(e){const t=++this.eleNum,a={active:e.active,type:"image",tag:"image_"+t,x:320,y:300,w:parseInt(e.width),h:parseInt(e.height),src:e.src,size:e.size};this.elements.length>4?this.$message.warning("图片上最多叠加5个元素！"):(this.elements.push(a),e.active&&this.updateActiveEle(a))},handleAddImage(e){const t=e.replace("data:image/jpeg;base64,","").length,a=parseInt(t-t/8*2),i=new Image;i.src=e,i.onload=()=>{const t=Object(d["b"])(i.width,i.height,parseInt(this.container.width/4),parseInt(this.container.height/4));this.addImage({active:!0,src:e,size:a,width:t.width,height:t.height})}},updateActiveEle(e){this.activeEle=e},deleteActiveEle(){const e=this.elements.filter(e=>e.tag!==this.activeEle.tag);this.$nextTick(()=>{this.elements=e}),this.updateActiveEle({})}}},g=o,m=(a("43e4"),a("2877")),p=Object(m["a"])(g,i,s,!1,null,null,null);t["default"]=p.exports},f463:function(e,t,a){}}]);