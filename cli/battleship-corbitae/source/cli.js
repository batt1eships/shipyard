#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
	`
		Usage
		  $ battleship-corbitae

		Options
			--name  Your name

		Examples
		yarn battleship-corbitae --type=javascript --task=generate-index
		  $ battleship-corbitae --name=Jane
		  Hello, Jane
	`,
	{
		importMeta: import.meta,
	},
);

render(
	<App name={cli.flags.name} type={cli.flags.type} task={cli.flags.task} />,
);
