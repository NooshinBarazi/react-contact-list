import "./App.css";
import { Route, Switch } from "react-router-dom";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";
import ContactDetails from "./component/ContactDetails";
import EditContact from "./component/EditContact";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/edit/:id" component={EditContact} />
        <Route path="/user/:id" component={ContactDetails} />
        <Route path="/add" component={ContactForm} />
        <Route path="/" exact={true} component={ContactList} />
      </Switch>
      </div>
  );
}

export default App;
