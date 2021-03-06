import BaseMessageParams from '../MessageParams';
/**
 * @class The Class drone-charging/MessageParams represent the parameters of drone-charging decline mission message.
 */
export default class MessageParams extends BaseMessageParams {
  public static _messageType = 'decline_message';

  constructor(values?: Partial<MessageParams>) {
    super(MessageParams._messageType, values);
  }

  public serialize() {
    const formattedParams = super.serialize();
    return formattedParams;
  }

  public deserialize(json: any): void {
    super.deserialize(json);
  }
}
