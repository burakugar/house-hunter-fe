import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { EyeNoneIcon } from '@radix-ui/react-icons'
import { EyeIcon } from 'lucide-react'
import { InputHTMLAttributes, forwardRef, useState } from 'react'

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement>

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    function handleClick() {
      setShowPassword((prev) => !prev)
    }

    return (
      <div>
        <div className="relative">
          <Input
            ref={ref}
            type={showPassword ? 'input' : 'password'}
            className="pr-12"
            {...props}
          />

          <Button
            onClick={handleClick}
            variant="ghost"
            type="button"
            className="absolute right-2 top-1/2 flex -translate-y-1/2 transform items-center p-1 hover:bg-transparent"
          >
            {showPassword ? (
              <EyeIcon className="h-5 w-5" />
            ) : (
              <EyeNoneIcon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    )
  }
)

export default PasswordInput
