import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import CartScreen from './Screens/CartScreen'
import SigninScreen from './Screens/SigninScreen'
import RegisterScreen from './Screens/RegisterScreen'
import Navbar from './components/Navbar'
import Location from './components/Location'
import storePage from './Feature/storePage'
import Branches from './Airtable/branches'

 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
            <Route path="/product/:id" component={ProductScreen}/>
            <Route path="/location" component={Branches}/>
            <Route path="/" exact={true} component={HomeScreen}/>
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            
            

           
        </Switch>
      </div>
    </Router>
  )
}

export default App;



