# Nigeria healthcare: research and scenario methods
Gratebridge Labs · Edition 1 · 20 October 2026

## Scope
Nigeria resident population, service delivery, facilities, workforce, household affordability, hospital costs and potential operational solutions. This is desk research and an educational scenario, not original fieldwork, a clinical guideline or a completed feasibility study. No independent clinical or quantity-surveyor review has yet been completed.

## Data conventions
- Each indicator retains its observation year. Retrieval date is not the data year.
- Population: World Bank SP.POP.TOTL, 2024, 232,679,478 residents. Not a count of citizens or a 2026 census.
- International comparisons use 2023 consistently. WHO GHED through World Bank SH.XPD.OOPC.CH.ZS and SH.XPD.CHEX.PC.CD. API snapshots retained in repository research/healthcare-nigeria.
- OOP spending share is not an affordability prevalence measure. Current USD expenditures are not adjusted for purchasing power.
- Facilities: WHO AHOP 2025, Table 6.2.b, citing FMOH 2023. Counts sum to 40,184. Printed percentages do not align with these counts and are not reproduced. The 38,645 snapshot in WHO's country strategy is not treated as a comparable baseline for growth.
- Workforce densities: WHO Africa 2026, tables 2–6, for 2024. Illustrative headcounts = density * 232,679,478 / 10,000, rounded to nearest thousand. They are not confirmed unique practising headcounts. Nursing/midwifery may overlap.
- DHS 2024 insurance and access indicators refer to stated age/sex groups. Do not extrapolate directly to all residents or equate them with administrative enrolment.
- Official pay circulars establish structures; current payroll rates, employer adoption and supplements were not certified. Model wages are assumptions.
- Company descriptions are self-reported offerings. They do not establish clinical effectiveness or an investment recommendation.

## Reference hospital model
All money inputs are NGN millions in constant October 2026 prices. The example is a hypothetical 30-bed general hospital, not a national average. Initial construction assumption: 3,000 square metres * NGN400,000 = NGN1.2bn. Other allowances: NGN600m equipment, NGN250m external systems, NGN150m land, NGN150m design/approvals/commissioning. Add 10% contingency to give NGN2.585bn capital cost. No supplier or quantity-surveyor quote was obtained.

Monthly payroll: five medical officers * NGN800,000; twenty nurses/midwives * NGN250,000; three specialist-equivalent posts * NGN1.2m; six allied/technical posts * NGN350,000; twelve support/administration posts * NGN150,000. NGN16.5m before an assumed 20% employer/relief uplift; NGN19.8m after. Not a safe-staffing assessment or observed wage survey.

Annual occupied bed-days = beds * 365 * occupancy.
Annual bills = visits/month * 12 * visit tariff + occupied bed-days * bed-day tariff + ancillary bills/month * 12.
Collections = bills * collection rate.
Variable costs = collections * variable-cost rate (simplification; actual costs can arise on unpaid care).
Fixed costs = 12 * (payroll + utilities + overhead) + equipment maintenance + building maintenance.
Operating cash = collections - variable costs - fixed costs.
Replacement reserve = equipment acquisition cost / replacement interval. This is shown separately.
Lifetime cost = initial capital + operating costs over horizon + actual modelled replacement events.
Full equipment replacement occurs at each integer multiple of the replacement interval, including a horizon-year event. The reserve is not also counted as spending.
Working capital = six months of operating costs. It is additional initial funding, not an extra lifetime expense.
Break-even occupancy = (fixed costs / (collection rate * (1 - variable-cost rate)) - non-bed billings) / (beds * 365 * bed-day tariff).

## Exclusions and interpretation
No inflation, FX movement, demand ramp-up, debt service, taxes, depreciation, discounting, major building refurbishment or residual values. Assumed constant utilisation and prices; not a forecast. No double counting of bundled ancillary services. Equipment replacement is simplified and must be replaced by an asset-level plan for a real project. Operating surplus is not net profit, and the model's staffing cannot certify service safety.

## Next evidence needed
Dated registry export; facility readiness inspections; active staff by cadre and place of work; payroll validation; comparable local tenders; installed equipment/service quotations; actual utilisation, claims and collection data; patient and worker interviews with consent. Review by a Nigerian clinician, health economist and quantity surveyor before using any scenario for a real project.

## Revision policy
Retain the prior release, identify source/definition changes, rerun arithmetic checks and record corrections. Contact hello@labs.gratebridge.com with the source and specific correction. No field study or independent impact evaluation is claimed.

## Plain-language expansion — 22 October 2026

The top-line doctors/nurses/midwives range is an arithmetic overlap bound, not a confidence interval: population × (4.1 + max(11.4, 6.7)) / 10,000 to population × (4.1 + 11.4 + 6.7) / 10,000, rounded to thousands. It assumes doctors are distinct from the other two cadres and ranges from complete nurse–midwife overlap to none. It excludes other cadres and does not establish active staffing.

UK and Germany comparisons use OECD Health at a Glance 2025 country notes (3.4 and 4.7 practising doctors per 1,000, latest available observations). Nigeria uses WHO 2024 reported density (0.41 per 1,000). Different source years and stock/practice definitions limit comparability. People per doctor = 1,000 / density. Nigeria-at-comparator calculations are population × comparator density / 1,000, not staffing targets.

Facility population ratios use 2024 population and the 2023 facility inventory and are scale illustrations, not measured catchments. The 1,295 upgraded PHCs (August 2025) and 20 states with active emergency-team operations (April 2026 federal briefing) are programme measures, not national equipped-hospital or responder headcounts. No national responder estimate has been fabricated from state coverage.

Hospital-network costs scale the published default scenario; they are not observed project costs. China construction descriptions are contractor accounts, not audited costs. Video titles, publisher metadata and descriptions were checked, not full transcripts or independent evaluations. Country lessons and implementation options are explicitly proposals, not guarantees of transferable outcomes.
