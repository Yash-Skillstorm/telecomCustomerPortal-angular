export class Plan {
    id: number =0;
    planName: string;
    price: number;
    deviceLimit: number;
    
    constructor(PlanName: string, Price: number, DeviceLimit: number ) {
        this.planName = PlanName;
        this.price = Price;
        this.deviceLimit = DeviceLimit;
        
    }

}
