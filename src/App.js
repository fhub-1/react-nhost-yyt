import { NhostReactProvider } from "@nhost/react";
import { NhostApolloProvider } from "@nhost/react-apollo";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DashBoardPage from "./pages/DashBoardPage";
import ForgotPassowordPage from "./pages/ForgotPassowordPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

import { nhost } from "./lib/nhost";
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
              <Route path="/" element={<DashBoardPage/>} />
              <Route path="SignInPage" element={<SignInPage/>} />
              <Route path="SignUpPage" element={<SignUpPage />} />
              <Route path="ForgotPassowordPage" element={<ForgotPassowordPage/>} />
                    
            </Routes>
          </NhostApolloProvider>
        </NhostReactProvider>
      </BrowserRouter>
    </>
  );
}
