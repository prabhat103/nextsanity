import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '70fa7r7k',
  dataset: 'production',
  useCdn: false,
});
