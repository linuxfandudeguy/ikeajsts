interface VNode {
    tag: string;
    props?: { [key: string]: any };
    children?: VNode[];
}

export class Component {
    state: any;
    props: any;

    constructor(props: any) {
        this.props = props;
        this.state = {};
    }

    setState(newState: any) {
        this.state = { ...this.state, ...newState };
        this.render();
    }

    render(): VNode {
        // To be overridden by the component user
        return { tag: "div", children: [] };
    }
}
