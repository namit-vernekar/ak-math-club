import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container prose">
        <p className="eyebrow">Error 404</p>
        <h1>Page not found</h1>
        <p className="lead">We searched every case, but this page doesn&rsquo;t exist.</p>
        <div className="button-row" style={{ marginTop: 24 }}>
          <Link href="/" className="button button--primary">
            Go to the home page
          </Link>
          <Link href="/resources" className="button">
            Weekly Resources
          </Link>
        </div>
      </div>
    </section>
  );
}
