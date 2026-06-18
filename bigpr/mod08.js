function fn_8_0(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_8_1(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_8_2(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_8_3(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_8_4(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_8_5(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_8_6(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_8_7(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_8_8(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_8_9(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_8_10(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_8_11(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_8_12(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_8_13(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_8_14(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_8_15(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_8_16(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_8_17(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_8_18(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_8_19(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_8_20(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_8_21(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_8_22(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_8_23(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_8_24(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_8_25(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_8_26(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_8_27(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_8_28(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_8_29(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_8_30(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_8_31(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_8_32(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_8_33(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_8_34(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_8_35(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_8_36(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_8_37(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_8_38(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_8_39(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_8_40(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_8_41(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_8_42(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_8_43(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_8_44(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_8_45(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_8_46(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_8_47(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_8_48(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_8_49(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_8_50(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_8_51(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_8_52(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_8_53(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_8_54(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_8_55(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_8_56(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_8_57(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_8_58(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_8_59(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_8_60(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_8_61(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_8_62(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_8_63(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_8_64(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_8_65(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_8_66(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_8_67(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_8_68(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_8_69(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_8_70(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_8_71(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_8_72(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_8_73(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_8_74(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_8_75(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_8_76(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

module.exports = { fn_8_0, fn_8_1, fn_8_2, fn_8_3, fn_8_4, fn_8_5, fn_8_6, fn_8_7, fn_8_8, fn_8_9, fn_8_10, fn_8_11, fn_8_12, fn_8_13, fn_8_14, fn_8_15, fn_8_16, fn_8_17, fn_8_18, fn_8_19, fn_8_20, fn_8_21, fn_8_22, fn_8_23, fn_8_24, fn_8_25, fn_8_26, fn_8_27, fn_8_28, fn_8_29, fn_8_30, fn_8_31, fn_8_32, fn_8_33, fn_8_34, fn_8_35, fn_8_36, fn_8_37, fn_8_38, fn_8_39, fn_8_40, fn_8_41, fn_8_42, fn_8_43, fn_8_44, fn_8_45, fn_8_46, fn_8_47, fn_8_48, fn_8_49, fn_8_50, fn_8_51, fn_8_52, fn_8_53, fn_8_54, fn_8_55, fn_8_56, fn_8_57, fn_8_58, fn_8_59, fn_8_60, fn_8_61, fn_8_62, fn_8_63, fn_8_64, fn_8_65, fn_8_66, fn_8_67, fn_8_68, fn_8_69, fn_8_70, fn_8_71, fn_8_72, fn_8_73, fn_8_74, fn_8_75, fn_8_76 };
