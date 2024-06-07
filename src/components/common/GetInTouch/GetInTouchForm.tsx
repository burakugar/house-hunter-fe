import {
  GetInTouchFormType,
  useGetInTouchForm
} from '@/components/common/GetInTouch/useGetInTouchForm'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { userService } from '@/services/user-service/user-service'
import { useMutation } from '@tanstack/react-query'
import { FC, useEffect } from 'react'
import { toast } from 'sonner'

type GetInTouchFormProps = {
  propertyId?: string
}

const GetInTouchForm: FC<GetInTouchFormProps> = ({ propertyId }) => {
  const auth = useAuthContext()
  const email = auth.user?.email

  const defaultValues: GetInTouchFormType = propertyId
    ? {
        name: '',
        email: email,
        subject: 'COMPLAINT',
        message: `I am filing a complaint against the property with ID of ${propertyId}. They provided misleading information...`
      }
    : {
        name: '',
        email: '',
        subject: undefined,
        message: ''
      }

  const form = useGetInTouchForm(defaultValues)

  const getInTouchMutation = useMutation({
    mutationKey: ['get-in-touch'],
    mutationFn: userService.getInTouch,
    onSuccess: () => {
      toast.success('Your request has been successfully submitted.')
    },
    onError: () => {
      toast.error('An error occurred while submitting the request.')
    }
  })

  const onSubmit = (data: GetInTouchFormType) => {
    form.handleSubmit(onSubmit)
    getInTouchMutation.mutate({
      ...data,
      propertyId
    })
  }

  useEffect(() => {
    if (form.formState.isSubmitted && !form.formState.isValid) {
      const invalidFields = document.querySelectorAll('.form-field-invalid')
      invalidFields.forEach((field) => {
        // Remove the shake class if it already exists to restart the animation
        field.classList.remove('animate-shake')
        // Trigger a reflow to restart the animation
        // Add the shake class
        field.classList.add('animate-shake')
        field.addEventListener('animationend', () => {
          field.classList.remove('animate-shake')
        })
      })
    }
  }, [
    form.formState.submitCount,
    form.formState.isValid,
    form.formState.isSubmitted
  ])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 p-4 sm:p-0"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState }) => {
            const hasError = fieldState.invalid && form.formState.isSubmitted
            return (
              <FormItem className={hasError ? 'form-field-invalid' : ''}>
                <FormLabel className="text-white">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your name"
                    {...field}
                    className={`border-gray-300 bg-white text-black placeholder-gray-500 ${hasError ? 'animate-shake' : ''}`}
                  />
                </FormControl>
                <FormMessage className="text-white" />
              </FormItem>
            )
          }}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => {
            const hasError = fieldState.invalid && form.formState.isSubmitted
            return (
              <FormItem className={hasError ? 'form-field-invalid' : ''}>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    inputMode="email"
                    {...field}
                    className={`border-gray-300 bg-white text-black placeholder-gray-500 ${hasError ? 'animate-shake' : ''}`}
                  />
                </FormControl>
                <FormMessage className="text-white" />
              </FormItem>
            )
          }}
        />

        <FormField
          name="subject"
          control={form.control}
          render={({ field, fieldState }) => {
            const hasError = fieldState.invalid && form.formState.isSubmitted
            return (
              <FormItem className={hasError ? 'form-field-invalid' : ''}>
                <FormLabel className="text-white">Request subject</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      className={`border-gray-300 bg-white text-black ${hasError ? 'animate-shake' : ''}`}
                    >
                      <SelectValue placeholder="Select your request subject" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent className="max-h-[300px] border-gray-300 bg-white text-black">
                    <SelectItem value="COMPLAINT">Complaint</SelectItem>
                    <SelectItem value="QUESTION">Question</SelectItem>
                    <SelectItem value="VIEWING">Viewing</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage className="text-white" />
              </FormItem>
            )
          }}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field, fieldState }) => {
            const hasError = fieldState.invalid && form.formState.isSubmitted
            return (
              <FormItem className={hasError ? 'form-field-invalid' : ''}>
                <FormLabel className="text-white">Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your inquiry..."
                    className={`max-h-[500px] min-h-[200px] border-gray-300 bg-white text-black placeholder-gray-500 ${hasError ? 'animate-shake' : ''}`}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-white" />
              </FormItem>
            )
          }}
        />
        <Button
          type="submit"
          variant="outline"
          className="w-full py-3 font-semibold"
          loading={getInTouchMutation.isPending}
        >
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default GetInTouchForm
