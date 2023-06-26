import { useEffect, useState, useRef } from 'react';
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
  value,
  subValue,
  setValue,
  setSubValue,
  secondary,
  type,
  id,
  name,
  placeholder,
  icon,
  info,
  infoInput,
  infoIcon,
}) {
  const [inputType, setInputType] = useState(type);
  const [seePassword, setSeePassword] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const inputRef = useRef(null);
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

  const openDatePicker = () => {
    inputRef.current.showPicker();
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
        ref={inputRef}
        className={
          `${secondary ? classes.secondary : ''} ${value ? classes.filled : ''} ${validClassName()}`
        }
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
      {name === 'date' && (
        <i
          className={`fa-solid fa-calendar ${classes['icon-right']}`}
          onClick={openDatePicker}
        />
      )}
      {name === 'time' && (
        <i
          className={`fa-solid fa-clock ${classes['icon-right']}`}
          onClick={openDatePicker}
        />
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
          {infoIcon && (
            <i className={`fa-solid fa-${infoIcon}`} />
          )}
          {infoInput ? (
            <input
              className={subValue ? classes.filled : ''}
              name={infoInput}
              placeholder={info}
              value={subValue}
              onChange={(e) => setSubValue(e.target.value)}
            />
          ) : info}
        </div>
      )}
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.string,
  subValue: PropTypes.string,
  setValue: PropTypes.func,
  setSubValue: PropTypes.func,
  secondary: PropTypes.bool,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  info: PropTypes.string,
  infoInput: PropTypes.string,
  infoIcon: PropTypes.string,
};

Input.defaultProps = {
  value: '',
  subValue: '',
  setValue: () => {},
  setSubValue: () => {},
  secondary: false,
  type: 'text',
  id: '',
  name: '',
  placeholder: '',
  icon: '',
  info: '',
  infoInput: '',
  infoIcon: '',
};

export default Input;
