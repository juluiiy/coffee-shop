import { NavLink, useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../providers/AuthProvider';
import { Header, HeaderTitle, LoginButton, NavList, NavListItem, NavPanel } from '../styles';

const AppHeader = ({ background, text }) => {
  const { signOut, isAuth } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
  };

  const AuthButton = isAuth ? (
    <LoginButton onClick={handleLogout} data-cy="logout-button">
      Logout
    </LoginButton>
  ) : (
    <LoginButton onClick={() => navigate('/sign-in')} data-cy="login-button">
      Login
    </LoginButton>
  );

  return (
    <Header background={background}>
      <NavPanel>
        <NavList>
          <NavListItem>
            <NavLink to="/" data-cy="nav-link">
              Coffee house
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="/our-coffee" data-cy="nav-link">
              Our coffee
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="/for-your-pleasure" data-cy="nav-link">
              For your pleasure
            </NavLink>
          </NavListItem>
        </NavList>
        {AuthButton}
      </NavPanel>
      <HeaderTitle data-cy="header-title">{text}</HeaderTitle>
    </Header>
  );
};

export default AppHeader;
