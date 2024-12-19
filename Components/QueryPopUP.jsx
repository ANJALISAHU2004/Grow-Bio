import "./PopUp.scss";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useState, useEffect } from "react";
// import { ImCancelCircle } from "react-icons/im";
export default function QueryPopUP({ formErrors, isSubmit }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="Pop_up_">
        <Popup trigger={isSubmit} onClose={isSubmit}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit a eum
            voluptatum. Quibusdam quod quam sed animi officia nulla cum id
            nobis? Sed quod ad ex ratione, sequi quae quas eligendi quo dolorum
            reiciendis, commodi dicta nulla nemo iure voluptates magnam esse
            provident eaque, perferendis pariatur adipisci dignissimos sint
            voluptate. Optio impedit nemo accusantium delectus aut provident
            perferendis at velit repellendus eligendi sit quisquam ratione
            eveniet, vel in error esse est facere ipsa eaque, rerum veniam
            laboriosam! Porro quis laborum, explicabo quaerat illo ipsum iste
            minus magni sit impedit reprehenderit corporis natus molestias
            possimus, officia quibusdam. Architecto quis dolorum asperiores?
          </div>
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div class="ui message success">
              "THANKYOU" <br /> Your Query is successfully Submitted <br /> We
              will contact you soon.
            </div>
          ) : (
            <pre></pre>
          )}
        </Popup>
      </div>
    </>
  );
}
