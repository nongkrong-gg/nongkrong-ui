import { Splide, SplideSlide } from '@splidejs/react-splide';
import {
  Title,
  Toast,
  Button,
} from 'components';
import buildingSVG from 'assets/graphics/building.svg';
import classes from './style.module.scss';

function Event() {
  return (
    <>
      <div className="content">
        <div className={classes.nav}>
          <div className={classes.left}>
            <Title className={classes.title}>Wacana dari,</Title>
            <div className={classes['user-container']}>
              <img
                alt="avatar"
                src="https://api.dicebear.com/6.x/micah/svg?seed=10-indirect_rose_lark&size=24&backgroundColor=b6e3f4%2Cc0aede%2Cd1d4f9%2Cffd5dc%2Cffdfbf&radius=50"
              />
              <p className="event-username">Jhon Bewok</p>
            </div>
          </div>
          <div className={classes.right}>
            <p className="event-description">“Udah lama nih ga kumpul, yakali ga kuy...”</p>
          </div>
        </div>
        <Toast
          className={classes.toast}
          primary
          icon="calendar"
          title="Senin, 29 Mei 2023"
          description="4.00 PM"
          info="+ 5 Lainnya sudah gaskeun"
          infoIcons={
            [

              'https://api.dicebear.com/6.x/micah/svg?seed=10-indirect_rose_lark&size=24&backgroundColor=b6e3f4%2Cc0aede%2Cd1d4f9%2Cffd5dc%2Cffdfbf&radius=50',
              'https://api.dicebear.com/6.x/micah/svg?seed=1_remarkable_moccasin_junglefowl&size=24&backgroundColor=b6e3f4%2Cc0aede%2Cd1d4f9%2Cffd5dc%2Cffdfbf&radius=50',
              'https://api.dicebear.com/6.x/micah/svg?seed=6-uncomfortable_violet_snail&size=24&backgroundColor=b6e3f4%2Cc0aede%2Cd1d4f9%2Cffd5dc%2Cffdfbf&radius=50',
              'https://api.dicebear.com/6.x/micah/svg?seed=15-prospective_black_toucan&size=24&backgroundColor=b6e3f4%2Cc0aede%2Cd1d4f9%2Cffd5dc%2Cffdfbf&radius=50',
            ]
          }
        />
        <Title className={classes['title-map-center']}>Dimana nih?</Title>
        <div className={classes.map}>
          <img
            alt="map"
            src="https://developers.google.com/static/maps/images/landing/hero_maps_static_api_480.png"
          />
        </div>
        <div className={`event-map-description ${classes['map-description']}`}>
          <i className="fa-solid fa-circle-info" />
          <p>Rekomendasi tempat mungkin berubah sewaktu - waktu, keep up to date ya!</p>
        </div>
        <div className={classes['title-map-recommendations-container']}>
          <Title className={classes['title-map-recommendations']}>Bisa jadi bakal sekitaran</Title>
          <p className="event-toast">5 Rekomendasi</p>
        </div>
        <Splide
          className={`map-recommendations ${classes['map-recommendations']}`}
          options={{
            type: 'loop',
            pagination: false,
            arrows: false,
            fixedWidth: '116px',
            autoHeight: true,
            gap: '8px',
            lazyLoad: 'nearby',
            preloadPages: 3,
            trimSpace: false,
            slideFocus: true,
            isNavigation: true,
          }}
        >
          {Array(5).fill(0).map((_, index) => (
            <SplideSlide key={index}>
              <div className={`event-map-recommendation-container ${classes['map-recommendation-container']}`}>
                <img
                  className={classes['map-recommendation-img']}
                  alt="map"
                  src="https://developers.google.com/static/maps/images/landing/hero_maps_static_api_480.png"
                />
                <p className={classes['map-recommendation-description']}>
                  Sejuk Bakmi & Kopi SCBD
                </p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
        <img className={classes.building} src={buildingSVG} alt="building" />
      </div>
      <div className="footer white">
        <Button
          className={classes['button-accept-invitation']}
          primary
          iconRight="fire"
        >
          Gaskeun lah
        </Button>
        <Button secondary iconRight="thumbs-down">Skip dulu</Button>
      </div>
    </>
  );
}

export default Event;
