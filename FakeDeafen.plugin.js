/**
 * @name FakeDeafen
 * @author Harry Uchiha
 * @description Creates a fake deafen button that does nothing while keeping the real functionality hidden.
 * @version 1.0.0
 * @license MIT
 */

module.exports = class FakeDeafen {
    constructor() {
        this.deafenRegex = /self_deafs.truem/;
        this.decoder = new TextDecoder();
    }

    start() {
        this.hookWebSocket();
    }

    stop() {
        WebSocket.prototype.send = WebSocket.prototype._send;
        this.removeFakeButton();
    }

    hookWebSocket() {
        const decoder = this.decoder;
        const deafenRegex = this.deafenRegex;

        WebSocket.prototype._send = WebSocket.prototype.send;
        WebSocket.prototype.send = function (data) {
            if (data instanceof ArrayBuffer && deafenRegex.test(decoder.decode(data))) {
                window.deafen = () => this._send(data);
                FakeDeafen.addFakeButton();
            }
            this._send(data);
        };
    }

    static addFakeButton() {
        if (!document.querySelector("button[aria-label='Deafen'][style]")) {
            let deafenBtn = document.querySelector("button[aria-label='Deafen']");
            if (!deafenBtn) return;

            let fakeDeafenBtn = deafenBtn.cloneNode(true);
            fakeDeafenBtn.style.backgroundColor = 'red';
            fakeDeafenBtn.onclick = () => window.deafen();
            deafenBtn.parentNode.insertBefore(fakeDeafenBtn, deafenBtn);
        }
    }

    removeFakeButton() {
        let fakeDeafenBtn = document.querySelector("button[aria-label='Deafen'][style]");
        if (fakeDeafenBtn) fakeDeafenBtn.remove();
    }
};
