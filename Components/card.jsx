import { NavLink } from "react-router-dom";
export default function Card({ pimg, pname, pdescription }) {
  return (
    <>
      <div class="CarBox">
        <div class=" ag-format-container">
          <div class="ag-courses_box">
            <article class="card1">
              <img
                class="card__background1"
                src={pimg}
                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                width="1920"
                height="2193"
              />
              <div class="card__content1 | flow1">
                <div class="card__content--container1 | flow1">
                  <h2 class="card__title1">{pname}</h2>
                  <p class="card__description1">{pdescription}</p>
                </div>
                <button class="card__button1">
                  <NavLink to={"/Projects"}> Read more</NavLink>
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
