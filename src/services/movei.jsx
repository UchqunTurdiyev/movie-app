import { bace_url, api_key } from '../api/index';

export const API_REQUEST = {
	popular: `${bace_url}/movie/popular?api_key=${api_key}`,
	topRated: `${bace_url}/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
	trending: `${bace_url}/trending/all/week?api_key=${api_key}`,
	upcoming: `${bace_url}/movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
	horror: `${bace_url}/search/movie?api_key=${api_key}&language=en-US&query=horror&page=1&include_add`,
	tv_top_rated: `${bace_url}/tv/top_rated?api_key=${api_key}&language=en-US`,
	documentary: `${bace_url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=99`,
	comedy: `${bace_url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=35`,
	family: `${bace_url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=10751`,
	history: `${bace_url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=36`,
};

// export const API_REQUEST = {
// 	trending: `${base_url}/trending/all/week?api_key=${api_key}&language=en-US`,
// 	top_rated: `${base_url}/movie/top_rated?api_key=${api_key}&language=en-US`,
// 	tv_top_rated: `${base_url}/tv/top_rated?api_key=${api_key}&language=en-US`,
// 	popular: `${base_url}/movie/popular?api_key=${api_key}&language=en-US`,
// 	documentary: `${base_url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=99`,
// 	comedy: `${base_url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=35`,
// 	family: `${base_url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=10751`,
// 	history: `${base_url}/discover/movie?api_key=${api_key}&language=en-US&with_genres=36`,
// 	products_list: `${publik_domain}/api/products`,
// 	subscription: `${publik_domain}/api/subscription`,
// };
