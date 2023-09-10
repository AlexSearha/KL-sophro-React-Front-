import regenerateAccessToken from '../../utils/utilsFunctions';

async function regenerateToken() {
  const test = await regenerateAccessToken();
  return test;
}
function Test() {
  return (
    <button type="button" onClick={() => regenerateToken()}>
      Test
    </button>
  );
}

export default Test;
