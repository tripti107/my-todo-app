import React from 'react';
import Header from './components/Header';
import TodoContainer from './components/TodoContainer';
import Footer from './components/Footer';
import { TodoProvider } from './context/TodoContext';
import './styles/App.scss';

function App() {
  return (
    <TodoProvider>
      <div className="app">
        <Header />
        <main className="main-content">
          <TodoContainer />
        </main>
        <Footer />
      </div>
    </TodoProvider>
  );
}

export default App;