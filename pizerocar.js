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
                            "blockType": "reporter",
                            "text": "connect to PiZeroCar @ ip: ",
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
        return "http://"+url+":8765"
    }
    
}

Scratch.extensions.register(new PiZeroCar())
