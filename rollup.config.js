import resolve from '@rollup/plugin-node-resolve';
import cjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import cssOnly from 'rollup-plugin-css-only';
import { defineConfig } from 'rollup';
import terser from '@rollup/plugin-terser';

const packageJson = require('./package.json');

const external = [
  'react',
  'react-dom',
  '@mui/material',
  '@emotion/react',
  '@emotion/styled',
  '@hookform/resolvers',
  '@mui/x-data-grid',
  'react-hook-form',
  /\.css$/
];

export default defineConfig([
  {
    input: 'src/index.ts',
    external: external,
    output: [
      {
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
        dynamicImportInCjs: true
      }
    ],
    plugins: [
      typescript({ tsconfig: './tsconfig.json' }),
      resolve({
        ignoreGlobal: false,
        skip: external,
        ignore: [/\/node_modules\/@mui\/material\/.*\/"use client"/]
      }),
      cjs(),
      cssOnly(),
      terser()
    ]
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.types,
        format: 'es'
      }
    ],
    plugins: [
      dts.default({
        compilerOptions: {
          noImplicitAny: false,
          skipLibCheck: true,
          skipDefaultLibCheck: true,
          noEmitOnError: false
        }
      })
    ],
    external: external
  }
]);
