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
            className="inline-flex items-center justify-between cursor-pointer outline-none border-0 m-0 p-0 box-border font-mono text-base"
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
                    className="flex-shrink-0 cursor-pointer transition ease-in-out duration-200 font-normal px-1 select-none"
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
                className="w-full font-normal cursor-pointer px-1 uppercase transition ease-in-out duration-200 select-none"
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
