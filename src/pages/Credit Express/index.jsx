import React, { useEffect } from 'react'
import { BtnJenProfit } from '../../components/Buttons'
import Section4 from '../../components/Sections/Section 4'
import { CreditExpressItems } from '../../data'
import { CrediExpressSommaireListe } from '../../untils/Listes'
import LoanExpress from '../../assets/LoanExpress.jpg'
import styled from 'styled-components'

function CreditExpress() {
  useEffect(() => {
    document.title = `Finance Canada - Crédit express`
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
      <div className="">
        <div className=" container-fluid">
          <div className="py-4 row ">
            <div className="col-12 col-md-6 col-lg-4 ">
              <img
                src={LoanExpress}
                alt="pret"
                className="w-100 h-100 rounded  "
              />
            </div>
            <div className="col-md col-lg col-12 py-4 bg-light rounded rounded-2 d-flex align-items-center">
              <div className=" " style={{ fontFamily: 'Century Gothic' }}>
                <h1 className="" style={{ color: '#0094ff' }}>
                  Crédit express
                </h1>
                <h3 className="my-4 my-md-2 ">
                  Crédit express en ligne : pour qui, pourquoi, comment ?
                </h3>
                <p>
                  Il peut arriver que vous ayez besoin d’une trésorerie
                  rapidement ou des dépenses imprévues, mais que votre situation
                  ne permette pas de réaliser un emprunt classique auprès de
                  votre banquier ! Entre des revenus trop faibles, l’absence
                  d’un apport personnel, des situations financières ou
                  professionnelles instables, ou encore une demande urgente qui
                  ne permet pas de se conformer aux délais d’un organisme
                  prêteur classique, faire une demande de crédit en ligne rapide
                  est parfois la seule solution. Nous vous dévoilons ici comment
                  obtenir un prêt d’argent rapidement et facilement avec
                  "Finance Canada" !
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-4 container-fluid">
          <div className="row  align-items-center">
            <div className="col-lg-8 col-12 ">
              <div className="  my-1" id="Definition">
                <div className=" " style={{ fontFamily: 'Century Gothic' }}>
                  <h2>{CreditExpressItems.title}</h2>
                  <span className="fw-">
                    <p>
                      Pour financer un projet, le crédit à la consommation est
                      une solution à la portée de tous, sous certaines
                      conditions. De nos jours, faire un crédit en ligne est
                      l'option privilégiée des consommateurs : la crise
                      sanitaire “aidant”, les organismes de crédit et
                      établissements bancaires classiques sont devenus plus
                      frileux lorsqu'il s'agit d'accorder un prêt à la
                      consommation.
                    </p>

                    <p>
                      Prendre un crédit, et plus particulièrement un crédit en
                      ligne, est relativement simple : il s'agit de remplir un
                      formulaire détaillé sur le site web de l'organisme choisi,
                      et d'y renseigner votre situation personnelle,
                      professionnelle et financière. Ces éléments permettent à
                      l'établissement prêteur en question d'évaluer vos besoins
                      et d'étudier vos capacités de remboursement.
                    </p>

                    <p>
                      Un prêt en ligne se différencie ainsi du crédit classique
                      par sa rapidité d'exécution, ses formalités simplifiées,
                      son taux annuel généralement très attractif, et un suivi
                      de votre dossier en temps réel, par différents supports,
                      comme les mails ou les SMS.
                    </p>

                    <p>
                      D'autre part, si ce type de prêt se différencie d'un
                      crédit classique, c'est aussi pour le déblocage des fonds
                      plus rapide à obtenir qu'en passant par un organisme
                      prêteur classique, soit environ 48 heures après l'accord
                      de principe dans la plupart des cas et le delai légal de
                      rétractation si applicable. Un avantage colossal pour les
                      besoins urgents et aucun besoin de se justifier sur
                      l'utilisation des fonds !
                    </p>

                    <p>
                      De plus, l'avantage de souscrire un crédit express est
                      qu'il est possible de procéder à un remboursement anticipé
                      en profitant de pénalités réduites, ce qui n'est pas le
                      cas de certains organismes financiers.
                    </p>
                  </span>
                </div>
              </div>

              <div className="my-1  bg-light p-5 rounded" id="Souscription">
                <div className="" style={{ fontFamily: 'Century Gothic' }}>
                  <h2>Comment faire pour souscrire ?</h2>
                  <span className="">
                    <p>
                      Souscrire un crédit express en ligne est très simple. Et
                      pour vous rendre la tâche encore plus facile, "Finance
                      Canada" vous propose d'en discuter directement avec un
                      conseil qui pourra vous repondre convenablement, de façon
                      très précise pa rapport à vos besoin et aussi très
                      rapidement en cliquant sur le bouton{' '}
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
                  <span className="">{CrediExpressSommaireListe}</span>
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

export default CreditExpress

/*<div className="  my-5 bg-light p-5 rounded" id="AQuiSadresse">
                <div className="" style={{ fontFamily: 'Century Gothic' }}>
                  <h2> À qui s'adresse le crédit express en ligne ?</h2>
                  <span className="mt-4">
                    <p>
                      Contracter un crédit en ligne est envisageable par toute
                      personne qui a un besoin urgent de trésorerie, quel que
                      soit le motif. Cela peut être pour effectuer des travaux
                      dans son logement, acheter un nouveau véhicule comme une
                      voiture ou une moto, ou encore obtenir une réserve
                      d'argent pour faire face aux imprévus. Si un fichage FICP
                      peut vous empêcher d'obtenir un crédit, différents
                      organismes ont développé des offres qui permettent à un
                      client interdit bancaire de faire une demande de prêt
                      personnel.
                    </p>

                    <p>
                      Le crédit express en ligne est destiné aux personnes
                      majeures, dont la résidence fiscale est en France,
                      manifestant un besoin d'argent dans des délais rapides.
                      Les organismes qui le proposent sont de plus en plus
                      nombreux et s'adressent à tous les profils de
                      consommateurs. Pourtant, tous ces organismes ne se valent
                      pas et il est parfois plus avantageux de passer par un
                      courtier en crédit comme "Finance Canada", qui peut en un temps
                      record, comparer les différentes offres de prêt et vous
                      soumettre les plus avantageuses.
                    </p>

                    <p>
                      Que vous ayez besoin de rénover votre logement, d’acheter
                      une voiture, partir en vacances ou encore célébrer un
                      évènement important, vous pouvez faire votre demande de
                      crédit rapide en quelques clics. Toutefois, il est
                      important de garder en mémoire qu'un crédit est destiné à
                      être remboursé : la souscription de crédit s'adresse aux
                      personnes qui justifient des capacités de remboursement
                      suffisantes. Vous aurez ainsi davantage de chances de voir
                      votre prêt accepté si votre dossier mentionne un CDI et un
                      taux d'endettement bas.
                    </p>

                    <p>
                      Avant de procéder à une quelconque démarche, vous pouvez
                      par ailleurs réaliser une simulation à l'aide de notre
                      simulateur de crédit en ligne. "Finance Canada" vous propose à ce
                      titre un outil pratique pour simuler en quelques instants
                      un éventuel crédit : taux d'intérêt, durée du prêt,
                      assurance facultative, montant des mensualités et coût
                      total du crédit, toutes les informations sont à votre
                      disposition pour simuler votre prêt personnel.
                    </p>
                  </span>
                </div>
              </div>*/
