import React from "react";
import { useQuery } from "react-query";
import CountryCard from "./CountryCard";

const GetData = () => {
  const { isLoading, isFetching, error, data, status } = useQuery(
    "countries",
    () =>
      fetch("https://restcountries.eu/rest/v2/all ").then((res) => res.json())
  );

  return (
    <div>
      <h1>{status}</h1>
      {isFetching && "Background Updating"}
      {isLoading && "Loading"}
      {error && error.message}
      {data &&
        data.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
    </div>
  );
};

export default GetData;
