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
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>()

    return (
        <form
            onSubmit={handleSubmit((data) => {
                console.log(data)
            })}
        >
            <label htmlFor="firstName">First Name:</label>
            <input
                {...register('firstName', {
                    required: 'First name is required',
                })}
                id="firstName"
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}

            <label htmlFor="middleName">Middle Name:</label>
            <input {...register('middleName')} id="middleName" />

            <label htmlFor="lastName">Last Name:</label>
            <input
                {...register('lastName', { required: 'Last name is required' })}
                id="lastName"
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}

            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
                {...register('dateOfBirth', {
                    valueAsDate: true,
                    required: true,
                })}
                id="dateOfBirth"
            />

            <label htmlFor="phone">Phone:</label>
            <input {...register('phone')} id="phone" />

            <label htmlFor="address1">Address1:</label>
            <input
                {...register('address1', { required: true })}
                id="address1"
            />

            <label htmlFor="address2">Address2:</label>
            <input {...register('address2')} id="address2" />

            <label htmlFor="city">City:</label>
            <input {...register('city')} id="city" />

            <label htmlFor="state">State:</label>
            <input {...register('state')} id="state" />

            <label htmlFor="zipcode">Zipcode:</label>
            <input {...register('zipcode', { required: true })} id="zipcode" />

            <input type="submit" />
        </form>
    )
}

export default Form
