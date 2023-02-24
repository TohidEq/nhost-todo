import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import nhost from "./utils/nhost";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

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

function App() {
  const { data, loading } = useQuery(GET_TODOS);
  console.log(data);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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
  );
}

export default App;
