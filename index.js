class PiZeroCar {
    constructor() {
    }
    
    getInfo() {
        return {
            'id': 'Pizar',
            'name': 'Pizar',
            'color1': '#155115',
            'color2': '#000000',
            'blocks': [
                        {
                            'opcode': 'connect',
                            'blockType': 'command',
                            'text': 'connect pizar @ [ip]',
                            'arguments': {
                                'ip': {
                                    'type': 'string',
                                    'defaultValue': 'pizar.local'
                                }
                            }
                        },
                        {
                            'opcode': 'isReady',
                            'blockType': 'boolean',
                            'text': 'response',
                        },
                ],
        };
    }
    
    connect({ip}) {
    }

    isReady() { return false; }
    
}

Scratch.extensions.register(new PiZeroCar())
