import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import nhost from "./utils/nhost";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/client";

const GET_TODOS = gql`
  query {
    todos {
      id
      created_at
      name
      is_completed
    }
  }
`;

const INSERT_TODO = gql`
  mutation ($todo: todos_insert_input!) {
    insert_todos(objects: [$todo]) {
      affected_rows
    }
  }
`;

function App() {
  const { data, loading } = useQuery(GET_TODOS);
  const [insertTodo] = useMutation(INSERT_TODO);
  const [todoName, setTodoName] = useState("");

  if (loading) {
    return <div>Loading...</div>;
  }

  //--Form Submit Function--//
  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      await insertTodo({
        variables: {
          todo: {
            name: todoName,
          },
        },
      });
    } catch (error) {
      console.error(error);
      return alert("Error creating todo");
    }

    alert("Todo Created");
    setTodoName("");
  };
  //-------------------------//

  return (
    <>
      <div>
        <form action="" onSubmit={(e) => formSubmit(e)}>
          <input
            type="text"
            placeholder="Your todo..."
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
          <button type="submit">Create todo</button>
        </form>
      </div>
      <hr />
      <div>
        <h3>Todos:</h3>
        {!data ? (
          "No todos..."
        ) : (
          <ul>
            {data.todos.map((todo) => (
              <li key={todo.id}>{todo.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
