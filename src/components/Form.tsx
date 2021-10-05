import React from 'react'
import { useForm } from 'react-hook-form'

type FormValues = {
    firstName: string
    middleName: string
    lastName: string
    dateOfBirth: string
    phone: number
    address1: string
    address2: string
    city: string
    state: string
    zipcode: number
}

const Form = () => {
    const { register, handleSubmit } = useForm<FormValues>()

    return (
        <form
            onSubmit={handleSubmit((data) => {
                console.log(data)
            })}
        >
            <label htmlFor="firstName">First Name:</label>
            <input {...register('firstName')} id="firstName" />

            <label htmlFor="middleName">Middle Name:</label>
            <input {...register('middleName')} id="middleName" />

            <label htmlFor="lastName">Last Name:</label>
            <input {...register('lastName')} id="lastName" />

            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input {...register('dateOfBirth')} id="dateOfBirth" />

            <label htmlFor="phone">Phone:</label>
            <input {...register('phone')} id="phone" />

            <label htmlFor="address1">Address1:</label>
            <input {...register('address1')} id="address1" />

            <label htmlFor="address2">Address2:</label>
            <input {...register('address2')} id="address2" />

            <label htmlFor="city">City:</label>
            <input {...register('city')} id="city" />

            <label htmlFor="state">State:</label>
            <input {...register('state')} id="state" />

            <label htmlFor="zipcode">Zipcode:</label>
            <input {...register('zipcode')} id="zipcode" />

            <input type="submit" />
        </form>
    )
}

export default Form
