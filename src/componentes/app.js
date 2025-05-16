import logo from "../imagens/logo destiny.png"
import "./estilo.css"
function Logo() {
    return (
        <div className= "logo">
            <div className="logo">

                <img src={logo} width={250} alt='logo' className="logo-img"></img>
                <p> Destiny </p>

            </div>
        </div>
    );
}
export default Logo;