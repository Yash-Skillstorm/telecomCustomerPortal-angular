export class Userplan {
    id: number = 0;
    userId: number;
    planId: number;

    constructor(UserId: number, PlanId: number) {
        this.userId = UserId;
        this.planId = PlanId;
    }
}
