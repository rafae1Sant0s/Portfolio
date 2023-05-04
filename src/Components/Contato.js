import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import styles from "./Layout/Contato.module.css"


function Contato() {
    return (
        <div className={styles.btn}>
            <a href="https://www.linkedin.com/in/rafael-santos-5a108122a/"> <FaLinkedin className={styles.Linkedin}/> <p >Linkedin</p> </a>
            <a href="https://www.facebook.com/orafaelsantoos"> <FaFacebook className={styles.Facebook}/> <p>Facebook</p> </a>
            <a href="https://www.instagram.com/santooss_rafa/"> <FaInstagram className={styles.Instagram}/> <p>Instagram</p> </a>
        </div>
    )
   
 
}


export default Contato