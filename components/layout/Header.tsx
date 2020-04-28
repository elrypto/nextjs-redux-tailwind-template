import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAviato } from '@fortawesome/free-brands-svg-icons'

const Header = () => (
  <header className="flex">
    <div className="flex-shrink-0 bg-white shadow">
      <button
        onClick={() => {
          window.location.assign('/');
        }}
        type="button" className="flex items-center focus:outline-none">
        <div className="flex px-2">
          <FontAwesomeIcon className="text-blue-600 hover:text-blue-400" icon={faAviato} width="50" />
        </div>
      </button>
    </div>

    <div className="flex items-center justify-between flex-1 px-6 bg-gray-100 shadow">
      <div className="flex" />
      <div className="flex items-center">
        <NavLink
          color='text-gray-500'
          hoverColor='text-blue-400'
          onClick={(evt) => {
            evt.preventDefault();
            console.warn('do something, go somewhere');
          }}
        >
          route1
        </NavLink>
        <NavLink
          color='text-gray-500'
          hoverColor='text-blue-400'
          onClick={(evt) => {
            evt.preventDefault();
            console.warn('do something, go somewhere');
          }}
        >
          route2
        </NavLink>
      </div>
    </div>
  </header >
)

export default Header;



const NavLink = ({ color, hoverColor, children, ...props }) => (
  <a href="/"
    className={`inline-block px-3 py-2 text-sm font-medium leading-none ${color} rounded-lg hover:${hoverColor}`}
    {...props}
  >
    {children}
  </a>
)
