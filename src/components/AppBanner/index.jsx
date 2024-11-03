import { NavLink, useNavigate } from 'react-router-dom';

import beansLogo from '../../assets/Beens/Beans logo.svg';
import { useAuthContext } from '../../providers/AuthProvider';
import {
  BannerButton,
  BannerContainer,
  BannerHead,
  BannerLogo,
  BannerText,
  BannerTitle,
  LoginButton,
  NavList,
  NavListItem,
  NavPanel,
} from '../styles';

const AppBanner = () => {
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
    <BannerHead>
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
      <BannerContainer>
        <BannerTitle data-cy="banner-title">Everything You Love About Coffee</BannerTitle>
        <BannerLogo src={beansLogo} alt="Beans logo" />
        <BannerText>We makes every day full of energy and taste</BannerText>
        <BannerText>Want to try our beans?</BannerText>
        <BannerButton>More</BannerButton>
      </BannerContainer>
    </BannerHead>
  );
};

export default AppBanner;
