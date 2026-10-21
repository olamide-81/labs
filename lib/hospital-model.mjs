// Illustrative constant-price scenario. All monetary inputs are millions of NGN.
export const defaultHospital = Object.freeze({ beds:30, occupancy:60, visits:1600, visitFee:0.018, bedDayFee:0.045, otherMonthly:8, collection:90, variable:30, payroll:19.8, utilities:4, overhead:6, building:1200, equipment:600, infrastructure:250, land:150, fees:150, contingency:10, maintenance:5, buildingMaintenance:2, replacementYears:8, years:10 });
export function hospitalModel(input = defaultHospital) {
 const p = {...defaultHospital,...input};
 for (const [key,value] of Object.entries(p)) if (!Number.isFinite(value) || value < 0) throw new Error(`Invalid ${key}`);
 for (const key of ['occupancy','collection','variable','maintenance','buildingMaintenance','contingency']) if(p[key]>100) throw new Error(`Invalid ${key}`);
 if(p.replacementYears<1 || p.years<1 || !Number.isInteger(p.years) || !Number.isInteger(p.replacementYears)) throw new Error('Years must be positive integers');
 const baseCapex = p.building+p.equipment+p.infrastructure+p.land+p.fees;
 const capex = baseCapex*(1+p.contingency/100);
 const bedDays=p.beds*365*p.occupancy/100;
 const billed=p.visits*12*p.visitFee+bedDays*p.bedDayFee+p.otherMonthly*12;
 const collected=billed*p.collection/100;
 const variableCost=collected*p.variable/100;
 const maintenanceCost=p.equipment*p.maintenance/100+p.building*p.buildingMaintenance/100;
 const fixed=(p.payroll+p.utilities+p.overhead)*12+maintenanceCost;
 const opex=fixed+variableCost;
 const operatingCash=collected-opex;
 const replacementReserve=p.equipment/p.replacementYears;
 const rows=Array.from({length:p.years},(_,i)=>({year:i+1,revenue:collected,opex,replacement:(i+1)%p.replacementYears===0?p.equipment:0}));
 const replacementTotal=rows.reduce((a,r)=>a+r.replacement,0);
 const lifecycleCost=capex+opex*p.years+replacementTotal;
 const contributionRate=p.collection/100*(1-p.variable/100);
 const breakEvenBilling=contributionRate>0?fixed/contributionRate:null;
 const nonBedBilling=p.visits*12*p.visitFee+p.otherMonthly*12;
 const breakEvenOccupancy=contributionRate>0&&p.beds*p.bedDayFee>0?(fixed/contributionRate-nonBedBilling)/(p.beds*365*p.bedDayFee)*100:null;
 return {capex,bedDays,billed,collected,variableCost,maintenanceCost,fixed,opex,operatingCash,replacementReserve,afterReserve:operatingCash-replacementReserve,workingCapital:opex/2,initialFunding:capex+opex/2,rows,replacementTotal,lifecycleCost,netCash:collected*p.years-lifecycleCost,breakEvenBilling,breakEvenOccupancy};
}
