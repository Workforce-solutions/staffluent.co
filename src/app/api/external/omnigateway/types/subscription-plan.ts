// Type for subscription plan
export interface SubscriptionPlan {
    planId: string;
    interval: 'month' | 'year';
  }


  export interface SubscriptionResponse {
    success: boolean;
    message: string;
    subscriptionId?: string;
  }
  