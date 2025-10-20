import AuthLogo from "src/components/AuthLogo"

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