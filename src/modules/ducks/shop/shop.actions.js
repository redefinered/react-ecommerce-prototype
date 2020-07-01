import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    fetchCollections: [],
    fetchCollectionsSuccess: ['data'],
    fetchCollectionsFailure: ['error']
  },
  { prefix: '@Shop/' }
);

export { Types, Creators };
