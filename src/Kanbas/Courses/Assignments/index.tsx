import React from "react";
import {
  FaCaretDown,
  FaCheckCircle,
  FaEdit,
  FaEllipsisV,
  FaFileSignature,
  FaGripVertical,
  FaPlus,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "5px",
        }}
      >
        <input
          type="text"
          id="search-for-assignments"
          placeholder="Search for Assignments"
          value=""
        />
        <div>
          <button type="button" className="btn wd-button">
            <FaPlus /> {"Group"}
          </button>
          <button
            type="button"
            className="btn wd-button top-nav-button"
            style={{
              color: "rgba(255, 255, 255, 0.894)",
              backgroundColor: "rgb(208, 20, 20)",
            }}
          >
            <FaPlus /> {"Assignment"}
          </button>
        </div>
      </div>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaGripVertical style={{ color: "grey" }} /> <FaCaretDown />{" "}
            ASSIGNMENTS{" "}
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlus className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li
                className="list-group-item"
                style={{
                  height: "50px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <FaGripVertical style={{ color: "grey" }} />{" "}
                  <FaFileSignature
                    style={{
                      color: "green",
                      marginLeft: "15px",
                      marginRight: "15px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      lineHeight: 1,
                    }}
                  >
                    <Link
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {assignment.title}
                    </Link>
                    <div>
                      <span style={{ color: "red", fontSize: 10 }}>
                        Multiple Modules
                      </span>{" "}
                      <span style={{ fontSize: 10 }}>
                        | Due Sep 18 at 11:59pm | 100 pts
                      </span>
                    </div>
                  </div>
                </div>
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}
export default Assignments;
