import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pricing.html" component={Pricing} />
      <Route path="/pricing" component={Pricing} />
      <Route>
        <main className="container" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <h1>Page not found</h1><a href="/">Return home</a>
        </main>
      </Route>
    </Switch>
  );
}
