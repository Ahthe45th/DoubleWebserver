import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryLink as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithPaddingMeh as ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob } from "images/svg-decorator-blob-6.svg";

const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-2`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const PlansContainer = tw.div`flex justify-center flex-col lg:flex-row items-center lg:items-stretch relative`;
const Plan = styled.div`
  ${tw`w-full max-w-sm mt-4 lg:mr-8 lg:last:mr-0 text-center px-8 rounded-lg shadow relative pt-2 text-gray-900 bg-white flex flex-col`}
  .planHighlight {
    ${tw`rounded-t-lg absolute top-0 inset-x-0 h-2`}
  }

  ${props =>
    props.featured &&
    css`
      background: rgb(100,21,255);
      background: linear-gradient(135deg, rgba(100,21,255,1) 0%, rgba(128,64,252,1) 100%);
background: rgb(85,60,154);
background: linear-gradient(135deg, rgba(85,60,154,1) 0%, rgba(128,90,213,1) 100%);
background: rgb(76,81,191);
background: linear-gradient(135deg, rgba(76,81,191,1) 0%, rgba(102,126,234,1) 100%);
      ${tw`bg-primary-500 text-gray-100`}
      .planHighlight {
        ${tw`hidden`}
      }
      .duration {
        ${tw`text-gray-200!`}
      }
      ${PlanFeatures} {
        ${tw`border-indigo-500`}
      }
      .feature:not(.mainFeature) {
        ${tw`text-gray-300!`}
      }
      ${BuyNowButton} {
        ${tw`bg-gray-100 text-primary-500 hocus:bg-gray-300 hocus:text-primary-800`}
    `}
  ${props =>
    props.featured2 &&
    css`
    background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
    radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
      ${tw`bg-white text-gray-100`}
      .planHighlight {
        ${tw`hidden`}
      }
      .duration {
        ${tw`text-gray-200!`}
      }
      ${PlanFeatures} {
        ${tw`border-gray-100`}
      }
      .feature:not(.mainFeature) {
        ${tw`text-gray-300!`}
      }
      ${BuyNowButton} {
        ${tw`bg-gray-900 text-black hocus:bg-gray-300 hocus:text-primary-800`}
  `}
  ${props =>
    props.featured3 &&
    css`
    background:
  linear-gradient(
    -72deg,
    #dedede,
    #ffffff 16%,
    #dedede 21%,
    #ffffff 24%,
    #454545 27%,
    #dedede 36%,
    #ffffff 45%,
    #ffffff 60%,
    #dedede 72%,
    #ffffff 80%,
    #dedede 84%,
    #a1a1a1
  );
      ${tw`bg-white text-gray-900`}
      .planHighlight {
        ${tw`hidden`}
      }
      .duration {
        ${tw`text-gray-900!`}
      }
      ${PlanFeatures} {
        ${tw`border-gray-900`}
      }
      .feature:not(.mainFeature) {
        ${tw`text-gray-900!`}
      }
      ${BuyNowButton} {
        ${tw`bg-gray-900 text-white hocus:bg-gray-300 hocus:text-primary-800`}
  `}
`;

const PlanHeader = styled.div`
  ${tw`flex flex-col uppercase leading-relaxed py-8`}
  .name {
    ${tw`font-bold text-xl`}
  }
  .price {
    ${tw`font-bold text-4xl sm:text-5xl my-1`}
  }
  .duration {
    ${tw`text-gray-500 font-bold tracking-widest`}
  }
`;
const PlanFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-8 py-8 border-t-2 border-b-2 flex-1`}
  .feature {
    ${tw`mt-5 first:mt-0 font-medium`}
    &:not(.mainFeature) {
      ${tw`text-gray-600`}
    }
  }
  .mainFeature {
    ${tw`text-xl font-bold tracking-wide`}
  }
