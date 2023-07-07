import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import confetti from 'canvas-confetti';
import googlePNG from 'assets/icons/google.png';
import {
  Heading,
  Subheading,
  Title,
  Input,
  Button,
  Carousel,
  Pill,
  Back,
} from 'components';
import classes from './style.module.scss';

function Email({
  setStep,
  email,
  isEmailValid,
  setEmail,
  setIsEmailValid,
}) {
  return (
    <>
      <Heading className={classes.heading}>
        Udah siap buat,
        <br />
        <strong>Wacanain</strong>
        {' '}
        wacanamu?
      </Heading>
      <Subheading className={classes.subheading} tertiary>Yuk, bikin akun dulu gais</Subheading>
      <Input
        className={classes['input-email']}
        type="email"
        name="email"
        value={email}
        isValid={isEmailValid}
        setValue={setEmail}
        setIsValid={setIsEmailValid}
        placeholder="email kamu apa?"
        icon="envelope"
      />
      <Button
        className={classes['button-continue']}
        primary
        disabled={!isEmailValid}
        onClick={() => setStep((prevValue) => prevValue + 1)}
      >
        Lanjutkan
      </Button>
      <Subheading className={`${classes.subheading} ${classes.center}`} tertiary>Atau</Subheading>
      <Button
        tertiary
        iconLeft={googlePNG}
      >
        Gunakan Akun Google
      </Button>
      <div className={classes.footer}>
        <Subheading className={classes['footer-text']} tertiary>Kalau kamu udah punya akun</Subheading>
        <Button secondary iconRight="right-to-bracket">Login disini</Button>
      </div>
    </>
  );
}

function Password({
  setStep,
  password,
  isPasswordValid,
  setPassword,
  setIsPasswordValid,
}) {
  return (
    <>
      <Back primary onClick={() => setStep((prevValue) => prevValue - 1)} />
      <Heading className={classes.heading}>
        Selanjutnya,
        <br />
        Buat
        {' '}
        <strong>Passwordmu</strong>
      </Heading>
      <Input
        className={classes['input-password']}
        type="password"
        name="password"
        value={password}
        isValid={isPasswordValid}
        setValue={setPassword}
        setIsValid={setIsPasswordValid}
        placeholder="Passwordin yuk, biar aman"
      />
      <Button
        className={classes['button-create-password']}
        primary
        disabled={!isPasswordValid}
        onClick={() => setStep((prevValue) => prevValue + 1)}
      >
        Buat Password
      </Button>
    </>
  );
}

function Avatar({
  setStep,
  username,
  isUsernameValid,
  setUsername,
  setIsUsernameValid,
  activeChar,
  setActiveChar,
}) {
  return (
    <>
      <Back primary onClick={() => setStep((prevValue) => prevValue - 1)} />
      <Heading className={classes.heading}>
        Terakhir nih,
        <br />
        Pilih
        {' '}
        <strong>karakter</strong>
        {' '}
        dan buat
        {' '}
        <strong>namamu</strong>
      </Heading>
      <Carousel
        className={classes.carousel}
        seed={username}
        activeChar={activeChar}
        setActiveChar={setActiveChar}
      />
      <Input
        className={classes['input-username']}
        value={username}
        isValid={isUsernameValid}
        setValue={setUsername}
        setIsValid={setIsUsernameValid}
        secondary
        type="text"
        name="username"
        placeholder="siapa nama kamu?"
        icon="user"
      />
      <div className={classes.footer}>
        <Button
          className={classes['button-create-account']}
          primary
          disabled={!isUsernameValid}
          onClick={() => setStep((prevValue) => prevValue + 1)}
        >
          Buat akun & karakter
        </Button>
        <Button secondary>Nanti aja</Button>
      </div>
    </>
  );
}

function Success() {
  useEffect(() => {
    const canvas = document.querySelector('.canvas');
    canvas.confetti = canvas.confetti || confetti.create(canvas, { resize: true });

    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
    };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      canvas.confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      canvas.confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
      return null;
    }, 250);
  }, []);

  return (
    <>
      <div className="primary-background" />
      <div className={classes['success-body']}>
        <div className={classes['success-container']}>
          <Title className={classes.title}>Berhasil buat akun 🎉</Title>
          <div className={classes['avatar-container']}>
            <img
              alt="avatar"
              src="https://api.dicebear.com/6.x/micah/svg?seed=10-indirect_rose_lark&size=80&backgroundColor=b6e3f4%2Cc0aede%2Cd1d4f9%2Cffd5dc%2Cffdfbf&radius=50"
            />
            <Pill>Jhon Bewok</Pill>
          </div>
          <Subheading className={`${classes.subheading} ${classes.center}`} primary>
            Akun kamu udah jadi nih, sekarang kamu bisa buat undangan,
            atau akses undangan langsung dari sini 👌
          </Subheading>
        </div>
      </div>
      <div className={`${classes.footer} ${classes.white}`}>
        <Button
          className={classes['button-create-invitation']}
          primary
          iconRight="calendar-plus"
        >
          Buat undangan pertamamu
        </Button>
        <Button secondary iconRight="calendar">Lihat undangan</Button>
      </div>
    </>
  );
}

function Registration() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [username, setUsername] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [activeChar, setActiveChar] = useState(1);

  return (
    <>
      {step === 1 && (
        <Email
          setStep={setStep}
          email={email}
          isEmailValid={isEmailValid}
          setEmail={setEmail}
          setIsEmailValid={setIsEmailValid}
        />
      )}
      {step === 2 && (
        <Password
          setStep={setStep}
          password={password}
          isPasswordValid={isPasswordValid}
          setPassword={setPassword}
          setIsPasswordValid={setIsPasswordValid}
        />
      )}
      {step === 3 && (
        <Avatar
          setStep={setStep}
          username={username}
          isUsernameValid={isUsernameValid}
          setUsername={setUsername}
          setIsUsernameValid={setIsUsernameValid}
          activeChar={activeChar}
          setActiveChar={setActiveChar}
        />
      )}
      {step === 4 && <Success />}
    </>
  );
}

Email.propTypes = {
  setStep: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  isEmailValid: PropTypes.bool.isRequired,
  setEmail: PropTypes.func.isRequired,
  setIsEmailValid: PropTypes.func.isRequired,
};

Password.propTypes = {
  setStep: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  isPasswordValid: PropTypes.bool.isRequired,
  setPassword: PropTypes.func.isRequired,
  setIsPasswordValid: PropTypes.func.isRequired,
};

Avatar.propTypes = {
  setStep: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  isUsernameValid: PropTypes.bool.isRequired,
  setUsername: PropTypes.func.isRequired,
  setIsUsernameValid: PropTypes.func.isRequired,
  activeChar: PropTypes.number.isRequired,
  setActiveChar: PropTypes.func.isRequired,
};

export default Registration;
