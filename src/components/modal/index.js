import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import classes from './style.module.scss';

function Modal({
  isOpen,
  onRequestClose,
  children,
}) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          zIndex: 9999,
          backgroundColor: 'rgba(0, 0, 0, 0.40)',
        },
        content: {
          width: 'calc(100vw - 32px)',
          maxWidth: '480px',
          left: '50%',
          transform: 'translate(-50%, 0)',
          height: 'calc(100vh - 40px)',
          border: 0,
          borderRadius: '16px 16px 0 0',
          padding: '16px',
        },
      }}
    >
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
