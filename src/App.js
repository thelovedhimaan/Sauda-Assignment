import './App.css';
import Form from './Forms/Form';
import Form2 from './Forms/Form2';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
   return (
      <div className="App">
         <Router>
            <Switch>
               <Route path="/Form">
                  <Form />
               </Route>
               <Route path="/Form2">
                  <Form2 />
               </Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
