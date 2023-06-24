import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from 'unique-names-generator';
import { validate } from 'models';
import classes from './style.module.scss';

function Input({
  secondary,
  type,
  id,
  name,
  placeholder,
  icon,
  info,
}) {
  const [inputType, setInputType] = useState(type);
  const [seePassword, setSeePassword] = useState(false);
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const toggleSeePassword = () => {
    setSeePassword((prevState) => !prevState);
    setInputType((prevState) => {
      if (prevState === 'password') return 'text';
      return 'password';
    });
  };
  const validClassName = () => {
    if (isValid) return classes.valid;
    if (value) return classes.invalid;
    return '';
  };

  const generateUsername = () => {
    setValue(uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }));
  };

  useEffect(() => {
    setIsValid(false);
    setIsValid(!validate(name, value).error);
  }, [value]);

  useEffect(() => {
    if (name === 'username') {
      generateUsername();
    }
  }, []);

  return (
    <div className={classes.input}>
      <input
        className={`${secondary ? classes.secondary : ''} ${classes[type]} ${validClassName()}`}
        type={inputType}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {icon && (
        <i className={`fa-solid fa-${icon} ${classes['icon-left']}`} />
      )}
      {name === 'username' && (
        <>
          <i
            className={`fa-solid fa-dice ${classes['icon-right']}`}
            onClick={generateUsername}
          />
          {value && (
            <div className={classes.toast}>
              Tenang aja nama bisa diganti sewaktu waktu😊
            </div>
          )}
        </>
      )}
      {type === 'password' && (
        <>
          <i
            className={`fa-solid fa-eye${seePassword ? '' : '-slash'} ${classes['icon-password']}`}
            onClick={toggleSeePassword}
          />
          {isValid && (
            <div className={`${classes.toast} ${classes.success}`}>
              <i className="fa-solid fa-circle-check" />
              Passwordmu keliatannya aman!
            </div>
          )}
        </>
      )}
      {info && (
        <div className={classes.toast}>
          {info}
        </div>
      )}
    </div>
  );
}

Input.propTypes = {
  secondary: PropTypes.bool,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  info: PropTypes.string,
};

Input.defaultProps = {
  secondary: false,
  type: 'text',
  id: '',
  name: '',
  placeholder: '',
  icon: '',
  info: '',
};

export default Input;
