import { PlanType, PlanKey } from "../types/PlanType"
import plansData from "../data/plans.json"

export type BillingPeriod = 'monthly' | 'yearly'

export interface ApiPlanItem {
  name: string
  planKey: string
  highlight: boolean
  popular: boolean
  cta: string
  pricing: Record<BillingPeriod, {
    price: string
    period: string
    billed: string
    sub: string
  }>
}

export const fetchPlansFromApi = async (): Promise<ApiPlanItem[]> => {
  return plansData as ApiPlanItem[]
}

export const getPlans = (billingPeriod: BillingPeriod, rawPlans?: ApiPlanItem[]): PlanType[] => {
  const source = rawPlans && rawPlans.length > 0 ? rawPlans : (plansData as ApiPlanItem[])
  return source.map((plan) => {
    const pricing = plan.pricing[billingPeriod]
    return {
      name: plan.name,
      price: pricing.price,
      period: pricing.period,
      billed: pricing.billed,
      sub: pricing.sub,
      cta: plan.cta,
      highlight: plan.highlight,
      popular: plan.popular,
      planKey: plan.planKey as PlanKey,
    }
  })
}

export default getPlans