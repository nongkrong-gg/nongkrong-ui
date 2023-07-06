import { useState } from 'react';
import PropTypes from 'prop-types';
import googlePNG from 'assets/icons/google.png';
import {
  Heading,
  Subheading,
  Input,
  Button,
  Carousel,
  Back,
} from 'components';
import classes from './style.module.scss';

function Email({ setStep }) {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

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

function Password({ setStep }) {
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);

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

function Avatar({ setStep }) {
  const [username, setUsername] = useState('');
  const [activeChar, setActiveChar] = useState(1);
  const [isUsernameValid, setIsUsernameValid] = useState(false);

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
        >
          Buat akun & karakter
        </Button>
        <Button secondary>Nanti aja</Button>
      </div>
    </>
  );
}

function Registration() {
  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 && <Email setStep={setStep} />}
      {step === 2 && <Password setStep={setStep} />}
      {step === 3 && <Avatar setStep={setStep} />}
    </>
  );
}

Email.propTypes = {
  setStep: PropTypes.func.isRequired,
};

Password.propTypes = {
  setStep: PropTypes.func.isRequired,
};

Avatar.propTypes = {
  setStep: PropTypes.func.isRequired,
};

export default Registration;
