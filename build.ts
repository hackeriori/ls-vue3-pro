import {execSync} from "child_process";

execSync('npx vue-tsc --noEmit --allowJs && vite build && esbuild dist/lsVue3Pro.es.js --minify --format=esm --allow-overwrite --outfile=dist/lsVue3Pro.es.js');
