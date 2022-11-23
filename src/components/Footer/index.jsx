import React from 'react'
import { Colors } from '../../untils/Colors'
import {
  FooterNosOffresListe,
  FooterNosPartenairesListe,
} from '../../untils/Listes'

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: Colors.footerbgColor,
      }}
      className="bg-gradient text-white mb-md-0 mb-5"
    >
      <div className="container-fluid">
        <div className=" row align-items-center ">
          <div className="col-6 col-md py-1 ">
            <div className=" text-start text-md-center">
              <h4>Nos offres</h4>
              <div>{FooterNosOffresListe}</div>
            </div>
          </div>

          <div className="col-6 col-md py-1 my-4">
            <div className=" px-2">
              <h4 className="text-start text-md-center">Nos partenaires</h4>
              {FooterNosPartenairesListe}
            </div>
          </div>

          <div className="col-12 col-md py-1 ">
            <div className=" text-start text-md-center">
              <h4 className="">AIDE ET CONTACT</h4>
              <h6 className="fw-light">Du lundi au vendredi de 10h à 18h</h6>
              <h6 className="fw-light">
                01 45 61 99 54 : Prix d'un appel local
              </h6>
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-6 text-center">
              <div className="py-2 fw-lighter">
                <span>© 2022 - Finance Canada - Tous droits reservés</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
