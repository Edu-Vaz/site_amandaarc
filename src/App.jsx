import { Topbar } from './componentes/topbar/index.jsx';
import PhotoCarousel from './componentes/photoCarousel/index.jsx';
import { Mainbody } from './componentes/mainbody/mainbody.jsx';
import ScrollImage from './componentes/scrollImage/scrollimage.jsx';
import './App.css';
import Gallery from './componentes/topicos/topicos.jsx';
import FormularioCaptacao from './componentes/pags/solicite orçamento/solicite orcamento.jsx';
import { Routes, Route } from 'react-router-dom';
import { Rodape } from './componentes/rodape/rodape.jsx';

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
      
      <Route path="/solicitar-orcamento" element={<FormularioCaptacao />} />
    </Routes>
  );
}

export default App;