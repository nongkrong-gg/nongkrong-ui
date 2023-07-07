import PropTypes from 'prop-types';
import classes from './style.module.scss';

function Title({
  className,
  children,
}) {
  return (
    <h2 className={`${classes.h2} ${className}`}>{children}</h2>
  );
}

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

Title.defaultProps = {
  className: '',
  children: null,
};

export default Title;
