function fn_12_0(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_12_1(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_12_2(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_12_3(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_12_4(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_12_5(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_12_6(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_12_7(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_12_8(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_12_9(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_12_10(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_12_11(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_12_12(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_12_13(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_12_14(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_12_15(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_12_16(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_12_17(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_12_18(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_12_19(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_12_20(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_12_21(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_12_22(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_12_23(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_12_24(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_12_25(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_12_26(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_12_27(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_12_28(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_12_29(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_12_30(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_12_31(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_12_32(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_12_33(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_12_34(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_12_35(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_12_36(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_12_37(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_12_38(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_12_39(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_12_40(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_12_41(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_12_42(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_12_43(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_12_44(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_12_45(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_12_46(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_12_47(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_12_48(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_12_49(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_12_50(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_12_51(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_12_52(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_12_53(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_12_54(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_12_55(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_12_56(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_12_57(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_12_58(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_12_59(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_12_60(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_12_61(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_12_62(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_12_63(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_12_64(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_12_65(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_12_66(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_12_67(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_12_68(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_12_69(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_12_70(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_12_71(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_12_72(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_12_73(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_12_74(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_12_75(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_12_76(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

module.exports = { fn_12_0, fn_12_1, fn_12_2, fn_12_3, fn_12_4, fn_12_5, fn_12_6, fn_12_7, fn_12_8, fn_12_9, fn_12_10, fn_12_11, fn_12_12, fn_12_13, fn_12_14, fn_12_15, fn_12_16, fn_12_17, fn_12_18, fn_12_19, fn_12_20, fn_12_21, fn_12_22, fn_12_23, fn_12_24, fn_12_25, fn_12_26, fn_12_27, fn_12_28, fn_12_29, fn_12_30, fn_12_31, fn_12_32, fn_12_33, fn_12_34, fn_12_35, fn_12_36, fn_12_37, fn_12_38, fn_12_39, fn_12_40, fn_12_41, fn_12_42, fn_12_43, fn_12_44, fn_12_45, fn_12_46, fn_12_47, fn_12_48, fn_12_49, fn_12_50, fn_12_51, fn_12_52, fn_12_53, fn_12_54, fn_12_55, fn_12_56, fn_12_57, fn_12_58, fn_12_59, fn_12_60, fn_12_61, fn_12_62, fn_12_63, fn_12_64, fn_12_65, fn_12_66, fn_12_67, fn_12_68, fn_12_69, fn_12_70, fn_12_71, fn_12_72, fn_12_73, fn_12_74, fn_12_75, fn_12_76 };
