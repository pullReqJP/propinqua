import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../../lib/posts';

// export default function Post() {
//   return (
//     <Layout>
//       <div>post</div>
//     </Layout>
//   );
// }
export default function Post({ postData }) {
  return (
    <Layout>
      <div className="md:max-w-screen-md lg:max-w-screen-lg m-4 p-4 rounded shadow bg-white">
        <h1 className="border-b border-gray-700 text-3xl font-medium">
          {postData.title}
        </h1>
        <div className="mb-6 text-color text-opacity-75 text-right">
          {postData.date}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
