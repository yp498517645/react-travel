import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomePage } from './pages';
import Detail from './pages/detail';
import Ticket from './pages/ticket';
import axios from 'axios';
import styles from "./App.module.css";
axios.defaults.baseURL = "http://localhost:3000"

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter basename="/react-travel">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/detail" component={Detail} />
          <Route path="/ticket" component={Ticket} />
          <Route render={() => <h1>404 页面去M78了！</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
