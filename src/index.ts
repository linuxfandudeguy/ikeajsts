import { render } from "./renderer"; // Ensure this is your render function
import { Router } from "./router"; // Import the Router class
import { createElement } from "./vdom"; // Import your createElement function

// Initialize the router
const router = new Router();

// Register routes
router.register("/", {
    render: () => ({
        tag: "div",
        props: { id: "welcome" },
        children: [
            { tag: "h1", props: { innerText: "Welcome to Ikea.js!" } },
            { tag: "p", props: { innerText: "This version of the framework is written in TypeScript." } },
            { tag: "p", props: { innerText: "Assemble UI components using JavaScript, just like assembling furniture from IKEA." } },
            {
                tag: "a",
                props: {
                    href: "usage",
                    innerText: "Get Started",
                    className: "get-started-button"
                }
            },
            { 
                tag: "p", 
                props: { 
                    innerText: "To customize this page, modify the elements and routes in 'src/index.ts'." 
                } 
            }
        ],
    }),
});

// Example route
router.register("/about", {
    render: () => ({
        tag: "div",
        props: { id: "about" },
        children: [
            { tag: "h2", props: { innerText: "About Ikea.js" } },
            { 
                tag: "p", 
                props: { 
                    innerText: "Ikea.js is a lightweight JavaScript library that lets you build UI components in a modular fashion." 
                } 
            },
            { 
                tag: "p", 
                props: { 
                    innerText: "Feel free to modify this route or add new routes in 'src/index.ts'." 
                } 
            }
        ],
    }),
});

// Example route for usage
router.register("/usage", {
    render: () => ({
        tag: "div",
        props: { id: "usage" },
        children: [
            { tag: "h2", props: { innerText: "How to Use Ikea.js" } },
            { 
                tag: "p", 
                props: { 
                    innerText: "To customize the appearance and functionality of this page, modify the styles in the CSS file located at 'styles.css'." 
                } 
            },
            {
                tag: "code",
                props: { innerText: "styles.css" }
            },
            { 
                tag: "p", 
                props: { 
                    innerText: "Also, try navigating to a random page that doesn't exist to see the 404 screen." 
                } 
            },
            { 
                tag: "p", 
                props: { 
                    innerText: "To customize this screen, modify the elements and routes in 'src/index.ts'." 
                } 
            }
        ],
    }),
});

// Define a simple 404 handler for unmatched routes
router.register("*", {
    render: () => ({
        tag: "div",
        props: { id: "not-found" },
        children: [
            { tag: "h1", props: { innerText: "SORRY, NOTHING" } },
            { tag: "p", props: { innerText: "The page you are looking for does not exist." } },
            { tag: "p", props: { innerText: "You can also modify this screen in 'src/index.ts'." } }
        ],
    }),
});

// Navigate to the root on load
router.navigate(window.location.pathname);

// Optional: Render the app initially
document.addEventListener("DOMContentLoaded", () => {
    router.render();
});
