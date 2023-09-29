import React, { useEffect } from 'react';

const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    const handlePressEscape = e => {
      if (e.code === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handlePressEscape);

    return () => {
      window.removeEventListener('keydown', handlePressEscape);
    };
  }, [closeModal]);

  return (
    <div
      className="modal fade show"
      style={{ display: 'block', backdropFilter: 'blur(5px)' }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal</h5>
            <button
              className="btn-close"
              type="button"
              aria-label="Close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

// export default class Modal extends Component {
//   state = {};

//   componentDidMount = () => {
// window.addEventListener('keydown', this.handlePressEscape);
//   };

//   componentWillUnmount = () => {
// window.removeEventListener('keydown', this.handlePressEscape);
//   };

// handlePressEscape = e => {
//   if (e.code === 'Escape') this.props.closeModal();
// };

//   render() {
//     return (
//       <div
//         className="modal fade show"
//         // onClick={closeModal}
//         style={{ display: 'block', backdropFilter: 'blur(5px)' }}
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Modal</h5>
//               <button
//                 className="btn-close"
//                 type="button"
//                 aria-label="Close"
//                 onClick={this.props.closeModal}
//               ></button>
//             </div>
//             <div className="modal-body">{this.props.children}</div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
