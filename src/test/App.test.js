import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import NavDropDown from "../components/Header/NavDropDown/NavDropDown";
import List from "../components/Filter/FilterButtons/List";

test("Allow users to click Filter buttons", () => {
  const { getByText } = render(
    <List style={"style"} name={"Best"}>
      Best
    </List>
  );

  const button = getByText("Best");
  fireEvent.click(button);
});
