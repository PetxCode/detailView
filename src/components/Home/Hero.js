import React from "react";
import styled from "styled-components";
const Hero = () => {
	return (
		<div>
			<Container>
				<Text>Welcome</Text>
				<Name>Peter</Name>
			</Container>
		</div>
	);
};

export default Hero;

const Name = styled.div`
	font-weight: bold;
	font-size: 60px;
	text-transform: uppercase;
	color: white;
`;
const Text = styled.div`
	font-weight: bold;
	color: white;
`;
const Container = styled.div`
	width: 100%;
	height: 600px;
	background-color: red;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	background-image: url("/peter.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;
