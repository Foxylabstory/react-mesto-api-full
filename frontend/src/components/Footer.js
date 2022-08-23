import React from "react";
export default function Footer() {
  const [year, setYear] = React.useState(0);

  React.useEffect(() => {
    requestAnimationFrame(() => {
      const date = new Date();
      setYear(date.getFullYear());
    });
  }, []);

  return (
    <footer className="footer">
      <p className="footer__copyright">© {year}. Foxylab</p>
    </footer>
  );
}
