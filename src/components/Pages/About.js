import React from "react";
import styled from "styled-components";
import Content from "./Content";

const About = () => {
	return (
		<div>
			<Container>
				<Wrapper>
					<Image src="/peter.jpg" />
					<Content
						title="A Brief Note"
						text="	Because all our training are real life project base and industry
                    standard development practice, by the end of your training you would
                    have gain 100% confidence on yourself."
					/>
					<Content
						title="A Brief Note"
						text="	Because all our training are real life project base and industry
                    standard development practice, by the end of your training you would
                    have gain 100% confidence on yourself."
					/>
				</Wrapper>
			</Container>
		</div>
	);
};

export default About;

const Image = styled.img`
	margin: 40px 0;
	width: 700px;
	height: 400px;
	object-fit: cover;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	min-height: calc(100vh - 80px);
	background-color: lightgray;
`;
