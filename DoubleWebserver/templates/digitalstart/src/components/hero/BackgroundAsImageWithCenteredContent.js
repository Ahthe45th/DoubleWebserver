import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-5 text-sm sm:text-base sm:mt-5 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline w-full`;
const PrimaryActionGreen = tw.button`rounded-full px-8 py-3 mt-5 text-sm sm:text-base sm:mt-5 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-purple-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline w-full`;
const PrimaryActionLink = tw.a`rounded-full px-8 py-3 mt-5 text-sm sm:text-base sm:mt-5 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-green-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline w-full lg:mx-6 lg:my-3`;

export default function HeroApplicationForm() {
  const [email, setEmail] = React.useState("")
  const [phonenumber, setPhoneNumber] = React.useState("")
  const [businessname, setBusinessname] = React.useState("")
  const [issubmitting, setIsSubmitting] = React.useState(false)

  const theurl = "/";
  function submitform() {
    setIsSubmitting(true)
    let data = {
      email:email,
      phonenumber:phonenumber,
      businessname:businessname
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

    fetch(theurl, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('Recieved data.')
      })
      .catch(error => {
        alert('There was an error!', error);
      });
  }
  const navLinks = [
    <NavLinks key={1}>
      {/* <NavLink href="#">
        About
      </NavLink>
      <NavLink href="#">
        Blog
      </NavLink>
      <NavLink href="#">
        Locations
      </NavLink> */}
      <NavLink href="#">
        Pricing
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/#">
        Contact Us
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
              Get your dream site, no effort required
          </Heading>
          
          <div class="grid grid-cols-1 md:grid-cols-2 mt-5">
              <div>
                <p class="text-white lg:px-6 lg:py-3">Please put in the following information, once your done you will be contacted shortly by one of our agents.</p>
                <p class="text-white lg:px-6 lg:py-3 mb-4">Alternatively to contact us via whatsapp, please click on the link below:</p>
                <PrimaryActionLink href="/">Whatsapp</PrimaryActionLink>
              </div>
              <div class="mt-2 mb-1 w-full">
                <input class="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Phone Number:" onChange={(e) => setPhoneNumber(e.target.value)}/>
                <input class="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Email:" onChange={(e) => setEmail(e.target.value)}/>
                <input class="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Business name:" onChange={(e) => setBusinessname(e.target.value)}/>
                {issubmitting
                  ? <PrimaryActionGreen>Submitting info</PrimaryActionGreen>
                  : <PrimaryAction onClick={submitform}>Submit</PrimaryAction>
                }
              </div> 
          </div> 
        </Content>
      </HeroContainer>
    </Container>
  );
};
