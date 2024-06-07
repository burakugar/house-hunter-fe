import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'
import { FC } from 'react'

type PreviewProps = {
  currentPreview: File
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (...event: any[]) => void
}

const FilePreview: FC<PreviewProps> = ({ currentPreview, onChange }) => {
  return (
    <div className="group relative flex h-[150px] w-[150px] cursor-pointer items-center justify-center  overflow-hidden rounded border border-dashed  p-2 transition-colors duration-300 hover:bg-white">
      <img
        src={URL.createObjectURL(currentPreview)}
        className="object-contain transition-opacity group-hover:opacity-[10%]"
      />
      <Button
        size="noSize"
        className="absolute p-8 opacity-0 transition-opacity hover:bg-transparent group-hover:opacity-100 "
        type="button"
        variant="ghost"
        onClick={() => {
          onChange(undefined)
        }}
      >
        <Trash width={18} height={18} />
      </Button>
    </div>
  )
}

export default FilePreview
