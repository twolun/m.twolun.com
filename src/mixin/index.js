import { mapActions } from 'vuex';
export default {
	updated(){
		console.log('mouted mixin ....');
		setTimeout(() => {

			this.$store.dispatch('hideGlobLoading');
		}, 1000)
	},
	methods: {
		...mapActions(['hideGlobLoading'])
	}
}