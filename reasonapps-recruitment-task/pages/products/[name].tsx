import React from "react";
import SingleProductCard from "../../components/SingleProduct";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { Product } from ".";

const SingleProduct = ({
  product,
}: {
  product: {
    id: string;
    name: string;
    image: string;
    description: string;
    price: string;
  };
}) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <Loading />;
  }

  return <SingleProductCard {...product} key={product.id} />;
};

export default SingleProduct;

export const getStaticPaths = async () => {
  const client = new ApolloClient({
    uri: "https://reasonapps-gql-api.vercel.app/api/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query Product {
        products {
          name
        }
      }
    `,
  });

  const { products } = data;
  const paths = products.map(({ name }: { name: string }) => ({
    params: { name: name },
  }));

  console.log({
    data: data,
    product: products,
    paths: paths,
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { name: string };
}) => {
  const client = new ApolloClient({
    uri: "https://reasonapps-gql-api.vercel.app/api/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query Product {
        products {
          id
          name
          price
          description
          image
        }
      }
    `,
  });

  const requiredProductDetails = data.products.filter(
    (singleProduct: Product) => {
      return singleProduct.name === params.name;
    }
  );

  return {
    props: {
      product: requiredProductDetails[0],
    },
  };
};
