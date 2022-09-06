function Command(name, usage, desc, arguments){
	this.name = name;
	this.usage = usage;
	this.desc = desc;
	this.arguments = arguments;
}

function Argument(name, desc){
	this.name = name;
	this.desc = desc;
}

module.exports = [
	new Command("g", "mvc g <v|c|p> <filename>", "generates a file based on given arguments.", [
		new Argument("v", "generates a view ."),
		new Argument("c", "generates a  component."),
		new Argument("p", "generates a  plugin."),
		new Argument("filename", "name of the file which will be created.")
	]),
];