import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';

const form = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: 'StaticForms - Contact Form',
    honeypot: '', // if any value received in this field, form submission will be ignored.
    message: '',
    replyTo: '@', // this will set replyTo of email to email address entered in the form
    accessKey: process.env.static_forms_key, // get your access key from https://www.staticforms.xyz
  });

  const [response, setResponse] = useState({
    type: '',
    message: '',
  });

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' },
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: 'success',
          message: 'Thank you for reaching out to us.',
        });
      } else {
        setResponse({
          type: 'error',
          message: json.message,
        });
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        type: 'error',
        message: 'An error occured while submitting the form',
      });
    }
  };

  return (
    <>
      <Head>
        <title>お問い合わせ | 株式会社プルリク</title>
        <meta name="description" content="Pullreq Limited" />
      </Head>
      <h1>お問い合わせ</h1>
      <form
        className="w-full max-w-sm"
        action="https://api.staticforms.xyz/submit"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-600 md:text-right mb-1 md:mb-0 pr-4"
              // for="name"
            >
              お名前
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="
                bg-gray-200
                appearance-none
                border
                border-gray-200
                rounded
                w-full
                py-2
                px-4
                text-gray-700
                leading-tight
                
                focus:outline-none
                focus:bg-white
                focus:border-gray-700"
              // id="name"
              type="text"
              name="name"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-600 md:text-right mb-1 md:mb-0 pr-4"
              // for="email"
            >
              メールアドレス
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="
                bg-gray-200
                appearance-none
                border
                border-gray-200
                rounded
                w-full
                py-2
                px-4
                text-gray-700
                leading-tight
                
                focus:outline-none
                focus:bg-white
                focus:border-gray-700"
              // id="email"
              type="text"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-gray-600">お問い合わせ内容</label>
          <textarea
            className="
              bg-gray-200
              appearance-none
              border
              border-gray-200
              rounded
              w-full
              py-2
              px-4
              text-gray-700
              leading-tight
              
              focus:outline-none
              focus:bg-white
              focus:border-gray-700"
            // placeholder="Your Message"
            name="message"
            onChange={handleChange}
            required
          />
        </div>
        <div className="text-right">
          <button
            className="
              bg-white
              hover:bg-gray-100
              text-gray-800
              py-1
              px-4
              border
              border-gray-400
              rounded
              shadow"
            type="submit"
          >
            送信
          </button>
        </div>
      </form>
    </>

    // <div>
    //   <div className="section">
    //     <div className="container">
    //       <div className="columns">
    //         <div className="column" />
    //         <div className="column  is-two-thirds">
    //           <div
    //             className={
    //               response.type === 'success'
    //                 ? 'tile box notification is-primary'
    //                 : 'is-hidden'
    //             }
    //           >
    //             <p>{response.message}</p>
    //           </div>
    //           <div
    //             className={
    //               response.type === 'error'
    //                 ? 'tile box notification is-danger'
    //                 : 'is-hidden'
    //             }
    //           >
    //             <p>{response.message}</p>
    //           </div>
    //           <div
    //             className={response.message !== '' ? 'is-hidden' : 'columns'}
    //           >
    //             <div className="column content">
    //             </div>
    //           </div>
    //         </div>
    //         <div className="column" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default function contact() {
  return (
    <Layout>
      <div className="container p-4 break-words">{form()}</div>
    </Layout>
  );
}
