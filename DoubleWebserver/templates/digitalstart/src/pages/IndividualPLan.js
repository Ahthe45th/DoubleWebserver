import React from "react";
import { useParams } from "react-router-dom";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Hero2 as Hero } from "components/hero/FullWidthWithImage.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
import Footer from "components/footers/SimpleFiveColumn.js";


export default () => {
    const { item } = useParams()
    console.log(item)
    const allPlans = [
        {
          name: "Basic",
          price: "KES 3,500",
          duration: "Initial Set Up",
          mainFeature: "Suited for Personal Websites such as Portfolio sites or Personal Projects",
          features: ["350 per month"],
          description: "This is a basic package but dont doubt that it will give you everything you'll need to get started."
        },
        {
          name: "E-commerce",
          price: "KES 15,000",
          duration: "Initial Set Up",
          mainFeature: "Suited for Business Owners Seeking to Sell Online",
          features: ["2,500 per month"],
          featured: true,
          description: "This is a basic package but dont doubt that it will give you everything you'll need to get started."
        },
        {
          name: "App",
          price: "KES 50,000",
          duration: "Initial Set Up",
          mainFeature: "Suited for Groups of organizations working on a single project",
          features: ["5,000 per month"],
          description: "This is a basic package but dont doubt that it will give you everything you'll need to get started."
        },
      ]
      const theplan = allPlans.filter(obj => {
        return obj.name === item;
      });
      console.log("The plan:", theplan)
    return (
        <AnimationRevealPage>
            <Hero 
              heading={item} 
              pricing={theplan} 
              description={theplan[0].description}
              primaryActionUrl={`https://wa.me/254701488925?text=I%20would%20like%20${item}%20package%20`}
            />
            <Footer />
        </AnimationRevealPage>
    )
};
