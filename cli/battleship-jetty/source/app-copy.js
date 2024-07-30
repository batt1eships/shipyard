import childProcess from 'node:child_process';
import React from 'react';
import stripAnsi from 'strip-ansi';
import {render, Text, Box} from 'ink';

export default function App() {
	const [output, setOutput] = React.useState('');

	React.useEffect(() => {
		const subProcess = childProcess.spawn('ls', []);

		// eslint-disable-next-line @typescript-eslint/ban-types
		subProcess.stdout.on('data', newOutput => {
			const lines = stripAnsi(newOutput.toString('utf8')).split('\n');
			setOutput(lines.slice(-5).join('\n'));
		});
	}, [setOutput]);

	return (
		<Box flexDirection="column" padding={1}>
			<Text>Сommand output:</Text>
			<Box marginTop={1}>
				<Text>{output}</Text>
			</Box>
		</Box>
	);
}
