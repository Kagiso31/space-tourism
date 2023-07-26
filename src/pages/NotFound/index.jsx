import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    document.body.classList.add("not-found-page");
    return () => document.body.classList.remove("not-found-page");
  }, []);
  return (
    <>
      <section className="not-found">
        <h1 className="not-found__heading">Page Not Found</h1>
        <Link to="/" className="not-found__link">
          <span>Click to go back home</span>
        </Link>
      </section>
    </>
  );
};

export default NotFound;
