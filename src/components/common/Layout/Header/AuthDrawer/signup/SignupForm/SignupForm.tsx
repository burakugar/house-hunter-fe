import PasswordInput from '@/components/common/Layout/Header/AuthDrawer/components/PasswordInput'
import PasswordInputStrength from '@/components/common/Layout/Header/AuthDrawer/components/PasswordInputStrength'
import ConsentFields from '@/components/common/Layout/Header/AuthDrawer/signup/components/ConsentFields'
import UserTypeRadioField from '@/components/common/Layout/Header/AuthDrawer/signup/components/UserTypeRadioField'
import {
  SignupFormType,
  SignupPostValues,
  useSignupForm
} from '@/components/common/Layout/Header/AuthDrawer/signup/SignupForm/useSignupForm'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PhoneInput } from '@/components/ui/phone-input'
import { generateRandomString } from '@/lib/generateRandomValue'
import { AuthDrawerTab } from '@/providers/AuthDrawerProvider/AuthDrawerProvider'
import { authService } from '@/services/auth-service/auth-service'
import { useMutation } from '@tanstack/react-query'

import { ClipboardEvent, FC } from 'react'
import { toast } from 'sonner'

type SignupFormProps = {
  handleTabChange: (tab: AuthDrawerTab) => void
}

const SignupForm: FC<SignupFormProps> = ({ handleTabChange }) => {
  const form = useSignupForm()

  const signupMutation = useMutation({
    mutationFn: authService.signup,
    onSuccess: () => {
      toast.info('Verification link is sent to your email!', {
        duration: 4_000
      })

      form.reset()
      handleTabChange('login')
    },
    onError: (error) => {
      toast.error('Something went wrong', {
        description: error.message
      })
    }
  })

  async function onSubmit(values: SignupFormType) {
    const postValues: SignupPostValues = {
      name: values.name,
      surname: values.surname,
      email: values.email,
      phoneNumber: values.phoneNumber,
      role: values.type,
      password: values.password
    }

    signupMutation.mutate(postValues)
  }

  function onConfirmPasswordPaste(e: ClipboardEvent<HTMLInputElement>) {
    e.preventDefault()

    form.setValue('confirm_password', generateRandomString(20), {
      shouldValidate: true
    })
  }

  return (
    <div className="mt-6 sm:w-[400px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-4 flex flex-col gap-4"
        >
          <UserTypeRadioField />

          <div className="flex gap-2">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem className="flex-1">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              name="surname"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem className="flex-1">
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
          </div>

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="flex flex-1 flex-col items-start">
                <FormLabel className="text-left">Phone Number</FormLabel>
                <FormControl className="w-full flex-1">
                  <PhoneInput
                    placeholder="Enter a phone number"
                    defaultCountry="CZ"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="email"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      inputMode="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />

          <FormField
            name="password"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInputStrength
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="mt-2" />
                </FormItem>
              )
            }}
          />
          <FormField
            name="confirm_password"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      {...field}
                      onPaste={onConfirmPasswordPaste}
                      placeholder="Confirm your password"
                    />
                  </FormControl>
                  <FormMessage className="mt-2" />
                </FormItem>
              )
            }}
          />

          <ConsentFields />

          <Button
            type="submit"
            className="mt-3"
            loading={signupMutation.isPending}
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default SignupForm
