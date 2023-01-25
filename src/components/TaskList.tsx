import { AddBar } from './AddBar'
import { Task } from './Task'
import styles from './TaskList.module.css'

export function TaskList() {
    return(
        <div className={styles['task-list']}>
            <AddBar />
            <Task />
            <Task />
            <Task />
        </div>
    )
}