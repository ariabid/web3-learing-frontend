import Welcome from "./components/Welcome";
import { Transactions } from "./components";

const App = () => (
  <div className="min-h-screen bg-indigo-900">
    <div className="gradient-bg-welcome">
      <Welcome />
    </div>
    <Transactions />
  </div>
);

export default App;
