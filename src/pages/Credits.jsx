import React from "react";
import "./Credits.css";
import Navbar from "../components/Navbar";
import { credits } from "../data/credits";
import biggerSubwayLines from "../images/biggerSubwayLines.png";

const Credits = () => {
  return (
    <div className="home-page">
      <div className="section editor-letter">
        <div className="image-behind-wrapper">
          <div className="white-box">
            <h2 className="editor-title">LETTER FROM THE EDITOR</h2>
            <p className="editor-paragraph">
              Dear Readers,
            </p>
            <p className="editor-paragraph">
            The past four years have brought historic challenges to our world and to Columbia. The widespread devastation of the wars in Gaza and Ukraine have continued to impact our campus as students, faculty, staff, and neighbors mourn and protest the violence that has impacted so many in our community. Renewed federal scrutiny of Columbia’s leadership has brought continued administrative turnover, funding crises for essential research, and uncertainty for the future of our university and its mission.
            </p>
            <p className="editor-paragraph">
            It is difficult to pin down the various qualities that will define this year’s class of graduating seniors in the years to come, but if we had to choose, we would offer one word: persistence. In the face of upheaval, loss, and doubt, the class of 2025 persisted in their determination to learn from and care for a community that, at times, felt fractured beyond recognition. 
            </p>           
            <p className="editor-paragraph">
            The class of 2025, which came to Columbia in the throes of the COVID-19 pandemic, saw its first year at Columbia marked by social distancing and a historic graduate student worker strike. In their second year as Lions, these graduates saw the first University presidential turnover in over 20 years, ushering in a new chapter in Columbia’s long, messy history. Their junior year was marked by campus protests over the war in Gaza and the largest mass arrests on our campus since 1968. Their final months on campus were defined by the reelection of Donald Trump as president, the revocation of $400 million in federal funding to  the University, the third mass arrest in just over the span of a year, and ongoing changes in University leadership. Their degrees will be the first in recent history to be signed by an acting University president as they leave Columbia in a period of change and uncertainty. And through it all, this class emerges to walk across the stage in Columbia blue.
            </p>
            <p className="editor-paragraph">
             It is our great honor to join the rest of the Columbia community in giving our heartfelt congratulations to the class of 2025. Our annual Commencement edition serves as a reminder not only of the great things Columbia’s students accomplish here in Morningside Heights, but of the achievements of its graduates in their future endeavors. On behalf of all of us at Spectator, congratulations on a remarkable milestone and good luck in your next adventure. We can’t wait to see what you do next. 
            </p>
            <p className="editor-paragraph">
            Roar, Lions, Roar,
            </p>

            <div className="editor-signatures">
              <div className="signature-block">
                <div className="signature-name">Shea Vance</div>
                <div className="signature-title">Editor in Chief</div>
              </div>
              <div className="signature-block">
                <div className="signature-name">Heather Chen</div>
                <div className="signature-title">Managing Editor</div>
              </div>
            </div>
          </div>
          <img
            src={biggerSubwayLines}
            alt="background"
            className="background-image"
          />
        </div>
      </div>

      <div className="section staff-credits">
        <div className="image-behind-wrapper">
          <div className="white-box">
            <h2 className="credits-title">Staff Who Made This Possible</h2>
            <div className="credits-flex">
              {Object.entries(credits).map(([section, members]) => (
                <div className="credit-column" key={section}>
                  <div className="credit-section">{section}</div>
                  {members.map((person, idx) => (
                    <div key={idx}>
                      {person.staff_name}, {person.title}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <img
            src={biggerSubwayLines}
            alt="background pattern"
            className="background-image"
            style={{ top: "240px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Credits;