# CLI Todo List Application

Welcome to the CLI Todo List Application! This command-line tool allows you to manage your tasks efficiently. You can add, list, mark as done, and delete tasks from your todo list.

## Installation

To get started with the CLI Todo List Application, follow these steps:

1. Clone the repository to your local machine using Git:

   ```bash
   git clone https://github.com/SatyamSakpal/TODO-List-CLI.git

2. Create a PostgreSQL database named 'todo':
  ```sql
  CREATE DATABASE todo;
  ```
3. Create a 'todo_list' table with the required schema:
  ```sql
    CREATE TABLE todo_list (
      id bigserial PRIMARY KEY NOT NULL,
      task varchar(100) NOT NULL,
      status varchar(100) NOT NULL,
      CHECK (status IN ('pending', 'done'))
    );
```
4. Now you're all set to use the CLI Todo List Application! Make sure to configure your PostgreSQL connection settings in the application file modules/query.js

## Usage
Here's how you can use the CLI Todo List Application:

- Add a task:   node app --new "Task description"
- List tasks:   node app --list "all|pending|done"
- Mark a task as done:   node app --done <task_id>
- Delete a task:   node app --delete <task_id>
- Reset the list:   node app --reset

Enjoy staying organized with your new todo list!

## Contributing
If you'd like to contribute to this project or report issues, please feel free to submit a pull request or create an issue in the [GitHub repository](https://github.com/SatyamSakpal/TODO-List-CLI/issues).
