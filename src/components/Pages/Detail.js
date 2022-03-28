import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Content from "./Content";
import data from "../Home/newData.json";
import { useParams } from "react-router-dom";

const Detail = () => {
	const { id } = useParams();
	const [getData, setGetData] = useState({});

	const fetchData = () => {
		setGetData(data[id - 1]);
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div>
			<Container>
				<Wrapper>
					<Image src={getData.cardImg} />

					<Content title={getData.title} text={getData.description} />
				</Wrapper>
			</Container>
		</div>
	);
};

export default Detail;

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
