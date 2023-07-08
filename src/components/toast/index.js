import PropTypes from 'prop-types';
import classes from './style.module.scss';

function Toast({
  primary,
  secondary,
  tertiary,
  multiple,
  icon,
  subIcon,
  title,
  subtitle,
  description,
  onClick,
}) {
  const variant = () => {
    if (primary) return 'primary';
    if (secondary) return 'secondary';
    if (tertiary) return 'tertiary';
    return '';
  };

  return (
    <>
      {multiple && (
        <div
          className={classes['multiple-container']}
          onClick={onClick}
        >
          <div className={`${classes.container} ${classes[variant()]}`} />
          <div className={`${classes.container} ${classes[variant()]}`} />
        </div>
      )}
      <div
        className={`component-toast ${classes.container} ${classes[variant()]}`}
        onClick={onClick}
      >
        <div className={classes['title-container']}>
          {icon && (
            <i className={`fa-solid fa-${icon}`} />
          )}
          <h3>{title}</h3>
        </div>
        {subtitle ? (
          <div className={classes['subtitle-container']}>
            {subIcon && (
              <i className={`fa-solid fa-${subIcon}`} />
            )}
            <h3>{subtitle}</h3>
          </div>
        ) : (
          <div className={classes['subtitle-container']}>
            <p>{description}</p>
            {subIcon && (
              <i className={`fa-solid fa-${subIcon}`} />
            )}
          </div>
        )}
      </div>
    </>
  );
}

Toast.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  multiple: PropTypes.bool,
  icon: PropTypes.string,
  subIcon: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
};

Toast.defaultProps = {
  primary: false,
  secondary: false,
  tertiary: false,
  multiple: false,
  icon: '',
  subIcon: '',
  title: '',
  subtitle: '',
  description: '',
  onClick: () => {},
};

export default Toast;
