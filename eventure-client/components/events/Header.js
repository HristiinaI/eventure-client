import Link from 'next/link'

const Header = () => (
  <header>
    <ul>
      <li>
        <Link href="/events/index">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/events/allEvents">
          <a>AllEvents</a>
        </Link>
      </li>
      <li>
        <Link href="/events/createEvent">
          <a>Create Event</a>
        </Link>
      </li>
      {/* <li>
        <Link href="/events/[id]" as="/events/first">
          <a>Create event</a>
        </Link>
      </li> */}
    </ul>
  </header>
)

export default Header