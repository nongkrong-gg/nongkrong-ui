import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import googlePNG from 'assets/icons/google.png';
import {
  Heading,
  Subheading,
  Input,
  Button,
} from 'components';
import classes from './style.module.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div className="content">
        <Heading className={classes.heading}>
          Udah siap buat,
          <br />
          <strong>Wacanain</strong>
          {' '}
          wacanamu?
        </Heading>
        <Subheading className={classes.subheading} tertiary>Yuk, masuk akun dulu gais</Subheading>
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
        <Input
          className={classes['input-password']}
          type="password"
          name="password"
          value={password}
          isValid={isPasswordValid}
          setValue={setPassword}
          setIsValid={setIsPasswordValid}
          placeholder="jangan lupa password kamu"
        />
        <Button
          className={classes['button-continue']}
          primary
          disabled={!isEmailValid || !isPasswordValid}
          onClick={() => navigate('/')}
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
      </div>
      <div className="footer">
        <Subheading className="footer-text" tertiary>Kalau kamu belum punya akun</Subheading>
        <Button
          secondary
          iconRight="pen-to-square"
          onClick={() => navigate('/register')}
        >
          Daftar disini
        </Button>
      </div>
    </>
  );
}

export default Login;
