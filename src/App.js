import React, {Component} from 'react';
//import Todos component
import Todos from './components/Todos';
//import AddTodo component
import AddTodo from './components/AddTodo';
//import Header component
import Header from './components/layout/Header';
import './App.css';


class App extends Component{
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
            {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
            {
        id: 3,
        title: 'Meeting with Boss',
        completed: false
      }
    ]
  }

//Toggle todo complete
markComplete = (id) => {
  this.setState({todos: this.state.todos.map(todo =>{
                 if (todo.id === id){
                 todo.completed = !todo.completed
                }
                return todo;
                }) });
}

//Delete Todo
delTodo = (id)=>{
  this.setState({todos:[...this.state.todos.filter(todo=> todo.id !== id)] });
}

//Add Todo
addTodo=(title)=>{
    console.log(title);
  
    const newTodo =>{
        id: 4,
        title,
        completed: false  
    }
    
    //using the spread operator will make a copy of the todo
    this.setState({todos:[...this.state.todos, newTodo]})
}

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <div className="container">
            <Header />
            <AddTodo addTodo={this.addTodo} />
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
