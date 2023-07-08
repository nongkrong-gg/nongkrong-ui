import PropTypes from 'prop-types';
import classes from './style.module.scss';

function Title({
  secondary,
  className,
  children,
}) {
  const variant = () => {
    if (secondary) return 'secondary';
    return '';
  };

  return (
    <h2
      className={`component-title ${classes.h2} ${classes[variant()]} ${className}`}
    >
      {children}
    </h2>
  );
}

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  secondary: PropTypes.bool,
};

Title.defaultProps = {
  className: '',
  children: null,
  secondary: false,
};

export default Title;
