import * as React from 'react';
import { initializeIcons, ThemeProvider } from '@fluentui/react';
import { getTestParams } from '../../shared/testParams';
import { performanceMeasure } from '../../shared/usePerformanceMeasure';
import { StressContainer } from './StressContainer';

initializeIcons();

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

  return (
    <ThemeProvider>
      <StressContainer numChildren={numChildren} />
    </ThemeProvider>
  );
};

export default StressApp;
