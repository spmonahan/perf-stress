import { makeStyles, shorthands } from '@fluentui/react-components';
import * as React from 'react';
import { injectGlobalCss } from '../../shared/injectStyles'
import { getTestParams } from '../../shared/testParams';
import { performanceMeasure } from '../../shared/usePerformanceMeasure';
import { StressComponent } from './StressComponent';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    ...shorthands.gap('10px'),
  },
});

export type StressContainerProps = {
  numChildren?: number;
};

export const StressContainer: React.FC<StressContainerProps> = ({ numChildren = 10 }) => {
  const [checked, setChecked] = React.useState(false);

  if (getTestParams().test === 'mount') {
    performanceMeasure('stress', 'start');
  } else if (getTestParams().test === 'inject-styles') {
    setTimeout(() => {
      performanceMeasure('stress', 'start');
      injectGlobalCss('');
    }, 2000);
  } else if (getTestParams().test === 'prop-update') {
    /* eslint-disable-next-line react-hooks/rules-of-hooks */
    React.useEffect(() => {
      setTimeout(() => {
        performanceMeasure('stress', 'start');
        setChecked(true);
      }, 2000);
    }, []);
  }

  const styles = useStyles();

  const kids = new Array(numChildren).fill('1');
  return (
    <div className={styles.container}>
      {kids.map((_, index) => {
        return <StressComponent key={index} id={index.toString()} checked={checked} />;
      })}
    </div>
  );
};
