import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="not-found container">
      <p>404</p>
      <h1>没有找到这个 Case Study</h1>
      <Link className="button button--primary" to="/">
        返回作品集
      </Link>
    </main>
  );
}
