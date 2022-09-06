const fs = require("fs");
class VueCreator{
	fileType = "";
	fileName = "";
	component =  `
<template>

</template>	
<script>
	export default {
		data(){
			return {};
		}
	}
</script>
<style>
</style>
		`;
	plugin = `
export default {
	install(app, options){

	}
}
	`;
	
	constructor(){
			
	}
	setFileType(fileType){
		this.fileType = fileType;
	}
	setFileName(name){
		this.fileName = name;
	}

	createFile(){
		if(this.fileType  == "v" || this.fileType  == "V"){
			this.createView();
		}else if(this.fileType  == "c" || this.fileType  == "C"){
			this.createComponent();
		}else if(this.fileType  == 'p' || this.fileType  == "P"){
			this.createPlugin();
		}else {
			console.log("Error: wrong arguments given.");
		}
	}

	createView(){
		fs.writeFile(process.cwd() + "/src/views/" + this.fileName + "View.vue", this.component, err=>{
			if(err){
				console.error(err);
			}else {
				console.log("View generated successfully!");
			}
		})
	}

	createComponent(){
		fs.writeFile(process.cwd() + "/src/components/" + this.fileName + "Component.vue", this.component, err=>{
			if(err){
				console.error(err);
			}else {
				console.log("Component generated successfully!");
			}
		})
	}

	createPlugin(){
		fs.writeFile(process.cwd() + "/src/plugins/" + this.fileName + "Plugin.js", this.plugin, err=>{
			if(err){
				console.error(err);
			}else {
				console.log("Plugin generated successfully!");
			}
		})
	}
}

module.exports = VueCreator;