import styles from "../Components/Layout/SobreMim.module.css"
import perfil from "../img/perfil.jpg"
function SobreMim() {
    return(
       
        <div className={styles.text}>
            
            <h1>Ola!!!</h1>
            
            <p>Meu nome é Rafael da Silva Santos, tenho 24 anos e atualmente
            estou cursando o 3º semestre de Análise e Desenvolvimento de Sistemas
            na instituição de ensino Uninter.
            Sou uma pessoa curiosa e gosto de me aprofundar e aprender coisas novas.
            A área da tecnologia sempre me encantou e tenho como objetivo principal me 
            tornar um desenvolvedor Front-end e poder ingressar na área o mais breve possível.

            <p>Me especializando em:</p>

            - HTML;<br/>
            - CSS;<br/>
            - Java Script;<br/>
            - React JS.
            </p> 
            <img src={perfil} alt="cap" />
        </div>
       
    )
}

export default SobreMim