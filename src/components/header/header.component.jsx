import React from 'react';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { OptionsContainer, HeaderContainer, LogoContainer,LogoNameContainer, OptionLink} from './header.styles'

const Header = () => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
      <LogoNameContainer className="logo-name">
        <h1>MO$A</h1>
      </LogoNameContainer>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>

      <OptionLink to="/signin">SIGN IN</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;
