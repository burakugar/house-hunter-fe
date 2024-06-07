import { zodResolver } from '@hookform/resolvers/zod'
import { addDays } from 'date-fns'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const apartmentType = [
  'ONE_KK',
  'ONE_ONE',
  'TWO_KK',
  'TWO_ONE',
  'THREE_KK',
  'THREE_ONE',
  'FOUR_KK',
  'FOUR_ONE',
  'FIVE_KK',
  'FIVE_ONE',
  'SIX_KK',
  'SIX_ONE',
  'SEVEN_KK',
  'SEVEN_ONE'
] as const

export const districtsForm = [
  'PRAGUE 1',
  'PRAGUE 2',
  'PRAGUE 3',
  'PRAGUE 4',
  'PRAGUE 5',
  'PRAGUE 6',
  'PRAGUE 7',
  'PRAGUE 8',
  'PRAGUE 9'
] as const

export const districtFormTypeSchema = z.enum(districtsForm, {
  required_error: 'District is required'
})

export type DistrictFormType = z.infer<typeof districtFormTypeSchema>

export const apartmentTypeSchema = z.enum(apartmentType)

export type ApartmentType = z.infer<typeof apartmentTypeSchema>

export const adTypeSchema = z.enum(['RENTAL', 'SALE'])

export type AdType = z.infer<typeof adTypeSchema>

export const FurnishedSchema = z.enum([
  'FURNISHED',
  'SEMI_FURNISHED',
  'UNFURNISHED'
])

export type FurnishedType = z.infer<typeof FurnishedSchema>

export const fileSchema = z.instanceof(File).optional()

export const newPropertyFormSchema = z
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
    district: districtFormTypeSchema,
    document: z.any().refine((file) => {
      return !!file
    }, 'Document is required.')
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

export type NewPropertyFormType = z.infer<typeof newPropertyFormSchema>

export const newPropertyFormDefaultValues: NewPropertyFormType = {
  title: '',
  address: '',
  price: 0,
  squareMeters: 0,
  description: '',
  isFurnished: 'UNFURNISHED',
  numberOfRooms: 1,
  floorNumber: 1,
  availableFrom: addDays(new Date(), 1),
  adType: 'RENTAL',
  apartmentType: 'ONE_KK',
  district: undefined,
  images: []
} as const

export function useNewPropertyForm() {
  return useForm<NewPropertyFormType>({
    resolver: zodResolver(newPropertyFormSchema),
    mode: 'onChange',
    defaultValues: newPropertyFormDefaultValues
  })
}
