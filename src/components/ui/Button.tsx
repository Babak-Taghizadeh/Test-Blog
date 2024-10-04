import { ButtonProps } from "@/types/types";
const Button: React.FC<ButtonProps> = ({
  className,
  as: Component = "button",
  onClick,
  children,
  href,
  type,
}) => {
  return (
    <Component
      className={`w-24 border-2 py-1 text-center rounded-lg border-black hover:bg-slate-300 text-xl ${className}`}
      onClick={onClick}
      href={href}
      type={type}
    >
      {children}
    </Component>
  );
};

export default Button;
