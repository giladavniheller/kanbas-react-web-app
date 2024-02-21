import React, { useState } from "react";
// import "./index.css";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlusCircle,
  FaCaretDown,
  FaPlus,
  FaGripVertical,
} from "react-icons/fa";
import { useParams } from "react-router";
import { modules } from "../../Database";
import { courses } from "../../Database";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      <div style={{ paddingBottom: "40px" }}>
        <span className="float-end">
          <button type="button" className="btn wd-button top-nav-button">
            Collapse All
          </button>
          <button type="button" className="btn wd-button top-nav-button">
            View Progress
          </button>
          <button type="button" className="btn wd-button top-nav-button">
            Publish All
          </button>
          <button
            type="button"
            className="btn wd-button top-nav-button"
            style={{
              color: "rgba(255, 255, 255, 0.894)",
              backgroundColor: "rgb(208, 20, 20)",
            }}
          >
            <FaPlus /> {"Module"}
          </button>
          <button type="button" className="btn wd-button">
            <FaEllipsisV />
          </button>
        </span>
      </div>
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <div>
              <FaEllipsisV />
              <FaCaretDown /> {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaCaretDown /> <FaPlus />
                <FaEllipsisV />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="completed-item list-group-item">
                    <FaGripVertical style={{ color: "grey" }} /> {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;

{
  /* 
    <li class="list-group-item">
      
        <ul class="list-group">
            <li class="completed-item list-group-item">
                <i class="fas fa-grip-vertical grip-icon"></i> LEARNING OBJECTIVES
                <span class="float-end">
                    <i class="fa fa-check-circle text-success"></i> <i class="fa fa-ellipsis-v ms-2"></i>
                </span>
            </li>
            <li class="completed-item list-group-item">
                <i class="fas fa-grip-vertical grip-icon grip-sub-item"></i> Introduction to the course
                <span class="float-end">
                    <i class="fa fa-check-circle text-success"></i> <i class="fa fa-ellipsis-v ms-2"></i>
                </span>
            </li>
            <li class="completed-item list-group-item">
                <i class="fas fa-grip-vertical grip-icon grip-sub-item"></i> Learn what is Web Development
                <span class="float-end">
                    <i class="fa fa-check-circle text-success"></i> <i class="fa fa-ellipsis-v ms-2"></i>
                </span>
            </li>
            <li class="completed-item list-group-item">
                <i class="fas fa-grip-vertical grip-icon grip-sub-item"></i> Creating a development environment
                <span class="float-end">
                    <i class="fa fa-check-circle text-success"></i> <i class="fa fa-ellipsis-v ms-2"></i>
                </span>
            </li>
            <li class="completed-item list-group-item">
                <i class="fas fa-grip-vertical grip-icon grip-sub-item"></i> Creating a Web Application
                <span class="float-end">
                    <i class="fa fa-check-circle text-success"></i> <i class="fa fa-ellipsis-v ms-2"></i>
                </span>
            </li>
            <li class="completed-item list-group-item">
                <i class="fas fa-grip-vertical grip-icon grip-sub-item"></i> Getting started with the 1st assignment
                <span class="float-end">
                    <i class="fa fa-check-circle text-success"></i> <i class="fa fa-ellipsis-v ms-2"></i>
                </span>
            </li>
            <li class="completed-item list-group-item">
                <i class="fas fa-grip-vertical grip-icon"></i> READING
                <span class="float-end">
                    <i class="fa fa-check-circle text-success"></i> <i class="fa fa-ellipsis-v ms-2"></i>
                </span>
            </li>
            <li class="completed-item list-group-item">
                <i class="fas fa-grip-vertical grip-icon grip-sub-item"></i> Full Stack Developer - Chapter 1 - Introduction
                <span class="float-end">
                    <i class="fa fa-check-circle text-success"></i> <i class="fa fa-ellipsis-v ms-2"></i>
                </span>
            </li>
            <li class="completed-item list-group-item">
                <i class="fas fa-grip-vertical grip-icon grip-sub-item"></i> Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML
                <span class="float-end">
                    <i class="fa fa-check-circle text-success"></i> <i class="fa fa-ellipsis-v ms-2"></i>
                </span>
            </li>
            <li class="completed-item list-group-item">
                <i class="fas fa-grip-vertical grip-icon"></i> SLIDES
                <span class="float-end">
                    <i class="fa fa-check-circle text-success"></i> <i class="fa fa-ellipsis-v ms-2"></i>
                </span>
            </li>
            <li class="completed-item list-group-item">
                <i class="fas fa-grip-vertical grip-icon"></i><i class="fas fa-link link-icon"></i><a href="#" class="sub-link">Introduction to Web Development <i class="fas fa-external-link-alt"></i></a>
                <span class="float-end">
                    <i class="fa fa-check-circle text-success"></i> <i class="fa fa-ellipsis-v ms-2"></i>
                </span>
            </li>
            <li class="completed-item list-group-item">
                <i class="fas fa-grip-vertical grip-icon"></i><i class="fas fa-link link-icon"></i><a href="#" class="sub-link">Creating an HTTP server with Node.js <i class="fas fa-external-link-alt"></i></a>
                <span class="float-end">
                    <i class="fa fa-check-circle text-success"></i> <i class="fa fa-ellipsis-v ms-2"></i>
                </span>
            </li>
            <li class="completed-item list-group-item">
                <i class="fas fa-grip-vertical grip-icon"></i><i class="fas fa-link link-icon"></i><a href="#" class="sub-link">Creating a React Application <i class="fas fa-external-link-alt"></i></a>
                <span class="float-end">
                    <i class="fa fa-check-circle text-success"></i> <i class="fa fa-ellipsis-v ms-2"></i>
                </span>
            </li>
        </ul>
    </li> */
}
