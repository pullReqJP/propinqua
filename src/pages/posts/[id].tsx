import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../../lib/posts";

export default function Post({ postData }) {
  return (
    <Layout>
      <h1 className="border-b border-gray-700 text-3xl font-medium">
        {postData.title}
      </h1>
      <div className="mb-6 text-color text-opacity-75 text-right">
        {postData.date}
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
