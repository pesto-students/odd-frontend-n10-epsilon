import React, { useState, useEffect, useRef } from "react";
import { Icon, Input } from "../../atoms";
declare const google: any;
let autoComplete: any;

const loadScript = (url: string, callback: VoidFunction) => {
  let script: any = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery: any, autoCompleteRef: any) {
  autoComplete = new google.maps.places.Autocomplete(autoCompleteRef.current, {
    types: ["(cities)"],
    componentRestrictions: { country: "us" },
  });
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery: any) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log(addressObject);
}

function SearchLocationInput() {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${"AIzaSyBZmScOx6jJHhG9xg8pBcpC2-A7EFk1N2M"}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  return (
    <Input
      name="complete_address"
      label="Search Location"
      inputRef={autoCompleteRef}
      onChange={(event) => setQuery(event.target.value)}
      placeholder="Enter a City"
      value={query}
      leading={<Icon iconName="icn-pin" size="20" className=" text-primary" />}
      trailing={
        <button
          type="button"
          onClick={() => {
            console.log("GPS Clicked");
          }}
        >
          <Icon iconName="gps" size="20" className="ml-2 text-primary" />
        </button>
      }
    />
  );
}

export default SearchLocationInput;
