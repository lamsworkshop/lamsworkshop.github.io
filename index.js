const blockIconURI = 'data:image/png;base64,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';

class PiZeroCar {
    constructor() {
    }
    
    getInfo() {
        return {
            'id': 'Pizar',
            'name': 'Pizar',
            'color1': '#155115',
            'color2': '#000000',
            'blockIconURI': blockIconURI,
            'blocks': [
                {
                    'opcode': 'connect',
                    'blockType': 'command',
                    'text': 'connect pizar @ [ip]',
                    'arguments': {
                        ip: {
                            'type': 'string',
                            'defaultValue': 'pizar.local'
                        }
                    }
                },
                {
                    'opcode': 'isReady',
                    'blockType': 'Boolean',
                    'text': 'replied',
                },
                {
                    'opcode': 'led',
                    'blockType': 'command',
                    'text': 'LED [state]',
                    'arguments': {
                        state: {
                            'type': 'string',
                            'defaultValue': 'OFF',
                            'menu': 'on_off'
                        }
                    }
                },
                {
                    'opcode': 'pwm',
                    'blockType': 'command',
                    'text': 'Wheel [side] [pwm]%',
                    'arguments': {
                        side: {
                            'type': 'string',
                            'defaultValue': 'LEFT',
                            'menu': 'left_right'
                        },
                        pwm: {
                            'type': 'number',
                            'defaultValue': '0'
                        }
                    }
                }
            ],
            'menus': {
                on_off: {
                    'items': ['ON', 'OFF']
                },
                left_right: {
                    'items': ['LEFT', 'RIGHT']
                }
            }
        };
    }
    
    connect(ip) {
        console.log(ip);
    }

    isReady() { return false; }

    led(state){console.log(state);}

    pwm(side, pwm){console.log(side);console.log(pwm);}
}

Scratch.extensions.register(new PiZeroCar())
