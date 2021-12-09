export const pipe = (...fns) =>
  fns.reduceRight(
    (f, g) =>
      (...args) =>
        f(g(...args))
  );
