import React from "react";

const Modal = ({ videoUrl, title, description }) => (
  <div
    className="modal fade"
    id="videoModal"
    tabIndex="-1"
    aria-labelledby="videoModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content bg-dark text-white text-center">
        <div className="modal-header border-0">
          <h5 className="modal-title mx-auto" id="videoModalLabel">
            {title}
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <div className="ratio ratio-16x9">
            <iframe
              width="auto"
              height="auto"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="about__mission text-center mt-3">
            <h2 id="title__of__mission" className="text-light">
              {title}
            </h2>
            <p id="pr__of__mission" className="text-light">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
