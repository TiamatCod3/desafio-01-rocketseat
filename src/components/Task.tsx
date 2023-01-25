import {Trash} from 'phosphor-react'
import styles from 'Task.module.css'

export function Task(){
    return (
        <li>
            <input type="checkbox" checked={true} name="Teste" id="" />
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            <a href="">
                <Trash />
            </a>
        </li>
    )
}