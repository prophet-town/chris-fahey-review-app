import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-logo"></div>
      <p className="header-content">We&apos;d love a review</p>
      {/* eslint-disable-next-line @next/next/no-img-element -- next/image sizing would override the CSS-driven responsive size */}
      <img src="/logo.png" className="header-illustration" alt="illustration" />
    </header>
  );
}

export default Header;
