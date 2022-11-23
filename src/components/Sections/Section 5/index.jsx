import React from 'react'
import { Section5Liste } from '../../../untils/Listes'
import { BtnJenProfit } from '../../Buttons'

export default function Section5() {
  return (
    <section>
      <div className=" mb-2 container-fluid">
        <div className="py-4">
          <div className=" ">
            <h1
              className="text-center"
              style={{ fontFamily: 'Century Gothic', fontSize: '3em' }}
            >
              Votre <span className="text-primary">satisfaction</span>, notre
              première ambition
            </h1>
          </div>
        </div>

        <div className=" my-1">
          <div className="row">{Section5Liste}</div>
        </div>
        {BtnJenProfit}
      </div>
    </section>
  )
}
