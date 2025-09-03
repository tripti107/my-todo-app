import React from 'react';
import { CheckSquare } from 'lucide-react';
import '../styles/Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <CheckSquare size={28} className="logo-icon" />
            <span className="logo-text">TaskFlow</span>
          </div>
          <p className="tagline">Stay organized, stay productive</p>
        </div>
      </div>
    </header>
  );
};

export default Header;