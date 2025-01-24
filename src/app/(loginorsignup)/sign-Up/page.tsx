"use client"

import React from 'react'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/components/ui/button"
import { signUpSchema } from "@/zodSchema/zodSignUp"
import {Vedio} from "@/../public/index"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

function SignUP() {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(values: z.infer<typeof signUpSchema>) {
    console.log(values)
  }

  return (
    <div className=' w-screen flex justify-center items-center h-screen bg-blend-screen bg-cover bg-center bg-no-repeat' style={{backgroundBlendMode: 'overlay', backgroundImage:{}}}>
    <div className="w-full max-w-md h-auto my-auto mx-auto bg-white rounded-lg shadow-md p-8 transform transition duration-500">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormItem>
            <FormLabel htmlFor="firstname" className="block text-gray-700 font-bold mb-2">
              First Name
            </FormLabel>
            <FormControl>
              <Input
                {...form.register("firstname")}
                placeholder="Jack"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </FormControl>
            <FormMessage className="text-red-500 text-sm">
              {form.formState.errors.firstname?.message}
            </FormMessage>
          </FormItem>
          <FormItem>
            <FormLabel htmlFor="lastname" className="block text-gray-700 font-bold mb-2">
              Last Name
            </FormLabel>
            <FormControl>
              <Input
                {...form.register("lastname")}
                placeholder="welch"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </FormControl>
          </FormItem>
          <FormItem>
            <FormLabel htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </FormLabel>
            <FormControl>
              <Input
                {...form.register("email")}
                placeholder="jack@gmail.com"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </FormControl>
            <FormMessage className="text-red-500 text-sm">
              {form.formState.errors.email?.message}
            </FormMessage>
          </FormItem>
          <FormItem>
            <FormLabel htmlFor="username" className="block text-gray-700 font-bold mb-2">
              Username
            </FormLabel>
            <FormControl>
              <Input
                {...form.register("username")}
                placeholder="jack123"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </FormControl>
            <FormMessage className="text-red-500 text-sm">
              {form.formState.errors.username?.message}
            </FormMessage>
          </FormItem>
          <FormItem>
            <FormLabel htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </FormLabel>
            <FormControl>
              <Input
                {...form.register("password")}
                placeholder="Jack#214"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </FormControl>
            <FormMessage className="text-red-500 text-sm">
              {form.formState.errors.password?.message}
            </FormMessage>
          </FormItem>
          <FormItem>
            <FormLabel htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
              Confirm Password
            </FormLabel>
            <FormControl>
              <Input
                {...form.register("confirmPassword")}
                placeholder="Jack#214"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </FormControl>
            <FormMessage className="text-red-500 text-sm">
              {form.formState.errors.confirmPassword?.message}
            </FormMessage>
          </FormItem>
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </Button>
        </form>
      </Form>
    </div>
    </div>
  )
}

export default SignUP