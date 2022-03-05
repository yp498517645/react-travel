import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomePage,  } from './pages';
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter basename="/react-travel">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route render={() => <h1>404 页面去M78了！</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
