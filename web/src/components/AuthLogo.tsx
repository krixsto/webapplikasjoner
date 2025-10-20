import styling from './AuthLogo.module.css'

const AuthLogo = () => {
  return (
    <div className={styling.container}>
      <img src="/logo.png" alt="Logo" width={100} height={80}/>
    </div>
  )
}

export default AuthLogo