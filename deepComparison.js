/**
 * Deep comparison of two given objects.
 * Function returns all properties with boolean values.
 * You can see which props are different.
 *
 * Example usage:
 * compare({ a: true }, { b: false }));
 */

const isObject = (obj) => obj instanceof Object && obj.constructor === Object;
const zip = (a, b) =>
  (a.length > b.length ? a : b).map((e, i) => [
    e,
    (a.length > b.length ? b : a)[i],
  ]);

function compare(prev, next) {
  if (Array.isArray(prev) && Array.isArray(next)) {
    const res = [];
    for (const [a, b] of zip(prev, next)) {
      if (isObject(a) || isObject(b)) {
        res.push(compare(a, b));
      } else if (a !== b) {
        return true;
      }
    }
    return res;
  }

  const newObj = {};
  const keys = [
    ...new Set([...Object.keys(prev ?? {}), ...Object.keys(next ?? {})]),
  ];

  prev ??= {};
  next ??= {};

  for (const key of keys) {
    if (isObject(prev[key]) || isObject(next[key])) {
      newObj[key] = compare(prev[key], next[key]);
    } else if (Array.isArray(prev[key]) || Array.isArray(next[key])) {
      newObj[key] = compare(prev[key] ?? [], next[key] ?? []);
    } else {
      newObj[key] = prev[key] !== next[key];
    }
  }

  return newObj;
}

// Example usage
console.log(
  JSON.stringify(
    compare(
      {
        arr: [{ a: 1 }, { b: 2 }],
      },
      {
        id: 0,
        arr: [],
      }
    )
  )
);
