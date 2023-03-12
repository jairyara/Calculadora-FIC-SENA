import React from 'react';

const Header = (): JSX.Element => {
    return (
        <header
            className={
                "h-24 flex items-center justify-center bg-white shadow-md"
            }
        >
            < h1
                className={
                    "text-3xl lg:text-4xl font-bold text-center text-primary"
                }
            >
                Calculadora SENA-FIC
            </h1>
        </header>
    );
}

export default Header;