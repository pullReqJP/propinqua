import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';

const form = () => {
  return (
    <>
      <Head>
        <title>form | 株式会社プルリク</title>
        <meta name="description" content="Pullreq Limited" />
      </Head>
      <h1>form</h1>
      <iframe
        width="640px"
        height="480px"
        src="https://forms.office.com/Pages/ResponsePage.aspx?id=Gpwz-0Bla0SrWer5AJZyGJZxpBkfQWVMuWvxszGpntRUNUZVSVA0NzVLUE4xQTJVU1ZHNjM1V01VMy4u&embed=true"
        // frameborder="0"
        // marginwidth="0"
        // marginheight="0"
        // style="border: none; max-width:100%; max-height:100vh"
        // allowfullscreen
        // webkitallowfullscreen
        // mozallowfullscreen
        // msallowfullscreen
      ></iframe>
    </>
  );
};

export default function contact() {
  return (
    <Layout>
      <div className="container p-4 break-words">{form()}</div>
    </Layout>
  );
}
