import { NavLink } from 'react-router-dom';

import Beans from '../../assets/Beens/Beens.png';
import { Footer, FooterImgFolder, FooterNav, FooterNavItem, FooterWrapper } from '../styles';

const AppFooter = () => {
  return (
    <Footer>
      <FooterWrapper>
        <FooterNav>
          <FooterNavItem>
            <NavLink to="/" data-cy="nav-link">
              Coffee house
            </NavLink>
          </FooterNavItem>
          <FooterNavItem>
            <NavLink to="/our-coffee" data-cy="nav-link">
              Our coffee
            </NavLink>
          </FooterNavItem>
          <FooterNavItem>
            <NavLink to="/for-your-pleasure" data-cy="nav-link">
              For your pleasure
            </NavLink>
          </FooterNavItem>
        </FooterNav>
        <FooterImgFolder>
          <img src={Beans} alt="Beans" data-cy="footer-image" />
        </FooterImgFolder>
      </FooterWrapper>
    </Footer>
  );
};

export default AppFooter;
