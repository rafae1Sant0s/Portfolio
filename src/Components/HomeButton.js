import { Link } from "react-router-dom"
import styles from "../Components/Layout/HomeButton.module.css"
function HomeButton() {
    return(

        <div className={styles.home}>
            <Link to ="/"><h1>PORTFLIX</h1></Link>
        </div>
        
    )
}

export default HomeButton