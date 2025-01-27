import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "rollup-plugin-replace";

export default {
  input: "src/index.tsx",
  output: {
    dir: "./dist",
    format: "es",
  },
  jsx: "preserve",
  plugins: [
    commonjs(),
    nodeResolve({ browser: true }),
    typescript(),
    babel({ babelHelpers: "bundled", extensions: [".ts", ".tsx"] }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
};
