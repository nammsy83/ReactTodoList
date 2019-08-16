import React, { Component } from 'react'
import TodoItem from '../todoItem/todoItem.component';
// import PropTypes from 'prop-types';

class TodoList extends Component {
    render() {
        const { handleDelete, toggleCheck } = this.props;
        return this.props.items.map((item) => (
            <TodoItem
                key={item.id}
                item={item}
                title={this.props.title}
                toggleCheck={() => toggleCheck(item.id)}
                handleDelete={() => handleDelete(item.id)}
            />
        ));
    }
}

// // PropTypes
// TodoList.propTypes = {
//     items: PropTypes.array.isRequired,
//     toggleCheck: PropTypes.func.isRequired,
//     handleDelete: PropTypes.func.isRequired
// }
export default TodoList;