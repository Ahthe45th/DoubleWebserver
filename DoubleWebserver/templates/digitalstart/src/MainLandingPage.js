import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "components/features/VerticalWithAlternateImageAndText.js";
import Blog from "components/blogs/ThreeColSimpleWithImage.js";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import ContactUsForm from "components/forms/SimpleContactUs.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <Pricing/>
    {/* <Features /> */}
    {/* <Blog /> */}
    {/* <Testimonial /> */}
    {/* <ContactUsForm /> */}
    <Footer />
  </AnimationRevealPage>
);
