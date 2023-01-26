import { useState } from 'react'
import { AddBar } from './AddBar'
import { Info } from './Info'
import { Task } from './Task'
import styles from './TaskList.module.css'

interface TaskProps{
    id: number,
   description: string,
   done: boolean
}

const tasksList = [
    {
        id:1,
        description: 'Modificar o serviço',
        done: false
    },
    {
        id:2,
        description: 'Limpar a pia',
        done: false
    },
    {
        id:3,
        description: 'Varrer a casa',
        done: false
    }
  ]

export function TaskList() {
    
    const [tasks, setTasks] = useState(tasksList)

    function addTask(newTaskDescription:string) {
        const newTask = {
            id: tasks[tasks.length-1].id + 1,
            description: newTaskDescription,
            done: false
        }
        setTasks([...tasks, newTask])
    }

    function changeTaskState(id:number) {
        const tasksChanged = tasks.map(task=>{
            if (task.id===id){
                return {
                    id: task.id,
                    description: task.description,
                    done: !task.done
                }
            }else{
                return task
            }
        })
        setTasks(tasksChanged)
    }

    function deleteTask(id:number) {
        const tasksWithoutDeletedOne = tasks.filter(task=>task.id !== id)
        setTasks(tasksWithoutDeletedOne)
    }

    return(
        <div className={styles['task-list']}>
            <AddBar 
                onAddTask={addTask}
            />
            <Info 
                count={tasks.length}
                completed={tasks.filter(task=>task.done==true).length}            
            />
            {
                tasks.map(task=>{
                    return(
                        <Task 
                            key={task.id}
                            id={task.id}
                            description={task.description}
                            done={task.done}
                            onCheckClick={changeTaskState}
                            onDeleteTask={deleteTask}
                        />
                    )
                })
            }
        </div>
    )
}