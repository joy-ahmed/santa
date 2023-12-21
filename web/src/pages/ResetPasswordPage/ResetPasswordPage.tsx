import { useEffect, useRef, useState } from 'react'

import { Form, Submit, FieldError } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'

const ResetPasswordPage = ({ resetToken }: { resetToken: string }) => {
  const { isAuthenticated, reauthenticate, validateResetToken, resetPassword } =
    useAuth()
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])

  useEffect(() => {
    const validateToken = async () => {
      const response = await validateResetToken(resetToken)
      if (response.error) {
        setEnabled(false)
        toast.error(response.error)
      } else {
        setEnabled(true)
      }
    }
    validateToken()
  }, [resetToken, validateResetToken])

  const passwordRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    passwordRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await resetPassword({
      resetToken,
      password: data.password,
    })

    if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Password changed!')
      await reauthenticate()
      navigate(routes.login())
    }
  }

  return (
    <>
      <MetaTags title="Reset Password" />
      <HeaderWithRulers heading="RESET PASSWORD" className="mb-10 text-white" />
      <Form onSubmit={onSubmit} className="auth-form">
        <div className="field">
          <ShowHidePassword
            label="New Password"
            name="password"
            autoComplete="new-password"
            errorClassName="error"
            disabled={!enabled}
            ref={passwordRef}
            validation={{
              required: {
                value: true,
                message: 'New Password is required',
              },
            }}
          />

          <FieldError name="password" className="error-message" />
        </div>

        <Submit disabled={!enabled}>Submit</Submit>
      </Form>
    </>
  )
}

export default ResetPasswordPage
