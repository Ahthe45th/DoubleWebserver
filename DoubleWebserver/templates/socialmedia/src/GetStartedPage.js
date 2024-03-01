import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import {Hero2 as Hero} from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "components/features/VerticalWithAlternateImageAndText.js";
import Blog from "components/blogs/ThreeColSimpleWithImage.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import ContactUsForm from "components/forms/SimpleContactUs.js";
import Footer from "components/footers/SimpleFiveColumn.js";

// export default () => (
//   <AnimationRevealPage>
//     <Hero />
//     <Pricing/>
//     <Footer />
//   </AnimationRevealPage>
// );


export default () => (
  <AnimationRevealPage>
    <Hero/>
    <Pricing heading="" subheading=""/>
    <Footer />
  </AnimationRevealPage>
);