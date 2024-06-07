import {
  adTypeSchema,
  apartmentTypeSchema,
  districtFormTypeSchema,
  fileSchema,
  FurnishedSchema
} from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const editPropertyFormSchema = z
  .object({
    title: z
      .string()
      .min(5, 'Title must be at least 5 characters long')
      .max(100, 'Title must be at most 100 characters long'),
    address: z
      .string()
      .min(10, 'Address must be at least 10 characters long')
      .max(100),
    price: z.coerce.number().nonnegative().min(1, 'Price is required'),
    squareMeters: z.coerce
      .number()
      .min(1, 'Min square meters is 1')
      .nonnegative()
      .max(1000, 'Max square meters is 1000'),
    description: z
      .string()
      .min(20, 'Description must be at least 20 characters long')
      .max(1300),
    isFurnished: FurnishedSchema,
    numberOfRooms: z.coerce
      .number()
      .int()
      .min(1, 'Number of rooms is required')
      .max(50, 'Max number of rooms is 50'),
    floorNumber: z.coerce
      .number()
      .int()
      .min(0, 'Min floor number is 0')
      .max(140, 'Max floor number is 140'),
    availableFrom: z.date(),
    adType: adTypeSchema,
    apartmentType: apartmentTypeSchema,
    images: z.array(fileSchema),
    district: districtFormTypeSchema
  })
  .superRefine((val, ctx) => {
    const atLeastOneImage = val.images.some((image) => {
      if (Array.isArray(image)) {
        return image.length > 1
      }
      return image !== undefined
    })
    if (!atLeastOneImage) {
      return ctx.addIssue({
        code: 'custom',
        message: 'At least one image is required',
        path: ['images']
      })
    }
  })

export type EditPropertyFormType = z.infer<typeof editPropertyFormSchema>

export function useEditNewPropertyForm(defaultValues: EditPropertyFormType) {
  return useForm<EditPropertyFormType>({
    resolver: zodResolver(editPropertyFormSchema),
    mode: 'onChange',
    defaultValues
  })
}
