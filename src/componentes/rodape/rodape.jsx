import "./rodape.css";

export function Rodape() {
    return (
        <footer className="rodape">
            <div className="contact-info">
                <h2>CONTATO</h2>
                <p>+55 11 97176-9818</p>
                <p>amandasantosvaz@gmail.com</p>
                <div className="social-media">
                    <a 
                        href="https://www.instagram.com/amanda.svazarquiteta/?igsh=bW9mN3RpdDludzh6#"
                        aria-label="Instagram"
                    >
                        <img 
                            className='icons_social-midia' 
                            src="icons/instagram.png" 
                            alt="Instagram logo" 
                        />
                    </a>
                    <a 
                        href="https://wa.me/5511971769818" 
                        aria-label="WhatsApp"
                    >
                        <img 
                            className='icons_social-midia' 
                            src="icons/whatsapp.png" 
                            alt="WhatsApp logo" 
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}