import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@3.1.1/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <title>LessonLab</title>
      </Head>
      <div>
        {children}
      </div>
    </>
  );
};

export default Layout;
