import React, { useState } from 'react';
import './style.css';
import { Topbar } from '../../topbar/index.jsx';
import { Rodape } from '../../rodape/rodape.jsx';
const FormularioContato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Aqui você pode enviar os dados para a API
    try {
      const response = await fetch('SUA_API_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
      } else {
        alert('Erro ao enviar a mensagem.');
      }
    } catch (error) {
      alert('Erro na conexão com a API.');
    }
  };

  return (
    <>
    <Topbar/>
     <div className="contact-container">
      <div className="contact-info">
        <h2>CONTATO</h2>
        <p>+55 11 97176-9818</p>
        <p>amandasantosvaz@gmail.com</p>
        <div className="social-media">
          <a  href="https://www.instagram.com/amanda.svazarquiteta/?igsh=bW9mN3RpdDludzh6#">  <img className='icons_social-midia' src="icons/instagram.png" alt="Instagram" /></a>
          <a  href="https://wa.me/5511971769818">  <img className='icons_social-midia' src="icons/whatsapp.png" alt="whatsapp" /> </a>
        </div>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Nome" required />
        <input type="text" placeholder="Sobrenome" required />
        <input type="email" placeholder="Email" required />
        <input type="Telefone" placeholder="Telefone" required />
        <textarea id='Texto' placeholder="Descrição do projeto" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
    <Rodape/>
    </>
  );
};

export default FormularioContato;