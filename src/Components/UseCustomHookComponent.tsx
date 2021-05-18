import { useState, useEffect } from 'react'
import { CardBody, CardFooter, CardHeader } from "reactstrap"

interface Result {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Dob;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface Id {
  name: string;
  value?: any;
}

interface Dob {
  date: string;
  age: number;
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}

interface Timezone {
  offset: string;
  description: string;
}

interface Coordinates {
  latitude: string;
  longitude: string;
}

interface Street {
  number: number;
  name: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}
/**
 * useFetchData
 * @param url 
 * @returns 
 */
const useFetchData = (url: string) => {
  const [data, setData] = useState<Result[] | null>(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    async () => {
      try {
        const response = await fetch(url); // "https://api.randomuser.me?results=1" 
        const apiData = await response.json() // call api and await response
        setData(apiData) // populate data const with array of objects
        setDone(true)
      } catch (e) {
        setData(e.message)
      }
    }   
  }, [url]); // runs when a url arg is provided

  return {
    data,
    done
  }
}
/**
 * CustomHookComponent
 * @returns 
 */
const CustomHookComponent = () => {
  const { data, done } = useFetchData("https://api.randomuser.me?results=1")
  return (
    <div>
      <CardHeader>
        useCustomHook Demo
            </CardHeader>
      <CardBody className="bg-light">
        <div className="row my-3 justify-content-center">
          {done && (
            <img src={data![0].picture.thumbnail} alt="thumbnail" />
          )}
        </div>
      </CardBody>
      <CardFooter>
        <div className="row">

        </div>
        <div className="row">

        </div>
      </CardFooter>
    </div>
  )
}

export default CustomHookComponent