import React from 'react'
import styled from 'styled-components'
import { Section2Liste } from '../../../untils/Listes'

export default function Section2() {
  const Section2Div = styled.div`
    background: radial-gradient(
      circle,
      rgba(34, 193, 195, 1) 0%,
      rgba(182, 202, 244, 1) 100%
    );
  `
  return (
    <section>
      <Section2Div className=" rounded py-2 my-2">
        <div className=" w-100 d-flex container  justify-content-center">
          <div className="row  w-100  ">{Section2Liste}</div>
        </div>
      </Section2Div>
    </section>
  )
}
