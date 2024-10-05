// src/vdom.ts

export interface VNode {
    tag: string;
    props?: { [key: string]: any }; // Define optional props
    children?: VNode[];
}

export function createElement(vnode: VNode): HTMLElement {
    const element = document.createElement(vnode.tag);
    
    // Use vnode.props or an empty object as a fallback
    const props = vnode.props || {};
    
    // Set properties
    Object.keys(props).forEach((key) => {
        (element as any)[key] = props[key]; // Type assertion for dynamic properties
    });

    // Append children
    if (vnode.children) {
        vnode.children.forEach((child) => {
            element.appendChild(createElement(child));
        });
    }

    return element;
}
