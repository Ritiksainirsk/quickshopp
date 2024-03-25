import React, { useEffect, useState } from "react";
import "./RelatedProduct.css";
import Item from "../../Components/Items/Item";

export default function RelatedProduct() {

  const [relatedProducts,setRelatedProducts] = useState([])

  useEffect(() => {
    fetch("https://quickshop-backend-gqcu.onrender.com/popularinwomen")
      .then((resp) => resp.json())
      .then((data) => setRelatedProducts(data.popularinwomen));
  }, []);

  return (
    <div className="relatedProduct">
      <h1>Related Product</h1>

      <div className="relatedProducts">
        {relatedProducts.map((item, i) => {
          return (
            <>
              <Item props={item} />
            </>
          );
        })}
      </div>
    </div>
  );
}
