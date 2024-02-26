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
          name: "Silver",
          price: "KES 5,000",
          duration: "Set Up",
          mainFeature: "Suited for Beginners and Small Businesses",
          features: ["1 Video AD", "Facebook Social Media Setup", "Instagram Social Media Setup"],
          description: "This is a basic package but dont doubt that it will give you everything you'll need to get started."
        },
        // {
        //   name: "Business",
        //   price: "$37.99",
        //   duration: "Monthly",
        //   mainFeature: "Suited for Production Websites",
        //   features: ["60 Templates", "8 Landing Pages", "22 Internal Pages", "Priority Assistance"],
        //   featured: true,
        // },
        {
          name: "Gold",
          price: "KES 7,500",
          duration: "Set Up",
          mainFeature: "Suited for More Advanced Enterprises",
          features: ["1 Video AD", "Facebook Social Media Setup", "Instagram Social Media Setup", "Sales Material Development"],
          description:"This is a basic package but dont doubt that it will give you everything you'll need to get started."
        },
      ];
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
              primaryActionUrl={`https://wa.me/254759728957?text=I%20would%20like%20${item}%20package%20`}
            />
            <Footer />
        </AnimationRevealPage>
    )
};
