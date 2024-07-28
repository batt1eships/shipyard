import {Text} from 'ink';
import React from 'react';

function Router({name = 'Stranger'}) {
	switch (name) {
		case 'Stranger':
			return (
				<Text>
					Bye, <Text color="green">{name}</Text>
				</Text>
			);
		default:
			return (
				<Text>
					Hello, <Text color="green">{name}</Text>
				</Text>
			);
	}
}

export default function App(props) {
	return (
		<Router {...props} />
		// Add other routes here...
	);
}
