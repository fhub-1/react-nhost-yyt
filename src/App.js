import { NhostApolloProvider } from "@nhost/react-apollo";
import { BrowserRouter, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { nhost } from "./lib/nhost";
import ForgotPassowrdpage from "./pages/ForgotPassowrdpage";
import SignUpPage from "./pages/SignUpPage";

export default function App() {
  return (
    <>
      <NhostApolloProvider nhost={nhost}>
        <NhostApolloProvider nhost={nhost}>
          <BrowserRouter>
            {/* <Route path="SignInPage" element={<SignIn />}>
              <SignUpPage/>
              </Route>
            <Route path="SignUpPage" element={<SignUp />} /> */}
            <ForgotPassowrdpage />
          </BrowserRouter>
        </NhostApolloProvider>
      </NhostApolloProvider>
    </>
  );
}
