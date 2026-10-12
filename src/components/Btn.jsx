const Btn = ({
  text,
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  onClick,
  href,
  download,
  target,
  rel,
  className = "",
  disabled = false,
  type = "button",
  ...props
}) => {
  const content = children || text;

  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed group active:scale-[0.98] select-none text-center";

  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs gap-1.5 min-h-[38px]",
    md: "px-5 py-2.5 text-sm gap-2 min-h-[44px]",
    lg: "px-6 py-3.5 text-sm sm:text-base gap-2.5 min-h-[48px]",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold shadow-lg shadow-cyan-950/50 hover:shadow-cyan-500/20 border border-cyan-400/20",
    secondary:
      "bg-[#141414] hover:bg-[#1f1f1f] text-zinc-200 hover:text-white border border-[#27272a] hover:border-[#3f3f46]",
    outline:
      "bg-transparent hover:bg-white/5 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-600",
    glow:
      "bg-white text-black hover:bg-zinc-200 font-semibold shadow-lg shadow-white/10 hover:shadow-white/20 border border-white",
  };

  const chosenVariant = variantStyles[variant] || variantStyles.primary;
  const chosenSize = sizeStyles[size] || sizeStyles.md;
  const combinedClasses = `${baseStyles} ${chosenSize} ${chosenVariant} ${className}`;

  const renderIcon = () => {
    if (!Icon) return null;
    return typeof Icon === "function" || typeof Icon === "object" ? (
      <Icon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
    ) : (
      Icon
    );
  };

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        className={combinedClasses}
        {...props}
      >
        {iconPosition === "left" && renderIcon()}
        <span>{content}</span>
        {iconPosition === "right" && renderIcon()}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {iconPosition === "left" && renderIcon()}
      <span>{content}</span>
      {iconPosition === "right" && renderIcon()}
    </button>
  );
};

export default Btn;