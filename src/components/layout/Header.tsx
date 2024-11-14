// src/components/layout/Header.tsx
import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
    return (
        <header className='fixed w-full bg-white shadow-sm z-50'>
            <Navigation />
        </header>
    );
};

export default Header;