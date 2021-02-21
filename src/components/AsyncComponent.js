import React, { Component } from 'react';

// Higher Order Component
export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null
            }
        }

        async componentDidMount() {
            const { default: component } = await importComponent();
            this.setState({
                component: component
            })
        }

        render() {
            const Component = this.state.component;
            return Component ? <Component {...this.props} /> : null;
        }
    }

    return AsyncComponent;
}




/*
What is a Higher Order Component
Creating an async component - AKA Higher Order Component
A Higher Order Component is a component that returns another component
Similar to higher order function which returns another function
An example of a higher order component is like <connect></connect> in redux.

    More on Higher-Order Components - React Docs
*/