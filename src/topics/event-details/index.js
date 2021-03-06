import React from "react";
import { StyledTopics } from "../topics.styled";

export const EventDetails = () => {
  return (
    <StyledTopics>
      <section className="topics">
        <h2 className="header">Event Details</h2>
        <ul id="detailsnav">
          <li>
            <a href="#ceremoney">The Ceremoney</a>
          </li>
          <li>
            <a href="#reception">The Reception</a>
          </li>
          <li>
            <a href="#hillsboro">Travel and Accomodations</a>
          </li>
        </ul>
        <h3 id="ceremoney">The Ceremoney</h3>
        <p>
          The ceremoney will take place at St. Matthew's Church.
          <br />
          475 SE 3rd Ave, Hillsboro, Oregon 97123
          <br /> <br />
          <a
            id="stMatthewsgooglemaps"
            href="https://www.google.com/maps/place/St.+Matthew+Catholic+Church/@45.5185101,-122.9886606,17z/data=!3m1!4b1!4m5!3m4!1s0x54951aa3c9941b4f:0xbb7f68a76f2d7e86!8m2!3d45.5185101!4d-122.9864666"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Maps
          </a>
          &ensp; - &ensp;
          <a
            id="churchWebsite"
            href="https://www.stmatthewhillsboro.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            St. Matthew's Catholic Church
          </a>
        </p>
        <h3 id="reception">The Reception</h3>
        <p>
          The reception will take place at the Peterkort family rose farm.
          <br /> <br />
          <a
            id="peterkortroses"
            href="https://www.google.com/maps/place/Peterkort+Roses/@45.4343164,-122.9718975,17z/data=!3m1!4b1!4m5!3m4!1s0x549511584f6dc597:0x39f32921471f1123!8m2!3d45.4343164!4d-122.9697035"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Maps
          </a>
          &ensp; - &ensp;
          <a
            id="peterkortRosesWebsite"
            href="http://peterkortroses.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Peterkort Roses
          </a>
        </p>
        <h3 id="hillsboro">Travel and Accomodations</h3>
        <p>
          <a
            id="McMenamins"
            href="https://www.mcmenamins.com/grand-lodge"
            target="_blank"
            rel="noopener noreferrer"
          >
            McMenamins Grand Lodge
          </a>
          <br />
          3505 Pacific Ave., Forest Grove, OR
        </p>
      </section>
    </StyledTopics>
  );
};

export default EventDetails;
