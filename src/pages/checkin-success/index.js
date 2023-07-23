import { useNavigate } from 'react-router-dom';
import {
  Title,
  Subheading,
  Button,
  Toast,
} from 'components';
import wacanaSVG from 'assets/graphics/wacana.svg';
import clapGIF from 'assets/graphics/clap.gif';
import classes from './style.module.scss';

function CheckInSuccess() {
  const navigate = useNavigate();

  return (
    <>
      <div className="content">
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
            src={clapGIF}
            className={classes['gif-clap']}
          />
          <Title className={classes.title} secondary>Yuk, Gaskeun!</Title>
          <Subheading className={classes.subheading} secondary>
            Kamu udah mutusin buat ikutan wacana, jangan lupa catat waktu dan tanggalnya ya 😉
          </Subheading>
          <div className={`success-date-container ${classes['date-container']}`}>
            <Toast
              className={classes.toast}
              primary
              icon="calendar"
              title="Senin, 29 Mei 2023"
              description="4.00 PM"
              info="Kamu dan 5 lagi sudah gaskeun"
              infoIcons={
                [

                  'https://api.dicebear.com/6.x/micah/svg?seed=10-indirect_rose_lark&size=24&backgroundColor=b6e3f4%2Cc0aede%2Cd1d4f9%2Cffd5dc%2Cffdfbf&radius=50',
                  'https://api.dicebear.com/6.x/micah/svg?seed=1_remarkable_moccasin_junglefowl&size=24&backgroundColor=b6e3f4%2Cc0aede%2Cd1d4f9%2Cffd5dc%2Cffdfbf&radius=50',
                  'https://api.dicebear.com/6.x/micah/svg?seed=6-uncomfortable_violet_snail&size=24&backgroundColor=b6e3f4%2Cc0aede%2Cd1d4f9%2Cffd5dc%2Cffdfbf&radius=50',
                  'https://api.dicebear.com/6.x/micah/svg?seed=15-prospective_black_toucan&size=24&backgroundColor=b6e3f4%2Cc0aede%2Cd1d4f9%2Cffd5dc%2Cffdfbf&radius=50',
                ]
              }
            />
            <Button quaternary iconRight="calendar-plus">
              Buat Reminder
            </Button>
          </div>
        </div>
      </div>
      <div className={`footer white ${classes.footer}`}>
        <div>
          <i className="fa-solid fa-circle-info" />
          <p>
            Rekomendasi tempat mungkin sudah berubah,
            disaranin buat lihat undangan kembali ya.
          </p>
        </div>
        <Button
          className="success-share-link"
          primary
          iconRight="calendar"
          onClick={() => navigate(0)}
        >
          Lihat Kembali Undangan
        </Button>
      </div>
    </>
  );
}

export default CheckInSuccess;
