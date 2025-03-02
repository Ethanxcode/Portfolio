'use client';
import * as React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    title?: string | any;
    mode?: string | any;
}

const Card: React.FC<CardProps> = ({ children, mode, title, ...rest }) => {
    let titleElement = (
        <header className="flex items-end justify-between">
            <div
                className="w-full min-w-[10%] pb-0 pl-[1ch] pr-[2ch] pt-[calc(8px*1.25)] shadow-[inset_1px_0_0_var(--theme-text),inset_0_1px_0_var(--theme-text)]"
                aria-hidden="true"
            ></div>
            <h2 className="flex-shrink-0 px-1 text-base font-normal">
                {title}
            </h2>
            <div
                className="w-full min-w-[10%] pb-0 pl-[1ch] pr-[2ch] pt-[calc(8px*1.25)] shadow-[inset_-1px_0_0_var(--theme-text),inset_0_1px_0_var(--theme-text)]"
                aria-hidden="true"
            ></div>
        </header>
    );

    if (mode === 'left') {
        titleElement = (
            <header className="flex items-end justify-between">
                <div
                    className="flex-shrink-0 px-[1ch] pb-0 pt-[calc(8px*1.25)] shadow-[inset_1px_0_0_var(--theme-text),inset_0_1px_0_var(--theme-text)]"
                    aria-hidden="true"
                ></div>
                <h2 className="flex-shrink-0 px-1 text-base font-normal">
                    {title}
                </h2>
                <div
                    className="w-full min-w-[10%] pb-0 pl-[1ch] pr-[2ch] pt-[calc(8px*1.25)] shadow-[inset_-1px_0_0_var(--theme-text),inset_0_1px_0_var(--theme-text)]"
                    aria-hidden="true"
                ></div>
            </header>
        );
    }

    if (mode === 'right') {
        titleElement = (
            <header className="flex items-end justify-between">
                <div
                    className="w-full min-w-[10%] pb-0 pl-[1ch] pr-[2ch] pt-[calc(8px*1.25)] shadow-[inset_1px_0_0_var(--theme-text),inset_0_1px_0_var(--theme-text)]"
                    aria-hidden="true"
                ></div>
                <h2 className="flex-shrink-0 px-[1ch] text-base font-normal">
                    {title}
                </h2>
                <div
                    className="flex-shrink-0 px-[1ch] pb-0 pt-[calc(8px*1.25)] shadow-[inset_-1px_0_0_var(--theme-text),inset_0_1px_0_var(--theme-text)]"
                    aria-hidden="true"
                ></div>
            </header>
        );
    }

    return (
        <article
            className="relative block px-[1ch] pb-[calc(8px*1.25)] pt-0"
            {...rest}
        >
            {titleElement}
            <section className="pb-[calc(16px*1.25)]overflow-x-auto scrollbar-none block overflow-y-hidden px-[2ch] pt-[calc(8px*1.25)] shadow-[inset_1px_0_0_0_var(--theme-text),inset_-1px_0_0_0_var(--theme-text),0_1px_0_0_var(--theme-text)]">
                {children}
            </section>
        </article>
    );
};

export default Card;
