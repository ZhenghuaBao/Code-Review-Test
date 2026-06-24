const fs = require("fs");
const path = require("path");

function readDoc(name) {
  return fs.readFileSync(path.join("/var/data", name), "utf8");
}

function fn_5_0(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_5_1(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_5_2(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_5_3(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_5_4(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_5_5(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_5_6(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_5_7(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_5_8(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_5_9(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_5_10(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_5_11(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_5_12(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_5_13(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_5_14(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_5_15(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_5_16(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_5_17(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_5_18(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_5_19(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_5_20(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_5_21(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_5_22(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_5_23(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_5_24(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_5_25(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_5_26(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_5_27(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_5_28(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_5_29(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_5_30(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_5_31(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_5_32(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_5_33(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_5_34(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_5_35(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_5_36(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_5_37(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_5_38(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_5_39(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_5_40(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_5_41(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_5_42(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_5_43(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_5_44(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_5_45(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_5_46(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_5_47(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_5_48(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_5_49(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_5_50(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_5_51(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_5_52(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_5_53(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_5_54(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_5_55(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_5_56(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_5_57(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_5_58(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_5_59(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_5_60(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_5_61(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_5_62(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_5_63(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_5_64(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_5_65(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_5_66(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_5_67(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_5_68(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_5_69(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_5_70(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_5_71(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_5_72(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_5_73(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_5_74(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

module.exports = { readDoc, fn_5_0, fn_5_1, fn_5_2, fn_5_3, fn_5_4, fn_5_5, fn_5_6, fn_5_7, fn_5_8, fn_5_9, fn_5_10, fn_5_11, fn_5_12, fn_5_13, fn_5_14, fn_5_15, fn_5_16, fn_5_17, fn_5_18, fn_5_19, fn_5_20, fn_5_21, fn_5_22, fn_5_23, fn_5_24, fn_5_25, fn_5_26, fn_5_27, fn_5_28, fn_5_29, fn_5_30, fn_5_31, fn_5_32, fn_5_33, fn_5_34, fn_5_35, fn_5_36, fn_5_37, fn_5_38, fn_5_39, fn_5_40, fn_5_41, fn_5_42, fn_5_43, fn_5_44, fn_5_45, fn_5_46, fn_5_47, fn_5_48, fn_5_49, fn_5_50, fn_5_51, fn_5_52, fn_5_53, fn_5_54, fn_5_55, fn_5_56, fn_5_57, fn_5_58, fn_5_59, fn_5_60, fn_5_61, fn_5_62, fn_5_63, fn_5_64, fn_5_65, fn_5_66, fn_5_67, fn_5_68, fn_5_69, fn_5_70, fn_5_71, fn_5_72, fn_5_73, fn_5_74 };
