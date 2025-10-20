type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <header>
      </header>
      <main>{children}</main>
      <footer>
      </footer>
    </div>
  )
}

export default MainLayout