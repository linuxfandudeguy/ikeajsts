import { VNode } from "./vdom"; // Import the VNode interface
import { createElement } from "./vdom"; // Import the createElement function

interface Route {
    render: () => VNode;
}

export class Router {
    private routes: { [path: string]: Route } = {};
    private currentPath: string = window.location.pathname;

    constructor() {
        window.addEventListener("popstate", () => {
            this.navigate(window.location.pathname);
        });
    }

    register(path: string, route: Route) {
        this.routes[path] = route;
    }

    navigate(path: string) {
        this.currentPath = path;
        window.history.pushState({}, "", path);
        this.render();
    }

    render() {
        const route = this.routes[this.currentPath] || this.routes["*"];
        const vnode = route.render();
        const rootElement = document.getElementById("app");
        if (rootElement) {
            rootElement.innerHTML = ""; // Clear existing content
            rootElement.appendChild(createElement(vnode)); // Render the new content
        }
    }
}
