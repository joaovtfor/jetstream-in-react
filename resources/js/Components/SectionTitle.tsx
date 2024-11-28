import React, { ReactNode } from 'react';

interface MyComponentProps {
    title: ReactNode;
    description?: ReactNode;
    aside?: ReactNode;
    className?: string;
}

const MyComponent: React.FC<MyComponentProps> = ({
    title,
    description,
    aside,
    className
}) => {
    return (
        <div className="flex justify-between md:col-span-1 text-center">
            <div className="px-4 sm:px-0">
                <h3 className="text-xl font-black text-theme-blue-2 dark:text-theme-blue-2">
                    {title}
                </h3>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {description}
                </p>
            </div>

            <div className="px-4 sm:px-0">{aside}</div>
        </div>
    );
};

export default MyComponent;
