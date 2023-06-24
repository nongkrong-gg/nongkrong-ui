import PropTypes from 'prop-types';
import classes from './style.module.scss';

function Heading({
  children,
}) {
  return (
    <h1 className={classes.h1}>{children}</h1>
  );
}

Heading.propTypes = {
  children: PropTypes.any,
};

Heading.defaultProps = {
  children: null,
};

export default Heading;
