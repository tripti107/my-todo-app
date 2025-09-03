import React from 'react';
import TodoItem from './TodoItem';
import EmptyState from './EmptyState';
import { useTodos } from '../context/TodoContext';
import '../styles/TodoList.scss';

const TodoList: React.FC = () => {
  const { filteredTodos } = useTodos();

  if (filteredTodos.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="todo-list">
      {filteredTodos.map((todo, index) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          index={index}
        />
      ))}
    </div>
  );
};

export default TodoList;