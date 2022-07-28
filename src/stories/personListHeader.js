import React from "react";
import PersonListHeader from "../components/headerPersonList";

export default {
  title: "Person Page/PersonHeader",
  component: PersonListHeader,
};

export const Basic = () => <PersonListHeader title={'Discover People'} />;

Basic.storyName = "Default";