import { styled } from "@workday/canvas-kit-react";
import { Checkbox } from "@workday/canvas-kit-react/checkbox";

export const Hero = styled("div")({
  background: "#000",
  color: "#FFF",
});

const App = () => {
  return (
    <Hero>
      <h1>Hello, Universe!</h1>
      <Checkbox />
    </Hero>
  );
};

export default App;
