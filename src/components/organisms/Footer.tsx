import React from 'react';
import useYear from "@hooks/useYear";

const Footer = () : JSX.Element => {

    const { year } = useYear();

    return (
        <footer
            className={
                "h-10 flex items-center justify-center bg-primary"
            }
        >
            <h3
                className={
                "text-center text-white text-lg"
                }
            >
                Hecho con ❤️ por <a target='_blank' href="https://jairyara.com/">Jair Yara</a> - { year }
            </h3>
        </footer>
    );
}

export default Footer;