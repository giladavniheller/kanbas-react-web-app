import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
// import "./index.css";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlusCircle,
  FaCaretDown,
  FaPlus,
  FaGripVertical,
  FaCaretUp,
} from "react-icons/fa";
import { useParams } from "react-router";
import { modules } from "../../Database";
import { courses } from "../../Database";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();

  const [selectedModule, setSelectedModule] = useState(
    moduleList.filter((module) => module.course === courseId)[0]
  );

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
        <li className="list-group-item" style={{ display: "flex" }}>
          <button
            className="btn btn-success"
            style={{ width: "100px" }}
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          >
            Add
          </button>
          <button
            className="btn btn-primary"
            style={{ width: "100px" }}
            onClick={() => dispatch(updateModule(module))}
          >
            Update
          </button>
          <input
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </li>

        {moduleList
          .filter((module) => module.course === courseId)
          .map((module) => (
            <li
              className="list-group-item"
              onClick={() => setSelectedModule(module)}
            >
              <div>
                <FaEllipsisV />
                {selectedModule._id === module._id ? (
                  <FaCaretUp />
                ) : (
                  <FaCaretDown />
                )}{" "}
                {module.name}
                <span className="float-end">
                  <button
                    className="btn btn-outline-primary"
                    style={{
                      marginRight: "15px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                    }}
                    onClick={() => dispatch(setModule(module))}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    style={{
                      marginRight: "15px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                    }}
                    onClick={() => dispatch(deleteModule(module._id))}
                  >
                    Delete
                  </button>
                  <FaCheckCircle className="text-success" />
                  <FaCaretDown /> <FaPlus />
                  <FaEllipsisV />
                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map(
                    (lesson: {
                      _id: string;
                      name: string;
                      description: string;
                      module: string;
                    }) => (
                      <li className="completed-item list-group-item">
                        <FaGripVertical style={{ color: "grey" }} />{" "}
                        {lesson.name}
                        <span className="float-end">
                          <FaCheckCircle className="text-success" />
                          <FaEllipsisV />
                        </span>
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;
