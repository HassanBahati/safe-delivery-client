import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";
import HomePage from "./components/screens/HomeScreen";
import OrderScreen from "./components/screens/OrderScreen";
import CheckOutScreen from "./components/screens/CheckOutScreen";
import PaymentsScreen from "./components/screens/PaymentsScreen";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/dashboard" component={PrivateScreen} />
          <PrivateRoute path="/order" component={OrderScreen} />
          <PrivateRoute path="/checkout" component={CheckOutScreen} />
          <PrivateRoute path="/payments" component={PaymentsScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/forgotpassword" component={ForgotPasswordScreen} />
          <Route
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
