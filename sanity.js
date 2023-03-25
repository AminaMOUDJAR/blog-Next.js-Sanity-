import { createClient } from '@sanity/client';
import { createImageUrlBuilder, createCurrentUserHook } from './blog page';

export const config = {
  dataset: 'blogs',
  projectId: 'c0ngvf4w',
  apiVersion: '2021-03-25',
  useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(config);

export const urlFor = (source) =>
  createImageUrlBuilder(config).image(source);

export const useCurrentUser = createCurrentUserHook(config);
