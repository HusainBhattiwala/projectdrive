import React from "react";

const MetaTags = ({ metadata }) => {
    return (
        metadata && (
            <head>
                <title>{metadata.title}</title>
                <meta name="title" content={metadata.title} />
                <meta name="description" content={metadata.description} />
                <meta name="robots" content={metadata.robots} />
                <meta name="revisit-after" content={metadata.revisitAfter} />
                <link rel="canonical" href={metadata.canonical} />
                <meta property="og:locale" content={metadata.ogLocale} />
                <meta property="og:type" content={metadata.ogType} />
                <meta property="og:title" content={metadata.ogTitle} />
                <meta property="og:description" content={metadata.ogDescription} />
                <meta property="og:url" content={metadata.ogUrl} />
                <meta property="og:site_name" content={metadata.ogSiteName} />
                <meta name="p:domain_verify" content={metadata.domainVerify} />
                <meta name="twitter:card" content={metadata.twitterCard} />
                <meta name="twitter:description" content={metadata.twitterDescription} />
                <meta name="twitter:title" content={metadata.twitterTitle} />
                <meta name="twitter:site" content={metadata.twitterSite} />
                <meta name="twitter:creator" content={metadata.twitterCreator} />

                {/* Conditionally render the schema if it exists */}
                {metadata.schema && (
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: metadata.schema }} />
                )}
            </head>
        )
    );
};

export default MetaTags;
