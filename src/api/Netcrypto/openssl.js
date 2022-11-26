import request from '@/utils/request.js'
import axios from 'axios'
// import Vue from 'vue'
// function getBaseUrl() {
// 	return Vue.prototype.BASE_URL
// }

// ================================  加密/解密 ================================//

/*
	数据哈希
*/
export const dataHash = params => {
	return request({
		url: '/crypto/data_hash/',
		method: 'post',
		urlType: 'Netcrypto',
		data: params
	})
};

/*
	对称加密
*/
export const symmEncry = (params) => {
	return request({
		url: '/crypto/symm_encry/',
		method: 'post',
		urlType: 'Netcrypto',
		data: params
	})
}

/*
	对称解密
*/
export const symmDecry = params => {
	return request({
		url: '/crypto/symm_decry/',
		method: 'post',
		urlType: 'Netcrypto',
		data: params
	})
};

/*
	base64编码
*/
export const base64Encode = params => {
	return request({
		url: '/crypto/base64_encode/',
		method: 'post',
		urlType: 'Netcrypto',
		data: params
	})
};

/*
	base64解码
*/
export const base64Decode = params => {
	return request({
		url: '/crypto/base64_decode/',
		method: 'post',
		urlType: 'Netcrypto',
		data: params
	})
};

/*
	非对称加密
*/
export const asymmEncry = params => {
	return request({
		url: '/crypto/asymm_encry/',
		method: 'post',
		urlType: 'Netcrypto',
		data: params
	})
};

/*
	非对称解密
*/
export const asymmDecry = params => {
	return request({
		url: '/crypto/asymm_decry/',
		method: 'post',
		urlType: 'Netcrypto',
		data: params
	})
};

/*
	URL编码
*/
export const urlEncode = params => {
	return request({
		url: '/crypto/url_encode/',
		method: 'post',
		urlType: 'Netcrypto',
		data: params
	})
};

/*
	URL解码
*/
export const urlDecode = params => {
	return request({
		url: '/crypto/url_decode/',
		method: 'post',
		urlType: 'Netcrypto',
		data: params
	})
};


// // ================================  签名/验签 ================================//

// /*
// 	裸签名
// */
// export const rawSign = params => {
// 	return axios.post(`${getBaseUrl()}/crypto/raw_sign/`, params).then(res => res.data);
// };

// /*
// 	裸验签
// */
// export const rawVerify = params => {
// 	return axios.post(`${getBaseUrl()}/crypto/raw_verify/`, params).then(res => res.data);
// };

// // ================================  转换工具 ================================//

// /*
// 	证书转换
// */
// export const convert = params => {
// 	return axios.post(`${getBaseUrl()}/crypto/convert/`, params).then(res => res.data);
// };

// /*
// 	证书下载
// */
// export const downFile = params => {
// 	return axios.post(`${getBaseUrl()}/crypto/downFile/`, params).then(res => res.data);
// };

// /*
// 	提取私钥
// */
// export const getPriKey = params => {
// 	return axios.post(`${getBaseUrl()}/crypto/prikey_get/`, params).then(res => res.data);
// };