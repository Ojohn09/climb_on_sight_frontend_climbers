import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

/*==== Import Components ====*/
import LoginPageComp from "./components/pages/auths/LoginPage_Comp/LoginPage_Comp";
import SignupPageComp from "./components/pages/auths/SignupPage_Comp/SignupPage_Comp";
import SignupPageStepOneComp from "./components/pages/auths/SignupPage_Comp/SignupPageStepOne_Comp";
import SignupPageStepTwoComp from "./components/pages/auths/SignupPage_Comp/SignupPageStepTwo_Comp";
import SignupPageStepThreeComp from "./components/pages/auths/SignupPage_Comp/SignupPageStepThree_Comp";
import SignupPageStepFourComp from "./components/pages/auths/SignupPage_Comp/SignupPageStepFour_Comp";
import SignupPageStepFiveComp from "./components/pages/auths/SignupPage_Comp/SignupPageStepFive_Comp";
import ReviewPageComp from "./components/pages/auths/ReviewPage_Comp/ReviewPage_Comp";
import DashboardView from "./views/Dashboard_View";
import EventsView from "./views/Events_View";
import GuidesView from "./views/Guides_View";
import LoadingWidget from "./components/widgets/Loading_Widget";

function App() {

  return (
    <main className="bg-gray-100">
      <Router>
        <Routes>

          {/* ========== Auth Pages ========== */}
          <Route path="/login" element={ <LoginPageComp /> } />
          <Route path="/signup" element={ <SignupPageComp /> } />
          <Route path="/signup_step_one" element={ <SignupPageStepOneComp /> } />
          <Route path="/signup_step_two" element={ <SignupPageStepTwoComp /> } />
          <Route path="/signup_step_three" element={ <SignupPageStepThreeComp /> } />
          <Route path="/signup_step_four" element={ <SignupPageStepFourComp /> } />
          <Route path="/signup_step_five" element={ <SignupPageStepFiveComp /> } />

          <Route path="/review" element={ <ReviewPageComp /> } />

          {/* ========== Dashboard ========== */}
          <Route path="/" element={ <Navigate to="/dashboard" /> } />
          <Route path="/dashboard" element={ <DashboardView /> } />


          {/* ========== Events ========== */}
          <Route path="/events" element={ <EventsView /> } />


          {/* ========== Events ========== */}
          <Route path="/events_based_on_selection" element={ <EventsView /> } />


          {/* ========== Guides ========== */}
          <Route path="/guides" element={ <GuidesView /> } />


          {/* ========== Messages ========== */}
          <Route path="/messages" element={ <LoadingWidget /> } />
        </Routes>
      </Router>

      <ToastContainer />
    </main>
  )
};

export default App;
