import AppLogo from "src/components/AppLogo"
import AccountLogo from "src/components/AccountLogo"
import styling from './MainLayout.module.css'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styling.container}>
      <header>
        <AppLogo/>
        <AccountLogo/>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default MainLayout