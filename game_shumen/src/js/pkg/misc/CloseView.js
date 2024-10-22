"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseView = void 0;
var BaseClass_1 = require("../../_base/BaseClass");
var CloseView = /** @class */ (function (_super) {
    __extends(CloseView, _super);
    function CloseView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloseView.prototype.exec = function () {
        var click = false;
        for (var name_1 in MiscImgData) {
            if (Object.prototype.hasOwnProperty.call(MiscImgData, name_1)) {
                var data = MiscImgData[name_1];
                var isClick = ccf.ecRoot.findImgRandClick("misc", data, true);
                if (isClick) {
                    click = true;
                }
            }
        }
        if (click) {
            sleep(sleepTime100);
            this.exec();
        }
        else {
            ccf.ecRoot.freeScreenshot();
        }
    };
    return CloseView;
}(BaseClass_1.BaseClass));
exports.CloseView = CloseView;
