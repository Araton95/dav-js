/**
 * @enum The enum PriceType represent the type of the price of the service.
 */
export declare enum PriceType {
    flat = "flat"
}
/**
 * @enum The enum BlockchainType represent the type of the blockchain network.
 */
export declare enum BlockchainType {
    local = "local",
    test = "ropsten",
    main = "main"
}
/**
 * @enum The enum ContractTypes represent the dav contracts names.
 */
export declare enum ContractTypes {
    identity = "Identity",
    davToken = "DAVToken",
    basicMission = "BasicMission"
}
/**
 * @enum The enum RideHailingMissionStatus represent the mission statuses after the contract has been signed
 *  - all statuses are sent by the driver except PassengerIsComing.
 */
export declare enum RideHailingMissionStatus {
    OnTheWay = "on_the_way",
    VehicleAtPickupLocation = "vehicle_at_pickup_location",
    PassengerIsComing = "passenger_is_coming",
    RidingHasStarted = "riding_has_started",
    RidingHasFinished = "riding_has_finished"
}
//# sourceMappingURL=common-enums.d.ts.map