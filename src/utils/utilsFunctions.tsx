import { apiBackEnd } from '../api/api';

// eslint-disable-next-line consistent-return
export default async function regenerateAccessToken() {
  const token = apiBackEnd.defaults.headers.common.Authorization;
  try {
    const result = await apiBackEnd.post('/regen-token', {
      accessToken: token,
    });
    if (
      result.data.message === 'accessToken valid' ||
      result.data.message === 'tokens regenerated'
    ) {
      return true;
    }
  } catch (error) {
    if (error.response.data.message === 'refresh token expired') {
      return false;
    }
  }
}
