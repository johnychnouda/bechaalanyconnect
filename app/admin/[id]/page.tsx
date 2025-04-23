import React from 'react';

// Nextjs ISR caching strategy
export const revalidate = false;

export default function page({params}: {params: {id: string}}) {
    return (
        <div>
            {params.id}
        </div>
    );
};

// Automatically add any further dynamic segment in generateStaticParams
export const dynamicParams = true;

// Return a list of `params` to populate the [params] dynamic segment
export async function generateStaticParams() {
    return [];
}

// Nextjs dynamic metadata
export function generateMetadata() {
    return {
        title: `Page - Title here`,
        description: `Page - Description here`,
        icons: {
            icon: `path to asset file`,
        },
    };
}
