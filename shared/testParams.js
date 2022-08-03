const testTypes = ['manual', 'mount', 'inject-styles', 'prop-update', 'remove-node', 'add-node'];


let params;
export const getTestParams = () => {
  if (params) {
    return params;
  }
  params = {};

  if (typeof window === 'undefined') {
    return params;
  }

  const searchParams = new URLSearchParams(window.location.search);

  let test = searchParams.get('test');
  if (!test || !testTypes.includes(test)) {
    test = 'manual';
  }

  params.test = test;

  return params;
};
