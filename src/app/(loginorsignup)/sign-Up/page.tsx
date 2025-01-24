"use client"

import React from 'react'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/components/ui/button"
import { signUpSchema } from "@/zodSchema/zodSignUp"
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormItem>
          <FormLabel htmlFor="firstname">First Name</FormLabel>
          <FormControl>
            <Input {...form.register("firstname")} />
          </FormControl>
          <FormMessage>{form.formState.errors.firstname?.message}</FormMessage>
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="lastname">Last Name</FormLabel>
          <FormControl>
            <Input {...form.register("lastname")} />
          </FormControl>
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormControl>
            <Input {...form.register("email")} />
          </FormControl>
          <FormMessage>{form.formState.errors.email?.message}</FormMessage>
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="username">Username</FormLabel>
          <FormControl>
            <Input {...form.register("username")} />
          </FormControl>
          <FormMessage>{form.formState.errors.username?.message}</FormMessage>
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormControl>
            <Input {...form.register("password")} />
          </FormControl>
          <FormMessage>{form.formState.errors.password?.message}</FormMessage>
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
          <FormControl>
            <Input {...form.register("confirmPassword")} />
          </FormControl>
          <FormMessage>{form.formState.errors.confirmPassword?.message}</FormMessage>
        </FormItem>
        <Button type="submit">Sign Up</Button>
      </form>
    </Form>
  )
}

export default SignUP