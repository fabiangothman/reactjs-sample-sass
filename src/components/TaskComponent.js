import React/*, { useState }*/ from 'react';
import './Task.sass';
import propTypes from 'prop-types';

let TaskComponent = (props) => {
    //const [tareas, setTareas] = useState(tasks);
   const {task} = props;    //Extrae solo el dato TASK del PROPS para abreviar y ya no estar llamando siempre a props.tasks.*
   const boxStyles = {
       border: '0',
       padding: '5px'
    }

    let logoSrc = 'http://placehold.it/350x200';

    return(
        <section className="card-container" style={boxStyles}>
            <div style={taskCompeted(task.done)}>
                <article className="c-card">
                    <header className="c-card__header">
                        <img src={logoSrc} className="c-card__image" alt="Card pic" />
                    </header>
                    
                    <div className="c-card__body">
                        <h2 className="c-card__title">{task.title}</h2>
                        <p className="c-card__subtitle">{task.id}</p>
                        
                        <p className="c-card__intro">{task.description}</p>
                    </div>
                    
                    <footer className="c-card__footer">
                        <input type="checkbox" onChange={props.changeDoneTask.bind(this, task.id)} />
                        <button style={btnDeleteStyles} onClick={props.deleteTask.bind(this, task.id)}>x</button>
                    </footer>
                </article>
            </div>
        </section>
    );
}

//Aqui valida que el objeto que reciba sea el adecuado (de tipo object) y sea obligatorio
TaskComponent.propTypes = {
    task: propTypes.object.isRequired
}

const taskCompeted = (isDone) => {
    //Retorna un objeto de JS
    return {
        fontSize: '20px',
        color: (isDone) ? 'black' : 'grey',
        textDecoration: (isDone) ? 'none' : 'line-through',
    }
}

const btnDeleteStyles = {
    fontSize: '18px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'

}

export default TaskComponent;