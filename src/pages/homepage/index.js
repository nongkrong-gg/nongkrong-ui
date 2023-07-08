import { useNavigate } from 'react-router-dom';
import {
  Title,
  Subheading,
  CTA,
  Toggle,
} from 'components';
import wacanaSVG from 'assets/graphics/wacana.svg';
import classes from './style.module.scss';

function Homepage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="building-background" />
      <div className={classes.nav}>
        <img
          className="logo"
          alt="Wacana"
          src={wacanaSVG}
          onClick={() => navigate('/')}
        />
        <div className={classes.right}>
          <Toggle />
          <img
            alt="avatar"
            src="https://api.dicebear.com/6.x/micah/svg?seed=10-indirect_rose_lark&size=24&backgroundColor=b6e3f4%2Cc0aede%2Cd1d4f9%2Cffd5dc%2Cffdfbf&radius=50"
          />
        </div>
      </div>
      <Title className={classes.title}>Dirumah aja nih?</Title>
      <Subheading className={classes.subheading} tertiary>
        Ngapain kek yuk, kemana gitu.
        Jangan lupa ajak yang lain juga, atau udah punya wacana?
      </Subheading>
      <CTA
        className={classes['cta-create']}
        primary
        icon="pen-to-square"
        title="Bikin Wacana"
        description="Tentuin tema acara dan waktunya"
        cta="Tap untuk bikin"
      />
      <CTA
        secondary
        icon="calendar-days"
        title="Checkin"
        description="Udah diundang? yuk konfirmasi"
        cta="Tap untuk Checkin"
      />
    </>
  );
}

export default Homepage;
