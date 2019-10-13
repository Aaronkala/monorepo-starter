import React from "react"
import { render, cleanup } from "@testing-library/react"

import { Button } from "./DefaultButtons"

describe(" Ui", () => {
  afterEach(cleanup)

  it("should render successfully", () => {
    const { baseElement } = render(<Button />)
    expect(baseElement).toBeTruthy()
  })
})
