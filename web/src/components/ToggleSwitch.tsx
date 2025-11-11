import styling from './ToggleSwitch.module.css'

type ToggleSwitchProps = {
  checked: boolean
  onChange: () => void
  label?: string
}

const ToggleSwitch = ({ checked, onChange, label }: ToggleSwitchProps) => {
  return (
    <label className={styling['toggle-switch']}>
    <input type="checkbox" checked={checked} onChange={onChange} />
    <span className={styling.slider} />
    {label && <span className={styling.labelText}>{label}</span>}
  </label>
  )
}

export default ToggleSwitch