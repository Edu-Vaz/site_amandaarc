import { Topbar } from './componentes/topbar/index.jsx';
import PhotoCarousel from './componentes/photoCarousel/index.jsx';
import { Mainbody } from './componentes/mainbody/mainbody.jsx';
import ScrollImage from './componentes/scrollImage/scrollimage.jsx';
import './App.css';
import Gallery from './componentes/topicos/topicos.jsx';
import FormularioCaptacao from './componentes/pags/solicite orçamento/solicite orcamento.jsx';
import { Routes, Route } from 'react-router-dom';
import { Rodape } from './componentes/rodape/rodape.jsx';
import Portifolio from './componentes/pags/portifolio/Portifolio';
import NotFound from './componentes/pags/pagina nao encontrada/Pagina.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Topbar />
          <PhotoCarousel />
          <div className="main-row" style={{ padding: '50px' }}>
            <Mainbody />
            <ScrollImage id='imagem-sobre-mim' src="/imagens/sobre mim.jpg" />
          </div>
          <Gallery />
          <Rodape />
        </>
      } />
      <Route path="/solicitar-orcamento" element={
        <>
          <Topbar />
          <FormularioCaptacao />
          <Rodape />
        </>
      } />
      <Route path="/portifolio" element={
        <>
          <Topbar />
          <Portifolio />
          <Rodape />
        </>
      } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;