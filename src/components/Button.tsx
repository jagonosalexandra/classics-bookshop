interface ButtonProps {
  label: string;
  onClick: () => void;
  variant: "primary" | "secondary";
}

function Button({ label, onClick, variant }: ButtonProps) {
  return (
    <button className={`button button-${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
