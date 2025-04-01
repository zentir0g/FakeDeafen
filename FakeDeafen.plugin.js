/**
 * @name FakeDeafen
 * @author Harry Uchiha (z_zx)
 * @authorId 333014456399560705
 * @version 1.2.0
 * @description Creates a fake deafen button that does nothing while keeping the real functionality hidden.
 * @invite W6JfvA4y66
 */

module.exports = class FakeDeafen {
    constructor() {
        this.deafenRegex = /self_deafs.truem/;
        this.decoder = new TextDecoder();
        this.observer = null;
    }

    start() {
        this.hookWebSocket();
        this.observeButtons();
    }

    stop() {
        WebSocket.prototype.send = WebSocket.prototype._send;
        this.removeFakeButton();
        if (this.observer) this.observer.disconnect();
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

    observeButtons() {
        const observer = new MutationObserver(() => FakeDeafen.addFakeButton());
        this.observer = observer;
        observer.observe(document.body, { childList: true, subtree: true });
    }

    static addFakeButton() {
        let deafenBtn = document.querySelector("button[aria-label='Deafen']");
        if (!deafenBtn || document.querySelector("#fakeDeafenBtn")) return;

        let fakeDeafenBtn = deafenBtn.cloneNode(true);
        fakeDeafenBtn.id = "fakeDeafenBtn";
        fakeDeafenBtn.style.backgroundColor = "red";
        fakeDeafenBtn.onclick = () => window.deafen();

        deafenBtn.parentNode.appendChild(fakeDeafenBtn);
    }

    removeFakeButton() {
        let fakeDeafenBtn = document.querySelector("#fakeDeafenBtn");
        if (fakeDeafenBtn) fakeDeafenBtn.remove();
    }
};
