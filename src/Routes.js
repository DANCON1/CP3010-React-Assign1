import { Route, Routes } from "react-router-dom";
import Movies from "./Movies";
import SubmissionForm from "./SubmissionForm";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/submission" element={<SubmissionForm />} />
    </Routes>
  );
}

export default AppRoutes;
