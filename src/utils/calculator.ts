export interface CalculationInput {
  monthlyBill: number;
  tariffRate?: number; // ₹ per unit (default 8.0)
  category?: 'residential' | 'commercial' | 'industrial' | 'agricultural';
  customRoofArea?: number;
}

export interface CalculationResult {
  monthlyBill: number;
  tariffRate: number;
  category: string;
  monthlyUnitsConsumed: number;
  dailyUnitsConsumed: number;
  recommendedCapacityKw: number;
  roofAreaSqFt: number;
  grossCost: number;
  subsidyAmount: number;
  taxDepreciationBenefit: number;
  netInvestment: number;
  monthlyGenerationUnits: number;
  annualGenerationUnits: number;
  monthlySavings: number;
  annualSavings: number;
  paybackPeriodYears: number;
  twentyFiveYearSavings: number;
  co2TonsPerYear: number;
  co2Tons25Years: number;
  treesEquivalent: number;
}

export function calculateSolarMetrics(input: CalculationInput): CalculationResult {
  const monthlyBill = Math.max(500, input.monthlyBill);
  const category = input.category || 'residential';
  
  // Default tariff by category in Rajasthan / North India
  let tariffRate = input.tariffRate;
  if (!tariffRate) {
    if (category === 'commercial') tariffRate = 9.5;
    else if (category === 'industrial') tariffRate = 8.8;
    else if (category === 'agricultural') tariffRate = 6.0;
    else tariffRate = 8.0; // Residential
  }

  // Monthly units consumed
  const monthlyUnitsConsumed = Math.round(monthlyBill / tariffRate);
  const dailyUnitsConsumed = Math.round((monthlyUnitsConsumed / 30) * 10) / 10;

  // 1 kW generates approx 4.2 units/day in Rajasthan (high irradiance) = ~125 units/month
  const rawKw = monthlyUnitsConsumed / 125;
  // Round to realistic solar sizing: e.g. 1.0, 1.5, 2.0, 3.0, etc.
  let recommendedCapacityKw = Math.max(1, Math.round(rawKw * 2) / 2);
  if (recommendedCapacityKw > 500) recommendedCapacityKw = 500;

  // Space required: 90 to 100 sq ft per kW
  const roofAreaSqFt = Math.round(recommendedCapacityKw * 95);

  // Capital Project Cost (Market benchmark ~₹60,000/kW for residential rooftop tier-1)
  let costPerKw = 60000;
  if (recommendedCapacityKw >= 10 && recommendedCapacityKw < 50) costPerKw = 52000;
  else if (recommendedCapacityKw >= 50 && recommendedCapacityKw < 100) costPerKw = 46000;
  else if (recommendedCapacityKw >= 100) costPerKw = 42000;

  const grossCost = Math.round(recommendedCapacityKw * costPerKw);

  // PM Surya Ghar Central Government Subsidy (for Residential only)
  let subsidyAmount = 0;
  let taxDepreciationBenefit = 0;

  if (category === 'residential') {
    if (recommendedCapacityKw <= 1.4) {
      subsidyAmount = 30000;
    } else if (recommendedCapacityKw <= 2.4) {
      subsidyAmount = 60000;
    } else {
      // 3 kW up to 10 kW cap
      subsidyAmount = 78000;
    }
  } else {
    // Commercial / Industrial: 40% Accelerated Depreciation tax write-off in Year 1
    // At ~25% corporate tax rate = 10% effective tax shield
    taxDepreciationBenefit = Math.round(grossCost * 0.40 * 0.25);
  }

  const netInvestment = Math.max(0, grossCost - subsidyAmount - taxDepreciationBenefit);

  // Solar generation
  const monthlyGenerationUnits = Math.round(recommendedCapacityKw * 125);
  const annualGenerationUnits = monthlyGenerationUnits * 12;

  // Financial Savings
  const monthlySavings = Math.min(monthlyBill, Math.round(monthlyGenerationUnits * tariffRate));
  const annualSavings = monthlySavings * 12;

  // Payback period
  let paybackPeriodYears = Math.round((netInvestment / (annualSavings || 1)) * 10) / 10;
  if (paybackPeriodYears < 2.5) paybackPeriodYears = 2.8;

  // 25-Year Cumulative Savings:
  // Assuming 4% annual electricity tariff hike and 0.6% annual panel degradation
  let cumulativeSavings = 0;
  let currentAnnualSavings = annualSavings;
  for (let year = 1; year <= 25; year++) {
    cumulativeSavings += currentAnnualSavings;
    // Tariff increases by 4%, generation slightly degrades by 0.6%
    currentAnnualSavings = currentAnnualSavings * 1.04 * 0.994;
    // Inverter service/replacement provision at Year 12
    if (year === 12) {
      cumulativeSavings -= Math.min(30000, recommendedCapacityKw * 4000);
    }
  }

  // Environmental Metrics (Central Electricity Authority grid factor: 0.82 kg CO2 / kWh)
  const co2TonsPerYear = Math.round(((annualGenerationUnits * 0.82) / 1000) * 10) / 10;
  const co2Tons25Years = Math.round(co2TonsPerYear * 25);
  const treesEquivalent = Math.round(co2Tons25Years * 16);

  return {
    monthlyBill,
    tariffRate,
    category,
    monthlyUnitsConsumed,
    dailyUnitsConsumed,
    recommendedCapacityKw,
    roofAreaSqFt,
    grossCost,
    subsidyAmount,
    taxDepreciationBenefit,
    netInvestment,
    monthlyGenerationUnits,
    annualGenerationUnits,
    monthlySavings,
    annualSavings,
    paybackPeriodYears,
    twentyFiveYearSavings: Math.round(cumulativeSavings),
    co2TonsPerYear,
    co2Tons25Years,
    treesEquivalent,
  };
}
