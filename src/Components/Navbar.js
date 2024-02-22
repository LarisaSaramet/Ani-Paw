// components/Navbar/index.js

import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
	LogoContainer
} from "./NavbarElements";




import Logo from "./Logo";

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
				<LogoContainer>
  				<Logo />
				</LogoContainer>
				<NavLink to="/home" activeStyle>
						Home
					</NavLink>
					<NavLink to="/team" activeStyle>
						Team
					</NavLink>
					<NavLink to="/services" activeStyle>
						Services
					</NavLink>
					<NavLink to="/review" activeStyle>
						Review
					</NavLink>
					<NavLink to="/about" >
						About Us
					</NavLink>
					<NavLink to="/adoption" activeStyle>
						Adoption
					</NavLink>
					
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
					<NavBtnLink to="/signin">
						Sign in
					</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
