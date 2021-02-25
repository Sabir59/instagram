import React from "react";
import "./Suggestions.scss";
import RoundImage from "../shared/RoundImage/RoundImage";
import User from "./components/User/User";
import SuggestionsLinkList from "./components/SuggestionsLinkList/SuggestionsLinkList";
import AnchorLink from "../shared/Link/Link";
import CopyRight from "../shared/CopyRight/CopyRight";

const links = [
  "About",
  "Help",
  "Press",
  "API",
  "Jobs",
  "Privacy",
  "Terms",
  "Locations",
  "Top Accounts",
  "Hashtags",
  "Language",
];

const Suggestions = () => (
  <div className="Suggestions">
    <User
      userName={"sabir5_s"}
      fullName={"Sabir Nawaz"}
      photo={
        <RoundImage
          src={
            "https://images.unsplash.com/photo-1614010966237-74489a16848b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
        />
      }
      action="Switch"
    />
    <div className="Suggestions__people">
      <h2 className="Suggestions__title">Suggestions For You</h2>
      <User
        userName={"malik.muzamil"}
        fullName={"Muzamil Arslan"}
        photo={
          <RoundImage
            src={
              "https://images.unsplash.com/photo-1590756252677-8b92843273bf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8Ym95fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
            classAdded="Suggestions__photo"
          />
        }
        action="Follow"
      />
      <User
        userName={"daniel_56"}
        fullName={"Daniel Watley"}
        photo={
          <RoundImage
            src={
              "https://images.unsplash.com/photo-1604695753685-20e756f4aa61?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGJveXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
            classAdded="Suggestions__photo"
          />
        }
        action="Follow"
      />
      <User
        userName={"Selena_7s"}
        fullName={"Selena Gomez"}
        photo={
          <RoundImage
            src={
              "https://images.unsplash.com/photo-1488716820095-cbe80883c496?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
            classAdded="Suggestions__photo"
          />
        }
        action="Follow"
      />
      <User
        userName={"kashif_photographer"}
        fullName={"Kashif Afridi"}
        photo={
          <RoundImage
            src={
              "https://images.unsplash.com/photo-1603007398320-32e2373ff375?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGF0aGFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
            classAdded="Suggestions__photo"
          />
        }
        action="Follow"
      />
    </div>
    <div className="Suggestions__lfooter">
      <SuggestionsLinkList>
        {links.map((link, i) => (
          <AnchorLink key={i}>{link} . </AnchorLink>
        ))}
      </SuggestionsLinkList>
      <CopyRight classAdded="Suggestions__copyright" />
    </div>
  </div>
);

export default Suggestions;
