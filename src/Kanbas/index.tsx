import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";

function Kanbas() {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <div className="d-none d-md-flex" style={{ minHeight: "100vh" }}>
        <KanbasNavigation />
      </div>
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;
