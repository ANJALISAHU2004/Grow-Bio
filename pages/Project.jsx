import "./project.css";
import Project_even from "./Project_even";
import gsap from "gsap";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Projects(params) {
  useGSAP(() => {
    // Projects section - Title
    gsap.set(".projects-section .title", {
      y: -200,
      opacity: 0,
    });
    gsap.to(".projects-section .title", {
      duration: 1.6,
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top center",
        end: "center",
        markers: false,
      },
    });

    gsap.set(".left-row", {
      opacity: 0,
      xPercent: -100,
    });
    gsap.to(".left-row", {
      duration: 1.6,
      opacity: 1,
      xPercent: 0,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".Compsec_container",
        start: "top center end",
        end: "center",
        markers: false,
      },
    });

    // Testimonial section - Right Content
    gsap.set(".right-row", {
      opacity: 0,
      xPercent: 100,
    });
    gsap.to(".right-row", {
      duration: 1.6,
      opacity: 1,
      xPercent: 0,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".Compsec_container",
        start: "top center",
        end: "center",
        markers: false,
      },
    });
    gsap.set(".left-row", {
      opacity: 0,
      xPercent: -100,
    });
    gsap.to(".left-row", {
      duration: 1.6,
      opacity: 1,
      xPercent: 0,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: "S2.Compsec_container",
        start: "top center end",
        end: "center",
        markers: false,
      },
    });

    // Testimonial section - Right Content
    gsap.set(".right-row", {
      opacity: 0,
      xPercent: 100,
    });
    gsap.to(".right-row", {
      duration: 1.6,
      opacity: 1,
      xPercent: 0,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".S2Compsec_container",
        start: "top center",
        end: "center",
        markers: false,
      },
    });
  });
  return (
    <>
      {" "}
      <section className="company-section projects-section white-bg position-relative overflow-hidden">
        <h2 class="title text-center" style={{ padding: "5%" }}>
          Projects
        </h2>
        <div className="Compsec_container">
          <div className="row align-items-stretch">
            <div className="col-md-6 align-self-center pb-4 pb-md-5 pb-lg-0">
              <div className="py-lg-5" id="compDescription">
                <div className="pb-md-3 paragraph left-row">
                  <p className="Compsec_p">
                    We are proud of our history, our esteemed faculty, and our
                    dedicated professionals, who, year after year, provide the
                    environment and support to help our students realize their
                    dreams.
                  </p>
                  <p className="Compsec_p">
                    Our company is renowned for providing high-quality services
                    in various areas. We have a team of skilled and dedicated
                    employees specializing in MS (Mild Steel) and SS (Stainless
                    Steel) fabrication and erection work. Our staff is
                    well-trained, ensuring timely service delivery tailored to
                    customer requirements. Additionally, our services are
                    competitively priced, and we are recognized for our
                    commitment to quality and meeting project deadlines. Our
                    highly qualified professionals employ the best tools and
                    techniques to ensure the perfection of our fabrication
                    services. Clients appreciate our work for its quality
                    compliance and timely execution. We aim to achieve maximum
                    client satisfaction by effectively delivering our services.
                    Our dexterous workforce consistently strives for efficient
                    and timely service delivery.
                  </p>
                </div>
                <a
                  href="javascript:void(0)"
                  className="Compsec_common-btn left-row"
                >
                  <NavLink
                    to="/Contact"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {" "}
                    contact us for more
                  </NavLink>
                </a>
              </div>
            </div>
            {/* <!-- col --> */}
            <div className="col-md-6 right-row">
              <div className="compy-box mt-4 my-md-0 position-relative">
                <img
                  src="Images\ProjectImages2\p1.jpg"
                  className="comp_img-fluid"
                  alt="Company"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="S2Compsec_container">
          <div className="row align-items-stretch">
            {/* <!-- col --> */}
            <div className="col-md-6 left-row">
              <div className="compy-box mt-4 my-md-0 position-relative">
                <img
                  src="Images\ProjectImages2\p2.jpg"
                  className="comp_img-fluid"
                  alt="Company"
                />
              </div>
            </div>
            {/* <!-- col --> */}
            <div className="col-md-6 align-self-center pb-4 pb-md-5 pb-lg-0">
              <div className="py-lg-5" id="S2compDescription">
                <div className="pb-md-3 paragraph right-row">
                  <p className="S2Compsec_p">
                    We are proud of our history, our esteemed faculty, and our
                    dedicated professionals, who, year after year, provide the
                    environment and support to help our students realize their
                    dreams.
                  </p>
                  <p className="S2Compsec_p">
                    Our company is renowned for providing high-quality services
                    in various areas. We have a team of skilled and dedicated
                    employees specializing in MS (Mild Steel) and SS (Stainless
                    Steel) fabrication and erection work. Our staff is
                    well-trained, ensuring timely service delivery tailored to
                    customer requirements. Additionally, our services are
                    competitively priced, and we are recognized for our
                    commitment to quality and meeting project deadlines. Our
                    highly qualified professionals employ the best tools and
                    techniques to ensure the perfection of our fabrication
                    services. Clients appreciate our work for its quality
                    compliance and timely execution. We aim to achieve maximum
                    client satisfaction by effectively delivering our services.
                    Our dexterous workforce consistently strives for efficient
                    and timely service delivery.
                  </p>
                </div>
                <div className="S2Compsec_common-btn_div">
                  {" "}
                  <a
                    href="javascript:void(0)"
                    className="S2Compsec_common-btn S2common-btn left-row"
                  >
                    <NavLink
                      to="/Contact"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {" "}
                      contact us for more
                    </NavLink>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
        </div>

        <div className="Compsec_container">
          <div className="row align-items-stretch">
            <div className="col-md-6 align-self-center pb-4 pb-md-5 pb-lg-0">
              <div className="py-lg-5" id="compDescription">
                <div className="pb-md-3 paragraph left-row">
                  <p className="Compsec_p">
                    We are proud of our history, our esteemed faculty, and our
                    dedicated professionals, who, year after year, provide the
                    environment and support to help our students realize their
                    dreams.
                  </p>
                  <p className="Compsec_p">
                    Our company is renowned for providing high-quality services
                    in various areas. We have a team of skilled and dedicated
                    employees specializing in MS (Mild Steel) and SS (Stainless
                    Steel) fabrication and erection work. Our staff is
                    well-trained, ensuring timely service delivery tailored to
                    customer requirements. Additionally, our services are
                    competitively priced, and we are recognized for our
                    commitment to quality and meeting project deadlines. Our
                    highly qualified professionals employ the best tools and
                    techniques to ensure the perfection of our fabrication
                    services. Clients appreciate our work for its quality
                    compliance and timely execution. We aim to achieve maximum
                    client satisfaction by effectively delivering our services.
                    Our dexterous workforce consistently strives for efficient
                    and timely service delivery.
                  </p>
                </div>
                <a
                  href="javascript:void(0)"
                  className="Compsec_common-btn left-row"
                >
                  <NavLink
                    to="/Contact"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {" "}
                    contact us for more
                  </NavLink>
                </a>
              </div>
            </div>
            {/* <!-- col --> */}
            <div className="col-md-6 right-row">
              <div className="compy-box mt-4 my-md-0 position-relative">
                <img
                  src="Images\ProjectImages2\p3.png"
                  className="comp_img-fluid"
                  alt="Company"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="S2Compsec_container">
          <div className="row align-items-stretch">
            {/* <!-- col --> */}
            <div className="col-md-6 left-row">
              <div className="compy-box mt-4 my-md-0 position-relative">
                <img
                  src="Images\ProjectImages2\p4.jpg"
                  className="comp_img-fluid"
                  alt="Company"
                />
              </div>
            </div>
            {/* <!-- col --> */}
            <div className="col-md-6 align-self-center pb-4 pb-md-5 pb-lg-0">
              <div className="py-lg-5" id="S2compDescription">
                <div className="pb-md-3 paragraph right-row">
                  <p className="S2Compsec_p">
                    We are proud of our history, our esteemed faculty, and our
                    dedicated professionals, who, year after year, provide the
                    environment and support to help our students realize their
                    dreams.
                  </p>
                  <p className="S2Compsec_p">
                    Our company is renowned for providing high-quality services
                    in various areas. We have a team of skilled and dedicated
                    employees specializing in MS (Mild Steel) and SS (Stainless
                    Steel) fabrication and erection work. Our staff is
                    well-trained, ensuring timely service delivery tailored to
                    customer requirements. Additionally, our services are
                    competitively priced, and we are recognized for our
                    commitment to quality and meeting project deadlines. Our
                    highly qualified professionals employ the best tools and
                    techniques to ensure the perfection of our fabrication
                    services. Clients appreciate our work for its quality
                    compliance and timely execution. We aim to achieve maximum
                    client satisfaction by effectively delivering our services.
                    Our dexterous workforce consistently strives for efficient
                    and timely service delivery.
                  </p>
                </div>
                <div className="S2Compsec_common-btn_div">
                  {" "}
                  <a
                    href="javascript:void(0)"
                    className="S2Compsec_common-btn S2common-btn left-row"
                  >
                    <NavLink
                      to="/Contact"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {" "}
                      contact us for more
                    </NavLink>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
        </div>

        <div className="Compsec_container">
          <div className="row align-items-stretch">
            <div className="col-md-6 align-self-center pb-4 pb-md-5 pb-lg-0">
              <div className="py-lg-5" id="compDescription">
                <div className="pb-md-3 paragraph left-row">
                  <p className="Compsec_p">
                    We are proud of our history, our esteemed faculty, and our
                    dedicated professionals, who, year after year, provide the
                    environment and support to help our students realize their
                    dreams.
                  </p>
                  <p className="Compsec_p">
                    Our company is renowned for providing high-quality services
                    in various areas. We have a team of skilled and dedicated
                    employees specializing in MS (Mild Steel) and SS (Stainless
                    Steel) fabrication and erection work. Our staff is
                    well-trained, ensuring timely service delivery tailored to
                    customer requirements. Additionally, our services are
                    competitively priced, and we are recognized for our
                    commitment to quality and meeting project deadlines. Our
                    highly qualified professionals employ the best tools and
                    techniques to ensure the perfection of our fabrication
                    services. Clients appreciate our work for its quality
                    compliance and timely execution. We aim to achieve maximum
                    client satisfaction by effectively delivering our services.
                    Our dexterous workforce consistently strives for efficient
                    and timely service delivery.
                  </p>
                </div>
                <a
                  href="javascript:void(0)"
                  className="Compsec_common-btn left-row"
                >
                  <NavLink
                    to="/Contact"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {" "}
                    contact us for more
                  </NavLink>
                </a>
              </div>
            </div>
            {/* <!-- col --> */}
            <div className="col-md-6 right-row">
              <div className="compy-box mt-4 my-md-0 position-relative">
                <img
                  src="Images\ProjectImages2\p5.png"
                  className="comp_img-fluid"
                  alt="Company"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="S2Compsec_container">
          <div className="row align-items-stretch">
            {/* <!-- col --> */}
            <div className="col-md-6 left-row">
              <div className="compy-box mt-4 my-md-0 position-relative">
                <img
                  src="Images\ProjectImages2\p6.png"
                  className="comp_img-fluid"
                  alt="Company"
                />
              </div>
            </div>
            {/* <!-- col --> */}
            <div className="col-md-6 align-self-center pb-4 pb-md-5 pb-lg-0">
              <div className="py-lg-5" id="S2compDescription">
                <div className="pb-md-3 paragraph right-row">
                  <p className="S2Compsec_p">
                    We are proud of our history, our esteemed faculty, and our
                    dedicated professionals, who, year after year, provide the
                    environment and support to help our students realize their
                    dreams.
                  </p>
                  <p className="S2Compsec_p">
                    Our company is renowned for providing high-quality services
                    in various areas. We have a team of skilled and dedicated
                    employees specializing in MS (Mild Steel) and SS (Stainless
                    Steel) fabrication and erection work. Our staff is
                    well-trained, ensuring timely service delivery tailored to
                    customer requirements. Additionally, our services are
                    competitively priced, and we are recognized for our
                    commitment to quality and meeting project deadlines. Our
                    highly qualified professionals employ the best tools and
                    techniques to ensure the perfection of our fabrication
                    services. Clients appreciate our work for its quality
                    compliance and timely execution. We aim to achieve maximum
                    client satisfaction by effectively delivering our services.
                    Our dexterous workforce consistently strives for efficient
                    and timely service delivery.
                  </p>
                </div>
                <div className="S2Compsec_common-btn_div">
                  {" "}
                  <a
                    href="javascript:void(0)"
                    className="S2Compsec_common-btn S2common-btn left-row"
                  >
                    <NavLink
                      to="/Contact"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {" "}
                      contact us for more
                    </NavLink>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
        </div>

        <div className="Compsec_container">
          <div className="row align-items-stretch">
            <div className="col-md-6 align-self-center pb-4 pb-md-5 pb-lg-0">
              <div className="py-lg-5" id="compDescription">
                <div className="pb-md-3 paragraph left-row">
                  <p className="Compsec_p">
                    We are proud of our history, our esteemed faculty, and our
                    dedicated professionals, who, year after year, provide the
                    environment and support to help our students realize their
                    dreams.
                  </p>
                  <p className="Compsec_p">
                    Our company is renowned for providing high-quality services
                    in various areas. We have a team of skilled and dedicated
                    employees specializing in MS (Mild Steel) and SS (Stainless
                    Steel) fabrication and erection work. Our staff is
                    well-trained, ensuring timely service delivery tailored to
                    customer requirements. Additionally, our services are
                    competitively priced, and we are recognized for our
                    commitment to quality and meeting project deadlines. Our
                    highly qualified professionals employ the best tools and
                    techniques to ensure the perfection of our fabrication
                    services. Clients appreciate our work for its quality
                    compliance and timely execution. We aim to achieve maximum
                    client satisfaction by effectively delivering our services.
                    Our dexterous workforce consistently strives for efficient
                    and timely service delivery.
                  </p>
                </div>
                <a
                  href="javascript:void(0)"
                  className="Compsec_common-btn left-row"
                >
                  <NavLink
                    to="/Contact"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {" "}
                    contact us for more
                  </NavLink>
                </a>
              </div>
            </div>
            {/* <!-- col --> */}
            <div className="col-md-6 right-row">
              <div className="compy-box mt-4 my-md-0 position-relative">
                <img
                  src="Images\ProjectImages2\p7.png"
                  className="comp_img-fluid"
                  alt="Company"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="S2Compsec_container">
          <div className="row align-items-stretch">
            {/* <!-- col --> */}
            <div className="col-md-6 left-row">
              <div className="compy-box mt-4 my-md-0 position-relative">
                <img
                  src="Images\ProjectImages2\p8.png"
                  className="comp_img-fluid"
                  alt="Company"
                />
              </div>
            </div>
            {/* <!-- col --> */}
            <div className="col-md-6 align-self-center pb-4 pb-md-5 pb-lg-0">
              <div className="py-lg-5" id="S2compDescription">
                <div className="pb-md-3 paragraph right-row">
                  <p className="S2Compsec_p">
                    We are proud of our history, our esteemed faculty, and our
                    dedicated professionals, who, year after year, provide the
                    environment and support to help our students realize their
                    dreams.
                  </p>
                  <p className="S2Compsec_p">
                    Our company is renowned for providing high-quality services
                    in various areas. We have a team of skilled and dedicated
                    employees specializing in MS (Mild Steel) and SS (Stainless
                    Steel) fabrication and erection work. Our staff is
                    well-trained, ensuring timely service delivery tailored to
                    customer requirements. Additionally, our services are
                    competitively priced, and we are recognized for our
                    commitment to quality and meeting project deadlines. Our
                    highly qualified professionals employ the best tools and
                    techniques to ensure the perfection of our fabrication
                    services. Clients appreciate our work for its quality
                    compliance and timely execution. We aim to achieve maximum
                    client satisfaction by effectively delivering our services.
                    Our dexterous workforce consistently strives for efficient
                    and timely service delivery.
                  </p>
                </div>
                <div className="S2Compsec_common-btn_div">
                  {" "}
                  <a
                    href="javascript:void(0)"
                    className="S2Compsec_common-btn S2common-btn left-row"
                  >
                    <NavLink
                      to="/Contact"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {" "}
                      contact us for more
                    </NavLink>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
        </div>

        <div className="Compsec_container">
          <div className="row align-items-stretch">
            <div className="col-md-6 align-self-center pb-4 pb-md-5 pb-lg-0">
              <div className="py-lg-5" id="compDescription">
                <div className="pb-md-3 paragraph left-row">
                  <p className="Compsec_p">
                    We are proud of our history, our esteemed faculty, and our
                    dedicated professionals, who, year after year, provide the
                    environment and support to help our students realize their
                    dreams.
                  </p>
                  <p className="Compsec_p">
                    Our company is renowned for providing high-quality services
                    in various areas. We have a team of skilled and dedicated
                    employees specializing in MS (Mild Steel) and SS (Stainless
                    Steel) fabrication and erection work. Our staff is
                    well-trained, ensuring timely service delivery tailored to
                    customer requirements. Additionally, our services are
                    competitively priced, and we are recognized for our
                    commitment to quality and meeting project deadlines. Our
                    highly qualified professionals employ the best tools and
                    techniques to ensure the perfection of our fabrication
                    services. Clients appreciate our work for its quality
                    compliance and timely execution. We aim to achieve maximum
                    client satisfaction by effectively delivering our services.
                    Our dexterous workforce consistently strives for efficient
                    and timely service delivery.
                  </p>
                </div>
                <a
                  href="javascript:void(0)"
                  className="Compsec_common-btn left-row"
                >
                  <NavLink
                    to="/Contact"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {" "}
                    contact us for more
                  </NavLink>
                </a>
              </div>
            </div>
            {/* <!-- col --> */}
            <div className="col-md-6 right-row">
              <div className="compy-box mt-4 my-md-0 position-relative">
                <img
                  src="Images\ProjectImages2\p9.png"
                  className="comp_img-fluid"
                  alt="Company"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="S2Compsec_container">
          <div className="row align-items-stretch">
            {/* <!-- col --> */}
            <div className="col-md-6 left-row">
              <div className="compy-box mt-4 my-md-0 position-relative">
                <img
                  src="Images\ProjectImages2\p10.png"
                  className="comp_img-fluid"
                  alt="Company"
                />
              </div>
            </div>
            {/* <!-- col --> */}
            <div className="col-md-6 align-self-center pb-4 pb-md-5 pb-lg-0">
              <div className="py-lg-5" id="S2compDescription">
                <div className="pb-md-3 paragraph right-row">
                  <p className="S2Compsec_p">
                    We are proud of our history, our esteemed faculty, and our
                    dedicated professionals, who, year after year, provide the
                    environment and support to help our students realize their
                    dreams.
                  </p>
                  <p className="S2Compsec_p">
                    Our company is renowned for providing high-quality services
                    in various areas. We have a team of skilled and dedicated
                    employees specializing in MS (Mild Steel) and SS (Stainless
                    Steel) fabrication and erection work. Our staff is
                    well-trained, ensuring timely service delivery tailored to
                    customer requirements. Additionally, our services are
                    competitively priced, and we are recognized for our
                    commitment to quality and meeting project deadlines. Our
                    highly qualified professionals employ the best tools and
                    techniques to ensure the perfection of our fabrication
                    services. Clients appreciate our work for its quality
                    compliance and timely execution. We aim to achieve maximum
                    client satisfaction by effectively delivering our services.
                    Our dexterous workforce consistently strives for efficient
                    and timely service delivery.
                  </p>
                </div>
                <div className="S2Compsec_common-btn_div">
                  {" "}
                  <a
                    href="javascript:void(0)"
                    className="S2Compsec_common-btn S2common-btn left-row"
                  >
                    <NavLink
                      to="/Contact"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {" "}
                      contact us for more
                    </NavLink>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
      </section>
      {/* <!-- Company End --> */}
    </>
  );
}
