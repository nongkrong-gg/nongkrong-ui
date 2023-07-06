import PropTypes from 'prop-types';
import classes from './style.module.scss';

function Subheading({
  className,
  children,
}) {
  return (
    <h3 className={`${classes.h3} ${className}`}>
      {children}
    </h3>
  );
}

Subheading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

Subheading.defaultProps = {
  className: '',
  children: null,
};

export default Subheading;
