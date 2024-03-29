import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

import HeroImage from "images/hero/MainHero.jpeg";
import { useNavigate } from 'react-router-dom';

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-900 hover:text-primary-500`}
  }
`;

const StyledHeader2 = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-900 hover:border-gray-300 hover:text-gray-900`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-900 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("${HeroImage}");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-25`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col -mb-10`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const Text = styled.p`
  ${tw`text-lg text-center sm:text-xl lg:text-lg xl:text-xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-5 text-sm sm:text-base lg:text-2xl sm:mt-5 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline w-1/2`;
const PrimaryActionGreen = tw.button`rounded-full px-8 py-3 mt-5 text-sm sm:text-base sm:mt-5 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-purple-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline w-full`;

export default function HeroApplicationForm() {
  const navigate = useNavigate();
  const navLinks = [
    // <NavLinks key={1}>
    //   <NavLink href="#">
    //     About
    //   </NavLink>
    //   <NavLink href="#">
    //     Blog
    //   </NavLink>
    //   <NavLink href="#">
    //     Locations
    //   </NavLink>
    //   <NavLink href="#">
    //     Pricing
    //   </NavLink>
    // </NavLinks>,
    // <NavLinks key={2}>
    //   <PrimaryLink href="/#">
    //     Hire Us
    //   </PrimaryLink>
    // </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          {/* <Heading>
              Social Media Solutions
          </Heading> */}
          {/* <Text>Getting your digital infrstructure up and running has and will never be this easy.</Text> */}
          <PrimaryAction onClick={() => navigate('/getstarted')}>Get Started</PrimaryAction>
        </Content>
      </HeroContainer>
    </Container>
  );
};

export function Hero2(props) {
  const navLinks = [
    // <NavLinks key={1}>
    //   <NavLink href="#">
    //     About
    //   </NavLink>
    //   <NavLink href="#">
    //     Blog
    //   </NavLink>
    //   <NavLink href="#">
    //     Locations
    //   </NavLink>
    //   <NavLink href="#">
    //     Pricing
    //   </NavLink>
    // </NavLinks>,
    // <NavLinks key={2}>
    //   <PrimaryLink href="/#">
    //     Hire Us
    //   </PrimaryLink>
    // </NavLinks>
  ];

  return (
      <HeroContainer>
        <StyledHeader2 links={navLinks} />
      </HeroContainer>
  );
};
