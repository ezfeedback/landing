export interface PlanType {
    name: string
    price: string
    period: string
    billed: string
    sub: string
    cta: string
    highlight: boolean
    popular: boolean
    planKey: PlanKey
}

export enum PlanKey {
    STARTER = 'starter',
    PRO = 'pro',
    LIFETIME = 'lifetime',
}