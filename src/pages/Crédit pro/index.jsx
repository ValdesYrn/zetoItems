import React, { useEffect } from 'react'
import styled from 'styled-components'
import { BtnJenProfit } from '../../components/Buttons'
import Section4 from '../../components/Sections/Section 4'
import { CreditProItems } from '../../data'
import LoanPro from '../../assets/LoanPro.jpg'
import { CrediProSommaireListe, CreditProListe } from '../../untils/Listes'

function CreditPro() {
  useEffect(() => {
    document.title = `ZETO - Crédit Pro`
  }, [])

  const SPANspan = styled.span`
    &: hover {
       {
        animation: blinker 1s linear infinite;
      }

      @keyframes blinker {
        50% {
          opacity: 0;
        }
      }
    }
  `
  return (
    <section>
      <div>
        <div className=" container-fluid">
          <div className="py-4 row ">
            <div className="col-12 col-md-6 col-lg-4 ">
              <img
                src={LoanPro}
                alt="Crédit Pro"
                className="w-100 h-100 rounded  "
              />
            </div>
            <div className="col-md col-lg col-12 py-4 bg-light rounded rounded-2 d-flex align-items-center">
              <div className=" " style={{ fontFamily: 'Century Gothic' }}>
                <h1 className="" style={{ color: '#0094ff' }}>
                  Crédit Pro
                </h1>
                <h3 className="my-4 my-md-2 ">
                  Vous avez un projet pour créer ou développer votre projet.?
                </h3>
                <p>
                  Nos conseillers spécialisés "Finance Canada" Pro vous
                  accompagnent et vous conseillent pour vous permettre d'obtenir
                  les conditions financières les plus favorables auprès de
                  nous.Nous confié la demande de vos prêts professionnels ,c'est
                  la certitude d'obtenir la solution la plus adaptée aux besoins
                  et contraintes de votre projet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-4 container-fluid">
          <div className="row  align-items-center">
            <div className="col-lg-8 col-12 ">
              <div className="  my-1" id="Avantage">
                <div className=" " style={{ fontFamily: 'Century Gothic' }}>
                  <h2>{CreditProItems.title}</h2>
                  <span className="fw-">
                    <p>
                      Nous confié la demande de vos prêts professionnels, c'est
                      la garantie d'un avis objectif sur votre projet et la
                      certitude d'obtenir la solution la plus adaptée aux
                      besoins et contraintes de votre projet.
                    </p>

                    <p>
                      Nos agents vous conseilleront et accompagneront dans le
                      montage de vos dossiers de prêt professionnels mais aussi
                      dans les dossiers de :{CreditProListe}
                    </p>
                  </span>
                </div>
              </div>

              <div className="my-1  bg-light p-5 rounded" id="Souscription">
                <div className="" style={{ fontFamily: 'Century Gothic' }}>
                  <h2>Comment faire pour souscrire ?</h2>
                  <span className="">
                    <p>
                      Souscrire un crédit pro en ligne est très simple. Et pour
                      vous rendre la tâche encore plus facile, "Finance Canada"
                      vous propose d'en discuter directement avec un conseil qui
                      pourra vous repondre convenablement, de façon très précise
                      pa rapport à vos besoin et aussi très rapidement en
                      cliquant sur le bouton{' '}
                      <SPANspan className="fw-bold mx-1">
                        {' '}
                        FAIRE MA DEMANDE
                      </SPANspan>{' '}
                      <span className="d-none d-lg-block">
                        situé sur votre droite.
                      </span>
                      <span className="d-none d-sm-block d-lg-none">
                        situé un peu plus bas.
                      </span>
                    </p>

                    <p>
                      Vous l'aurez compris, souscrire un crédit express en ligne
                      n'a jamais été aussi simple. Quel que soit votre besoin,
                      n'hésitez pas à vous rapprocher des experts en crédit de
                      "Finance Canada" lors de votre recherche de crédit : nos
                      équipes vous aideront dans vos démarches et se tiennent
                      prêts à répondre à toutes vos questions. il ne vous reste
                      plus qu'à remplir notre formulaire pour souscrire votre
                      crédit express en ligne !
                    </p>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 ">
              <div className="" style={{ fontFamily: 'Century Gothic' }}>
                <div className="my-5">{BtnJenProfit}</div>
                <div className="my-">
                  <h2 className="text-center">Sommaire :</h2>
                  <span className="">{CrediProSommaireListe}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Section4 />
      </div>
    </section>
  )
}

export default CreditPro
