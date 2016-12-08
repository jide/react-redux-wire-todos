import { createElement } from 'react-redux-wire';
import Link from '../components/Link'

const Footer = () => (
  <p>
    Show:
    {" "}
    <Link filter="SHOW_ALL">
      All
    </Link>
    {", "}
    <Link filter="SHOW_ACTIVE">
      Active
    </Link>
    {", "}
    <Link filter="SHOW_COMPLETED">
      Completed
    </Link>
  </p>
)

export default Footer
