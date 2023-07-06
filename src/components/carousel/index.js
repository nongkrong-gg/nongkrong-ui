import PropTypes from 'prop-types';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

const NUM_OF_IMAGES = 25;
const API_URL = 'https://api.dicebear.com/6.x/micah/svg';
const SIZE = 160;
const BACKGROUND_COLOR = 'b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf';
const RADIUS = 50;
const IMG_URL = (key) => {
  const url = new URL(API_URL);
  url.searchParams.set('seed', key);
  url.searchParams.set('size', SIZE);
  url.searchParams.set('backgroundColor', BACKGROUND_COLOR);
  url.searchParams.set('radius', RADIUS);

  return url.toString();
};

function Carousel({
  className,
  seed,
  activeChar,
  setActiveChar,
}) {
  return (
    <Splide
      className={className}
      hasTrack={false}
      onActive={(e) => setActiveChar(e.index + 1)}
      options={{
        type: 'loop',
        lazyLoad: 'nearby',
        preloadPages: 3,
        fixedWidth: '160px',
        fixedHeight: '160px',
        gap: '4px',
        pagination: false,
        focus: 'center',
        trimSpace: false,
        slideFocus: true,
        isNavigation: true,
      }}
    >
      <SplideTrack>
        {Array(NUM_OF_IMAGES).fill().map((_, i) => {
          const key = `${i}-${seed}`;

          return (
            <SplideSlide key={key}>
              <img data-splide-lazy={IMG_URL(key)} alt={key} />
            </SplideSlide>
          );
        })}
      </SplideTrack>
      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--prev">
          <i className="fa-solid fa-chevron-left" />
        </button>
        <div className="splide__info">{`Char #${activeChar}`}</div>
        <button className="splide__arrow splide__arrow--next">
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
    </Splide>
  );
}

Carousel.propTypes = {
  className: PropTypes.string,
  seed: PropTypes.string,
  activeChar: PropTypes.number,
  setActiveChar: PropTypes.func,
};

Carousel.defaultProps = {
  className: '',
  seed: '',
  activeChar: 1,
  setActiveChar: () => {},
};

export default Carousel;
