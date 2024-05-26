import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async () => {
  const user = true;
  if (!user) {
    // unauthorized
    throw redirect(302, '/auth');
  } else {
    throw redirect(302, '/user');
  }
};
