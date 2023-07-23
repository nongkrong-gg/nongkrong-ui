import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import classes from './style.module.scss';

function Modal({
  isOpen,
  onRequestClose,
  fitContent,
  children,
}) {
  const unsetInset = () => ({
    content: {
      inset: 'unset',
    },
  });

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={fitContent ? unsetInset() : {}}
    >
      <div className={fitContent ? 'fit-content' : ''} />
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
  fitContent: PropTypes.bool,
  children: PropTypes.any,
};

Modal.defaultProps = {
  fitContent: false,
  children: null,
};

export default Modal;
