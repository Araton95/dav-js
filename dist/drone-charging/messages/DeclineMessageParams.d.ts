import BaseMessageParams from '../MessageParams';
/**
 * @class The Class drone-charging/MessageParams represent the parameters of drone-charging decline mission message.
 */
export default class MessageParams extends BaseMessageParams {
    static _messageType: string;
    constructor(values?: Partial<MessageParams>);
    serialize(): {
        ttl: number;
        protocol: string;
        type: string;
    };
    deserialize(json: any): void;
}
