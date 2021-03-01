 export interface IUser {
  cell: string,
  dob: {
    date: string,
    age: number
  }
  email: string,
  gender: string,
  id: {
    name: string | null
    value: string | null
  }
  location: {
    city: string,
    coordinates: {
      latitude: string,
      longitude: string
    }
    country: string
    postcode: number
    state: string
    street: {
      number: number
      name: string
    }
    timezone: {
      description: string
      offset: string
    }
  }
  login: {
    md5: string
    password: string
    salt: string
    sha1: string
    sha256: string
    username: string
    uuid: string
  }
  name: {
    first: string
    last: string
    title: string
  }
  nat: string
  phone: string
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  registered: {
    age: number
    date: string
  }
}

export interface IHttpUsersResponse {
  info: {
    page: number, 
    results: string, 
    seed: string, 
    version: string
  }, 
  results: IUser[]
}

export type UsersStateType = {
  data: IUser[];
  isError: boolean;
  isLoading: boolean;
  page: number,
  maxPage: number;
  more: boolean
}



