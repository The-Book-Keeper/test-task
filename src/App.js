import HomePage from "./homePage";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Table from "./DataTable/Table";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path={`/`}>
                    <HomePage/>
                </Route>
                <Route path={`/search`}>
                    <Table/>
                </Route>
            </Switch>
        </BrowserRouter>

    </div>
  );
}

export default App;