`;

const PlanAction = tw.div`px-4 sm:px-8 xl:px-16 py-8`;
const BuyNowButton = styled(PrimaryButtonBase)`
  ${tw`rounded-full uppercase tracking-wider w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
`;

const DecoratorBlob = styled(SvgDecoratorBlob)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-1/2 translate-y-1/2`}
`;


export default ({
  subheading = "Pricing",
  heading = "Flexible Plans.",
  description = "",
  plans = null,
  primaryButtonText = "Buy Now"
}) => {
  const defaultPlans = [
    {
      name: "Silver",
      price: "KES 5,000",
      duration: "Set Up",
      mainFeature: "Suited for Beginners and Small Businesses",
      features: ["1 Video AD", "Facebook Social Media Setup", "Instagram Social Media Setup"],
      featured3: true
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
      featured2: true
    },
  ];

  if (!plans) plans = defaultPlans;

  const highlightGradientsCss = [
    css`
    background: rgb(255, 255, 255);
    background-image: linear-gradient(115deg, #000000, #000000, #000000, #000000, #000000);
    `,
    css`
      background: rgb(255, 255, 255);
      background-image: linear-gradient(115deg, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff);
    `,
    css`
      background: rgb(245, 101, 101);
      background: linear-gradient(115deg, rgba(245, 101, 101, 1) 0%, rgba(254, 178, 178, 1) 100%);
    `
  ];

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeaderContainer>
        <PlansContainer>
          {plans.map((plan, index) => (
            <Plan key={index} featured={plan.featured} featured2={plan.featured2} featured3={plan.featured3}>
              {!plan.featured && <div className="planHighlight" css={highlightGradientsCss[index % highlightGradientsCss.length]} />}
              <PlanHeader>
                <span className="name">{plan.name}</span>
                <span className="price">{plan.price}</span>
                <span className="duration">{plan.duration}</span>
              </PlanHeader>
              <PlanFeatures>
                <span className="feature mainFeature">{plan.mainFeature}</span>
                {plan.features.map((feature, index) => (
                  <span key={index} className="feature">
                    {feature}
                  </span>
                ))}
              </PlanFeatures>
              <PlanAction>
                <BuyNowButton css={!plan.featured && highlightGradientsCss[index]} href={"/plans/"+plan.name}>{primaryButtonText}</BuyNowButton>
              </PlanAction>
            </Plan>
          ))}
          <DecoratorBlob/>
        </PlansContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};

export function Pricing2 ({
  subheading = "Pricing",
  heading = "Flexible Plans.",
  description = "",
  plans = null,
  primaryButtonText = "Buy Now"
}) {
  const defaultPlans = [
    {
      name: "Silver",
      price: "KES 5,000",
      duration: "Set Up",
      mainFeature: "Suited for Beginners and Small Businesses",
      features: ["1 Video AD", "Facebook Social Media Setup", "Instagram Social Media Setup"],
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
    },
  ];

  if (!plans) plans = defaultPlans;

  const highlightGradientsCss = [
    css`
      background: rgb(56, 178, 172);
      background: linear-gradient(115deg, rgba(56, 178, 172, 1) 0%, rgba(129, 230, 217, 1) 100%);
    `,
    css`
      background: rgb(56, 178, 172);
      background-image: linear-gradient(115deg, #6415ff, #7431ff, #8244ff, #8e56ff, #9a66ff);
    `,
    css`
      background: rgb(245, 101, 101);
      background: linear-gradient(115deg, rgba(245, 101, 101, 1) 0%, rgba(254, 178, 178, 1) 100%);
    `
  ];

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeaderContainer>
        <PlansContainer>
          {plans.map((plan, index) => (
            <Plan key={index} featured={plan.featured}>
              {!plan.featured && <div className="planHighlight" css={highlightGradientsCss[index % highlightGradientsCss.length]} />}
              <PlanHeader>
                <span className="name">{plan.name}</span>
                <span className="price">{plan.price}</span>
                <span className="duration">{plan.duration}</span>
              </PlanHeader>
              <PlanFeatures>
                <span className="feature mainFeature">{plan.mainFeature}</span>
                {plan.features.map((feature, index) => (
                  <span key={index} className="feature">
                    {feature}
                  </span>
                ))}
              </PlanFeatures>
              <PlanAction>
                {subheading
                  ? <BuyNowButton css={!plan.featured && highlightGradientsCss[index]} href={"/plans/"+plan.name}>{primaryButtonText}</BuyNowButton>
                  : <BuyNowButton css={!plan.featured && highlightGradientsCss[index]} href={`https://wa.me/254759728957?text=I%20would%20like%20${plan.name}%20package%20`}>{primaryButtonText}</BuyNowButton>
                }
              </PlanAction>
            </Plan>
          ))}
          <DecoratorBlob/>
        </PlansContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
