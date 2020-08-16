class Router {
    constructor(routes) {
        this.routes = routes;
        this._loadInitialRoutes();
    }
}

_loadInitialRoutes() {
    const pathNameSplit = window.location.pathname.split('/');
    const pathSegs = pathNameSplit.length > 1 ? pathNameSplit(1) : ''
    this.loadRoute(...pathSegs)
}