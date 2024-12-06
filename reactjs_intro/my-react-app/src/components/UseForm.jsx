import React from 'react'
import { useForm } from "react-hook-form";


const UseForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    async function handleFormSubmit(data) {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        console.log(data);
    }

    return (
        <div className='border border-black p-3 m-10 flex flex-col gap-5'>
            <h1>Use Form Hook</h1>
            <form onSubmit={handleSubmit(handleFormSubmit)}>

                <div>
                    <label >Firstname:</label>
                    <input
                        className='border border-black m-2'
                        type="text"
                        {...register("firstName", { required: true })}
                        aria-invalid={errors.firstName ? "true" : "false"}
                    />
                    {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
                </div>

                <div>
                    <label >MiddleName:</label>
                    <input
                        className='border border-black m-2'
                        type="text"
                        {...register("middleName", { required: "MiddleName is required!!!", minLength:{value:5,message:"5 character de!!!"} })}
                        aria-invalid={errors.middleName ? "true" : "false"}
                    />
                    {errors.middleName && <p role="alert">{errors.middleName?.message}</p>}
                </div>

                <div>
                    <label >LastName:</label>
                    <input
                        className='border border-black m-2'
                        type="text"
                        {...register("lastName", { required: "Lastname is required", minLength: { value: 4, message: "Minimum 4 characters are req!!!" }, maxLength: { value: 6, message: "maximum 6 characters is allowed!!!" } })}
                        aria-invalid={errors.lastName ? "true" : "false"}
                    />
                    {errors.lastName && <p role='alert'>{errors.lastName?.message}</p>}
                </div>

                <button
                    type="submit"
                    className='border border-black m-2'
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Loading..." : "Submit"}
                </button>
            </form>
        </div>
    )
}

export default UseForm
