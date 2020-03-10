import React from 'react'
import Link from 'next/link'
import AllEvents from './events/allEvents'
import CreateEvent from './events/createEvent'
import Dashboard from './events/dashboard'


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/events/allEvents">Your Evnets:</Link>
          </li>
          <li>
            <Link to="/events/createEvent">Create Eevent</Link>
          </li>
        </ul>
      </nav>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/events/allEvents">
          <AllEvents />
        </Route>
        <Route path="/events/createEvent">
          <CreateEvent />
        </Route>
      </Switch>
    </div>
  </Router>
    );   
}
  // export default EventsHome;