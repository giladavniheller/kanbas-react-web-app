import {
  FaBan,
  FaBell,
  FaBullhorn,
  FaCalendarAlt,
  FaChartBar,
  FaCheckCircle,
  FaCircle,
  FaCopyright,
  FaCrosshairs,
  FaFileDownload,
} from "react-icons/fa";
import ModuleList from "../Modules/List";
import "./index.css";

function Home() {
  return (
    <div style={{ display: "flex" }}>
      <div className="flex-grow" style={{ width: "100%" }}>
        <ModuleList />
      </div>
      <div
        className="flex-grow-0 me-2 d-none d-xl-block"
        style={{ width: "100%", maxWidth: "270px", paddingLeft: "15px" }}
      >
        <p>Course Status</p>
        <div style={{ display: "flex" }}>
          <button
            type="button"
            className="btn wd-button"
            style={{ width: "50%", paddingLeft: "5px", paddingRight: "5px" }}
          >
            <FaBan /> Unpublish
          </button>
          <button
            type="button"
            className="btn wd-button wd-button-disabled"
            style={{ width: "50%", paddingLeft: "5px", paddingRight: "5px" }}
            disabled
          >
            <FaCheckCircle style={{ color: "white" }} /> Published
          </button>
        </div>
        <br />
        <button type="button" className="btn wd-button wd-sidebar-button">
          <FaFileDownload /> Import Existing Content
        </button>{" "}
        <br />
        <button type="button" className="btn wd-button wd-sidebar-button">
          <FaCopyright /> Import from Commons
        </button>{" "}
        <br />
        <button type="button" className="btn wd-button wd-sidebar-button">
          <FaCrosshairs /> Choose Home Page
        </button>{" "}
        <br />
        <button type="button" className="btn wd-button wd-sidebar-button">
          <FaChartBar /> View Course Stream
        </button>{" "}
        <br />
        <button type="button" className="btn wd-button wd-sidebar-button">
          <FaBullhorn /> New Announcement
        </button>{" "}
        <br />
        <button type="button" className="btn wd-button wd-sidebar-button">
          <FaChartBar /> New Analytics
        </button>{" "}
        <br />
        <button type="button" className="btn wd-button wd-sidebar-button">
          <FaBell /> View Course Notifications
        </button>{" "}
        <br />
        <br />
        <p style={{ fontWeight: "bold" }}>To Do</p>
        <hr />
        <div className="wd-grid-row">
          <div style={{ float: "left", width: "10%" }}>
            <FaCircle style={{ color: "red" }} />
          </div>
          <div style={{ float: "left", width: "85%" }}>
            <a className="fake-link" href="#">
              Grade A1 - ENV + HTML
            </a>
            <br />
            <span style={{ color: "gray", fontSize: "small" }}>
              100 points • Sep 18 at 11:59pm
            </span>
          </div>
          <div style={{ float: "left", width: "5%" }}>
            <a
              className="fake-link"
              href="#"
              style={{ color: "darkgray !important" }}
            >
              x
            </a>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="wd-grid-row">
          <div style={{ float: "left" }}>
            <span style={{ fontWeight: "bold" }}>Coming Up</span>
          </div>
          <div style={{ float: "right" }}>
            <a className="fake-link" href="#">
              <FaCalendarAlt /> View Calendar
            </a>
          </div>
        </div>
        <br />
        <hr />
        <div>
          <div style={{ width: "10%", float: "left" }}>
            <FaCalendarAlt />
          </div>
          <div style={{ width: "90%", float: "left" }}>
            <a className="fake-link" href="#">
              Lecture
            </a>
            <br />
            <span style={{ color: "gray", fontSize: "small" }}>
              CS4550.12631.202410
            </span>
            <br />
            <span style={{ color: "gray", fontSize: "small" }}>
              Sep 11 at 11:45am
            </span>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <div style={{ width: "10%", float: "left" }}>
            <FaCalendarAlt />
          </div>
          <div style={{ width: "90%", float: "left" }}>
            <a className="fake-link" href="#">
              CS5610 06 SP23 Lecture
            </a>
            <br />
            <span style={{ color: "gray", fontSize: "small" }}>
              CS4550.12631.202410
            </span>
            <br />
            <span style={{ color: "gray", fontSize: "small" }}>
              Sep 11 at 6pm
            </span>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <div style={{ width: "10%", float: "left" }}>
            <FaCalendarAlt />
          </div>
          <div style={{ width: "90%", float: "left" }}>
            <a className="fake-link" href="#">
              CS5610 Web Development Summer 1 2023 - LECTURE
            </a>
            <br />
            <span style={{ color: "gray", fontSize: "small" }}>
              CS4550.12631.202410
            </span>
            <br />
            <span style={{ color: "gray", fontSize: "small" }}>
              Sep 11 at 7pm
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
