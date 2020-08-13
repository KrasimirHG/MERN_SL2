import { GET_ERRORS, CLEAR_ERRORS } from "./types";

//return errors
const returnErrors = (msg, status, id = null) => {
	return {
		type: GET_ERRORS,
		payload: {
			msg,
			status,
			id,
		},
	};
};

//clear errors

const clearErrors = () => {
	return {
		type: CLEAR_ERRORS,
	};
};
