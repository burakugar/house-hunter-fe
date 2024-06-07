import { SignupFormType } from '@/components/common/Layout/Header/AuthDrawer/signup/SignupForm/useSignupForm'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Home, UserRoundSearch } from 'lucide-react'
import { FC, ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

type UserTypeRadioFieldProps = {}

const UserTypeRadioField: FC<UserTypeRadioFieldProps> = () => {
  const form = useFormContext<SignupFormType>()

  return (
    <FormField
      control={form.control}
      name="type"
      render={({ field }) => (
        <FormItem className="flex">
          <FormLabel>Sign up as</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex gap-2"
            >
              <CustomFormItem
                value="TENANT"
                label="Tenant"
                description="I am looking for a place to buy or rent a place"
                icon={<UserRoundSearch className="h-6 w-6" />}
              />

              <CustomFormItem
                value="LANDLORD"
                label="Owner"
                description="I own a property and want to rent it out"
                icon={<Home className="h-6 w-6" />}
              />
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

function CustomFormItem({
  value,
  label,
  icon,
  description
}: {
  value: string
  label: string
  description: string
  icon: ReactNode
}) {
  return (
    <FormItem className="flex flex-1 items-center">
      <FormControl>
        <RadioGroupItem value={value} className="peer sr-only" />
      </FormControl>

      <CustomFormLabel>
        <div className="mt-5 flex flex-col items-center gap-2">
          {icon}
          <p className="text-xs">{label}</p>
        </div>
      </CustomFormLabel>

      <FormDescription className="self-start px-2">
        {description}
      </FormDescription>
    </FormItem>
  )
}

function CustomFormLabel({ children }: { children: ReactNode }) {
  return (
    <FormLabel
      className={
        'flex h-[80px] w-full cursor-pointer flex-col items-center rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-secondary [&:has([data-state=checked])]:border-primary'
      }
    >
      {children}
    </FormLabel>
  )
}

export default UserTypeRadioField
