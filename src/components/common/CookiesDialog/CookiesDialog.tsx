import { Button, buttonVariants } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Typography } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { Cookie } from 'lucide-react'
import { FC, useEffect, useState } from 'react'

export const CookiesDialog: FC = () => {
  const { user } = useAuthContext()

  const [open, setOpen] = useState(false)
  const [cookies, setCookies] = useState(null)

  const onAccept = () => {
    setOpen(false)
    const cookiesToSet =
      cookies === null
        ? {
            functional: false
          }
        : {
            functional: true
          }

    localStorage.setItem('cookies', JSON.stringify(cookiesToSet))
  }

  useEffect(() => {
    const cookies = JSON.parse(localStorage.getItem('cookies')) || null
    setCookies(cookies)

    if (cookies === null) {
      setOpen(true)
    }
  }, [])

  useEffect(() => {
    const cookies = JSON.parse(localStorage.getItem('cookies')) || null

    setCookies(cookies)
  }, [open])

  useEffect(() => {
    if (user?.email) {
      setOpen(false)
    }
  }, [user])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={cn(
          buttonVariants({
            variant: 'outline',
            size: 'icon'
          }),
          'shadow-full fixed bottom-8 left-8 z-50 rounded-full bg-white p-2'
        )}
      >
        <Cookie size={18} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4">
            <p>Manage cookies</p>
            <Cookie className="" />
          </DialogTitle>
          <DialogDescription>
            Our website uses cookies to improve your experience.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center space-x-6 rounded-md px-3">
          <div>
            <Label htmlFor="strictly_necessary_cookies">
              <Typography className="font-bold">Strictly Necessary</Typography>

              <Typography variant="muted" className="font-normal leading-5">
                These cookies are essential in order to use the website and use
                its features.
              </Typography>
            </Label>
          </div>

          <Switch id="strictly_necessary_cookies" checked disabled />
        </div>
        <div className="flex items-center space-x-6 rounded-md px-3">
          <div>
            <Label htmlFor="functional_cookies">
              <Typography className="font-bold">Functional Cookies</Typography>

              <Typography variant="muted" className="font-normal leading-5">
                These cookies allow the website to provide personalized
                functionality.
              </Typography>
            </Label>
          </div>

          <Switch
            id="functional_cookies"
            checked={cookies?.functional}
            onCheckedChange={(checked) => {
              setCookies({ ...cookies, functional: checked })
            }}
          />
        </div>

        <DialogFooter>
          <Button
            type="submit"
            className="mt-4 w-full"
            variant="outline"
            onClick={onAccept}
          >
            Save preferences
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
