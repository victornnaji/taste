import React from 'react'
import styled from 'styled-components'
import { media, mixin, theme } from 'styles';
// import theme from 'styles/theme';
import logo from 'assets/logo.svg';
import BMClogo from 'assets/BMC_Logo.svg';
import logoPhone from 'assets/logo-phone.svg';
import { Link } from 'react-router-dom';

const displayLogo = window.screen.width > 780 ? logo : logoPhone;

const Nav = () => {
    return (
        <StyledNav>
            <div className="navbar-content">
                <div className="left-column">
                    <Link to="/"><img src={displayLogo} alt="logo" className="logo"/></Link>
                    <Link to="/about" className="menu-item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30"><path fill="#FFF" fillRule="evenodd" d="M16.622 10.06c0-.653.533-1.185 1.186-1.185h2.566c3.366 0 6.125 2.76 6.126 6.124 0 3.366-2.736 6.125-6.125 6.125h-2.567a1.188 1.188 0 01-1.186-1.186c0-.653.533-1.186 1.186-1.186h2.567a3.755 3.755 0 003.752-3.753 3.771 3.771 0 00-3.752-3.752h-2.567a1.188 1.188 0 01-1.186-1.186zM5.872 15a3.771 3.771 0 003.753 3.752h2.566c.654 0 1.187.533 1.187 1.187s-.533 1.186-1.186 1.186H9.625C6.26 21.125 3.5 18.39 3.5 15c0-3.39 2.76-6.125 6.125-6.125h2.567c.653 0 1.186.533 1.186 1.187 0 .653-.533 1.186-1.186 1.186H9.625A3.755 3.755 0 005.873 15zm3.923 1.186A1.188 1.188 0 018.609 15c0-.653.532-1.186 1.186-1.186h10.41c.653 0 1.186.533 1.186 1.186 0 .653-.533 1.186-1.186 1.186H9.795z"></path></svg> 
                        <span>About</span>
                    </Link>
                </div>
                <div className="right-column">
                    <img src={BMClogo} alt="buy me a coffee"/>
                </div>
            </div>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    height: 6rem;
    padding-top: 1rem;
    .navbar-content{
        ${mixin.flexBetween};
        ${mixin.container};
        height: 100%;
        font-size: 2rem;

        .left-column{
            ${mixin.flexBetween}
            .logo{
                width: 12rem;
                height: 12rem;
                margin-right: 3.5rem;

                ${media.phablet`width: 4rem; height: 6rem`}
            }

            .menu-item{
                ${mixin.flexBetween}
                text-decoration: none;

                svg{
                    transform: translateY(-3px);
                }
                span{
                    margin-left: 1rem;
                    color: ${theme.colors.mainWhite};
                    text-decoration: none;
                }
            }
        }

        .right-column{
            img{
                width: 3rem;
                height: 4rem;
            }
        }
    }
`;

export default Nav
