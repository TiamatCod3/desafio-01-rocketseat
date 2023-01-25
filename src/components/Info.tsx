import styles from './Info.module.css'

export function Info(){
    return(
        <div className={styles.info}>
            <div className={styles.created}>
                Tarefas criadas
                <div>1</div>
            </div>
            <div className={styles.completed}>
                Concluídas
                <div>1</div>
            </div>
        </div>
    )
}