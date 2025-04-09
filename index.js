class PiZeroCar {
    constructor() {
    }
    
    getInfo() {
        return {
            'id': 'PiZeroCar',
            'name': 'PiZeroCar',
            'color1': '#ff8000',
            'color2': '#ffe24f',
            'blocks': [
                        {
                            'opcode': 'connect',
                            'blockType': 'command',
                            'text': 'connect to PiZeroCar @ [ip]',
                            'arguments': {
                                'ip': {
                                    'type': 'string',
                                    'defaultValue': 'localhost'
                                }
                            }
                        },
                        {
                            'opcode': 'send',
                            'blockType': 'command',
                            'text': 'send [msg]',
                            'arguments': {
                                'msg': {
                                    'type': 'string',
                                    'defaultValue': 'hello'
                                }
                            }
                        },
                ],
        };
    }
    
    connect({ip}) {
        this.WS = new WebSocket('ws://'+ip+':9001');
    }

    send({msg}) {
        this.WS.send(msg);
    }
    
}

Scratch.extensions.register(new PiZeroCar())
