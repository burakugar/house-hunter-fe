/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useReducer, useRef } from 'react'
import { UseFormReturn } from 'react-hook-form'

type TextInputProps = {
  form: UseFormReturn<any>
  name: string
  label: string
  placeholder: string
}

const czkMoneyFormatter = Intl.NumberFormat('cs-Cz', {
  currency: 'CZK',
  currencyDisplay: 'symbol',
  currencySign: 'standard',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

export default function MoneyInput(props: TextInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const initialValue = czkMoneyFormatter.format(
    props.form.getValues()[props.name]
  )

  const [value, setValue] = useReducer((_: any, next: string) => {
    const digits = next.replace(/\D/g, '')

    return czkMoneyFormatter.format(Number(digits) / 100)
  }, initialValue)

  function handleChange(
    realChangeFn: (value: number) => void,
    formattedValue: string
  ) {
    const digits = formattedValue.replace(/\D/g, '')
    const realValue = Number(digits) / 100
    realChangeFn(realValue)
  }

  return (
    <FormField
      control={props.form.control}
      name={props.name}
      render={({ field }) => {
        field.value = value
        const _change = field.onChange

        return (
          <FormItem className="relative">
            <p className="absolute left-3 top-[32.5px] z-10 text-sm">Kč</p>
            <FormLabel>{props.label}</FormLabel>
            <FormControl>
              <Input
                ref={inputRef}
                placeholder={props.placeholder}
                type="text"
                className="pl-8"
                {...field}
                onChange={(ev) => {
                  setValue(ev.target.value)
                  handleChange(_change, ev.target.value)
                }}
                value={value}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
