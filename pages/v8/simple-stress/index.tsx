import dynamic from 'next/dynamic';

const SimpleStressV8 = dynamic(() => import('../../../components/v8/StressApp'), {
  ssr: false
});

export default SimpleStressV8;
