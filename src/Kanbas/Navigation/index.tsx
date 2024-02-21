import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
  FaHistory,
  FaNetworkWired,
  FaCopyright,
  FaQuestionCircle,
} from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    {
      label: "Account",
      icon: <FaRegUserCircle size={30} />,
    },
    {
      label: "Dashboard",
      icon: <FaTachometerAlt size={30} className="sidebar-icon" />,
    },
    { label: "Courses", icon: <FaBook size={30} className="sidebar-icon" /> },
    {
      label: "Calendar",
      icon: <FaRegCalendarAlt size={30} className="sidebar-icon" />,
    },
    { label: "Inbox", icon: <FaInbox size={30} className="sidebar-icon" /> },
    {
      label: "History",
      icon: <FaHistory size={30} className="sidebar-icon" />,
    },
    {
      label: "Studio",
      icon: <FaNetworkWired size={30} className="sidebar-icon" />,
    },
    {
      label: "Commons",
      icon: <FaCopyright size={30} className="sidebar-icon" />,
    },
    {
      label: "Help",
      icon: <FaQuestionCircle size={30} className="sidebar-icon" />,
    },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li style={{ paddingTop: "20px" }}>
        <Link to={"http://northeastern.edu"}>
          <img src="../../images/neu-logo.png" width="70px" />
        </Link>
      </li>
      {links.map((link, index) => (
        <li
          key={index}
          className={pathname.includes(link.label) ? "wd-active" : " "}
        >
          <Link to={`/Kanbas/${link.label}`}>
            {" "}
            {link.icon}
            <br />
            <span>{link.label}</span>{" "}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;
