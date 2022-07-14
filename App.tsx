import { FC, memo } from 'react';

import classes from './App.module.css';
import { Frame4 } from './components/Frame4/Frame4';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <Frame4 />
    </div>
  );
});
