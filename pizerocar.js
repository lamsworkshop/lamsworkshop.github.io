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
        this.WS = new WebSocket("ws://localhost:9001");
        var waiting = true;
        this.WS.onerror = this.WS.onopen = function() { waiting = false; }
        while (waiting);
        return this.WS.readyState < 2;
    }
    
}

Scratch.extensions.register(new PiZeroCar())
