/*demo组件*/

import React from 'react';

// 一、组件类的写法
export default class Demo2 extends React.Component {
    state = {
        count: 0
    };

    render() {
        return (
            <div>
                <p>功能研发中，敬请期待～ {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
            </div>
        );
    }
}
