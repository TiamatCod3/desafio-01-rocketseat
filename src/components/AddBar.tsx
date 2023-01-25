import styles from './AddBar.module.css'

export function AddBar(){
    return(
        <form className={styles['add-bar']} action="">
            <input type="text" name="" id="" />
            <input type="submit" value="Criar" />
        </form>
    )
}