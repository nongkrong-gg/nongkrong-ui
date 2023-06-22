import PropTypes from 'prop-types';
import './style.module.scss';

function Heading({
  children,
}) {
  return (
    <h1>{children}</h1>
  );
}

Heading.propTypes = {
  children: PropTypes.any,
};

Heading.defaultProps = {
  children: null,
};

export default Heading;
