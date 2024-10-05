import { createElement } from "./vdom";

export function render() {
    const root = document.getElementById("app");
    if (root) {
        root.innerHTML = ""; // Clear previous content
        // Here, we should insert the initial component rendered
        const initialComponent = {
            tag: "div",
            children: [{ tag: "h1", props: { innerText: "Welcome to TypeScriptX!" } }],
        };
        root.appendChild(createElement(initialComponent)); // Append the initial component
    }
}
