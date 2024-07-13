# Setup your vite project
```
pnpm create vite@latest .
pnpm install
```

# Configure tailwindcss
```
pnpm install -D tailwindcss postcss autoprefixer
pnpm tailwind init -p
```

## Update tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Update src/index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Run the dev server
```
pnpm dev
```