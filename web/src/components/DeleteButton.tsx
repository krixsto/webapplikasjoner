type DeleteButtonProps = {
  onClick: () => void
  children: React.ReactNode
  className?: string
}

const DeleteButton = ({ onClick, children, className }: DeleteButtonProps) => {
  return (
    <button
    className={className}
    onClick={() => {
      if (confirm('Confirm deletion?')) {
        onClick()
      }
    }}
    >
      {children}
    </button>
  )
}

export default DeleteButton