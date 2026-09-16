import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="site-brand" to="/">
          Kanau Lab
        </Link>
        <a
          className="site-header__link"
          href={`${import.meta.env.BASE_URL}#case-studies`}
        >
          Selected Works
        </a>
      </div>
    </header>
  );
}
