import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyComponent extends Document {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />

                    <link rel="shortcut icon" href="/favicon.svg" />

                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
