import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import HeaderSearch from "../components/HeaderSearch";
import SearchResults from "../components/SearchResults";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";

// interface Props {
//   results: [];
// }

function Search({ results }) {

  const router =useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>
      <HeaderSearch />
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const useDummyData = true;
  const startIndex = context.query.start || "0"

  const data = useDummyData ? Response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
};
