import React from 'react';
import { Target, CheckCircle, Clock } from 'lucide-react';
import { useTodos } from '../context/TodoContext';
import '../styles/TodoStats.scss';

const TodoStats: React.FC = () => {
  const { todos } = useTodos();
  
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;
  const completionPercentage = totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0;

  return (
    <div className="todo-stats">
      <div className="stat-card">
        <div className="stat-icon total">
          <Target size={20} />
        </div>
        <div className="stat-info">
          <span className="stat-number">{totalTodos}</span>
          <span className="stat-label">Total Tasks</span>
        </div>
      </div>
      
      <div className="stat-card">
        <div className="stat-icon active">
          <Clock size={20} />
        </div>
        <div className="stat-info">
          <span className="stat-number">{activeTodos}</span>
          <span className="stat-label">Active</span>
        </div>
      </div>
      
      <div className="stat-card">
        <div className="stat-icon completed">
          <CheckCircle size={20} />
        </div>
        <div className="stat-info">
          <span className="stat-number">{completedTodos}</span>
          <span className="stat-label">Completed</span>
        </div>
      </div>
      
      <div className="progress-card">
        <div className="progress-info">
          <span className="progress-label">Progress</span>
          <span className="progress-percentage">{completionPercentage}%</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TodoStats;