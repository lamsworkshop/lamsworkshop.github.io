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
                            "text": "connect to PiZeroCar @ [ip]",
                            "arguments": {
                                "ip": {
                                    "type": "string",
                                    "defaultValue": "192.168.50.183"
                                },
                            }
                        },
                ],
        };
    }
    
    connect({ip}) {
        this.WS = new WebSocket("ws://"+ip+":8765");
        var done = false;
        this.WS.onerror = this.WS.onopen = function() { done = true; }
        while (!done);
        return this.WS.readyState <= 1;
    }
    
}

Scratch.extensions.register(new PiZeroCar())
