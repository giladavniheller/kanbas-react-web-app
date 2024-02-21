import React from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { courses } from "../Database";
function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1> <hr />
      <div style={{ paddingLeft: "50px" }}>
        <h2>Published Courses ({courses.length})</h2>{" "}
        <hr style={{ marginBottom: "0px" }} />
        <div className="row">
          <div
            className="row row-cols-1 row-cols-md-5 g-4"
            style={{ marginTop: "0px" }}
          >
            {courses.map((course) => (
              <div key={course._id} className="col" style={{ width: 325 }}>
                <div className="card">
                  <img
                    src={`/images/${course.image}`}
                    className="card-img-top"
                    style={{ height: 150 }}
                  />
                  <div className="card-body">
                    <Link
                      className="card-title"
                      to={`/Kanbas/Courses/${course._id}/Home`}
                      style={{
                        textDecoration: "none",
                        color: "#3072dc",
                        fontWeight: "bold",
                      }}
                    >
                      {course._id} {course.name}{" "}
                    </Link>
                    <p
                      className="card-text"
                      style={{
                        color: "grey",
                        paddingTop: "4px",
                        lineHeight: "1.1",
                      }}
                    >
                      {course._id}.{course.fullCode}
                      <br />
                      <span style={{ fontSize: "small" }}>
                        {course.fullCode.split(".")[1]}_{course.section}{" "}
                        {course.semester}
                      </span>
                    </p>
                    <Link to={`/Kanbas/Courses/${course._id}/Home`}>
                      <FaEdit style={{ color: "#b3b3b3" }} size={23} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
