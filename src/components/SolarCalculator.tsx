"use client";

import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import { calculateSolarMetrics } from "@/utils/calculator";
import { Zap, Sun, Shield, IndianRupee, Leaf, Calendar, ArrowRight, Settings2 } from "lucide-react";

interface SolarCalculatorProps {
  onOpenQuoteModal?: (capacityKw: number) => void;
  standalone?: boolean;
}

export function SolarCalculator({ onOpenQuoteModal, standalone = false }: SolarCalculatorProps) {
  const [bill, setBill] = useState(4500);
  const [category, setCategory] = useState<"residential" | "commercial" | "agricultural">("residential");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [customTariff, setCustomTariff] = useState<number | undefined>(undefined);

  const metrics = useMemo(() => {
    return calculateSolarMetrics({
      monthlyBill: bill,
      category,
      tariffRate: customTariff,
    });
  }, [bill, category, customTariff]);

  const presetBills = [2500, 4500, 8000, 15000, 30000];

  return (
    <div className="w-full max-w-5xl mx-auto bg-forest-900/95 border border-white/15 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 shadow-2xl text-white">
      
      {/* Category Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-white/10 pb-5 sm:pb-6 mb-6 sm:mb-8">
        <div className="w-full sm:w-auto">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-lime-400 block mb-1.5">
            Consumer Category
          </span>
          <div className="grid grid-cols-3 sm:flex sm:flex-wrap items-center gap-1.5 sm:gap-2 w-full">
            <button
              onClick={() => { setCategory("residential"); setCustomTariff(undefined); }}
              className={`px-2 sm:px-4 py-2 rounded-xl sm:rounded-full text-[11px] sm:text-xs font-bold transition text-center whitespace-normal sm:whitespace-nowrap ${
                category === "residential"
                  ? "bg-lime-400 text-forest-950 shadow-md shadow-lime-400/20"
                  : "bg-white/10 text-white/70 hover:text-white"
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => { setCategory("commercial"); setCustomTariff(undefined); }}
              className={`px-2 sm:px-4 py-2 rounded-xl sm:rounded-full text-[11px] sm:text-xs font-bold transition text-center whitespace-normal sm:whitespace-nowrap ${
                category === "commercial"
                  ? "bg-lime-400 text-forest-950 shadow-md shadow-lime-400/20"
                  : "bg-white/10 text-white/70 hover:text-white"
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => { setCategory("agricultural"); setCustomTariff(undefined); }}
              className={`px-2 sm:px-4 py-2 rounded-xl sm:rounded-full text-[11px] sm:text-xs font-bold transition text-center whitespace-normal sm:whitespace-nowrap ${
                category === "agricultural"
                  ? "bg-lime-400 text-forest-950 shadow-md shadow-lime-400/20"
                  : "bg-white/10 text-white/70 hover:text-white"
              }`}
            >
              Agricultural
            </button>
          </div>
        </div>

        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="self-start sm:self-auto flex items-center gap-1.5 text-xs text-white/60 hover:text-lime-400 transition py-1"
        >
          <Settings2 className="w-3.5 h-3.5" />
          <span>{showAdvanced ? "Hide Tariff Setting" : "Adjust Tariff Rate"}</span>
        </button>
      </div>

      {/* Advanced Custom Tariff Slider */}
      {showAdvanced && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-6 sm:mb-8 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 text-xs"
        >
          <div>
            <span className="font-semibold text-white block">Custom DISCOM Tariff Rate</span>
            <span className="text-white/60">Default is ~₹{metrics.tariffRate}/unit in Rajasthan</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <input
              type="range"
              min="5.0"
              max="14.0"
              step="0.5"
              value={metrics.tariffRate}
              onChange={(e) => setCustomTariff(parseFloat(e.target.value))}
              className="w-full sm:w-36 h-2 bg-forest-950 rounded appearance-none accent-lime-400"
            />
            <span className="font-mono font-bold text-lime-400 text-sm whitespace-nowrap">
              ₹ {metrics.tariffRate.toFixed(1)} / kWh
            </span>
          </div>
        </motion.div>
      )}

      {/* Primary Slider Section */}
      <div className="space-y-4 mb-8 sm:mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
          <div>
            <label className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/80 block">
              Average Monthly Electricity Bill
            </label>
            <span className="text-[11px] sm:text-xs text-white/50">
              Approx. {metrics.monthlyUnitsConsumed} units consumed per month
            </span>
          </div>
          <div className="text-2xl sm:text-4xl font-black text-lime-400 font-sans tracking-tight">
            ₹ {bill.toLocaleString("en-IN")} <span className="text-xs sm:text-sm font-normal text-white/60">/ month</span>
          </div>
        </div>

        <input
          type="range"
          min="1000"
          max="40000"
          step="500"
          value={bill}
          onChange={(e) => setBill(parseInt(e.target.value))}
          className="w-full h-3 bg-forest-950 rounded-lg appearance-none cursor-pointer accent-lime-400"
        />

        {/* Quick Preset Badges */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-white/40 text-[11px] sm:text-xs shrink-0">Quick Select:</span>
            <div className="flex flex-wrap gap-1.5">
              {presetBills.map((p) => (
                <button
                  key={p}
                  onClick={() => setBill(p)}
                  className={`px-2.5 py-1 rounded-lg font-mono text-[11px] sm:text-xs transition ${
                    bill === p ? "bg-lime-400/20 text-lime-400 font-bold border border-lime-400/30" : "bg-white/5 text-white/60 hover:text-white"
                  }`}
                >
                  ₹{p.toLocaleString("en-IN")}
                </button>
              ))}
            </div>
          </div>
          <span className="font-mono text-white/40 text-[11px] sm:text-xs hidden sm:inline">Slider: ₹1K – ₹40K/mo</span>
        </div>
      </div>

      {/* Core Primary Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6 pt-6 border-t border-white/10 text-center">
        
        {/* Recommended Plant */}
        <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between">
          <div className="flex items-center justify-center gap-1 text-lime-400 mb-1">
            <Sun className="w-3.5 h-3.5 shrink-0" />
            <span className="text-[10px] sm:text-[11px] uppercase font-bold tracking-wider truncate">Plant Size</span>
          </div>
          <span className="text-2xl sm:text-4xl font-black text-white mt-0.5 sm:mt-1 block">
            {metrics.recommendedCapacityKw} <span className="text-xs sm:text-base font-normal text-white/70">kW</span>
          </span>
          <span className="text-[10px] sm:text-[11px] text-white/50 mt-1 block">
            ~{metrics.monthlyGenerationUnits} units/mo
          </span>
        </div>

        {/* Roof Area */}
        <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between">
          <div className="flex items-center justify-center gap-1 text-lime-400 mb-1">
            <Shield className="w-3.5 h-3.5 shrink-0" />
            <span className="text-[10px] sm:text-[11px] uppercase font-bold tracking-wider truncate">Roof Area</span>
          </div>
          <span className="text-2xl sm:text-4xl font-black text-white mt-0.5 sm:mt-1 block">
            {metrics.roofAreaSqFt} <span className="text-xs sm:text-base font-normal text-white/70">sq.ft</span>
          </span>
          <span className="text-[10px] sm:text-[11px] text-white/50 mt-1 block">
            Shadow-free space
          </span>
        </div>

        {/* Subsidy / Tax Shield */}
        <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between">
          <div className="flex items-center justify-center gap-1 text-lime-400 mb-1">
            <IndianRupee className="w-3.5 h-3.5 shrink-0" />
            <span className="text-[10px] sm:text-[11px] uppercase font-bold tracking-wider truncate">
              {category === "residential" ? "Govt. Subsidy" : "Tax Write-Off"}
            </span>
          </div>
          <span className="text-xl sm:text-3xl lg:text-4xl font-black text-lime-400 mt-0.5 sm:mt-1 block whitespace-nowrap">
            ₹ {(category === "residential" ? metrics.subsidyAmount : metrics.taxDepreciationBenefit).toLocaleString("en-IN")}
          </span>
          <span className="text-[10px] sm:text-[11px] text-white/50 mt-1 block">
            {category === "residential" ? "Direct DBT to Bank" : "40% Accelerated Dep."}
          </span>
        </div>

        {/* Payback Period */}
        <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between">
          <div className="flex items-center justify-center gap-1 text-lime-400 mb-1">
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span className="text-[10px] sm:text-[11px] uppercase font-bold tracking-wider truncate">Payback Period</span>
          </div>
          <span className="text-2xl sm:text-4xl font-black text-white mt-0.5 sm:mt-1 block">
            {metrics.paybackPeriodYears} <span className="text-xs sm:text-base font-normal text-white/70">Years</span>
          </span>
          <span className="text-[10px] sm:text-[11px] text-lime-400 mt-1 block">
            Free power for 20+ yrs
          </span>
        </div>

      </div>

      {/* Detailed Financial & Environmental Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 pt-6 border-t border-white/10">
        
        {/* Financial Overview Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-forest-950/90 border border-white/10 flex flex-col justify-between space-y-3.5">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-lime-400/20 text-lime-400 flex items-center justify-center">
                  <IndianRupee className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-lime-400">
                  Financial Breakdown
                </span>
              </div>
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest hidden sm:inline">
                Exact Estimates
              </span>
            </div>

            {/* Step 1: Upfront & Subsidy */}
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 sm:p-3.5 space-y-2 mb-3">
              <div className="flex items-center justify-between text-xs sm:text-sm gap-2">
                <span className="text-white/70">Estimated Gross Project Cost</span>
                <span className="font-mono font-semibold text-white whitespace-nowrap">₹ {metrics.grossCost.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex items-center justify-between text-xs sm:text-sm gap-2 text-lime-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"></span>
                  {category === "residential" ? "PM Surya Ghar Subsidy (DBT)" : "Year-1 Tax Depreciation Shield"}
                </span>
                <span className="font-mono font-bold whitespace-nowrap">
                  - ₹ {(category === "residential" ? metrics.subsidyAmount : metrics.taxDepreciationBenefit).toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Step 2: Net Investment Highlight Card */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-lime-400/15 via-forest-900/60 to-lime-400/5 border border-lime-400/30 flex items-center justify-between gap-3 mb-3">
              <div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-lime-300 block">
                  Net Customer Investment
                </span>
                <span className="text-[10px] text-white/50 block">
                  {category === "residential" ? "Direct DBT credit in bank account" : "Post accelerated tax write-off"}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xl sm:text-2xl font-black text-lime-300 font-mono tracking-tight block whitespace-nowrap">
                  ₹ {metrics.netInvestment.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Step 3: Returns & Lifetime Savings */}
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 sm:p-3.5 space-y-2.5">
              <div className="flex items-center justify-between text-xs sm:text-sm gap-2">
                <div>
                  <span className="text-white/70 block">Annual Bill Savings</span>
                  <span className="text-[10px] text-white/40 block">~₹ {Math.round(metrics.annualSavings / 12).toLocaleString("en-IN")}/mo savings</span>
                </div>
                <span className="font-mono font-semibold text-lime-400 text-xs sm:text-sm whitespace-nowrap">
                  ₹ {metrics.annualSavings.toLocaleString("en-IN")} <span className="text-[10px] sm:text-xs font-normal text-white/50">/ yr</span>
                </span>
              </div>
              
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm gap-2">
                <div>
                  <span className="font-bold text-white block">25-Year Cumulative Savings</span>
                  <span className="text-[10px] text-lime-400/80 block">4% annual tariff hike protection</span>
                </div>
                <span className="font-mono font-black text-lime-400 text-base sm:text-xl whitespace-nowrap">
                  ₹ {(metrics.twentyFiveYearSavings / 100000).toFixed(1)} Lakhs
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Environmental Impact Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-forest-950/90 border border-white/10 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-lg bg-lime-400/20 text-lime-400 flex items-center justify-center">
                <Leaf className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-lime-400">
                Lifetime Environmental Impact
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mt-3">
              <div className="p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/5">
                <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400 mb-1" />
                <span className="text-lg sm:text-2xl font-black text-white block">
                  {metrics.co2Tons25Years} <span className="text-[11px] sm:text-xs font-normal text-white/60">Tons</span>
                </span>
                <span className="text-[10px] sm:text-[11px] text-white/60 leading-tight block mt-0.5">
                  CO2 Emissions Prevented
                </span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/5">
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400 mb-1" />
                <span className="text-lg sm:text-2xl font-black text-white block">
                  {metrics.treesEquivalent.toLocaleString("en-IN")}
                </span>
                <span className="text-[10px] sm:text-[11px] text-white/60 leading-tight block mt-0.5">
                  Equivalent Trees Planted
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-lime-400/10 border border-lime-400/20 text-[11px] sm:text-xs text-lime-300 leading-relaxed flex items-start gap-2">
            <Zap className="w-3.5 h-3.5 text-lime-400 shrink-0 mt-0.5" />
            <span>Calculated with Indian Central Electricity Authority (CEA) grid baseline factor of 0.82 kg CO2 per kWh.</span>
          </div>
        </div>

      </div>

      {/* CTA in Calculator */}
      <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left text-xs text-white/60 w-full sm:w-auto">
          <span>Ready to verify on your roof? Our engineer provides 3D shadow drone analysis.</span>
        </div>
        <button
          onClick={() => {
            if (onOpenQuoteModal) onOpenQuoteModal(metrics.recommendedCapacityKw);
            else window.location.href = `/contact?capacity=${metrics.recommendedCapacityKw}`;
          }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-lime-400 text-forest-950 font-extrabold text-xs sm:text-sm px-6 sm:px-8 py-3.5 rounded-full hover:bg-lime-300 transition duration-300 shadow-lg shadow-lime-400/20 text-center"
        >
          <span>Claim Free Site Visit for {metrics.recommendedCapacityKw} kW</span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </button>
      </div>

    </div>
  );
}
