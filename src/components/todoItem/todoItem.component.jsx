import React, { Component } from 'react';
import './todo-item.styles.scss';

export default class TodoItem extends Component {

    render() {
        const { id, title, completed } = this.props.item;

        return (

            <li className={completed === true ? "checked" : ''}>

                <label> <input

                    type="checkbox"
                    onChange={() => this.props.toggleCheck(id)}
                    checked={completed ? 'checked' : ''}
                />{' '}
                    {title}</label>
                <span className="close" onClick={() => this.props.handleDelete(id)}>
                    x
                </span >

            </li >
        )
    }
}
