import {apiURL} from './constants';



async function client<T>(
  params ='',
  {data}: Record<string, unknown> = {}
): Promise<T> {

  const headers = new Headers()
  data ? headers.append('Content-Type', 'application/json') : null

  const config: RequestInit = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: headers
  }

  return window.fetch(`${apiURL}/${params}`, config).then(async response => {
    
    const data: Promise<T> = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export {client}