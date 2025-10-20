import AuthLogo from "src/components/AuthLogo"
import styling from './AuthLayout.module.css'

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      <AuthLogo/>
      <main>{children}</main>
    </div>
  )
}

export default AuthLayout