import React from "react";
import { Carrosel } from "../components/carrosel";
import { SecondCarrosel } from "../components/carroselHorizontal";
import { Footer } from "../components/footer";
import { Header} from "../components/header";
import { RecommendationsCart } from "../components/recommendationsCarts";
import { Search } from "../components/search";

export function Main(){
  return(
    <>
      <Header />
      <Search /> 
      <Carrosel />
      <SecondCarrosel />
      <RecommendationsCart />
      <Footer />
    </>
  )
}