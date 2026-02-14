const stats = [
  { value: "8K", label: "Home buyers assisted" },
  { value: "100", label: "Mortgage products" },
  { value: "100", label: "Trusted partner real estate agents" },
];

export function Stats() {
  return (
    <section className="py-16 md:py-20 bg-[#0a0a12]" data-animate="section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center" data-animate="stats">
              <div className="text-4xl md:text-5xl font-bold text-primary">
                {value}
              </div>
              <div className="mt-2 text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
