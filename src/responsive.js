import { css } from 'styled-components';

const mobile = (props) => {
	return css`
		@media only screen and (max-width: 400px) {
			${props}
		}
	`;
};

const MediumScreen = (props) => {
	return css`
		@media only screen and (max-width: 750px) {
			${props}
		}
	`;
};

const BigScreen = (props) => {
	return css`
		@media only screen and (min-width: 750px) {
			${props}
		}
	`;
};

export { mobile, MediumScreen, BigScreen };
