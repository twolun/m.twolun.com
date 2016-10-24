import {
	SHOW_GLOB_LOADING,
	HIDE_GLOB_LOADING
} from './mutation-types.js';

export const showGlobLoading = ({ commit }) => {
	console.log('show action 11111111111111111');
	commit(SHOW_GLOB_LOADING);
}

export const hideGlobLoading = ({ commit }) => {
	console.log('hide action 22222222222222222')
	commit(HIDE_GLOB_LOADING);
}