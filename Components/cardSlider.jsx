import "./cardSlider.css";
// import Projects from "../pages/Project";
import ProjectData from "../datafile/projectdata.js";
import timelineElements from "./timelineElements.js";
import Card from "./card";

export default function CardSlider() {
  return (
    <>
      <div>
        <h1 class="Heading_PROJECTS"> PROJECTS</h1>
      </div>
      <div class="CarBox">
        <div class=" ag-format-container">
          <div class="ag-courses_box">
            <div class="Card_body">
              {/* <div class="ag-courses_item"> */}
              {ProjectData.map((Project) => (
                <Card
                  pimg={Project.projectImage}
                  pname={Project.projectName}
                  pdescription={Project.projectDescription}
                ></Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
