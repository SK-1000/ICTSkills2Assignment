import React from "react";
import TvHeader from "../components/headerTv";
import SampleTv from "./sampleTvData";

export default {
  title: "TV Details Page/TvHeader",
  component: TvHeader,
};

export const Basic = () => <TvHeader tv={SampleTv} />;
Basic.storyName = "Default";