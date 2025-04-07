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
        var done = false;
        this.WS.onerror = function() { done = true; }    
        this.WS.onopen = function() { done = true; }
        while (!done);
        return this.WS.readyState <= 1;
    }
    
}

Scratch.extensions.register(new PiZeroCar())
