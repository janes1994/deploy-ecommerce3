import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Topic = ({match}) => <h1>Requested param: {match.params.id}</h1>
const Topics = ({match}) => (
  <div>
    <h2>Topics</h2>

    <ul>
      <li><Link to={`${match.url}/components`}>Components</Link></li>
      <li><Link to={`${match.url}/props-v-state`}>Props v. State</Link></li>
    </ul>

    <Route path={`${match.path}/:id`} component={Topic}/>
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic</h3>}
    />
  </div>
)

const Header = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about/">About</Link></li>
    <li><Link to="/topics/">Topics</Link></li>
  </ul>
)

class App extends React.Component {
  render() {
    return (
      <Router>  
      <div>
        <h1>Halo</h1>
        <Header/>

        <Route path="/" exact component={Home}/>
        <Route path="/about/" exact component={About}/>
        <Route path="/topics/" exact component={Topics}/>
      </div>
      </Router>
    )
  }
}

export default App;