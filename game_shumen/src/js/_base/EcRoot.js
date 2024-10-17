const DebugImgPath = "/sdcard/001debug/";

/**
 * 获取实际xy坐标
 * @param x
 * @param y
 * @returns {{x, y}}
 */
function getXy(x, y) {
    return {x: x, y: y};
}

/**
 * 获取随机点击坐标
 * @param x
 * @param y
 * @param width
 * @param height
 */
function randXy(x, y, width, height) {

}

function saveToDebug(img, name) {
    let url = DebugImgPath + name + ".png";
    let result = image.saveTo(img, url);
    if (result) {
        loggerD("保存截图成功：" + url);
    } else {
        loggerD("保存截图失败：" + result);
    }
}

function loggerD(msg) {
    logd(msg);
}

function loggerE(msg) {
    loge(msg);
}