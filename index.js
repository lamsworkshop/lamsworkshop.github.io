class PiZeroCar {
    constructor() {
    }
    
    getInfo() {
        return {
            id: 'PiZeroCar',
            name: 'PiZeroCar',
            blocks: [
                        {
                            opcode: 'connect',
                            blockType: BlockType.COMMAND,
                            text: 'connect to PiZeroCar',
                        },
                        {
                            opcode: 'send',
                            blockType: BlockType.COMMAND,
                            text: 'send [msg]',
                            arguments: {
                                msg: {
                                    type: ArgumentType.STRING,
                                    defaultValue: 'hello'
                                }
                            }
                        },
                ],
        };
    }
    
    connect() {
        this.WS = new WebSocket('ws://localhost:9001');
    }

    send({msg}) {
        this.WS.send(msg);
    }
    
}

Scratch.extensions.register(new PiZeroCar())
