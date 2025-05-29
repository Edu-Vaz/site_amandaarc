import React, { useState } from 'react';
import './style.css';
import { Topbar } from '../../topbar/index.jsx';
import { Rodape } from '../../rodape/rodape.jsx';
import emailjs from 'emailjs-com';

const FormularioContato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send('projeto_arcamanda', 'template_48odo2n', formData, 'dpp2Yc3A3ZIRQiOEs')
    .then((response) => {
      alert('Solicitação de orçamento enviada com sucesso!');
      console.log('SUCCESS!', response.status, response.text);
      setFormData({ name: '', email: '', phone: '', message: '' }); // Limpa o formulário
    }, (err) => {
      alert('Erro ao enviar solicitação. Tente novamente.');
      console.log('FAILED...', err);
    });
};

  return (
    <>
      <Topbar />
      <div className="contact-container">
        <div className="contact-info">
          <h2>CONTATO</h2>
          <p>+55 11 97176-9818</p>
          <p>amandasantosvaz@gmail.com</p>
          <div className="social-media">
            <a href="https://www.instagram.com/amanda.svazarquiteta/?igsh=bW9mN3RpdDludzh6#">
              <img className='icons_social-midia' src="icons/instagram.png" alt="Instagram" />
            </a>
            <a href="https://wa.me/5511971769818">
              <img className='icons_social-midia' src="icons/whatsapp.png" alt="WhatsApp" />
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Telefone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            id='Texto'
            name="message"
            placeholder="Descrição do projeto"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
     
    </>
  );
};

export default FormularioContato;