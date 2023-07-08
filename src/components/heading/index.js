import PropTypes from 'prop-types';
import classes from './style.module.scss';

function Heading({
  className,
  children,
}) {
  return (
    <h1 className={`component-heading ${classes.h1} ${className}`}>
      {children}
    </h1>
  );
}

Heading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

Heading.defaultProps = {
  className: '',
  children: null,
};

export default Heading;
