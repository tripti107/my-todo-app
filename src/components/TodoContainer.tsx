import React from 'react';
import TodoForm from './TodoForm';
import TodoFilters from './TodoFilters';
import TodoList from './TodoList';
import TodoStats from './TodoStats';
import '../styles/TodoContainer.scss';

const TodoContainer: React.FC = () => {
  return (
    <div className="todo-container">
      <div className="container">
        <div className="todo-wrapper">
          <div className="todo-header">
            <h1 className="todo-title">
              What needs to be done <span className="gradient-text">today?</span>
            </h1>
            <TodoStats />
          </div>
          
          <div className="todo-content">
            <TodoForm />
            <TodoFilters />
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;