import { NavLink, useNavigate } from 'react-router-dom';

import { Header, HeaderTitle, LoginButton, NavList, NavListItem, NavPanel } from '../styles';

const AppHeader = ({ background, text }) => {
  const navigate = useNavigate();
  return (
    <Header background={background}>
      <NavPanel>
        <NavList>
          <NavListItem>
            <NavLink to="/">Coffee house</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="/our-coffee">Our coffee</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="/for-your-pleasure">For your pleasure</NavLink>
          </NavListItem>
        </NavList>
        <LoginButton onClick={() => navigate('/sign-in')}>Login</LoginButton>
      </NavPanel>
      <HeaderTitle>{text}</HeaderTitle>
    </Header>
  );
};

export default AppHeader;
