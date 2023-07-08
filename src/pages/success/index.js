import { useNavigate } from 'react-router-dom';
import {
  Title,
  Subheading,
  Button,
} from 'components';
import wacanaSVG from 'assets/graphics/wacana.svg';
import planeGIF from 'assets/graphics/plane.gif';
import classes from './style.module.scss';

function Success() {
  const navigate = useNavigate();

  return (
    <>
      <div className="primary-background" />
      <div className={classes.nav}>
        <img
          className={`logo ${classes.logo}`}
          alt="Wacana"
          src={wacanaSVG}
          onClick={() => navigate('/')}
        />
        <div className={classes.right} onClick={() => navigate('/')}>
          <p>Tutup</p>
          <i className="fa-solid fa-xmark" />
        </div>
      </div>
      <div className={classes['success-container']}>
        <img
          alt="success"
          src={planeGIF}
          className={classes['gif-plane']}
        />
        <Title className={classes.title} secondary>Yeay, Wacana Berhasil Dibuat!</Title>
        <Subheading className={classes.subheading} secondary>
          Kamu berhasil membuat wacana, jangan lupa buat undang temanmu
          dengan membagikan link wacana ini ya 😉
        </Subheading>
      </div>
      <div className={`footer ${classes.footer}`}>
        <p className={classes['footer-text']}>
          Bagikan ke :
        </p>
        <div className={`social-media-container ${classes['social-media-container']}`}>
          <i className="fa-brands fa-whatsapp" />
          <i className="fa-brands fa-instagram" />
          <i className="fa-regular fa-envelope" />
          <i className="fa-brands fa-telegram" />
        </div>
        <p className={classes['footer-text']}>Atau</p>
        <Button
          secondary
          iconRight="link"
        >
          Salin Link
        </Button>

      </div>
    </>
  );
}

export default Success;
