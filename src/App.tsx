import { BrowserRouter as Router } from "react-router";
import { GeneralRoutes } from "./routes/GeneralRoutes";

export const App = () => {
  return (
    <Router>
      <GeneralRoutes />
    </Router>
  )
}
