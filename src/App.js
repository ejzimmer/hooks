import './App.css';
import { PropsChange } from './PropsChange'
import { ParentRerenders } from './ParentRerenders'
import { StateUpdates } from './StateUpdates'
import { NoDependencyEffect } from './NoDependencyEffect'
import { EmptyDependencyEffect } from './EmptyDependencyEffect'
import { EffectWithDependencies} from './EffectWithDependencies'
import { TestUseServiceCall } from './TesetUseServiceCall'
import { UseServiceCallWithDependencies } from './UseServiceCallWithDependencies'
import { TestUseDelayedServiceCall } from './TestUseDelayedServiceCall'
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
        <TestUseServiceCall />
        <UseServiceCallWithDependencies />
        <TestUseDelayedServiceCall />
        <UseDelayedServiceCallAfterUseServiceCall />
        <OneServiceCallToManyDelayedServiceCalls />
      </section>
    </main>
  );
}

export default App;
