import {Trash} from 'phosphor-react'
import styles from './Task.module.css'

export function Task(){
    return (
        <li className={styles.task}>
            <label htmlFor="Teste" className={styles.container}>
                <input type="checkbox" name="Teste" id="" />
                <span className={styles.checkmark}></span>
            </label>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            <a href="">
                <Trash />
            </a>
        </li>
    )
}