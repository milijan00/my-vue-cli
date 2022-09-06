const commands = require("./commands");
const flags = require("./flags");
class CLIManager{
	argv = null;
	creator = null;

	constructor(argv, creator){
		this.argv = argv;
		this.creator = creator;
	}

	manageCommands(){
		if(this.argv.c == true || this.argv.commands == true || this.argv._[0] == null){
			this.showCommands();
			this.showFlags();
			return;
		}
		if(this.argv._[0] == "g"){
			if(this.argv._[1] == null || this.argv._[2] == null){
				console.log("In order to generate a file you need to pass specific arguments. Type mvc -c for more info.")
				return;
			}
			this.creator.setFileType(this.argv._[1]);
			this.creator.setFileName(this.argv._[2]);
			this.creator.createFile();
		}
	}

	showFlags(){
		console.log("Flags:");
		for(let f of flags){
			console.log(f.name, f.alias, " - ", f.desc);
		}
	}
	showCommands(){
		for(let c of commands){
			console.log("Command Name:", c.name);
			console.log("Usage:", c.usage);
			console.log("Description:", c.desc);
			if(c.arguments.length){
				console.log("\tArguments:");
				for(let a of c.arguments){
					console.log("\tName:", a.name, " -", a.desc);
				}
			}
		}
	}



}

module.exports = CLIManager;