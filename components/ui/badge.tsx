export default function Badge({
  children,
  className,
  backgroundColor,
}: {
  children?: React.ReactNode;
  className?: string;
  backgroundColor?: string;
}) {
  return (
    <div
      className={
        "cursor-default rounded-md text-xs sm:text-sm" + " " + className
      }
      style={{ background: backgroundColor }}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}
