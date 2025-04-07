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
        this.WS = new WebSocket("ws://localhost:8765");
        this.WS.onerror = function() {}
        this.WS.onopen = function() { this.WS.send("Connected"); }
        return true;
    }
    
}

Scratch.extensions.register(new PiZeroCar())
