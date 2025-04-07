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
                            "text": "connect to PiZeroCar",
                        },
                        {
                            "opcode": "send",
                            "blockType": "command",
                            "text": "send [msg]",
                            "arguments": {
                                "msg": {
                                    "type": "string",
                                    "defaultValue": "hello"
                                }
                            }
                        },
                ],
        };
    }
    
    connect() {
        this.WS = new WebSocket("ws://localhost:9001");
    }

    send({msg}) {
        this.WS.send(msg);
    }
    
}

Scratch.extensions.register(new PiZeroCar())
