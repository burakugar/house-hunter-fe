export function generateRandomString(length: number) {
  const time = new Date().toISOString()

  const timeSlice = 6

  return crypto.randomUUID().slice(0, length - timeSlice) + time.slice(6)
}
