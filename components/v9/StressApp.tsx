import * as React from 'react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { getTestParams } from '../../shared/testParams';
import { performanceMeasure } from '../../shared/usePerformanceMeasure';
import { StressContainer } from './StressContainer';

export const StressApp = () => {
  const [numChildren, setNumChildren] = React.useState(100);

  if (getTestParams().test === 'add-node') {
    /* eslint-disable-next-line react-hooks/rules-of-hooks */
    React.useEffect(() => {
      performanceMeasure('stress', 'start');
      setNumChildren(200);
    }, []);
  } else if (getTestParams().test === 'remove-node') {
    /* eslint-disable-next-line react-hooks/rules-of-hooks */
    React.useEffect(() => {
      performanceMeasure('stress', 'start');
      setNumChildren(1);
    }, []);
  }

  return (<FluentProvider theme={webLightTheme}>
    <StressContainer numChildren={numChildren} />

  </FluentProvider>)
};

export default StressApp;
