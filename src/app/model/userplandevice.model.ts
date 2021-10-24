export class Userplandevice {
    id: Number = 0;
    userId: number;
    planId: number;
    deviceId: number;
    phoneNumber: string;
    
    constructor(UserId: number, PlanId: number, DeviceId: number, PhoneNumber: string) {
        this.userId = UserId;
        this.planId = PlanId;
        this.deviceId = DeviceId;
        this.phoneNumber = PhoneNumber;        
    }
}
