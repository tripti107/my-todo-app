import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTodos } from '../context/TodoContext';
import '../styles/TodoForm.scss';

const TodoForm: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button type="submit" className="add-button" disabled={!inputValue.trim()}>
          <Plus size={20} />
        </button>
      </div>
    </form>
  );
};

export default TodoForm;