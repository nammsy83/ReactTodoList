import React, { Component } from 'react';
import TodoList from './components/todoList/todo.list.component';
import FormInput from './components/formInput/form-input.component';
import uuid from 'uuid';
import './App.scss';

class App extends Component {

  state = {
    items: [],
    item: '',
    id: uuid(),
    completed: false
  }



  componentWillMount() {
    localStorage.getItem('items') && this.setState({
      items: JSON.parse(localStorage.getItem('items'))
    })
  }

  componentDidMount() {
    if (localStorage.getItem('items')) {
      this.setState({ items: this.state.items })
    } else {
      console.log('using data from local ')
    }
  }

  componentWillUpdate(nextProps, nextstate) {
    localStorage.setItem('items', JSON.stringify(nextstate.items))

  }




  handleChange = event => {
    this.setState({
      item: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.item === '') {
      return;
    }

    const newItem = {
      id: this.state.id,
      title: this.state.item
    }

    const updatedItems = [...this.state.items, newItem];


    this.setState({
      items: updatedItems,
      item: '',
      id: uuid()
    });


  }

  toggleCheck = (id) => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id)
          item.completed = !item.completed;
        return item;
      })
    })
  }

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item =>
      item.id !== id);

    this.setState({
      items: filteredItems
    })
  }




  render() {
    return (
      <div>
        <div className="header">

          <h2>My To Do List</h2>
          <FormInput
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit} />
        </div>


        <TodoList
          items={this.state.items}
          handleDelete={this.handleDelete}
          toggleCheck={this.toggleCheck}

        />

      </div>
    )
  }
}
export default App;