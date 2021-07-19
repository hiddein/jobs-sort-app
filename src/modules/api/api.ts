import ENDPOINTS from "./endpoints"

export const BASE_URL = "https://5f7998dbe402340016f9321f.mockapi.io/api/v1"


class Api {
    baseUrl: string
    endpoints: any

    constructor (baseUrl: string, endpoints: object) {
        this.baseUrl = baseUrl
        this.endpoints = endpoints
    }
 
    async generateRequets(endpoint: string, data?: any) {
        const {method, uri} = this.endpoints[endpoint]
        return fetch(`${this.baseUrl}${uri}`, {method, body: data})
    }

    async fetch(endpoint: string, data?: any) {
        const response = await this.generateRequets(endpoint,data)
        return response.json()
    }
}

export default new Api(BASE_URL, ENDPOINTS)