import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";

const plugins = [nodeResolve(), replace({DEBUG: false, preventAssignment: true})];

export default [
  /* esm */
  {
    input: "src/index.js",
    external: ["sourcemap-codec"],
    plugins,
    output: {
      file: "dist/stripe-money-format.es.mjs",
      format: "es",
      exports: "named",
      sourcemap: true,
    },
  },

  /* cjs */
  {
    input: "src/index.js",
    external: ["sourcemap-codec"],
    plugins,
    output: {
      file: "dist/stripe-money-format.cjs.js",
      format: "cjs",
      exports: "default",
      sourcemap: true,
    },
  },

  /* umd */
  {
    input: "src/index.js",
    plugins,
    output: {
      file: "dist/stripe-money-format.umd.js",
      format: "umd",
      exports: "default",
      name: "StripeMoneyFormat",
      sourcemap: true,
    },
  },
];
