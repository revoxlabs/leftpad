# TS Leftpad example

## TSC config
Setup TS project:

#### Option 1: Using tsc cli

```bash
tsc --init
```

Using tsc cli, a default tsconfig is created with the following config:

```
target: es2016
module: commonjs
strict: true
esModuleInterop: true
skipLibCheck: true
forceConsistentCasingInFileNames: true
```

#### Option 2: Create tsconfig

Create tsconfig.json with the following recommended options for the following sample project:

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "es2016",
    "module": "ESNext",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "noEmit": true,
    "isolatedModules": true
  }
}
```

## Eslint & Prettier

> For more information please visit the detailed [vanilla TS project setup](https://github.com/kevintyj/templates/blob/main/CONFIG.md) for more help

#### Initialize pnpm

```bash
pnpm init
```

#### Install ESlint & Prettier

```bash
pnpm i -D eslint \
    eslint-config-prettier \
    eslint-plugin-prettier \
    prettier
```

## Watch using tsc

```bash
tsc -w
```
