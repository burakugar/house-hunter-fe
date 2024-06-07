import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import MoneyInput from '@/components/ui/inputs/MoneyInput'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  ApartmentTypeSelect,
  AvailableFromInput,
  FileInput,
  IsFurnishedSelect,
  PropertyTypeSelect
} from '@/pages/owner/components/inputs'
import DistrictsSelect from '@/pages/owner/components/inputs/DistrictsSelect/DistrictsSelect'
import { EditPropertyFormType } from '@/pages/owner/edit-property/EditPropertyForm/useEditPropertyForm'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

type EditPropertyFormFieldsProps = {}

const EditPropertyFormFields: FC<EditPropertyFormFieldsProps> = () => {
  const form = useFormContext<EditPropertyFormType>()

  return (
    <div className="flex flex-col gap-4">
      <FormField
        name="title"
        control={form.control}
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )
        }}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Enter a description of the property"
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        name="address"
        control={form.control}
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter full property address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )
        }}
      />

      <DistrictsSelect form={form} />

      <FormField
        name="numberOfRooms"
        control={form.control}
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel>Number of rooms</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter number of rooms"
                  type="number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )
        }}
      />

      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex-1">
          <FormField
            name="squareMeters"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Square meters</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter properties sq m"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
        </div>

        <div className="flex-1">
          <FormField
            name="floorNumber"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Floor</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter the floor"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
        </div>
      </div>

      <IsFurnishedSelect />
      <div className="flex gap-2">
        <div className="flex-1">
          <PropertyTypeSelect form={form} />
        </div>
        <div className="flex-1">
          <ApartmentTypeSelect form={form} />
        </div>
      </div>

      <div className="flex gap-2">
        <AvailableFromInput />
        <div className="flex-1">
          <MoneyInput
            name="price"
            label="Price"
            placeholder="Enter a price"
            form={form}
          />
        </div>
      </div>

      <div>
        <Label className="mb-2 block">Images</Label>
        <div className="flex flex-wrap gap-2">
          {new Array(6).fill(null).map((_, index) => (
            <FileInput
              name={`images.${index}`}
              index={index}
              form={form}
              key={`images.${index}`}
            />
          ))}
        </div>

        <FormDescription>You can upload up to 6 images.</FormDescription>

        {form.formState.errors.images && (
          <p className="text-sm font-medium text-destructive">
            {form.formState.errors.images.root.message}
          </p>
        )}
      </div>
    </div>
  )
}

export default EditPropertyFormFields
