interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  bgImage?: string;
}

export default function PageHero({
  title,
  subtitle,
  badge,
  bgImage = "/images/gallery/casey-horner-6tzGnotyesY-unsplash.jpg",
}: PageHeroProps) {
  return (
    <section
      className="relative py-20 text-white"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(18, 50, 22, 0.78)" }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {badge && (
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "#D4A843", color: "#1a1a1a" }}
          >
            {badge}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{title}</h1>
        {subtitle && (
          <p className="text-xl text-green-200 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
