export function Footer() {
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );
  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm py-8 px-4">
      <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
        <p>
          © {year} Durgesh Dutt Sinha. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline transition-smooth"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
