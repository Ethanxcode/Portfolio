import * as React from 'react';
import * as Utilities from '@/utils/utilities';

interface ActionButtonProps {
    onClick?: () => void;
    hotkey?: any;
    children?: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({
    onClick,
    hotkey,
    children,
}) => {
    return (
        <div
            className="m-0 box-border inline-flex cursor-pointer items-center justify-between border-0 p-0 font-mono text-base outline-none"
            onClick={onClick}
            tabIndex={0}
            role="button"
            style={{
                fontFamily: 'var(--font-family-mono)',
                fontSize: '16px',
            }}
        >
            {Utilities.isEmpty(hotkey) ? null : (
                <span
                    className="flex-shrink-0 cursor-pointer select-none px-1 font-normal transition duration-200 ease-in-out"
                    style={{
                        background: 'var(--theme-button-foreground)',
                        color: 'var(--theme-text)',
                        transitionProperty: 'background',
                    }}
                >
                    {hotkey}
                </span>
            )}
            <span
                className="w-full cursor-pointer select-none px-1 font-normal uppercase transition duration-200 ease-in-out"
                style={{
                    boxShadow: 'inset 0 0 0 2px var(--theme-button-foreground)',
                    background: 'var(--theme-button-background)',
                    minWidth: '10%',
                    transitionProperty: 'background',
                }}
            >
                {children}
            </span>
        </div>
    );
};

export default ActionButton;
