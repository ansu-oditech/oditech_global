import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const AnimatedButton = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  href,
  type = 'button',
}: AnimatedButtonProps) => {
  const baseClasses =
    "relative overflow-hidden rounded-md font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg shadow-[#FFB703]/20";

  const variantClasses = {
    primary:
      "bg-[#FFB703] text-black hover:bg-[#e4a102] focus:ring-2 focus:ring-[#FFB703]/40",
    secondary:
      "bg-black text-[#FFB703] border border-[#FFB703]/50 hover:bg-[#FFB703]/10 hover:text-[#FFB703]",
    outline:
      "bg-transparent text-[#FFB703] border border-[#FFB703] hover:bg-[#FFB703] hover:text-black",
  };

  const sizeClasses = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5",
    lg: "px-8 py-3 text-lg",
  };

  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const renderButton = () => (
    <button
      onClick={onClick}
      className={buttonClasses}
      type={type}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={buttonClasses}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default AnimatedButton;
