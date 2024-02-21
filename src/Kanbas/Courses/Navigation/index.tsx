import { Link, useLocation } from "react-router-dom";
import { courses } from "../../Database";
import "./index.css";
function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom Meetings",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
    "Panopto Video",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Settings",
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-navigation">
      {links.map((link, index) => (
        <li
          key={index}
          className={
            pathname.includes(link.replace(/\s/g, "")) ? "wd-active" : ""
          }
        >
          <Link to={link.replace(/\s/g, "")}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}
export default CourseNavigation;
