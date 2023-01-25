import {Trash, Check} from 'phosphor-react'
import styles from './Task.module.css'

export function Task(){
    return (
        <li className={styles.task}>
            <div className={styles.checkbox}>
                <Check />
            </div>
            <p>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </p>
            <a className={styles.excluir} href="">
                <Trash size={14} />
            </a>
        </li>
    )
}