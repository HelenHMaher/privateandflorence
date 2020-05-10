import { createGlobalStyle } from "styled-components";
import roseBackground from "./photos/icons/rosebackground.jpg";

export const GlobalStyles = createGlobalStyle`


:root {
  --main-black: rgb(0, 0, 0);
  --main-white: rgb(255, 255, 255);
  --opaque-white: rgba(255, 255, 255, 0.8);
  --main-red: rgb(191, 10, 48);
  --main-blue: rgba(0, 40, 104, 0.7);
  --main-grey: rgb(241, 241, 241);
  --dark-grey: rgb(100, 100, 100);
}

a {
  color: white;
  text-decoration: none;
}

html {
  background-image: url(${roseBackground});
  background-size: 300px;
  margin: 0;
  padding: 0;
}

.backgroundContainer {
  background: var(--main-blue);
}

.container {
  font-family: Cambria, Cochin, Georgia, "Times New Roman", Times, serif;
}


.topics {
  background: var(--opaque-white);
  margin: 2rem 3.5rem;
  border-radius: 1rem;
}

.topics > p {
  padding: 0 2rem 2rem 2rem;
  text-align: justify;
}

.topics > .header {
  font-size: 3rem;
  text-align: center;
  padding-top: 2rem;
  font-family: cursive;
  color: var(--main-white);
  text-shadow: -0.5px 0.5px 0 var(--dark-grey), 1px 1px 0 var(--dark-grey),
    1px -1px 0 var(--main-grey), -0.5px -0.5px 0 var(--main-grey);
}

.rsvp {
  color: white;
  text-align: center;
}

footer {
  padding-bottom: 10px;
  padding-left: 10px;
  color: white;
}


`;
