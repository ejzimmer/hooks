import './App.css';
import { PropsChange } from './PropsChange'
import { ParentRerenders } from './ParentRerenders'
import { StateUpdates } from './StateUpdates'
import { NoDependencyEffect } from './NoDependencyEffect'
import { EmptyDependencyEffect } from './EmptyDependencyEffect'
import { EffectWithDependencies} from './EffectWithDependencies'
import { UseServiceCall } from './UseServiceCall'
import { UseServiceCallWithDependencies } from './UseServiceCallWithDependencies'
import { UseDelayedServiceCall } from './UseDelayedServiceCall'
import { UseDelayedServiceCallAfterUseServiceCall } from './UseDelayedServiceCallAfterUseServiceCall'
import { OneServiceCallToManyDelayedServiceCalls } from './OneServiceCallToManyDelayedServiceCalls';

function App() {
  return (
    <main>
      <section>
        <PropsChange />
        <ParentRerenders />
        <StateUpdates />
        <NoDependencyEffect />
        <EmptyDependencyEffect />
        <EffectWithDependencies />
        <UseServiceCall />
        <UseServiceCallWithDependencies />
        <UseDelayedServiceCall />
        <UseDelayedServiceCallAfterUseServiceCall />
        <OneServiceCallToManyDelayedServiceCalls />
      </section>
    </main>
  );
}

export default App;
