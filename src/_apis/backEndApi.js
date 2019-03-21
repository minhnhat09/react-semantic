import axios from 'axios';
import { authHeader } from "../_helpers";

export default axios.create({
	headers: authHeader(),
	baseURL: 'http://localhost:3090/api',
});
