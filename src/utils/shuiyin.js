// 定义水印函数
const addWatermark = ({
    container = document.body, // 水印添加到的容器，默认为 body
    width = "200px", // 水印 canvas 的宽度
    height = "100px", // 水印 canvas 的高度
    textAlign = "center", // 水印文字的对齐方式
    textBaseline = "middle", // 水印文字的基线
    font = "16px Microsoft Yahei", // 水印文字的字体
    fillStyle = "rgba(184, 184, 184, 0.6)", // 水印文字的填充样式
    content = "公众号：", // 水印文字的内容
    rotate = -30, // 水印文字的旋转角度
    zIndex = 10000, // 水印的 z-index 值
}) => {
    // 生成水印 canvas
    const canvas = document.createElement("canvas");
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);
    const ctx = canvas.getContext("2d");
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.font = font;
    ctx.fillStyle = fillStyle;
    ctx.rotate((Math.PI / 180) * rotate);
    ctx.fillText(content, parseFloat(width) / 2, parseFloat(height) / 1);
    // 将 canvas 转换为 base64 URL
    const base64Url = canvas.toDataURL("image/png");
    console.log(base64Url);
    const __wm = document.querySelector(".__wm");
    const watermarkDiv = __wm || document.createElement("div");
    const styleStr = `
                position: fixed;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                width: 100%;
                height: 100%;
                z-index: ${zIndex};
                pointer-events: none;
                background: url('${base64Url}') left top repeat;
            `;
    watermarkDiv.setAttribute("style", styleStr);
    watermarkDiv.classList.add("__wm");
    // 则创建一个 div 并设置样式和类名
    if (!__wm) {
        container.style.position = "relative";
        container.insertBefore(watermarkDiv, container.firstChild);
    }
    // 监听容器变化，当容器发生变化时重新调用 addWatermark 函数
    const { MutationObserver } = window;
    if (MutationObserver) {
        let mo = new MutationObserver(function () {
            const __wm = document.querySelector(".__wm");
            // 只在__wm元素变动才重新调用__canvasWM
            if ((__wm && __wm.getAttribute("style") !== styleStr) || !__wm) {
                // 避免一直触发
                mo.disconnect();
                mo = new MutationObserver(() => { });
                addWatermark({
                    container: document.getElementById("app"),
                    width: "200px",
                    height: "100px",
                    textAlign: "center",
                    textBaseline: "middle",
                    font: "16px Microsoft Yahei",
                    fillStyle: "rgba(184, 184, 184, 0.3 )",
                    content,
                    rotate: -30,
                    zIndex: 10000,
                });
            }
        });
        mo.observe(container, {
            attributes: true,
            subtree: true,
            childList: true,
        });
    }
};
export default addWatermark;