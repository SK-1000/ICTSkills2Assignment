
import React from "react";
import TvDetails from "../components/tvDetails";
import SampleTv from "./sampleTvDetailsData";
import { MemoryRouter } from "react-router";


export default {
  title: "TV Details Page/TvDetails",
  component: TvDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
     
  ],
};

export const Basic = () => <TvDetails tv={SampleTv} />;

Basic.storyName = "Default";