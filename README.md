1. npm init
2. npm install react typescript @types/react --save-dev
3. create file structure 
    .
    ├── src
    │   ├── components
    |   │   ├── Button
    |   |   │   ├── Button.tsx
    |   |   │   └── index.ts
    |   │   └── index.ts
    │   └── index.ts
    ├── package.json
    └── package-lock.json

4. write code inside Button.tsx
5. export { default } from "./Button"; inside button index.ts
6. src/components/index.ts
    export { default as Button } from "./Button";
7. src/index.ts
    export * from './components';
8.  Adding TypeScript
    >> npx tsc --init
9. change 
    {
        "compilerOptions": {
            // Default
            "target": "es5", 
            "esModuleInterop": true, 
            "forceConsistentCasingInFileNames": true,
            "strict": true, 
            "skipLibCheck": true,

            // Added
            "jsx": "react", 
            "module": "ESNext",  
            "declaration": true,
            "declarationDir": "types",
            "sourceMap": true,
            "outDir": "dist",
            "moduleResolution": "node",
            "allowSyntheticDefaultImports": true,
            "emitDeclarationOnly": true,
        }
    }

10. Adding roolup
   >> npm install rollup @rollup/plugin-node-resolve @rollup/plugin-typescript @rollup/plugin-commonjs rollup-plugin-dts --save-dev

11. rollup.config.js
            import resolve from "@rollup/plugin-node-resolve";
            import commonjs from "@rollup/plugin-commonjs";
            import typescript from "@rollup/plugin-typescript";
            import dts from "rollup-plugin-dts";

            const packageJson = require("./package.json");

            export default [
            {
                input: "src/index.ts",
                output: [
                {
                    file: packageJson.main,
                    format: "cjs",
                    sourcemap: true,
                },
                {
                    file: packageJson.module,
                    format: "esm",
                    sourcemap: true,
                },
                ],
                plugins: [
                resolve(),
                commonjs(),
                typescript({ tsconfig: "./tsconfig.json" }),
                ],
            },
            {
                input: "dist/esm/types/index.d.ts",
                output: [{ file: "dist/index.d.ts", format: "esm" }],
                plugins: [dts()],
            },
            ];

12. add "rollup": "rollup -c" in script in lib root package.json

13. build library
   >> npm run rollup