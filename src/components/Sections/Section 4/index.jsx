import React from 'react'
import styled from 'styled-components'
import { Section4Liste } from '../../../untils/Listes'
import { BtnJenProfit } from '../../Buttons'

export default function Section4() {
  const Section4Div = styled.div`
    background: linear-gradient(
      0deg,
      rgba(22, 158, 113, 0.6082808123249299) 32%,
      rgba(182, 202, 244, 1) 99%
    );
  `

  const Div2 = styled.div`
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    @keyframes floating {
      from {
        transform: translate(0, 0px);
      }
      65% {
        transform: translate(0, 5px);
      }
      to {
        transform: translate(0, -0px);
      }
    }
  `
  return (
    <section>
      <Section4Div className=" rounded container-fluid  bg-light py-4">
        <Div2 className="row  justify-content-center d-flex">
          {Section4Liste}
        </Div2>
        {BtnJenProfit}
      </Section4Div>
    </section>
  )
}
