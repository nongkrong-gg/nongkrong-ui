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
  className,
  value,
  subValue,
  isValid,
  setValue,
  setSubValue,
  setIsValid,
  secondary,
  type,
  id,
  name,
  placeholder,
  icon,
  info,
  infoInput,
  infoIcon,
  isValidInfo,
}) {
  const [inputType, setInputType] = useState(type);
  const [seePassword, setSeePassword] = useState(false);
  const inputRef = useRef(null);
  const toggleSeePassword = () => {
    setSeePassword((prevState) => !prevState);
    setInputType((prevState) => {
      if (prevState === 'password') return 'text';
      return 'password';
    });
  };
  const validClassName = () => {
    if (isValid) return 'valid';
    if (value) return 'invalid';
    return '';
  };

  const generateUsername = () => {
    setValue(uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }));
  };

  const openDatePicker = () => {
    inputRef.current.showPicker();
  };

  const onFocus = () => {
    if (type !== 'date' && type !== 'time') return;

    inputRef.current.type = type;
    setTimeout(() => {
      openDatePicker();
    }, 0);
  };

  const onBlur = () => {
    if (type !== 'date' && type !== 'time') return;

    inputRef.current.type = 'text';
  };

  useEffect(() => {
    if (type === 'date' || type === 'time') {
      setInputType('text');
    }
  }, [type]);

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
    <div className={`component-input ${secondary ? `secondary ${classes.secondary}` : ''} ${classes.input} ${className}`}>
      <input
        id={id}
        ref={inputRef}
        className={
          `${!value ? 'empty' : ''} ${value ? classes.filled : ''} ${classes[validClassName()]}`
        }
        type={inputType}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
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
            <div className={`input-info ${classes.toast}`}>
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
          {(isValid && isValidInfo) && (
            <div className={`${classes.toast} ${classes.success}`}>
              <i className="fa-solid fa-circle-check" />
              {isValidInfo}
            </div>
          )}
        </>
      )}
      {((info && !isValid) || infoInput) && (
        <div className={`input-info ${classes.toast}`}>
          {infoIcon && (
            <i className={`fa-solid fa-${infoIcon}`} />
          )}
          {infoInput ? (
            <input
              className={subValue ? `filled ${classes.filled}` : ''}
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
  className: PropTypes.string,
  value: PropTypes.string,
  subValue: PropTypes.string,
  isValid: PropTypes.bool,
  setValue: PropTypes.func,
  setSubValue: PropTypes.func,
  setIsValid: PropTypes.func,
  secondary: PropTypes.bool,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  info: PropTypes.string,
  infoInput: PropTypes.string,
  infoIcon: PropTypes.string,
  isValidInfo: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  value: '',
  subValue: '',
  isValid: false,
  setValue: () => {},
  setSubValue: () => {},
  setIsValid: () => {},
  secondary: false,
  type: 'text',
  id: '',
  name: '',
  placeholder: '',
  icon: '',
  info: '',
  infoInput: '',
  infoIcon: '',
  isValidInfo: '',
};

export default Input;
