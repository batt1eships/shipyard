import React, {useEffect, useState} from 'react';
import {Box, Text} from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';
import fs from 'fs/promises';
import path from 'path';

// Function to read and parse package.json
const readPackageJson = async () => {
	// Define the path to the package.json file
	const packageJsonPath = path.join(process.cwd(), 'package.json');

	try {
		// Read the package.json file
		const data = await fs.readFile(packageJsonPath, 'utf8');
		// Parse the JSON data
		const packageJson = JSON.parse(data);
		return packageJson;
	} catch (error) {
		console.error('Error reading or parsing package.json:', error);
		return null;
	}
};

// Define task-related functions
const generateIndexTask = name => (
	<Text>
		See ya, <Text color="green">{name}</Text>
	</Text>
);

const restoreArchivesTask = name => (
	<Text>
		Restoring archives for <Text color="green">{name}</Text>
	</Text>
);

// Define task options
const workspace_options = {
	template: {
		'restore-archives': restoreArchivesTask,
	},
};

const project_options = {
	javascript: {
		'generate-index': generateIndexTask,
	},
};

// Functional Router component
const Router = ({name = 'Stranger', task, type, pkg}) => {
	// Determine the correct options based on the presence of pkg.workspaces
	const typeOptions = pkg?.workspaces
		? workspace_options[type]
		: project_options[type];

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
const Title = ({pkg}) => {
	if (!pkg) {
		return <Text color="red">Error: Could not load package.json</Text>;
	}

	return (
		<Gradient name="mind">
			<BigText text={pkg.name} />
		</Gradient>
	);
};

// Functional App component
const App = props => {
	const [pkg, setPkg] = useState(null);

	useEffect(() => {
		const fetchPackageJson = async () => {
			const packageJson = await readPackageJson();
			setPkg(packageJson);
		};

		fetchPackageJson();
	}, []);

	return (
		<Box flexDirection="column">
			<Title pkg={pkg} />
			<Router pkg={pkg} {...props} />
		</Box>
	);
};

export default App;
