import PropTypes from 'prop-types';
import classes from './style.module.scss';

function Back({
  primary,
  secondary,
  onClick,
}) {
  const variant = () => {
    if (primary) return 'primary';
    if (secondary) return 'secondary';
    return '';
  };

  return (
    <div
      className={`component-back ${classes.back} ${classes[variant()]}`}
      onClick={onClick}
    >
      <i className="fa-solid fa-arrow-left" />
    </div>
  );
}

Back.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  onClick: PropTypes.func,
};

Back.defaultProps = {
  primary: false,
  secondary: false,
  onClick: () => {},
};

export default Back;
