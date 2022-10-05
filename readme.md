create a `tsconfig.jsoon` file with the following content:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "declaration": true,
    "outDir": "./lib",
    "strict": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "**/__tests__/*"]
}
```
target: We want to compile to es5 since we want to build a package with browser compatibility.

module: Use commonjs for compatibility.

declaration: When you build packages, this should be true. Typescript will then also export type definitions together with the compiled javascript code so the package can be used with both Typescript and Javascript.

outDir: The javascript will be compiled to the lib folder.

include: All source files in the src folder

exclude: We don’t want to transpile node_modules, or tests since these are only used during development.

---

create a src folder and create a file named `index.ts`. Write your code and save it.

include `build:tsc` in `scripts` key inside `package.json` file

run `npm ruun build` to build the package