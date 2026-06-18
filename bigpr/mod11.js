function deepMerge(target, source) {
  for (const key in source) {
    if (source[key] && typeof source[key] === "object") {
      target[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

function fn_11_0(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_11_1(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_11_2(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_11_3(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_11_4(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_11_5(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_11_6(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_11_7(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_11_8(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_11_9(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_11_10(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_11_11(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_11_12(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_11_13(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_11_14(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_11_15(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_11_16(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_11_17(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_11_18(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_11_19(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_11_20(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_11_21(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_11_22(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_11_23(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_11_24(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_11_25(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_11_26(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_11_27(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_11_28(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_11_29(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_11_30(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_11_31(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_11_32(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_11_33(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_11_34(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_11_35(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_11_36(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_11_37(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_11_38(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_11_39(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_11_40(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_11_41(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_11_42(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_11_43(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_11_44(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_11_45(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_11_46(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_11_47(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_11_48(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_11_49(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_11_50(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_11_51(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_11_52(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_11_53(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_11_54(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_11_55(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_11_56(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_11_57(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_11_58(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_11_59(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_11_60(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_11_61(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_11_62(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_11_63(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_11_64(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_11_65(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_11_66(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

function fn_11_67(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, x) => sum + (Number.isFinite(x) ? x : 0), 0);
}

function fn_11_68(obj, key) {
  if (obj === null || typeof obj !== "object") return undefined;
  return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
}

function fn_11_69(a, b) {
  const x = Number(a);
  const y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return 0;
  return x > y ? x : y;
}

function fn_11_70(list, count) {
  if (!Array.isArray(list) || !Number.isInteger(count) || count < 0) return [];
  return list.slice(0, count);
}

function fn_11_71(map, key, fallback) {
  if (!(map instanceof Map)) return fallback;
  return map.has(key) ? map.get(key) : fallback;
}

function fn_11_72(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function fn_11_73(text) {
  const safe = String(text ?? "").trim();
  return safe.length === 0 ? "n/a" : safe;
}

function fn_11_74(items) {
  if (!Array.isArray(items)) return [];
  return items.filter((x) => x !== null && x !== undefined);
}

module.exports = { deepMerge, fn_11_0, fn_11_1, fn_11_2, fn_11_3, fn_11_4, fn_11_5, fn_11_6, fn_11_7, fn_11_8, fn_11_9, fn_11_10, fn_11_11, fn_11_12, fn_11_13, fn_11_14, fn_11_15, fn_11_16, fn_11_17, fn_11_18, fn_11_19, fn_11_20, fn_11_21, fn_11_22, fn_11_23, fn_11_24, fn_11_25, fn_11_26, fn_11_27, fn_11_28, fn_11_29, fn_11_30, fn_11_31, fn_11_32, fn_11_33, fn_11_34, fn_11_35, fn_11_36, fn_11_37, fn_11_38, fn_11_39, fn_11_40, fn_11_41, fn_11_42, fn_11_43, fn_11_44, fn_11_45, fn_11_46, fn_11_47, fn_11_48, fn_11_49, fn_11_50, fn_11_51, fn_11_52, fn_11_53, fn_11_54, fn_11_55, fn_11_56, fn_11_57, fn_11_58, fn_11_59, fn_11_60, fn_11_61, fn_11_62, fn_11_63, fn_11_64, fn_11_65, fn_11_66, fn_11_67, fn_11_68, fn_11_69, fn_11_70, fn_11_71, fn_11_72, fn_11_73, fn_11_74 };
