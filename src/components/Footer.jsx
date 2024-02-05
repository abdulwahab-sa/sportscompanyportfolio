import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import styled from 'styled-components';
import LogoSrc from './../images/logo.png';
import { MediumScreen } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
	display: flex;
	${MediumScreen({ flexDirection: 'column' })};
	background-color: #303030;
	font-family: 'Montserrat', sans-serif;
	width: 100%;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

const Logo = styled.img`
	height: 60px;
	width: 70px;
`;

const Desc = styled.p`
	margin: 20px 0px;
`;

const SocialContainer = styled.div`
	display: flex;
`;

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
`;

const Title = styled.h3`
	margin-bottom: 30px;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;

const usefulLinks = [
	{
		id: 1,
		title: 'Home',
		path: '/',
	},
	{
		id: 2,
		title: 'About Us',
		path: '/about',
	},
	{
		id: 3,
		title: 'Casual Wears',
		path: '/casualwear',
	},
	{
		id: 4,
		title: 'Active Wears',
		path: '/activewear',
	},
	{
		id: 5,
		title: 'Leather Wears',
		path: '/leatherwear',
	},
	{
		id: 6,
		title: 'Custom Order',
		path: '/customorder',
	},
	{
		id: 7,
		title: 'Contact Us',
		path: '/contact',
	},
	{
		id: 8,
		title: 'Terms & Conditions',
		path: '#',
	},
];

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo src={LogoSrc} />
				<Desc>
					TRADE CITY CORP is a Private company specialized in manufacturing and supplying quality Active Wears, Casual Wears & Leather
					products to various recognized companies worldwide.
				</Desc>
				<SocialContainer>
					<SocialIcon color="3B5999">
						<FaFacebook />
					</SocialIcon>
					<SocialIcon color="E4405F">
						<FaInstagram />
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<FaTwitter />
					</SocialIcon>
					<SocialIcon color="E60023">
						<FaLinkedin />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					{usefulLinks.map((item) => (
						<ListItem key={item.id}>
							<Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
								{item.title}
							</Link>
						</ListItem>
					))}
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<FaMapMarkerAlt style={{ marginRight: '10px' }} /> Bismillah Chowk Pasrur Road, Sialkot - 51310
				</ContactItem>
				<ContactItem>
					<FaPhone style={{ marginRight: '10px' }} /> +92 300 5025290
				</ContactItem>
				<ContactItem>
					<FaEnvelope style={{ marginRight: '10px' }} /> info@tradecitycorp.com
				</ContactItem>
			</Right>
		</Container>
	);
};

export default Footer;
