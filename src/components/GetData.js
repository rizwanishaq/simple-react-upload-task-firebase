import React from "react";
import { Container, Col } from "react-bootstrap";
import { useQuery } from "react-query";
import CountryCard from "./CountryCard";
import ReactLoading from "react-loading";

const GetData = () => {
  const { isLoading, isFetching, error, data, status } = useQuery(
    "countries",
    () =>
      fetch("https://restcountries.eu/rest/v2/all ").then((res) => res.json())
  );

  return (
    <>
      <h1>{status}</h1>
      {isFetching && "Background Updating"}
      {isLoading && (
        <ReactLoading type={"spokes"} color={"red"} height={667} width={375} />
      )}
      {error && error.message}
      <Container>
        {data &&
          data.map((country) => (
            <CountryCard key={country.name} country={country} />
          ))}
      </Container>
    </>
  );
};

export default GetData;
