export const base64ToFile = (
  base64: string,
  filename: string,
  mimeType: string = 'image/jpeg'
): File => {
  // Decode base64 string
  const byteString = atob(base64)
  const ab = new ArrayBuffer(byteString.length)
  const ia = new Uint8Array(ab)
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }

  return new File([ab], filename, { type: mimeType })
}
