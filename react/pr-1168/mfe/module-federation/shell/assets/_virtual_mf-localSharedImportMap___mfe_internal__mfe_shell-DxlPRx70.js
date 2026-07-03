import { _ as __vitePreload } from './preload-helper-DI8TksTD.js';
import './remoteEntry-Ddv1zkot.js';

const importMap = {
      
        "react": async () => {
          let pkg = await __vitePreload(() => import('./_virtual_mf___mfe_internal__mfe_shell__loadShare__react__loadShare__.js-CvM7R8TO.js').then(n => n.q),true?[]:void 0);
            return pkg;
        }
      ,
        "react-dom": async () => {
          let pkg = await __vitePreload(() => import('./_virtual_mf___mfe_internal__mfe_shell__loadShare__react_mf_2_dom__loadShare__.js-CF3rrn05.js').then(n => n.b),true?[]:void 0);
            return pkg;
        }
      ,
        "react-dom/client": async () => {
          let pkg = await __vitePreload(() => import('./_virtual_mf___mfe_internal__mfe_shell__loadShare__react_mf_2_dom_mf_1_client__loadShare__.js-6t3c58mB.js').then(n => n.a),true?[]:void 0);
            return pkg;
        }
      ,
        "react/jsx-runtime": async () => {
          let pkg = await __vitePreload(() => import('./_virtual_mf___mfe_internal__mfe_shell__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-DJVUU5ri.js').then(n => n.b),true?[]:void 0);
            return pkg;
        }
      
    };
      const usedShared = {
      
          "react": {
            name: "react",
            version: "19.2.0",
            scope: ["default"],
            loaded: false,
            from: "mfe_shell",
            async get () {
              usedShared["react"].loaded = true;
              const {"react": pkgDynamicImport} = importMap;
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^19.2.0",
              strictVersion: false,
              
            }
          }
        ,
          "react-dom": {
            name: "react-dom",
            version: "19.2.0",
            scope: ["default"],
            loaded: false,
            from: "mfe_shell",
            async get () {
              usedShared["react-dom"].loaded = true;
              const {"react-dom": pkgDynamicImport} = importMap;
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^19.2.0",
              strictVersion: false,
              
            }
          }
        ,
          "react-dom/client": {
            name: "react-dom/client",
            version: "19.2.0",
            scope: ["default"],
            loaded: false,
            from: "mfe_shell",
            async get () {
              usedShared["react-dom/client"].loaded = true;
              const {"react-dom/client": pkgDynamicImport} = importMap;
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^19.2.0",
              strictVersion: false,
              
            }
          }
        ,
          "react/jsx-runtime": {
            name: "react/jsx-runtime",
            version: "19.2.0",
            scope: ["default"],
            loaded: false,
            from: "mfe_shell",
            async get () {
              usedShared["react/jsx-runtime"].loaded = true;
              const {"react/jsx-runtime": pkgDynamicImport} = importMap;
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^19.2.0",
              strictVersion: false,
              
            }
          }
        
    };
      const usedRemotes = [
                {
                  entryGlobalName: "widget_updates",
                  name: "widget_updates",
                  type: "var",
                  entry: "/tonic-ui-demo/react/pr-1168/mfe/module-federation/widget-updates/mf-manifest.json",
                  shareScope: "default",
                }
          ,
                {
                  entryGlobalName: "widget_os",
                  name: "widget_os",
                  type: "var",
                  entry: "/tonic-ui-demo/react/pr-1168/mfe/module-federation/widget-os/mf-manifest.json",
                  shareScope: "default",
                }
          ,
                {
                  entryGlobalName: "inventory",
                  name: "inventory",
                  type: "var",
                  entry: "/tonic-ui-demo/react/pr-1168/mfe/module-federation/inventory/mf-manifest.json",
                  shareScope: "default",
                }
          
      ];

export { usedRemotes, usedShared };
