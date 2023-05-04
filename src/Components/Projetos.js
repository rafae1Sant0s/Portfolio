import { FaGithub} from 'react-icons/fa';
import styles from "./Layout/Projetos.module.css"


function Projetos() {
    return (
        <div className={styles.project}>
            <a href="https://github.com/rafae1Sant0s"><FaGithub className={styles.Github}/><p>Github</p></a>
        </div>
    ) 
}

export default Projetos