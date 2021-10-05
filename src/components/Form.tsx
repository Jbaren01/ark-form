import React from 'react'
import {useForm} from 'react-hook-form'

type FormValues = {
  firstName: string,
  middleName: string,
  lastName: string,
  dob: number,
  phone: number,
  address1: string,
  address2: string,
  city: string,
  state: string,
  zipcode: number
}


const Form = () => {

 const {register} = useForm()
  return (
    <React.Fragment>
    <form>
      


    </form>
    </React.Fragment>
  
  )
}

export default Form
