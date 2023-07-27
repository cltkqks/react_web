import React from "react";

import TodoList from "./components/todo_list/TodoList";
import NewTodo from "./components/new_todo/NewTodo";
import { Provider } from "react-redux";
import store from "./components/store/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        {/* A component that adds todos */}
        <NewTodo />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
