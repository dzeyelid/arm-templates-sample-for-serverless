import React from 'react'
import {
  BrowserRouter as Router,
  Switch as RouterSwitch,
  Route,
  Link as RouterLink
} from "react-router-dom"
import { 
  AppBar,
  Tabs,
  Tab,
  Container
} from '@material-ui/core'
import Tasks from './pages/Tasks'

function App() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Router>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Home" component={RouterLink} to="/" />
          <Tab label="Tasks" component={RouterLink} to="/tasks" />
        </Tabs>
      </AppBar>
      <Container>
        <RouterSwitch>
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/">
            <div>Home</div>
          </Route>
        </RouterSwitch>
      </Container>
    </Router>
  )
}

export default App
