import React, { useEffect, useState } from "react";
import "./NewCollections.css";
import Item from "../Items/Item";

export default function NewCollection() {
  const [newCollections, setNewCollections] = useState([]);

  useEffect(() => {
    fetch("https://quickshop-backend-gqcu.onrender.com/newcollection")
      .then((resp) => resp.json())
      .then((data) => setNewCollections(data.newcollection));
  }, []);

  return (
    <>
      <div className="newCollections">
        <h1>New Collection</h1>
        <hr />
        <div className="collection">
          {newCollections.map((item, i) => {
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
