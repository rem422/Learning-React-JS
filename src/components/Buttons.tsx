import { ReactNode } from "react"

interface Props {
    children: string;
    color?: "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark";
    onClick: () => void;
}

const Buttons = ({ children, onClick, color = 'primary'}: Props) => {
  return (
    <button onClick={onClick} className={"btn btn-" + color}>{children}</button>
  )
}

export default Buttons