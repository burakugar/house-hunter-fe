import ForgotPassword from '@/components/common/Layout/Header/AuthDrawer/forgot-password/ForgotPassword'
import LoginForm from '@/components/common/Layout/Header/AuthDrawer/login/LoginForm/LoginForm'
import Profile from '@/components/common/Layout/Header/AuthDrawer/profile/Profile'
import SignupForm from '@/components/common/Layout/Header/AuthDrawer/signup/SignupForm/SignupForm'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { useAuthDrawerContext } from '@/providers/AuthDrawerProvider/AuthDrawerProvider'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { UserIcon } from 'lucide-react'
import { FC } from 'react'

const AuthDrawer: FC = () => {
  const {
    activeTab,
    handleCloseDrawer,
    showMenu,
    setShowMenu,
    handleOpenDrawer,
    handleTabChange
  } = useAuthDrawerContext()

  const auth = useAuthContext()

  const isLoggedIn = !!auth?.user?.email

  const isForgotPassword = activeTab === 'forgot-password'

  const loggedOutContent = (
    <>
      <Tabs value={activeTab} className="mt-6 w-full sm:w-fit">
        {!isForgotPassword && (
          <TabsList className="relative w-full">
            <TabsTrigger
              value="signup"
              className="relative w-full"
              onClick={() => handleTabChange('signup')}
            >
              Sign up
            </TabsTrigger>
            <TabsTrigger
              value="login"
              className="w-full"
              onClick={() => handleTabChange('login')}
            >
              Log in
            </TabsTrigger>
          </TabsList>
        )}

        <TabsContent value="login">
          <LoginForm />
        </TabsContent>

        <TabsContent value="signup">
          <SignupForm handleTabChange={handleTabChange} />
        </TabsContent>

        <TabsContent value="forgot-password">
          <ForgotPassword />
        </TabsContent>
      </Tabs>
    </>
  )

  return (
    <Sheet
      open={showMenu}
      onOpenChange={(open) => {
        if (!isLoggedIn) {
          return
        }

        setShowMenu(open)
      }}
    >
      <SheetTrigger onClick={handleOpenDrawer} asChild>
        <Button variant="ghost" size="icon" className="rounded-md border">
          <UserIcon className="h-4 w-4" />
        </Button>
      </SheetTrigger>

      <SheetContent
        className={cn('flex w-full max-w-[500px] flex-col items-center', {
          'sm:max-w-[600px]': !isLoggedIn
        })}
        handleClose={handleCloseDrawer}
      >
        {isLoggedIn ? <Profile /> : loggedOutContent}
      </SheetContent>
    </Sheet>
  )
}

export default AuthDrawer
