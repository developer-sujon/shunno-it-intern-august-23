import userImg from "../assets/images/bg/user.jpg";

const Modal = ({ setModal }) => {
  return (
    <section style={{ display: "flex" }} className="modal" id="modal">
      <div className="modal__wrapper">
        <i
          onClick={() => setModal(false)}
          className="bi bi-x modal__wrapper__close"
        />
        <div className="modal__wrapper__images">
          <img
            src={userImg}
            alt="user"
            className="modal__wrapper__images__img"
          />
        </div>
        <div className="modal__wrapper__contents">
          <h1 className="heading">Why Hire Me?</h1>
          <p className="modal__wrapper__contents__text">
            Hard-working listing programmer with a flair for creating elegant
            solutions in the least amount of time. As a freelance programmer, I
            have created many professional websites for clients around the
            globe.ke love what we do and we do what our clients love &amp; work
            with great clients all over the world to create thoughtful and
            purposeful websites.
          </p>
          <div className="modal__wrapper__contents__block">
            <span className="modal__wrapper__contents__block__left">Emial</span>
            <span className="modal__wrapper__contents__block__right">
              contact@sujon.com
            </span>
          </div>
          <div className="modal__wrapper__contents__block">
            <span className="modal__wrapper__contents__block__left">Phone</span>
            <span className="modal__wrapper__contents__block__right">
              +8801772-703036
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
