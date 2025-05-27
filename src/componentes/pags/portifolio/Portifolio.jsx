import { Gallery } from "./gallery.jsx";
import './style.css';
import { Topbar } from '../../topbar/index.jsx';
import { Rodape } from "../../rodape/rodape.jsx";

function Portifolio() {
  return (
    <>
      <Topbar />
      <h1>galeria</h1>
      <Gallery />
      <Rodape />
    </>
  );
}

export default Portifolio;