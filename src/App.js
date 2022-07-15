import { NhostReactProvider } from "@nhost/react";
import { NhostApolloProvider } from "@nhost/react-apollo";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import DontNoPassword from "./pages/DontNoPassword";
import profile from "./pages/profile";
import ProtectRoute from "./components/ProtectRoute";

import { nhost } from "./lib/nhost";
import Layout from "./components/Layout";
import DashBoard from "./pages/DashBoard";

export default function App() {
  return (
    <>
      <Helmet>
        <title>Nhost | E-zone</title>
      </Helmet>
      <BrowserRouter>
        <NhostReactProvider nhost={nhost}>
          <NhostApolloProvider nhost={nhost}>
            <Routes>
             
              <Route path="SignInPage" element={<SignInPage/>} />
              <Route path="SignUpPage" element={<SignUpPage />} />
              <Route path="DontNoPassword" element={<DontNoPassword/>} />
              <Route path="/" element={
                <ProtectRoute>
                  <Layout />
                  </ProtectRoute>
                 } >
                <Route index element={<DashBoard />} />
                <Route path="profile" element={<profile/>} />
                </Route>
            </Routes>
          </NhostApolloProvider>
        </NhostReactProvider>
      </BrowserRouter>
    </>
  );
}
