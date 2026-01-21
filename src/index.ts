export default {
    async fetch(request: Request, env: any, ctx: any) {
        // Serve static assets from the 'ASSETS' binding
        return env.ASSETS.fetch(request);
    },
};
