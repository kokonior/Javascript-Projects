new Vue({
  el:'#app',
  data:{
      image:''
  },

  methods:{
    onFileChange(e){
      var files=e.target.files || e.dataTransfer.files;
      if(!files.length)
          return;
      this.createImage(files[0]);
