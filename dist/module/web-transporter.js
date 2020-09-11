var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Transporter } from './provider/transporter';
var WebTransporter = /** @class */ (function (_super) {
    __extends(WebTransporter, _super);
    function WebTransporter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebTransporter.prototype.boostrap = function () {
        var _this = this;
        window.addEventListener('message', function (event) {
            if (event.origin !== _this.endpoint) {
                return;
            }
        });
    };
    return WebTransporter;
}(Transporter));
export { WebTransporter };
//# sourceMappingURL=web-transporter.js.map