import React from "react";
import TvDetails from "../components/tvDetails";
import SampleTv from "./sampleTvData";

export default {
  title: "TV Details Page/TvDetails",
  component: TvDetails,
};

export const Basic = () => <TvDetails tv={SampleTv} />;
Basic.storyName = "Default";