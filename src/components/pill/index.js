import PropTypes from 'prop-types';
import classes from './style.module.scss';

function Pill({
  className,
  children,
}) {
  return (
    <div className={`${classes.pill} ${className}`}>
      {children}
    </div>
  );
}

Pill.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

Pill.defaultProps = {
  className: '',
  children: null,
};

export default Pill;
