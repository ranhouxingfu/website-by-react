import axios from 'axios';
import env from '../config/dev';
//import Qs from 'qs';
let util = {

};
//util.title = function(title) {
//	title = title ? title + ' - Home' : 'iView project';
//	window.document.title = title;
//};

const ajaxUrl = env === 'development' ?
	'../data' :
	env === 'production' ?
	'../data' :
	'../data';

util.ajax = axios.create({
	baseURL: ajaxUrl,
	timeout: 30000
});

export default util;