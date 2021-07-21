import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { User } from "./pages/User";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/:id" component={User} />
        <Route path="*">
          <h1>Pagina não encontrada</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export { Router };
