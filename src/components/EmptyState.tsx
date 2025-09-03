import React from 'react';
import { CheckCircle, Plus } from 'lucide-react';
import { useTodos } from '../context/TodoContext';
import '../styles/EmptyState.scss';

const EmptyState: React.FC = () => {
  const { filter, todos } = useTodos();
  
  const getEmptyMessage = () => {
    if (todos.length === 0) {
      return {
        title: "No tasks yet",
        subtitle: "Add your first task to get started with productivity!",
        icon: <Plus size={48} />
      };
    }
    
    switch (filter) {
      case 'active':
        return {
          title: "All caught up!",
          subtitle: "No active tasks remaining. Time to add some new goals!",
          icon: <CheckCircle size={48} />
        };
      case 'completed':
        return {
          title: "No completed tasks",
          subtitle: "Complete some tasks to see them here",
          icon: <CheckCircle size={48} />
        };
      default:
        return {
          title: "No tasks found",
          subtitle: "Try adjusting your filters or add a new task",
          icon: <Plus size={48} />
        };
    }
  };

  const { title, subtitle, icon } = getEmptyMessage();

  return (
    <div className="empty-state">
      <div className="empty-content">
        <div className="empty-icon">
          {icon}
        </div>
        <h3 className="empty-title">{title}</h3>
        <p className="empty-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default EmptyState;