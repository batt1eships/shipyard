import React, { useState } from 'react';
import { Text } from 'ink';
import { TaskList, Task } from 'ink-task-list';
import spinners from 'cli-spinners';

// Router component
function Router({ name = 'Stranger', mode, options }) {
  switch (name) {
    // case 'Stranger':
    //   return (
    //     <CheckList />
    //   );
    default:
      return (
       <CheckList/>
      )
  }
}

// CheckList component
export const CheckList = ({ commands = [] }) => {
  return (
    <TaskList>
      {commands.map((command, index) => (
        <Task
          key={index}
          label={command.label}
          state={command.state}
          spinner={command.state === 'loading' ? spinners.dots : undefined}
          isExpanded={command.isExpanded}
        >
          {command.children &&
            command.children.map((child, childIndex) => (
              <Task
                key={childIndex}
                label={child.label}
                state={child.state}
                spinner={child.state === 'loading' ? spinners.dots : undefined}
              />
            ))}
        </Task>
      ))}
      {/* Add static tasks here if needed */}
      <Task label="Pending" state="pending" />
      <Task label="Loading" state="loading" spinner={spinners.dots} />
      <Task label="Success" state="success" />
      <Task label="Warning" state="warning" />
      <Task label="Error" state="error" />
      <Task label="Item with children" isExpanded>
        <Task label="Loading" state="loading" spinner={spinners.dots} />
      </Task>
    </TaskList>
  );
}

// App component
export default function App(props) {
  return (
    <Router {...props} />
    // Add other routes here...
  );
}
