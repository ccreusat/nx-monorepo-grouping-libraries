/* eslint-disable-next-line */
import { sayHello } from '@ccreusat-monorepo/client';

export interface ReactTransformerProps {}

export function ReactTransformer(props: ReactTransformerProps) {
  return (
    <div>
      <h1>Welcome to ReactTransformer!</h1>
      <div>{sayHello()}</div>
    </div>
  );
}

export default ReactTransformer;
