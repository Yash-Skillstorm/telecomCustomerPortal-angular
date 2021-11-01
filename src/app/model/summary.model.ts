export class Summary {
    id: number = 0;
    userId: number;   
    planId: number;
    planName: string;
    price: number;
    deviceLimit: number;
    device: [{deviceName: string, phoneNumber: string;}];
    

    constructor( UserId:number, PlanId: number, PlanName: string, Price: number,DeviceLimit: number,Device: any) {
        this.userId = UserId;
        this.device = Device;
        this.planId = PlanId;
        this.planName = PlanName;
        this.price = Price;
        this.deviceLimit = DeviceLimit;        
    }
}
