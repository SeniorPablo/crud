import React, { Fragment, useState } from 'react'
import { isEmpty } from 'lodash'
import shortid from 'shortid'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = (e) => {
    e.preventDefault()
    if (isEmpty(task)) {
      console.log("Task Empty")
      return
    }

    const newTask = {
      id: shortid.generate(),
      name: task
    }

    setTasks([...tasks, newTask])

    setTask("")
  }

  return (
    <Fragment>
      <div className="container mt-5">
        <h1 className="text-center">Tareas</h1>
        <hr />
        <div className="row">
          <div className="col-8">
            <h4 className="text-center">Lista de tareas</h4>
            <ul className="list-group">
              {
                tasks.map((item) => (
                  <li className="list-group-item" key={item.id}>
                    <span className="lead">{item.name}</span>
                    <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                    <button className="btn btn-warning btn-sm float-right">Editar</button>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="col-4">
            <h4 className="text-center">Formulario</h4>
            <form onSubmit={addTask}>
              <input type="text" className="form-control mb-2" placeholder="Ingrese la tarea..." onChange={(text) => setTask(text.target.value)} value={task} />
              <button className="btn btn-dark btn-block" type="submit">Agregar</button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
