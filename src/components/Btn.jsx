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
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#080C14] disabled:opacity-50 disabled:cursor-not-allowed group active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 focus:ring-cyan-500 border border-cyan-400/30",
    secondary:
      "bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-600 focus:ring-slate-500 backdrop-blur-sm",
    outline:
      "bg-transparent hover:bg-cyan-500/10 text-cyan-400 hover:text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 focus:ring-cyan-500",
    ghost:
      "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white focus:ring-slate-500",
    glow:
      "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/50 hover:brightness-110 border border-white/20",
  };

  // If custom className has bg- or overrides, let className take precedence while keeping base styles
  const chosenVariant = variantStyles[variant] || variantStyles.primary;
  const chosenSize = sizeStyles[size] || sizeStyles.md;
  const combinedClasses = `${baseStyles} ${chosenSize} ${chosenVariant} ${className}`;

  const renderIcon = () => {
    if (!Icon) return null;
    return typeof Icon === "function" || typeof Icon === "object" ? (
      <Icon className="text-lg transition-transform duration-300 group-hover:translate-x-0.5" />
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