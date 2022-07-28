import React from "react";
import PersonDetails from "../components/personDetails";
import SamplePerson from "./samplePersonData";

export default {
  title: "Person Details Page/PersonDetails",
  component: PersonDetails,
};

export const Basic = () => <PersonDetails person={SamplePerson} />;
Basic.storyName = "Default";