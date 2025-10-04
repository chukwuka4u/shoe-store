'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import React from 'react';

type Props = {
    children?: React.ReactNode;
};

const ProgressProvider = ({ children }: Props) => {
    return (
        <>
            {children}
            <ProgressBar
                height="10px"
                color="#00bfff" // Customize the color
                options={{ showSpinner: true }} // Customize options like showing a spinner
            />

        </>
    );
};

export default ProgressProvider;