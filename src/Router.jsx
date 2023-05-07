import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "@/pages/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shared" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
