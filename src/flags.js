function Flag(name, alias, desc){
	this.name = name;
	this.alias = alias;
	this.desc = desc;
}

module.exports = [
	new Flag("-c", "--commands", "Show the list of all commands.")
]