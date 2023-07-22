import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import classes from './style.module.scss';

function Modal({
  isOpen,
  onRequestClose,
  children,
}) {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <i
        className={`fa-solid fa-xmark ${classes.close}`}
        onClick={onRequestClose}
      />
      {children}
    </ReactModal>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.any,
};

Modal.defaultProps = {
  children: null,
};

export default Modal;
