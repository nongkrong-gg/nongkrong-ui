import PropTypes from 'prop-types';
import classes from './style.module.scss';

function Subheading({
  className,
  primary,
  secondary,
  tertiary,
  children,
}) {
  const variant = () => {
    if (primary) return 'primary';
    if (secondary) return 'secondary';
    if (tertiary) return 'tertiary';
    return '';
  };

  return (
    <h3 className={`component-subheading ${classes.h3} ${classes[variant()]} ${className}`}>
      {children}
    </h3>
  );
}

Subheading.propTypes = {
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  children: PropTypes.any,
};

Subheading.defaultProps = {
  className: '',
  primary: false,
  secondary: false,
  tertiary: false,
  children: null,
};

export default Subheading;
