import { AxonCore, AxonPlugin } from "@axonlabs/core";
import * as fs from "fs";
import * as path from "path";
import chokidar from "chokidar";

/**
 * Hot-Reload is an Axon plugin that enables dynamic hot-reloading of route modules.
 * 
 * It looks for JavaScript/TypeScript files in the specified routes directory, loads them
 * into the Axon core and watches the folder for changes to reload the routes.
 * 
 * Hot-Reload will automatically load your routes if you have followed the rules.
 * 
 * routes folder example:
 *  - routes
 *      - auth.route.ts
 *      - user.route.ts
 */
class HotReload implements AxonPlugin {
    public name = "Hot Reload";
    public version = "1.0.0";

    private routesDir: string;
    private rootDir: string;

    constructor(routesDir: string = "./routes", rootDir: string = "./") {
        this.routesDir = routesDir;
        this.rootDir = rootDir;
    }

    async init(core: AxonCore) {
        const routersDir = path.resolve(this.routesDir);
        const rootDir = path.resolve(this.rootDir);

        this.loadRoutes(core, routersDir);

        const watcher = chokidar.watch(rootDir, { ignoreInitial: true });

        watcher.on('all', (event: string, filePath: string) => {
            try {
                if (
                    filePath.endsWith('.js') ||
                    filePath.endsWith('.mjs') ||
                    filePath.endsWith('.cjs') ||
                    filePath.endsWith('.ts')) {

                    delete require.cache[require.resolve(filePath)];

                    this.loadRoutes(core, routersDir);
                }
            } catch (err) {
                console.error(`[Hot Reload]: Reloading error:\n`, err);
            }
        });
    }

    /**
   * Loads all route files from a directory and registers them with the Axon core.
   * @param core The AxonCore instance.
   * @param routesDir The absolute path to the routes directory.
   */
    private loadRoutes(core: AxonCore, routesDir: string): void {
        try {
            const reloadLabel = "[Hot Reload]: Core reloaded in";
            console.time(reloadLabel)
            fs.readdirSync(routesDir).forEach(file => {
                if (
                    file.endsWith('route.js') ||
                    file.endsWith('route.mjs') ||
                    file.endsWith('route.cjs') ||
                    file.endsWith('route.ts')) {
                    const filePath = path.join(routesDir, file);
                    try {
                        delete require.cache[require.resolve(filePath)];
                        const imported = require(filePath);
                        const router = imported.default || imported;
                        core.unloadRoute({
                            router
                        });
                        core.loadRoute(router);
                    } catch (err) {
                        console.error(`[Hot Reload]: Error loading route ${file}:\n`, err);
                    }
                }
            });
            console.timeEnd(reloadLabel)
        } catch (err) {
            console.error(`[Hot Reload]: Reloading error:\n`, err);
        }
    }
}

export default HotReload;