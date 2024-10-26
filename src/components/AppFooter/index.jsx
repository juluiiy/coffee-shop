import { NavLink } from 'react-router-dom';

import Beans from '../../assets/Beens/Beens.png';
import { Footer, FooterImgFolder, FooterNav, FooterNavItem, FooterWrapper } from '../styles';

const AppFooter = () => {
  return (
    <Footer>
      <FooterWrapper>
        <FooterNav>
          <FooterNavItem>
            <NavLink to="/">
              <span>Coffee house</span>
            </NavLink>
          </FooterNavItem>
          <FooterNavItem>
            <NavLink to="/our-coffee"> Our coffee</NavLink>
          </FooterNavItem>
          <FooterNavItem>
            <NavLink to="/for-your-pleasure">
              <span>For your pleasure</span>
            </NavLink>
          </FooterNavItem>
        </FooterNav>
        <FooterImgFolder>
          <img src={Beans} alt="Beans" />
        </FooterImgFolder>
      </FooterWrapper>
    </Footer>
  );
};

export default AppFooter;
