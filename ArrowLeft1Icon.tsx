import { memo, SVGProps } from 'react';

const ArrowLeft1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 23 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.54 4.158v12.764M17.203 8.944l-5.276-5.426a.516.516 0 0 0-.175-.117.561.561 0 0 0-.598.117L5.877 8.944'
      stroke='#9E97A6'
      strokeWidth={1.888}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ArrowLeft1Icon);
export { Memo as ArrowLeft1Icon };
