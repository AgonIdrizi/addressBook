import {apiURL} from './constants';



async function client<T>(
  params ='',
  {data}: any = {}
): Promise<T> {
  const config: any = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      'Content-Type': data ? 'application/json' : undefined
    }
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