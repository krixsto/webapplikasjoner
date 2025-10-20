import AppLogo from "src/components/AppLogo"

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <header>
        <AppLogo/>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default MainLayout