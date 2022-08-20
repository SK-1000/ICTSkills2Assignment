import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templatePersonPage";
import PersonCredit from "../components/personCredit";

const PersonCreditPage = (props) => {
  const { state : {person, credit } } = useLocation()
  return (
    <PageTemplate person={person}>
      <PersonCredit credit={credit} />
    </PageTemplate>
  );
};

export default PersonCreditPage;