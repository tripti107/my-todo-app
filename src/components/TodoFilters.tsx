import React from 'react';
import { useTodos } from '../context/TodoContext';
import '../styles/TodoFilters.scss';

export type FilterType = 'all' | 'active' | 'completed';

const TodoFilters: React.FC = () => {
  const { filter, setFilter, clearCompleted, todos } = useTodos();
  
  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="todo-filters">
      <div className="filter-buttons">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button 
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>
      
      {completedCount > 0 && (
        <button className="clear-btn" onClick={clearCompleted}>
          Clear Completed ({completedCount})
        </button>
      )}
    </div>
  );
};

export default TodoFilters;