import PropTypes from 'prop-types';
import '/Users/luis_/my-react-app/src/components/navbar.css';

const Navbar = ({ Links }) => {
  return (
    <div className="navbar--container">
      <div className="navbar--title">
        <h1>NAVBAR</h1>
      </div>
      <div className="navbar--links">
        {Links.map((link, i) => (
          <div key={i} className="navbar--link">
            <a href={link.href}>{link.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  Links: PropTypes.array.isRequired,
};

export default Navbar;
