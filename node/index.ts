import { Service, ClientsConfig,ServiceContext, RecorderState, EventContext } from '@vtex/api';
import { Clients } from './clients';
import {} from './middlewares/status';

const TIMEOUT_MS = 800

const clients: ClientsConfig<Clients> = {
    implementation: Clients,
    options: {
        default: {
            retries: 2,
            timeout: TIMEOUT_MS
        }
    }
}

declare global {
    type Context = ServiceContext<Clients, State>

    interface StatusChangeContext extends EventContext<Clients> {
        body: {
            domain: string
            orderId: string
            currentState: string,
            lastState: string,
            currentChagenDate: string
            lastChangeDate: string
        }
    }

    interface State extends RecorderState {}
}

export default new Service({
    clients,
    events: {
        allStates,
        someStates
    }
})