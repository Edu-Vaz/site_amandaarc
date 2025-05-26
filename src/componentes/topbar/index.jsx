import './style.css';
import { Link } from 'react-router-dom';

export function Topbar() {
    return (
        <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-left">
          <img src="/imagens/LOGO-removebg-preview.png" alt="Logo" className="topbar-logo" />
        </div>
        <div className="topbar-right">
          <ul className="topbar-menu">
            <li className="topbar-menu-item">
              <Link to="../">Inicio</Link>
            </li>
            <li className="topbar-menu-item">como funciona</li>
            <li className="topbar-menu-item">portfólio</li>
            <li className="topbar-menu-item">depoimentos</li>
            <li className="topbar-menu-item">
              <Link to="/solicitar-orcamento">Solicitar orçamento</Link>            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}