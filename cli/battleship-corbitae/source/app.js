import {Box, Text} from 'ink';
import React from 'react';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';
// import packageJson from '../package.json' with {type: 'json'};

// Define task-related functions
const generateIndexTask = name => (
	<Text>
		See ya, <Text color="green">{name}</Text>
	</Text>
);

// Define task options
const options = {
	javascript: {
		'generate-index': generateIndexTask,
	},
};

// Functional Router component
const Router = ({name = 'Stranger', task, type}) => {
	const typeOptions = options[type];
	if (!typeOptions) {
		return <Text color="red">Error: Unknown type "{type}"</Text>;
	}

	const taskFunction = typeOptions[task];
	if (!taskFunction) {
		return (
			<Text color="red">
				Error: Unknown task "{task}" for type "{type}"
			</Text>
		);
	}

	return taskFunction(name);
};

// Functional Title component
const Title = () => (
	<Gradient name="mind">
		<BigText text={'hi'} />
	</Gradient>
);

// Functional App component
const App = props => (
	<Box flexDirection="column">
		<Title />
		<Router {...props} />
	</Box>
);

export default App;
