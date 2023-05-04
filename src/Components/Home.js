import styles from "../Components/Layout/Home.module.css"
import { Link } from "react-router-dom"
import cap from "../img/cap.png"
import Iron from "../img/Iron.png"
import Thor from "../img/Thor.png"


function Home() {
    return ( 
        <div className={styles.title}>
        <h2>Escolha uma das opções:</h2>

            <div className={styles.img}>
            
                <div className={styles.ItemContainer}><Link to = "/Projetos" end> <img src={cap} alt="cap" /> <p>Projetos</p> </Link></div>
                <div className={styles.ItemContainer}><Link to = "/Contato" end> <img src={Iron} alt="Iron" /> <p>Contato</p> </Link></div>
                <div className={styles.ItemContainer}><Link to = "/SobreMim" end> <img src={Thor} alt="Thor" /> <p>Sobre mim</p> </Link></div>
            
        
        </div>
        </div>
    )
}

export default Home