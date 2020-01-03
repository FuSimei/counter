import React, {Component} from 'react';
import propTypes from 'prop-types';

export default class Counter extends Component {
    static propTypes = {
        count: propTypes.number.isRequired,
        increment: propTypes.func.isRequired,
        decrement: propTypes.func.isRequired,
        incrementAsync: propTypes.func.isRequired
    }
    increment = () => {
        // 得到选择增加数量
        const number = this.select.value * 1;
        // 调用store的方法更新状态
        this.props.increment(number);
    }

    decrement = () => {
        const number = this.select.value * 1;
        this.props.decrement(number);
    }

    incrementIfOdd = () => {
        const number = this.select.value * 1;
        const count = this.props.count;
        if(count % 2 === 1) {
            this.props.increment(number);
        }
    }

    incrementAsync = () => {
        const number = this.select.value * 1;
        this.props.incrementAsync(number);
        // setTimeout(() => {
        //     this.props.increment(number);
        // }, 1000)
    }

    render () {
        const { count } = this.props;
        console.log('count', count)
        return (
            <div>
                <p>click {count} times</p>
                <div>
                    <select ref={select => this.select = select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.incrementIfOdd}>increment if odd</button>
                    <button onClick={this.incrementAsync}>increment async</button>
                </div>
            </div>
        )
    }
}
