import React from 'react';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils'

import { OptionsContainer, HeaderContainer, LogoContainer,LogoNameContainer, OptionLink} from './header.styles'

const Header = ({ currentUser }) => (
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
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          Sign Out
        </OptionLink>
      ) : (
        <OptionLink to="/signin">Sign In</OptionLink>
      )}
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;
