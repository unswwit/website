import { button } from "./styles.module.css";

type ButtonProps = {
  title: string;
  link?: string;
};

const Button = ({ title }: ButtonProps) => {
  return <button className={button}>{title}</button>;
};

export default Button;
