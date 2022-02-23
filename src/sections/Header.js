import React from "react";

function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <h1 className="header">SHA-შაკოლა</h1>
        <h3 className="subheader">
          პირველი ქართული HASH ფუნქცია + ციფრული ხელმოწერა
        </h3>
      </div>
      <p className="description">
        ასინქრონული კრიპტოგრაფია წარსულს ჩაბარდა. <br /> პირდაპირი და კაცური
        კრიპტოგრაფიის დროა. <br />
        მოგესალმებით მომავალში.
      </p>
      <hr />
    </header>
  );
}

export default Header;
