import React, { useState } from 'react';
import { Check, Edit3, Trash2, X, Save } from 'lucide-react';
import { useTodos } from '../context/TodoContext';
import { Todo } from '../types/Todo';
import '../styles/TodoItem.scss';

interface TodoItemProps {
  todo: Todo;
  index: number;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const { toggleTodo, deleteTodo, updateTodo } = useTodos();

  const handleEdit = () => {
    if (isEditing) {
      if (editText.trim()) {
        updateTodo(todo.id, editText.trim());
      } else {
        setEditText(todo.text);
      }
    }
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div 
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <button 
        className="check-button"
        onClick={() => toggleTodo(todo.id)}
        disabled={isEditing}
      >
        <Check size={16} className={`check-icon ${todo.completed ? 'visible' : ''}`} />
      </button>
      
      <div className="todo-content">
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyPress}
            className="edit-input"
            autoFocus
          />
        ) : (
          <span className="todo-text">{todo.text}</span>
        )}
        <div className="todo-meta">
          <span className="todo-date">
            {new Date(todo.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
      
      <div className="todo-actions">
        {isEditing ? (
          <>
            <button 
              className="action-btn save-btn"
              onClick={handleEdit}
              disabled={!editText.trim()}
            >
              <Save size={16} />
            </button>
            <button 
              className="action-btn cancel-btn"
              onClick={handleCancel}
            >
              <X size={16} />
            </button>
          </>
        ) : (
          <>
            <button 
              className="action-btn edit-btn"
              onClick={() => setIsEditing(true)}
              disabled={todo.completed}
            >
              <Edit3 size={16} />
            </button>
            <button 
              className="action-btn delete-btn"
              onClick={() => deleteTodo(todo.id)}
            >
              <Trash2 size={16} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;