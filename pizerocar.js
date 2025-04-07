class PiZeroCar {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "PiZeroCar",
            "name": "PiZeroCar",
            "blocks": [
                        {
                            "opcode": "connect",
                            "blockType": "Boolean",
                            "text": "connect to PiZeroCar",
                        },
                ],
        };
    }
    
    connect() {
        this.WS = new WebSocket("ws://127.0.1.1:8765");
        var done = false;
        this.WS.onerror = function() { done = true; }
        this.WS.onopen = function() { done = true; this.WS.send("OK"); }
        while (!done);
        return this.WS.readyState <= 1;
    }
    
}

Scratch.extensions.register(new PiZeroCar())
