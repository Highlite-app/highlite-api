import { SubscriptionPlanEnum } from '../enums/subscription.plan.enum';
export declare class SubscriptionInterface {
    plan: SubscriptionPlanEnum;
    billingCycle: {
        start: string;
        end: string;
    };
    balance: {
        superMessage: number;
        jobPosting: number;
    };
}
