var app = new Vue({
	el: '#app',
	data: {
		vueTest: 'This is a Vue test!',
		titleMessage: 'that was some hover! => ' + new Date().toLocaleString(),
		isTitleTestVisible: false
	},
	methods:{
		toggleTitleVisibility: function() {
			this.isTitleTestVisible = !this.isTitleTestVisible;
		}
	}
});
