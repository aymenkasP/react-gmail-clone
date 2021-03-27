
import './appCss/App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar'
import Mail from './component/Mail'
import EmailList from './component/EmailList'
import SendMail from './component/SendMail'
import { useSelector } from 'react-redux'
import { selectSendMessageIsOpen } from './features/mailSlice'
import { BrowserRouter as Router,Switch,Route,} from "react-router-dom";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (


    <Router>

      <div className="App">

        <Header />
        <div className='app_body' >
          <Sidebar />
          <Switch>
            <Route path='/mail' >
              <Mail />
            </Route>
            <Route path='/'>
              <EmailList />
            </Route>
          </Switch>
        </div>
        {sendMessageIsOpen && <SendMail />}

      </div>

    </Router>

  );
}
export default App;
