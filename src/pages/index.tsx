/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Header } from "components/Header";
import Nav from "components/Nav";
import Layout from "../components/Layout";
import { Results } from "components/Results";
import requests from "utils/requests";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { MovieApi } from "interfaces/api/types";
import React from "react";

type Props = {
  results: MovieApi[];
};
const IndexPage: React.VFC<Props> = ({ results }: Props) => {
  console.log(results);
  return (
    <>
      <Layout title="Hulu 2.0">
        <Header />
        <Nav />
      </Layout>
      <Results results={results} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const genre = context.query.genre as string;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
    // resultsはArray型
  };
};

export default IndexPage;
