import { test } from "node:test";
import assert from "node:assert/strict";
import ts from "typescript";
import fs from "node:fs";
import vm from "node:vm";
const source = fs.readFileSync("lib/billing/validation.ts", "utf8");
const context = { exports: {} };
vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, context);
const matches = context.exports.chargeMatchesInvoice;
const invoice = { status: "awaiting_payment", paystackReference: "correct", chargeNgn: 1035000 };
const charge = { status: "success", reference: "correct", amount: 103500000, currency: "NGN" };
test("accepts only the exact successful charge", () => assert.equal(matches(invoice, charge), true));
for (const [name, change] of Object.entries({ "other invoice reference": { reference: "other" }, "underpayment": { amount: 100 }, "wrong currency": { currency: "USD" }, "failed charge": { status: "failed" }, "fractional amount": { amount: 103500000.1 } })) {
  test(`rejects ${name}`, () => assert.equal(matches(invoice, { ...charge, ...change }), false));
}
for (const status of ["paid", "void", "negotiating"]) test(`rejects ${status} invoice`, () => assert.equal(matches({ ...invoice, status }, charge), false));
test("rejects missing quote and missing charge", () => { assert.equal(matches({ ...invoice, chargeNgn: undefined }, charge), false); assert.equal(matches(invoice, undefined), false); });
