import React/*, { useState }*/ from 'react';
import TaskComponent from './TaskComponent'
import propTypes from 'prop-types';

let TasksComponent = (props) => {
    //const [tareas, setTareas] = useState(tasks);

   return(
      <div>
      {props.tasks.map(elemento => <TaskComponent task={elemento}  deleteTask={props.deleteTask} changeDoneTask={props.changeDoneTask}  key={elemento.id} />)}
      </div>
   );
}

TasksComponent.propTypes = {
    tasks: propTypes.array.isRequired
}

export default TasksComponent;