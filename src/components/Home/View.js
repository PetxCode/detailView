import React from "react";
import data from "./newData.json";
import styled from "styled-components";
import { Link } from "react-router-dom";
//cardImg
const View = () => {
	return (
		<div>
			<Container>
				<Wrapper>
					{data?.map((props) => (
						<Card
							key={props.id}
							to={`/detail/${props.id1}`}
							onClick={() => {
								console.log(`this is the ID for this card: ${props.id}`);
							}}
						>
							<Image src={props.cardImg} />
						</Card>
					))}
				</Wrapper>
			</Container>
		</div>
	);
};

export default View;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Card = styled(Link)`
	text-decoration: none;

	overflow: hidden;
	width: 350px;
	height: 300px;
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	margin: 10px;
	transform: scale(1);
	transition: all 350ms;

	:hover {
		transform: scale(0.98);
		cursor: pointer;
	}
`;
const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
const Container = styled.div`
	width: 100%;
	margin-top: 60px;
`;

// "/imageName.ext"
// "../image/assets/imageName.ext"
