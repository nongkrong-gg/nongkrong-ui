import PropTypes from 'prop-types';
import classes from './style.module.scss';

function Button({
  className,
  children,
  type,
  onClick,
  primary,
  secondary,
  tertiary,
  disabled,
  iconLeft,
  iconRight,
}) {
  const variant = () => {
    if (primary) return 'primary';
    if (secondary) return 'secondary';
    if (tertiary) return 'tertiary';
    return '';
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${classes.button} ${classes[variant()]} ${className}`}
      disabled={disabled}
    >
      {iconLeft && (
        <img src={iconLeft} alt="left icon" />
      )}
      {children}
      {iconRight && (
        <i className={`fa-solid fa-${iconRight}`} />
      )}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  disabled: PropTypes.bool,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  children: null,
  type: 'button',
  onClick: () => {},
  primary: false,
  secondary: false,
  tertiary: false,
  disabled: false,
  iconLeft: '',
  iconRight: '',
};

export default Button;
