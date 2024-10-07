import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <div className='imagens'>
      <footer>
        <p>&copy; 2023 . Todos os direitos reservados.</p>
    
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src="fotos/instagram.png" alt="Instagram" />
        </a> 
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src="fotos/whatsapp.png" alt="WhatsApp" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src="fotos/linkedin.png" alt="LinkedIn" />
        </a>   
      </footer>
    </div>
  );
}