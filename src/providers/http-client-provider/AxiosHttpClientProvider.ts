import axios, { AxiosInstance } from 'axios'

export class AxiosHttpClientProvider {
  private httpInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })

  private static _instance = new AxiosHttpClientProvider()
}
