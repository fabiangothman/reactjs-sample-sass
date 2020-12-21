import React, { Component } from "react";
import './TaskForm.sass';
 
export default class TaskFormComponent extends Component {
    
    //El estado va a almacenar un objeto de task
    state = {
        titulo: "",
        descripcion: ""
    };

    boxStyles = {
        border: '0',
        padding: '5px',
        margin: '10px'
     }

    onSubmit = event => {
        event.preventDefault();        
        console.log(this.state);

        //Los PROPS ya pertenecen a la clase con palabra reservado
        this.props.addNewTask(this.state);
    }
    
    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    //Render es un método y palabra reservada
    render() {
        
        return(
            <div className="feedback-card" style={this.boxStyles}>
                <div className="feedback-header">Create new card</div>
                <form onSubmit={this.onSubmit} className="feedback-body">
                    <div>
                        <input type="text"
                            name="titulo"
                            placeholder="Write a task title"
                            className="feedback-body__email"
                            onChange={this.onChange} value={this.state.titulo} />
                    </div>
                    <div>
                        <textarea
                            name="descripcion"
                            placeholder="Write here a task description"
                            className="feedback-body__message"
                            onChange={this.onChange} value={this.state.descripcion} ></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Create" className="feedback-body__submit" />
                    </div>
                </form>
            </div>
        );
    }

}

//export default TaskFormComponent;