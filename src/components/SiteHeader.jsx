import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="site-brand" to="/">
          AI Character &amp; Conversation Design
        </Link>
        <a className="site-header__link" href="/#case-studies">
          Case Studies
        </a>
      </div>
    </header>
  );
}
