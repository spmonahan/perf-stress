const testTypes = ['manual', 'mount', 'inject-styles', 'prop-update', 'remove-node', 'add-node'] as const;

export type TestParams = {
  test: typeof testTypes[number];
};

export type GetTestParamsFn = () => TestParams;

let params: TestParams;
export const getTestParams: GetTestParamsFn = () => {
  if (params) {
    return params;
  }
  params = {} as TestParams;

  if (typeof window === 'undefined') {
    return params;
  }

  const searchParams = new URLSearchParams(window.location.search);

  let test = searchParams.get('test');
  if (!test || !testTypes.includes(test as TestParams['test'])) {
    test = 'manual';
  }

  params.test = test as TestParams['test'];

  return params;
};
