import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { courses as dbCourses } from "../Database";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
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
  course: {
    _id: string;
    name: string;
    number: string;
    fullCode: string;
    semester: string;
    startDate: string;
    endDate: string;
    image: string;
    section: string;
  };
  setCourse: (course: {
    _id: string;
    name: string;
    number: string;
    fullCode: string;
    semester: string;
    startDate: string;
    endDate: string;
    image: string;
    section: string;
  }) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}) {
  return (
    <div className="p-4">
      <h1>Dashboard</h1> <hr />
      <div style={{ paddingLeft: "50px" }}>
        <h2>Published Courses ({courses.length})</h2> <h5>Course</h5>
        <input
          value={course.name}
          className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input
          value={course.number}
          className="form-control"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input
          value={course.startDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
          value={course.endDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />
        <button onClick={addNewCourse}>Add</button>
        <button onClick={updateCourse}>Update</button>
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
                      {course.number} {course.name}{" "}
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
                    <button
                      className="btn btn-outline-warning"
                      style={{
                        marginLeft: "15px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                      }}
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-outline-danger"
                      style={{
                        marginLeft: "15px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                      }}
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                    >
                      Delete
                    </button>
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
