import BaseMissionParams from '../MissionParams';
import BaseIMissionParams from '../IMissionParams';
import { ID } from '../common-types';

/**
 * @interface IMissionParams The interface boat-charging/IMissionParams represent a valid argument of boat-charging/MissionParams constructor.
 */
interface IMissionParams extends BaseIMissionParams {
    /**
     * @property The mission's topic id (used to send messages to consumer).
     */
    id: ID;
}
/**
 * @class The Class boat-charging/MissionParams represent the parameters of boat-charging mission.
 */
export default class MissionParams extends BaseMissionParams {
    public static _protocol = 'boat_charging';
    public static _messageType = 'mission';

    public static getMessageType(): string {
        return MissionParams._messageType;
    }

    public static getMessageProtocol(): string {
        return MissionParams._protocol;
    }

    constructor(values?: Partial<IMissionParams>) {
        super(MissionParams._protocol, MissionParams._messageType, values);
    }

    public serialize() {
        const formattedParams = super.serialize();
        return formattedParams;
    }

    public deserialize(json: any): void {
        super.deserialize(json);
    }
}
