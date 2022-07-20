import React from "react";
import TvListHeader from "../components/headerTvList";

export default {
  title: "TV Show Page/Header",
  component: TvListHeader,
};

export const Basic = () => <TvListHeader title={'Discover TV Shows'} />;

Basic.storyName = "Default";