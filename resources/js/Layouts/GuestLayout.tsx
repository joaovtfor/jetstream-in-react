import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="w-full min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-900 dark:bg-gray-900">
            {children}
        </div>
    );
}
