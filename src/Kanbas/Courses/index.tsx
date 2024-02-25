import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { HiChevronRight, HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import {
  FaBars,
  FaBook,
  FaCalendarAlt,
  FaChevronCircleDown,
  FaChevronCircleRight,
  FaChevronDown,
  FaChevronRight,
  FaFileAlt,
  FaGlasses,
  FaHistory,
  FaHome,
  FaInbox,
  FaNetworkWired,
  FaPlug,
  FaQuestionCircle,
  FaRocket,
  FaTachometerAlt,
  FaTimes,
  FaUser,
  FaUserCircle,
  FaXbox,
} from "react-icons/fa";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { useState } from "react";
import path from "path";
function Courses({
  courses,
}: {
  courses: {
    _id: string;
    name: string;
    number: string;
    fullCode: string;
    semester: string;
    startDate: string;
    endDate: string;
    image: string;
    section: string;
  }[];
}) {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showCanvasMenu, setShowCanvasMenu] = useState(false);
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const location = useLocation();
  const pathname = location.pathname;
  const segments = pathname.split("/");
  const coursesIndex = segments.indexOf("Courses");
  let page;
  if (coursesIndex !== -1 && segments[coursesIndex + 2]) {
    page = segments[coursesIndex + 2];
  }

  return (
    <div>
      {showCanvasMenu && (
        <div
          style={{
            position: "fixed",
            backgroundColor: "violet",
            zIndex: 1,
            width: "100%",
            height: "100%",
            marginBottom: "15px",
            boxShadow: "0px 3px 4px 3px lightgrey",
          }}
          className="d-block d-md-none"
        >
          <div className="canvas-menu">
            <div style={{ width: "100%", height: "100px" }}>
              <a href="https://www.instructure.com/canvas">
                <img
                  src="../../../images/canvasLogo.png"
                  height="70px"
                  style={{ marginTop: "15px" }}
                />
              </a>
              <span onClick={() => setShowCanvasMenu(false)}>
                <FaTimes
                  size={30}
                  style={{
                    color: "darkgrey",
                    cursor: "pointer",
                    float: "right",
                    marginTop: "35px",
                    marginRight: "30px",
                  }}
                />
              </span>
            </div>
            <div className="menu-item">
              <span style={{ cursor: "pointer" }} className="fake-link">
                <FaTachometerAlt /> Dashboard
              </span>
            </div>
            <div className="menu-item">
              <span style={{ cursor: "pointer" }} className="fake-link">
                <FaUserCircle /> Account
              </span>
            </div>
            <div className="menu-item">
              <Link
                to={"Home"}
                onClick={() => setShowCanvasMenu(false)}
                className="fake-link"
              >
                <FaBook /> Courses
              </Link>
            </div>
            <div className="menu-item">
              <span style={{ cursor: "pointer" }} className="fake-link">
                <FaUser /> Groups
              </span>
            </div>
            <div className="menu-item">
              <span style={{ cursor: "pointer" }} className="fake-link">
                <FaCalendarAlt /> Calendar
              </span>
            </div>
            <div className="menu-item">
              <span style={{ cursor: "pointer" }} className="fake-link">
                <FaInbox /> Inbox
              </span>
            </div>
            <div className="menu-item">
              <span style={{ cursor: "pointer" }} className="fake-link">
                <FaNetworkWired /> Studio
              </span>
            </div>
            <div className="menu-item">
              <span style={{ cursor: "pointer" }} className="fake-link">
                <FaHistory /> History
              </span>
            </div>
            <div className="menu-item">
              <span style={{ cursor: "pointer" }} className="fake-link">
                <FaQuestionCircle /> Help
              </span>
            </div>
          </div>
        </div>
      )}
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "black",
          marginBottom: showSubMenu ? "0px" : "15px",
        }}
        className="d-block d-md-none"
      >
        <br />
        <div className="row">
          <div
            style={{
              width: "20%",
              height: "100%",
              paddingLeft: "40px",
              paddingTop: "20px",
            }}
          >
            <span
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => {
                setShowCanvasMenu(true);
                setShowSubMenu(false);
              }}
            >
              <FaBars style={{ color: "white" }} />{" "}
            </span>
          </div>
          <div style={{ width: "60%", textAlign: "center", color: "white" }}>
            <span>
              {course?._id}.{course?.fullCode}
            </span>
            <br />
            <span>{page}</span>
          </div>
          <div
            style={{
              width: "20%",
              height: "100%",
              float: "right",
              paddingLeft: "50px",
              paddingTop: "20px",
            }}
          >
            {showSubMenu && (
              <span
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => setShowSubMenu(false)}
              >
                <FaTimes size={20} style={{ color: "white" }} />
              </span>
            )}
            {!showSubMenu && (
              <span
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => setShowSubMenu(true)}
              >
                <FaGlasses />
                <FaChevronDown style={{ color: "white", marginLeft: "10px" }} />
              </span>
            )}
          </div>
        </div>
      </div>
      {showSubMenu && (
        <div
          style={{
            width: "100%",
            height: "100%",
            marginBottom: "15px",
            boxShadow: "0px 3px 4px 3px lightgrey",
          }}
          className="d-block d-md-none"
        >
          <Link
            to={"Home"}
            onClick={() => setShowSubMenu(false)}
            className="fake-link"
          >
            <FaHome /> Home
            <br />
          </Link>
          <Link
            to={"Modules"}
            onClick={() => setShowSubMenu(false)}
            className="fake-link"
          >
            <FaNetworkWired /> Modules
            <br />
          </Link>
          <a href="javascript:void(0);" className="fake-link">
            <FaPlug /> Piazza
            <br />
          </a>
          <a href="javascript:void(0);" className="fake-link">
            <FaPlug /> Zoom Meetings
            <br />
          </a>
          <Link
            to={"Assignments"}
            onClick={() => setShowSubMenu(false)}
            className="fake-link"
          >
            <FaFileAlt /> Assignments
            <br />
          </Link>
          <a href="javascript:void(0);" className="fake-link">
            <FaRocket /> Quizzes
            <br />
          </a>
          <a href="javascript:void(0);" className="fake-link">
            <FaFileAlt /> Grades
            <br />
          </a>
          <a href="javascript:void(0);" className="fake-link">
            <FaUser /> People
            <br />
          </a>
          <a href="javascript:void(0);" className="fake-link">
            <FaPlug /> Panopto Video
            <br />
          </a>
          <a href="javascript:void(0);" className="fake-link">
            <FaPlug /> Credentials
            <br />
          </a>
          <a href="javascript:void(0);" className="fake-link">
            <FaPlug /> Progress Reports (EAB Navigate)
            <br />
          </a>
        </div>
      )}

      <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
        <div
          className="d-none d-md-flex"
          style={{
            paddingTop: "30px",
            fontSize: 22,
            display: "flex",
            alignItems: "center",
          }}
        >
          <HiMiniBars3 size={32} style={{ color: "red", cursor: "pointer" }} />
          <span
            style={{ color: "red", paddingLeft: "20px", cursor: "pointer" }}
          >
            {course?.number} {course?.name} SEC0{course?.section}
          </span>
          <HiChevronRight
            size={15}
            style={{ marginLeft: "5px", marginRight: "5px" }}
          />
          {page}
          <br />
        </div>
        <hr className="d-none d-md-flex" />
        <div style={{ display: "flex" }}>
          <div className="d-none d-md-block">
            <i style={{ fontSize: 12 }}>
              {`${course?.fullCode.split(".")[1]}_${course?.section} ${
                course?.semester
              }`.substring(0, 26) + "..."}
            </i>
            <CourseNavigation />
          </div>
          <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<h1>Assignment Editor</h1>}
              />
              <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;
