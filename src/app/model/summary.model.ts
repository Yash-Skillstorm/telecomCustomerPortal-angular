export class Summary {
    id: number = 0;    
    planId: number;
    planName: string;
    price: number;
    deviceLimit: number;
    device: [{deviceName: string}];
   
    constructor(DeviceId: number,DeviceName: string, PlanId: number, PlanName: string, Price: number,DeviceLimit: number,Device: any) {
        this.device = Device;
        this.planId = PlanId;
        this.planName = PlanName;
        this.price = Price;
        this.deviceLimit = DeviceLimit;
    }
}
