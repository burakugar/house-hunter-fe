import ConsentPopup from '@/components/common/Layout/Header/AuthDrawer/signup/components/ConsentPopup'
import { SignupFormType } from '@/components/common/Layout/Header/AuthDrawer/signup/SignupForm/useSignupForm'
import { Checkbox } from '@/components/ui/checkbox'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Link } from '@tanstack/react-router'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

type ConsentFieldsProps = {}

const ConsentFields: FC<ConsentFieldsProps> = () => {
  const form = useFormContext<SignupFormType>()

  function onAccept() {
    form.setValue('terms', true)
  }

  return (
    <div className="flex flex-col gap-5">
      <FormField
        name="terms"
        control={form.control}
        render={({ field }) => {
          return (
            <FormItem>
              <div className="flex flex-row items-center gap-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>

                <FormLabel className="leading-4">
                  Agree to <ConsentPopup onAccept={onAccept} />
                </FormLabel>
              </div>

              <FormMessage />
            </FormItem>
          )
        }}
      />
      <FormField
        name="consent"
        control={form.control}
        render={({ field }) => {
          return (
            <FormItem>
              <div className="flex flex-row items-center gap-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>

                <FormLabel className="leading-4">
                  I consent to the processing of my personal data.
                </FormLabel>
              </div>

              <FormMessage />
            </FormItem>
          )
        }}
      />
      <FormField
        name="privacy_policy"
        control={form.control}
        render={({ field }) => {
          return (
            <FormItem>
              <div className="flex flex-row items-center gap-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>

                <FormLabel className="leading-4">
                  I have read and agree to the{' '}
                  <Link
                    to="/privacy-policy"
                    target="_blank"
                    className="text-blue-800 underline"
                  >
                    {' '}
                    Privacy Policy.
                  </Link>
                </FormLabel>
              </div>

              <FormMessage />
            </FormItem>
          )
        }}
      />
    </div>
  )
}

export default ConsentFields
