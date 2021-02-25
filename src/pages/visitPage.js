import React from "react";
import TemplateMain from "../layouts/LayoutMain/LayoutMain";
import BlueBanner from "../shared/BlueBanner/BlueBanner";
import TemplateMockup from "../layouts/TemplateMockup/TemplateMockup";
import Navigation from "../Navigation/Navigation";
import MobileMockup from "../shared/MobileMockup/MobileMockup";
import ContinueWith from "../ContinueWith/ContinueWith";

export default function HomePage() {
  return (
    <TemplateMain
      header={<BlueBanner />}
      main={
        <TemplateMockup>
          <MobileMockup />
          <ContinueWith />
        </TemplateMockup>
      }
      footer={<Navigation />}
    />
  );
}
