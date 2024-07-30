import childProcess from 'node:child_process';
import React from 'react';
import stripAnsi from 'strip-ansi';
import {render, Text, Box} from 'ink';

export default function App() {
	const [output, setOutput] = React.useState('');
	const [error, setError] = React.useState('');

	React.useEffect(() => {
		const subProcess = childProcess.spawn('npx', ['lerna', 'init']);

		// Handle stdout
		subProcess.stdout.on('data', newOutput => {
			const lines = stripAnsi(newOutput.toString('utf8')).split('\n');
			setOutput(prevOutput => `${prevOutput}\n${lines.slice(-5).join('\n')}`);
		});

		// Handle stderr
		subProcess.stderr.on('data', errOutput => {
			setError(prevError => `${prevError}\n${stripAnsi(errOutput.toString('utf8'))}`);
		});

		// Handle errors
		subProcess.on('error', err => {
			setError(prevError => `${prevError}\nError: ${err.message}`);
		});

		// Cleanup on unmount
		return () => {
			subProcess.kill();
		};
	}, []);

	return (
		<Box flexDirection="column" padding={1}>
			<Text>Command output:</Text>
			<Box marginTop={1}>
				<Text>{output}</Text>
			</Box>
			{error && (
				<Box marginTop={1}>
					<Text color="red">Error:</Text>
					<Text color="red">{error}</Text>
				</Box>
			)}
		</Box>
	);
}
   