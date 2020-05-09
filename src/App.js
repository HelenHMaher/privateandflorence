import React, { useState } from "react";
//import "./App.css";
import { GlobalStyles } from "./global";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Burger, Menu } from "./components";
import OurStory from "./topics/our-story";
import Welcome from "./welcome";
import OurWedding from "./topics/our-wedding";
import EventDetails from "./topics/event-details";
import Rsvp from "./rsvp";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className="backgroundContainer">
          <div className="container">
            {/*<Welcome />

            <OurWedding />

            <EventDetails />

            <OurStory />

            <Rsvp />*/}

            <footer>
              <p>2020 Helen Maher</p>
              <a href="https://www.freepik.com/free-photos-vectors/pattern">
                Pattern vector created by lukasdedi - www.freepik.com
              </a>
            </footer>
            <div>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            </div>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
