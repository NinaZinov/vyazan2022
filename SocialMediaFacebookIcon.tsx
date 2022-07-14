import { memo, SVGProps } from 'react';

const SocialMediaFacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 34 35' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect x={0.196} y={0.5} width={33.128} height={34} rx={16.564} fill='#fff' />
    <path
      d='m20.813 18.607.472-3.078h-2.908v-2c0-.842.406-1.665 1.704-1.665h1.34v-2.62c-.78-.129-1.569-.198-2.36-.208-2.392 0-3.955 1.477-3.955 4.146v2.347h-2.652v3.078h2.652v7.445h3.271v-7.445h2.436Z'
      fill='#979BA6'
    />
  </svg>
);

const Memo = memo(SocialMediaFacebookIcon);
export { Memo as SocialMediaFacebookIcon };
