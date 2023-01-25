import { AddBar } from './AddBar'
import { Info } from './Info'
import { Task } from './Task'
import styles from './TaskList.module.css'

export function TaskList() {
    return(
        <div className={styles['task-list']}>
            <AddBar />
            <Info />
            <Task />
            <Task />
            <Task />
        </div>
    )
}