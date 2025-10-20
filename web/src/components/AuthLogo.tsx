import styling from './AuthLogo.module.css'

const AuthLogo = () => {
  return (
    <div className={styling.container}>
      <img src="/logo.png" alt="Logo" width={150} height={105}/>
    </div>
  )
}

export default AuthLogo