import { useState, useContext } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { DarkModeContext } from 'contexts';
import {
  Title,
  Subheading,
  Toast,
  Button,
  Modal,
  Input,
} from 'components';
import buildingSVG from 'assets/graphics/building.svg';
import buildingNightSVG from 'assets/graphics/building-night.svg';
import classes from './style.module.scss';

function Event() {
  const darkmode = useContext(DarkModeContext);
  const [isModalCheckInOpen, setIsModalCheckInOpen] = useState(false);
  const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);
  const [location, setLocation] = useState('');
  const [isLocationValid, setIsLocationValid] = useState(false);

  const openCheckInModal = () => {
    setIsModalConfirmOpen(false);
    setIsModalCheckInOpen(true);
  };

  const openConfirmModal = () => {
    setIsModalCheckInOpen(false);
    setIsModalConfirmOpen(true);
  };

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
        {
          darkmode.isActivated() ? (
            <img className={classes.building} src={buildingNightSVG} alt="building" />
          ) : (
            <img className={classes.building} src={buildingSVG} alt="building" />
          )
        }
      </div>
      <div className="footer white">
        <Button
          className={classes['button-accept-invitation']}
          primary
          iconRight="fire"
          onClick={openCheckInModal}
        >
          Gaskeun lah
        </Button>
        <Button secondary iconRight="thumbs-down">Skip dulu</Button>
      </div>
      <Modal
        isOpen={isModalCheckInOpen}
        onRequestClose={openCheckInModal}
      >
        <Title className={classes['modal-check-in-title']}>Kamu OTW dari mana?</Title>
        <Input
          secondary
          value={location}
          isValid={isLocationValid}
          setValue={setLocation}
          setIsValid={setIsLocationValid}
          ignoreValid
          type="text"
          name="location"
          placeholder="Tulis lokasi kamu"
        />
        <div className={`${classes['modal-check-in-button-container']} button-container`}>
          <div className={classes['modal-check-in-button']}>
            <i className="fa-solid fa-map" />
            <p>Pilih dari map</p>
          </div>
          <div className={classes['modal-check-in-button']}>
            <i className="fa-solid fa-location-crosshairs" />
            <p>Gunakan Lokasi Saat ini</p>
          </div>
        </div>
        <p className={classes['modal-check-in-info']}>
          Hasil untuk &quot;Bintaro&quot;
        </p>
        <div className={classes['modal-check-in-result']} onClick={openConfirmModal}>
          {Array(20).fill(0).map((_, index) => (
            <div key={index}>
              <p className={`${classes['modal-check-in-result-title']} result-title`}>
                Bintaro Jaya Xchange Mall
              </p>
              <p className={classes['modal-check-in-result-description']}>
                Buolevard Bintaro Jaya Blok. 0-2, Bintaro Jaya Sektor VII,
                Pondok Jaya, Pondok Aren, Tangerang
              </p>
            </div>
          ))}
        </div>
      </Modal>
      <Modal
        isOpen={isModalConfirmOpen}
        onRequestClose={() => setIsModalConfirmOpen(false)}
        fitContent
      >
        <div className={classes['modal-confirm-header']}>
          <div>
            <Title>Pastiin lagi ya</Title>
            <Subheading tertiary>
              Lokasi yang kamu pilih bakal nentuin lokasi wacana nantinya.
            </Subheading>
          </div>
          <Button
            quaternary
            small
            iconRight="pen-to-square"
            onClick={openCheckInModal}
            className="modal-confirm-edit-button"
          >
            Edit
          </Button>
        </div>
        <div className={classes['modal-confirm-location']}>
          <i className="fa-solid fa-location-dot" />
          <div>
            <p>Bintaro Jaya Xchange Mall</p>
            <p>
              Buolevard Bintaro Jaya Blok. 0-2, Bintaro Jaya Sektor VII,
              Pondok Jaya, Pondok Aren, Tangerang
            </p>
          </div>
        </div>
        <Subheading tertiary className={classes['modal-confirm-subtitle']}>
          Lokasi yang kamu pilih bakal nentuin lokasi wacana nantinya.
        </Subheading>
        <Button primary iconRight="thumbs-up">Yakin dong</Button>
      </Modal>
    </>
  );
}

export default Event;
