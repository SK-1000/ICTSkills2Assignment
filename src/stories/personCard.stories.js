import React from "react";
import PersonCard from "../components/personCard";
import SamplePerson from "./samplePersonData";

export default {
  title: "Person Page/PersonCard",
  component: PersonCard,
};

export const Basic = () => {
  return (
    <PersonCard
      person={SamplePerson}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SamplePerson, profile_path: undefined };
  return (
    <PersonCard
      person={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";