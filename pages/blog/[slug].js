import sanityClient from '../../sanityClient';

export default function BlogPost() {
  return <div>my blog</div>;
}

export async function getStaticProps() {
  return { props: {} };
}

export async function getStaticPaths() {
  const posts = await sanityClient.fetch(
    `*[_type == "post"]{'slug': slug.current}`
  );
  console.log({ posts });

  return {
    paths: posts.map(({ slug }) => `/blog/${slug}`),
    fallback: false,
  };
}
