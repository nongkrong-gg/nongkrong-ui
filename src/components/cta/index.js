import PropTypes from 'prop-types';
import classes from './style.module.scss';

function CTA({
  className,
  primary,
  secondary,
  icon,
  title,
  description,
  cta,
  onClick,
}) {
  const variant = () => {
    if (primary) return 'primary';
    if (secondary) return 'secondary';
    return '';
  };

  return (
    <div
      className={`component-cta ${classes.container} ${classes[variant()]} ${className}`}
      onClick={onClick}
    >
      {icon && (
        <i className={`fa-solid fa-${icon}`} />
      )}
      <div className={classes['text-container']}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={classes['button-container']}>
        <button>{cta}</button>
      </div>
    </div>
  );
}

CTA.propTypes = {
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  cta: PropTypes.string,
  onClick: PropTypes.func,
};

CTA.defaultProps = {
  className: '',
  primary: false,
  secondary: false,
  icon: '',
  title: '',
  description: '',
  cta: '',
  onClick: () => {},
};

export default CTA;
