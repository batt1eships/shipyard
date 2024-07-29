import {Text} from 'ink';
import React from 'react';

// Base class for tasks
class Task {
	constructor(name) {
		this.name = name;
	}

	render() {
		return <Text>Task not implemented</Text>;
	}
}

// Generate Index Task
class GenerateIndexTask extends Task {
	static description = 'Generate an index.html file';
	static type = 'string';

	render() {
		return (
			<Text>
				See ya, <Text color="green">{this.name}</Text>
			</Text>
		);
	}
}

// Define task options
const options = {
	javascript: {
		'generate-index': GenerateIndexTask,
	},
};
function Router({name = 'Stranger', task, type}) {
	const typeOptions = options[type];
	if (!typeOptions) {
		return <Text color="red">Error: Unknown type "{type}"</Text>;
	}

	const TaskClass = typeOptions[task];
	if (!TaskClass) {
		return (
			<Text color="red">
				Error: Unknown task "{task}" for type "{type}"
			</Text>
		);
	}

	const taskInstance = new TaskClass(name);
	return <>{taskInstance.render()}</>;
}

export default function App(props) {
	return (
		<Router {...props} />
		// Add other routes here...
	);
}
