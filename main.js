var Vue= require('vue');
var app = require('./hello.vue');
var vm = new Vue({
	  el:'#body',
	  data:{

	  },
	  components:{
	  	 app:app,
	  }

})