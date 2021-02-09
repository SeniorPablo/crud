import React, { Fragment, useState } from 'react'
import { isEmpty, size } from 'lodash'
import shortid from 'shortid'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState("")
  const [error, setError] = useState(null)

  const validForm = () => {
    let isValid = true
    setError(null)

    if (isEmpty(task)) {
      setError("Debes ingresar una tarea")
      isValid = false;
    }

    return isValid
  }

  const addTask = (e) => {
    e.preventDefault()
    if (!validForm()) {
      return
    }
    const newTask = {
      id: shortid.generate(),
      name: task
    }

    setTasks([...tasks, newTask])
    setTask("")
  }

  const deleteTask = (id) => {
    const filterTask = tasks.filter(task => task.id !== id)
    setTasks(filterTask)
  }

  const editTask = (item) => {
    setTask(item.name)
    setEditMode(true)
    setId(item.id)
  }

  const updateTask = (e) => {
    e.preventDefault()
    if (!validForm()) {
      return
    }

    const updatedTask = tasks.map((item) => item.id === id ? { id, name: task } : item)
    setTasks(updatedTask)
    setEditMode(false)
    setId("")
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
            {
              size(tasks) === 0 ? (
                <li className="list-group-item">No hay tareas programadas</li>
              ) : (
                  <ul className="list-group">
                    {
                      tasks.map((item) => (
                        <li className="list-group-item" key={item.id}>
                          <span className="lead">{item.name}</span>
                          <button className="btn btn-danger btn-sm float-right mx-2" onClick={() => deleteTask(item.id)}>Eliminar</button>
                          <button className="btn btn-warning btn-sm float-right" onClick={() => editTask(item)}>Editar</button>
                        </li>
                      ))
                    }
                  </ul>
                )
            }
          </div>
          <div className="col-4">
            <h4 className="text-center">{editMode ? "Modificar Tarea" : "Agregar Tarea"}</h4>
            <form onSubmit={editMode ? updateTask : addTask}>
              {
                error && <span className="text-danger">{error}</span>
              }
              <input type="text" className="form-control mb-2" placeholder="Ingrese la tarea..." onChange={(text) => setTask(text.target.value)} value={task} />
              <button className={editMode ? "btn btn-warning btn-block" : "btn btn-dark btn-block"} type="submit">{editMode ? "Guardar" : "Agregar"}</button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
