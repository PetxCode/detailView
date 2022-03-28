import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Header = () => {
	return (
		<div>
			<Container>
				<Wrapper>
					<Link to="/">
						<Avatar src="/peter.jpg" />
					</Link>
					<Navigation>
						<Nav to="/about">About</Nav>
						<Nav to="/about">Register</Nav>
						<Nav to="/about">Sign Out</Nav>
					</Navigation>
				</Wrapper>
			</Container>
		</div>
	);
};

export default Header;

const Nav = styled(Link)`
	color: black;
	text-decoration: none;
	padding: 15px 30px;
	background-color: white;
	margin: 0 10px;
	border-radius: 2px;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 13px;
	transform: scale(1);
	transition: all 350ms;

	:hover {
		cursor: pointer;
		transform: scale(1.03);
	}
`;

const Navigation = styled.div`
	display: flex;
	margin-right: 20px;
`;

const Avatar = styled.img`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background-color: white;
	object-fit: cover;
	margin-left: 20px;
	border: 4px solid white;
`;
const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	align-items: center;
	height: 80px;
`;

const Container = styled.div`
	width: 100%;
	height: 80px;
	background-color: #004080;
`;
