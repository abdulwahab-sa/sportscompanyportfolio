import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	color: #303030;
	font-family: 'Montserrat', sans-serif;
`;

const Title = styled.h2`
	width: 100vw;
	height: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: teal;
	color: whitesmoke;
	text-align: center;
	letter-spacing: 4px;
	margin: 1rem auto;
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
`;
const Detail = styled.p`
	padding: 1.6rem;
	font-weight: 500;
`;

function About() {
	return (
		<Container>
			<Title> ABOUT US</Title>
			<Detail>
				TRADE CITY CORP is an apparel manufacturing and exporting company based in Sialkot, Pakistan since 2006. We are full-service cut and
				sew manufacturer of highly crafted Casual Wear, Ative Wear & Leather Wear for men and women. We Offer nominal price with Flawless
				Quality.
			</Detail>

			<Detail>
				Our services include cut and sew, fabric and materials sourcing, design, pattern making and grading, screen-printing, sublimation,
				embroidery, labels, tags, packaging, and also drop-shipping. With having manufacturing experience from last decade, we can offer Top
				Quality Products at very competitive prices. Our in-house Production facility allow us to meet your specific quality, design, color
				& Size requirements. We are in well position to manufacture the goods with specific Company name or Brand logo. Give us a try.
				Request your sample now. Make your own judgement.
			</Detail>

			<Detail>BASIC PRINCIPLES OF TRADE CITY CORP are FAIR, AMBITIOUS, SUPERIOR QUALITY & TIMELY DELIVERY.</Detail>
		</Container>
	);
}

export default About;
