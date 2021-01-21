import './Modal.scss';

const Modal = (props) => {
  function findByKey(name) {
    return props.children.map((child) => {
      return child.key === name ? child : null;
    });
  }

  return (
    <div className="modal__mask modal__close">
      <div className="modal__wrapper">
        <div className="modal__container">
          <div className="modal__header">{findByKey('header')}</div>
          <div className="modal__body">{findByKey('body')}</div>
          <div className="modal__footer">{findByKey('footer')}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
