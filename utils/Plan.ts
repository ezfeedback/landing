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
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080"
    const res = await fetch(`${apiUrl}/public/plans`, { cache: 'no-store' })
    if (!res.ok) throw new Error("Failed to fetch plans from backend")
    return await res.json()
  } catch (err) {
    console.warn("[PLANS_API]: Could not fetch plans from backend API, falling back to local plans.json", err)
    return plansData as ApiPlanItem[]
  }
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