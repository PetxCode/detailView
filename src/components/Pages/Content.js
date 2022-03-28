import React from "react";
import styled from "styled-components";
const Content = ({ title, text }) => {
	return (
		<Container>
			<Holder>
				<Line />
				<Title>{title}</Title>
				<Line />
			</Holder>
			<Text>{text}</Text>
		</Container>
	);
};

export default Content;

const Title = styled.div`
	font-weight: bold;
	font-size: 30px;
	margin: 0 20px;
`;

const Line = styled.div`
	background-color: black;
	width: 200px;
	height: 4px;
`;

const Holder = styled.div`
	display: flex;
	align-items: center;
	margin: 20px 0;
`;

const Text = styled.div`
	width: 600px;
	text-align: center;
	font-size: 20px;
	line-height: 1.8;
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
