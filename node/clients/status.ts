import { ExternalClient } from '@vtex/api';
import type { IOContext, InstanceOptions } from '@vtex/api';

export default class Status extends ExternalClient {
    constructor(context:IOContext, options?:InstanceOptions) {
        super('', context, options)
    }

    public async getStatus(status: string): Promise<string> {        
        return status
    }

    public async getCitiesGoogle(): Promise<any[]> {
        const cities = await this.http.get('https://www.google.com/cities')
        return cities;
    }

}