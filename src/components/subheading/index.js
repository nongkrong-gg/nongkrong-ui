import PropTypes from 'prop-types';
import './style.module.scss';

function Subheading({
  children,
}) {
  return (
    <h3>{children}</h3>
  );
}

Subheading.propTypes = {
  children: PropTypes.any,
};

Subheading.defaultProps = {
  children: null,
};

export default Subheading;
