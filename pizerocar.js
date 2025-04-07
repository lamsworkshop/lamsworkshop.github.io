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
                            "text": "Connect to PiZeroCar",
                        },
                ],
        };
    }
    
    connect() {
        this.WS = new WebSocket("ws://192.168.50.189:9001");
        this.WS.onerror = function() {}
        this.WS.onopen = function() { this.WS.send("Connected"); }
        return true;
    }
    
}

Scratch.extensions.register(new PiZeroCar())
