import cjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';
import preserveDirectives from 'rollup-plugin-preserve-directives';

const packageJson = require('./package.json');

const externalPackages = [
  ...Object.keys(packageJson.dependencies ?? {}),
  ...Object.keys(packageJson.peerDependencies ?? {})
];
const external = (id) =>
  externalPackages.some((pkg) => id === pkg || id.startsWith(`${pkg}/`)) ||
  /^@mui\//.test(id) ||
  /^@emotion\//.test(id);

const input = {
  index: 'src/index.ts',
  'next/index': 'src/next/index.ts'
};

export default defineConfig([
  {
    input,
    external,
    output: {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].js'
    },
    plugins: [
      resolve(),
      cjs(),
      typescript({ tsconfig: './tsconfig.json', exclude: ['**/*.stories.*', '**/*.mock.*'] }),
      (preserveDirectives.default ?? preserveDirectives)()
    ],
    onwarn(warning, warn) {
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes('use client')) return;
      warn(warning);
    }
  },
  {
    input,
    external,
    output: {
      dir: 'dist',
      format: 'es',
      entryFileNames: '[name].d.ts'
    },
    plugins: [
      dts.default({
        compilerOptions: {
          noImplicitAny: false,
          skipLibCheck: true,
          skipDefaultLibCheck: true,
          noEmitOnError: false
        }
      })
    ]
  }
]);
