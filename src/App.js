import './App.css'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import ViewMoveDetails from './components/ViewMoveDetails'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/vmd/:id" component={ViewMoveDetails} />
    </Switch>
  </>
)

export default App
