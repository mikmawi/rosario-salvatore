export default function StarRating({ className = "", count = 5 }: { className?: string; count?: number }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-current">
          <path d="M10 1l2.6 5.9 6.4.6-4.9 4.2 1.5 6.3L10 14.9l-5.6 3.1 1.5-6.3L1 7.5l6.4-.6z" />
        </svg>
      ))}
    </span>
  );
}
