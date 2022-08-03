import dynamic from 'next/dynamic';

const SimpleStressV9 = dynamic(() => import('../../../components/v9/StressApp'), {
  ssr: false
});

export default SimpleStressV9;
