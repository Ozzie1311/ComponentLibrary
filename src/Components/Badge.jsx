export default function Badge({ children, variant, color = "gray" }) {
  return <span className={`${variant} ${color}-${variant}`}>{children}</span>;
}
