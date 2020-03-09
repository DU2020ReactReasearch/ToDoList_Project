//convention for component files is that the first letter is uppercase

//class-based component like app.js
import React, {Component} from 'react';

import Todoitem from './Todoitem';

import PropTypes from 'prop-types';

//map method can return an array from an array. Used to loop through and output JSX

class  Todos extends Component {
    
    markComplete = () => {
               console.log('Hello')
    }
    
 
    render(){
        console.log(this.props.todos);
        return this.props.todos.map((todo) =>(
        
            <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ));
    }
}
//object of props
Todos.propTypes ={
todos: PropTypes.array.isRequired
}

export default Todos;