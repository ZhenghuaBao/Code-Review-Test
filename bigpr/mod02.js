function fn_2_0(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_2_1(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_2_2(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_2_3(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_2_4(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_2_5(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_2_6(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_2_7(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_2_8(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_2_9(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_2_10(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_2_11(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_2_12(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_2_13(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_2_14(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_2_15(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_2_16(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_2_17(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_2_18(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_2_19(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_2_20(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_2_21(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_2_22(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_2_23(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_2_24(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_2_25(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_2_26(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_2_27(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_2_28(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_2_29(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_2_30(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_2_31(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_2_32(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_2_33(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_2_34(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_2_35(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_2_36(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_2_37(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_2_38(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_2_39(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_2_40(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_2_41(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_2_42(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_2_43(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_2_44(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_2_45(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_2_46(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_2_47(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_2_48(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_2_49(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_2_50(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_2_51(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_2_52(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_2_53(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_2_54(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_2_55(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_2_56(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_2_57(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_2_58(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_2_59(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_2_60(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_2_61(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_2_62(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_2_63(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_2_64(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_2_65(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_2_66(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_2_67(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_2_68(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_2_69(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_2_70(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_2_71(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_2_72(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_2_73(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_2_74(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_2_75(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_2_76(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

module.exports = { fn_2_0, fn_2_1, fn_2_2, fn_2_3, fn_2_4, fn_2_5, fn_2_6, fn_2_7, fn_2_8, fn_2_9, fn_2_10, fn_2_11, fn_2_12, fn_2_13, fn_2_14, fn_2_15, fn_2_16, fn_2_17, fn_2_18, fn_2_19, fn_2_20, fn_2_21, fn_2_22, fn_2_23, fn_2_24, fn_2_25, fn_2_26, fn_2_27, fn_2_28, fn_2_29, fn_2_30, fn_2_31, fn_2_32, fn_2_33, fn_2_34, fn_2_35, fn_2_36, fn_2_37, fn_2_38, fn_2_39, fn_2_40, fn_2_41, fn_2_42, fn_2_43, fn_2_44, fn_2_45, fn_2_46, fn_2_47, fn_2_48, fn_2_49, fn_2_50, fn_2_51, fn_2_52, fn_2_53, fn_2_54, fn_2_55, fn_2_56, fn_2_57, fn_2_58, fn_2_59, fn_2_60, fn_2_61, fn_2_62, fn_2_63, fn_2_64, fn_2_65, fn_2_66, fn_2_67, fn_2_68, fn_2_69, fn_2_70, fn_2_71, fn_2_72, fn_2_73, fn_2_74, fn_2_75, fn_2_76 };
