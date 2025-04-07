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
        this.WS = new WebSocket("ws://localhost:9001");
        var done = false
        this.WS.onerror = this.WS.onopen = function() { done = true; }
        while (!done);
        return this.WS.readyState < 2;
    }
    
}

Scratch.extensions.register(new PiZeroCar())
