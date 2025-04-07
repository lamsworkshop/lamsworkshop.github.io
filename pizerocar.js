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
                            "blockType": "command",
                            "text": "connect to PiZeroCar @ [url]",
                            "arguments": {
                                "url": {
                                    "type": "string",
                                    "defaultValue": "192.168.50.183"
                                },
                            }
                        },
                ],
        };
    }
    
    connect({url}) {
        this.WS = new WebSocket("http://"+url+":8765");
    }
    
}

Scratch.extensions.register(new PiZeroCar())
