import React, { useEffect, useState } from "react";
import Item from "../Items/Item";
import "./Popular.css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch("https://quickshop-backend-gqcu.onrender.com/popularinwomen")
      .then((resp) => resp.json())
      .then((data) => setPopular(data.popularinwomen));
  }, []);


  return (
    <>
      <div className="popular">
        <h1>Popular in Women</h1>
        <hr />
        <div className="popular-items">
          {popular.map((item, i) => {
            return (
              <>
                <Item key={i} props={item} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Popular;
