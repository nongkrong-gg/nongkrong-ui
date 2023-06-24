import PropTypes from 'prop-types';
import classes from './style.module.scss';

function Title({
  children,
}) {
  return (
    <h2 className={classes.h2}>{children}</h2>
  );
}

Title.propTypes = {
  children: PropTypes.any,
};

Title.defaultProps = {
  children: null,
};

export default Title;
