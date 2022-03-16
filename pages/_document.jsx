import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html>
        <Head>
          <title> MusiCourse </title>
          <link rel="shortcut icon" href="icon.png" />
          <meta
            name="description"
            content="Website desarrollado para la materia de Informática Empresarial"
          />
        </Head>
        <body>
          
            <Main />
            <NextScript />
          
        </body>
      </Html>
    );
  }
}

export default MyDocument