// noinspection HtmlRequiredTitleElement

import {Head, Html, Main, NextScript} from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="/favicon/site.webmanifest"/>
                <meta content="RCCG Living Grace Durham" property="og:title"/>
                <meta content="Transforming lives, impacting generations." property="og:description"/>
                <meta content="https://rccglivinggrace.co.uk/" property="og:url"/>
                <meta content="/images/logo.png" property="og:image"/>
                <meta content="#1E88E5" data-react-helmet="true" name="theme-color"/>
            </Head>
            <body className="bg-[#EDF2F7] text-black transition-all">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
