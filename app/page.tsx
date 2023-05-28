"use client"
import { BackgroundImage, BackgroundImageFixed, FooterContainer, FooterLink, GenerateQuoteButton, GenerateQuoteButtonText, GradientBackgroundContainer, QuoteGeneratorContainer, QuoteGeneratorInnerContainer, QuoteGeneratorSubTitle, QuoteGeneratorTitle, RedSpan } from '@/components/QuoteGenerator/QuoteGeneratorElements'
import CloudAndThunder from '@/assets/cloud-and-thunder.png';
import CloudWeather from '@/assets/cloudy-weather.png';
import { useState } from 'react';

export default function Home(): JSX.Element {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number>(0);
  return (
    <GradientBackgroundContainer>
      <BackgroundImage src={CloudAndThunder} height="300" alt="clound-and-thunder" />
      <BackgroundImageFixed src={CloudWeather} height="250" alt="clound-and-thunder" />

      <QuoteGeneratorContainer>
        <QuoteGeneratorInnerContainer>
          <QuoteGeneratorTitle>
            Daily Inspiration Generator
          </QuoteGeneratorTitle>
          <QuoteGeneratorSubTitle>
            Looking for a splash of inspiration? Generate a quote card with a random inspirational quote provided by <FooterLink href="https://zenquotes.io/" target="_blank" rel="noopener noreferrer">ZenQuotes API</FooterLink>.
          </QuoteGeneratorSubTitle>
          <GenerateQuoteButton>
            <GenerateQuoteButtonText onClick={null}>
              Make a Quote
            </GenerateQuoteButtonText>
          </GenerateQuoteButton>
        </QuoteGeneratorInnerContainer>
      </QuoteGeneratorContainer>

      <FooterContainer>
        <>
          Quotes Generated: {numberOfQuotes}
          <br />
          Developed with <RedSpan>♥</RedSpan> by
          <FooterLink href="https://github.com/philipkogel" target="_blank" rel="noopeener noreferrer">
            @philipkogel
          </FooterLink>
        </>
      </FooterContainer>
    </GradientBackgroundContainer>
  )
}
