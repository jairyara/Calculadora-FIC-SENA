import React from 'react';

const ActionButton = (
    { title }: { title: string }
) : JSX.Element => {
    return (
        <button
            type={"submit"}
            className={
                "w-52 h-10 bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-full"
            }
        >
            <span>{title}</span>
        </button>
    );
}

ActionButton.defaultProps = {
    title: "Calcular",
}

export default ActionButton;