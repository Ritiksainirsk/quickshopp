import React from "react";
import './DescriptionBox.css'

export default function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="discriptionbox-navigator">
        <div className="disc">Description</div>
        <div className="review">Review (122)</div>
      </div>

      <div className="discriptionbox-discription">
        We have created a new file called useFetch.js containing a function
        called useFetch which contains all of the logic needed to fetch our
        data.We removed the hard-coded URL and replaced it with a url variable
        that can be passed to the custom Hook. Lastly, we are returning our data
        from our Hook. In index.js, we are importing our useFetch Hook and
        utilizing it like any other Hook. This is where we pass in the URL to
        fetch data from. Now we can reuse this custom Hook in any component to
        fetch data from any URL.
      </div>
    </div>
  );
}
