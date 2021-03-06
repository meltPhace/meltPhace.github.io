var app = new Vue({
	el: '#app',
	data: {
		vueTest: 'This is a Vue test!',
		titleMessage: 'that was some hover! => ' + new Date().toLocaleString(),
		isTitleTestVisible: false,
		isPlaying: false,
	},
	methods:{
		toggleTitleVisibility: function() {
			this.isTitleTestVisible = !this.isTitleTestVisible;
		},

		toggleAudioSource: function() {
			if(this.isPlaying){
				this.$refs.audiosource.pause();
				this.isPlaying = false;
			} else {
				this.$refs.audiosource.play();
				this.isPlaying = true;
			}
		},

		setPlayBool: function() {
			debugger;
			this.isPlaying = false;
		}
	}
});
