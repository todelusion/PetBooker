import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { SearchBarProvider } from "./context/SearchBarContext";
import { FilterProvider } from "./context/FilterContext";

import Nav from "./Layout/Nav";
import ContextTest from "./pages/ContextTest";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage ";
import UserForgetPassword from "./pages/User/UserForgetPassword";
import UserLogin from "./pages/User/UserLogin";
import UserModifyPassword from "./pages/User/UserModifyPassword";
import UserRegist from "./pages/User/UserRegist";

export default function Router(): JSX.Element {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/home"
            element={
              <FilterProvider>
                <SearchBarProvider>
                  <Home />
                </SearchBarProvider>
              </FilterProvider>
            }
          />
          <Route
            path="/contextTest"
            element={
              <SearchBarProvider>
                <ContextTest />
              </SearchBarProvider>
            }
          />
          <Route path="/login" element={<UserLogin />} />;
          <Route path="/regist" element={<UserRegist />} />;
          <Route path="/forgetPassword" element={<UserForgetPassword />} />;
          <Route path="/modifyPassword" element={<UserModifyPassword />} />;
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}
