import './style.css';

export function Topbar() {
    return (
        <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-left">
          
        </div>
        <div className="topbar-right">
          <ul className="topbar-menu">
            <li className="topbar-menu-item" >
              sobre
            </li>
            <li className="topbar-menu-item">
              como funciona
            </li>
            <li className="topbar-menu-item">
              portfólio
            </li>
            <li className="topbar-menu-item">
              depoimentos
            </li>
            <li className="topbar-menu-item">
              blog
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}