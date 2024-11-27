import createClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

//createClient over sanityClient ? sanityClient đang bị lỗi deprecated
export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-11-24',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);