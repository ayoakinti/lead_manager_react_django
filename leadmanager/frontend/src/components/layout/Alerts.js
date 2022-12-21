import React, { Fragment, useEffect } from "react";
import { useAlert } from "react-alert";

export default function Alerts() {
  const alert = useAlert();

  useEffect(() => {
    alert.show("Oh look, an alert!");
  }, []);
  return <Fragment></Fragment>;
}
