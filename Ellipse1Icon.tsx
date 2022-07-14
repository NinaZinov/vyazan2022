import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 50 42' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={24.54} cy={20.742} rx={20.742} ry={24.54} transform='rotate(90 24.54 20.742)' fill='#F0F3FD' />
  </svg>
);

const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
