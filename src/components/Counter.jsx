import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const myStyle = {
	color: 'whitesmoke',
	fontSize: '2rem',
	fontWeight: '700',
};
const Counter = ({ target, duration }) => {
	const [ref, inView] = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});

	return (
		<Container ref={ref}>
			<CountUp start={0} end={inView ? target : 0} duration={duration} useEasing={true}>
				{({ countUpRef }) => <span style={myStyle} ref={countUpRef} />}
			</CountUp>

			<style jsx>{`
				.delay {
					transition-delay: ${duration}s;
				}
				.transform-hide {
					opacity: 0;
					transform: translate3d(0, 1rem, 0);
				}
				.transform-show {
					opacity: 1;
					transform: translate3d(0, 0, 0);
				}
			`}</style>
		</Container>
	);
};

export default Counter;
