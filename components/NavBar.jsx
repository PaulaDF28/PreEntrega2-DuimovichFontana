import Brand from './navegation/Brand';
import CartWidget from './navegation/CartWidget';
import LinkItem from './navegation/LinkItem';

function NavBar() {
  return (
    <header className='nav-bar'>
      <Brand />
      <LinkItem />
      <CartWidget />
    </header>
  );
}

export default NavBar;
