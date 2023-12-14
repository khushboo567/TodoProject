import { useState } from "react"
import { Add, Delete, Edit } from "./Redux/ReduxToolkit/Todo"
import { useDispatch, useSelector } from "react-redux"
import './form.css'


function Form() {
    
    const [task, setTask] = useState({
        Task: "",
        TaskDescription: ""
    })
    const list = useSelector((state) => state.todos.list)
    const dispatch = useDispatch()
    const [isEdit, setIsEdit] = useState(false)

    const handlechange = (e) => {
        const { name, value } = e.target
        setTask({ ...task, [name]: value })
    }
    // console.log(list)
    // console.log("task", task)

    const handleSubmit = (e) => {
        e.preventDefault()
        // debugger
        if(task.id){
            dispatch(Edit(task))
        }else{
            dispatch(Add({ ...task, ['id']: Date.now() }))
        }
        setTask({ id: "", Task: "", TaskDescription: "" })
    }

    const onEditButton = (editTask) => {
        setTask(editTask)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="color">
                <br />
                <label>Task: </label>
                <input required placeholder="Enter task" type="text"
                    name="Task"
                    value={task.Task}
                    onChange={handlechange} />
                <br /><br />
                <label>Task Description: </label>
                <input placeholder="Enter task dascription" type="text"
                    name="TaskDescription"
                    value={task.TaskDescription}
                    onChange={handlechange} />
                <br /><br />
                {
                    task?.id ?
                        <button type="submit">Save</button>
                        : <button type="submit" >Add</button>
                }
                <br /><br />
            </form>
            <div className="color">
                <table className="list">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>TaskDescription</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list?.map((item, index) => (
                                <tr>
                                    <td>{item?.Task}</td>
                                    <td>{item?.TaskDescription}</td>
                                    <td>{<button type="button" onClick={() => onEditButton(item)}>Edit</button>}</td>
                                    <td>{<button type="button" onClick={() => dispatch(Delete(item.id))}>Delete</button>}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Form