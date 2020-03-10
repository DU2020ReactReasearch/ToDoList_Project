import React, {Component} from 'react'

export class AddTodo extends Component {

    //field of state would be like name, email password etc. the value would be the input
state ={
    title: ''
}

//for the submit button 
onSubmit = (e)=> { 
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
}

//sets title to whatever we type in
onChange = (e) => this.setState({title:e.target.value});
//if you were doing something with multiple inputs you can do [e.target.name]:e.target.value (timestamp 1:09:00)

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                    <input 
                        type="text" 
                        name="title" 
                        style={{flex:'10', padding:'5px'}}
                        placeholder="Add Todo ..." 
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    <input
                        type="submit" 
                        value="Submit"
                        className="btn"
                        style={{flex:1}}
                    />
                </form>
            </div>
        )
    }
}

export default AddTodo