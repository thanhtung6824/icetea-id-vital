"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transporter_1 = require("./provider/transporter");
class WebTransporter extends transporter_1.Transporter {
    boostrap() {
        window.addEventListener('message', (event) => {
            if (event.origin !== this.endpoint) {
                return;
            }
        });
    }
}
exports.WebTransporter = WebTransporter;
//# sourceMappingURL=web-transporter.js.map