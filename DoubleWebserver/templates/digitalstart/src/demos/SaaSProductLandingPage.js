import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Hero2 as Hero} from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import {Testimonial2 as Testimonial} from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import { Footer2 as Footer} from "components/footers/FiveColumnWithBackground.js";
import heroScreenshotImageSrc from "images/hero-screenshot-1.png";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "images/iStock-1154231467.jpeg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      {/* <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            We have Amazing <HighlightedText>Service.</HighlightedText>
          </>
        }
      /> */}
      {/* <MainFeature
        subheading={<Subheading>Quality Work</Subheading>}
        imageSrc={heroScreenshotImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
      /> */}
      {/* <FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            Easy to <HighlightedText>Get Started.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      /> */}
      <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
            We Always Abide by Our <HighlightedText>Principles.</HighlightedText>
          </>
        }
        primaryButtonText="Get Started"
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Affordable",
            description: "We promise to offer you the best rate we can - at par with the industry standard.",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: BriefcaseIcon,
            title: "Professionalism",
            description: "We assure you that our templates are designed and created by professional designers.",
            iconContainerCss: tw`bg-red-300 text-red-800`
          }
        ]}
        description="And they are just two."
      />
      <Pricing
        subheading={<Subheading>Pricing</Subheading>}
        heading={
          <>
            Reasonable & Flexible <HighlightedText>Plans.</HighlightedText>
          </>
        }
        plans={[
          {
            name: "Personal",
            price: "KES 250",
            duration: "Monthly",
            mainFeature: "For Individuals",
            features: ["Fully Hosted Domain", "Basic Assistance"]
          },
          {
            name: "Business",
            price: "KES 2500",
            duration: "Monthly",
            mainFeature: "For Small Businesses",
            features: ["Fully Hosted Domain", "Backed up Servers", "Regular cybersecurity sweeps", "Priority Assistance", "24HR Support"],
            featured: true
          },
          {
            name: "Enterprise",
            price: "$57.99",
            duration: "Monthly",
            mainFeature: "For Large Companies",
            features: ["Fully Hosted Domain", "Backed up Servers", "Regular cybersecurity sweeps", "Highest Priority Assistance", "24HR Support"]
          }
        ]}
      />
      <Testimonial
        subheading={<Subheading>Testimonials</Subheading>}
        heading={
          <>
            Our Clients <HighlightedText>Love Us.</HighlightedText>
          </>
        }
        description=""
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "Hard Working & Diligent",
            quote:
              "The developers in my organization didnt seem to be able to handle the workload of my new launch but this firm definetly was. Thank you all for your hard work.",
            customerName: "Raymond Otieno",
            customerTitle: "Director, Delos Inc."
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "SOO EASY!!",
            quote:
              "For a person who couldnt even use Wix or sijui squarespace, these guys were a lifesaver",
            customerName: "Helen Wa Mumbi",
            customerTitle: "Founder, EventsNYC"
          }
        ]}
      />
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            A few frequently asked <HighlightedText>questions.</HighlightedText>
          </>
        }
        description="And their answers."
        faqs={[
          {
            question: "Do I have to pay on a monthly or yearly basis?",
            answer:
              "You can choose whether to pay on a monthly or yearly basis depending on your organizational or personal preferences, however alot of money is always saved with a yearly plan."
          },
          {
            question: "How will I recieve support?",
            answer:
              "When you sign up to purchase one of our services you will be given the contact details of one of our agents. ou can contact him or her at any time and they will get to work on whatever you need help with."
          },
          {
            question: "What kind of payment methods do you accept?",
            answer:
              "For now we accept M-Pesa but in future we will expand to paypal and visa cards for easy payment for the customer."
          }
        ]}
      />
      <GetStarted
      text="Start building your online infrastructure, the quick and easy way."
      />
      <Footer />
    </AnimationRevealPage>
  );
}
