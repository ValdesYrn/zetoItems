import React, { useEffect } from 'react'
import { BtnJenProfit } from '../../components/Buttons'
import Section4 from '../../components/Sections/Section 4'
import { PretPersonelItems } from '../../data'
import LoanPersonnel2 from '../../assets/LoanPersonnel2.png'
import {
  PretPersonelListe1,
  PretPersonelListe4,
  PretPersonelSommaireListe,
} from '../../untils/Listes'

function PretPersonel() {
  useEffect(() => {
    document.title = `ZETO - Prêt Personel`
  }, [])
  return (
    <section>
      <div className="">
        <div className=" container-fluid">
          <div className="py-4 row ">
            <div className="col-12 col-md-6 col-lg-4 ">
              <img
                src={LoanPersonnel2}
                alt="pret"
                className="w-100 h-100 rounded  "
              />
            </div>
            <div className="col-md col-ld col-12 py-4 bg-light rounded rounded-2 d-flex align-items-center">
              <div className="" style={{ fontFamily: 'Century Gothic' }}>
                <h1 className="" style={{ color: '#80eba7' }}>
                  Prêt personnel
                </h1>
                <h3 className="my-4 my-md-2">
                  Quel est l'intérêt de souscrire un prêt personnel ?
                </h3>
                <p>
                  Vous rêvez d’un voyage depuis longtemps ou vous avez besoin de
                  financer une auto toute neuve ? Vous rencontrez un petit
                  problème financier, un imprévu et vous manquez de trésorerie ?
                  Puiser dans vos économies est une possibilité mais vous
                  préférez à juste titre conserver votre épargne... Avez-vous
                  pensé au prêt personnel ? Appelé aussi crédit à la
                  consommation, vous bénéficiez d’une enveloppe budgétaire qui
                  vous aidera à financer tous vos projets sans solliciter votre
                  épargne ou vos économies.
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
                  <h2>{PretPersonelItems.title}</h2>
                  <p className="fw-">{PretPersonelItems.p1}</p>
                  {PretPersonelListe1}
                </div>
              </div>

              <div className="  my-5 bg-light p-5 rounded" id="MontantDuree">
                <div className="" style={{ fontFamily: 'Century Gothic' }}>
                  <h2>Prêt personnel : quel montant et quelle durée ?</h2>
                  <p className="mt-4">
                    Encadré par le Code de la consommation, le prêt personnel
                    vous permettra d'emprunter de 300 à 75 000 € avec des délais
                    de remboursement qui oscillent de 6 à 84 mois. Une fois vos
                    fonds débloqués par l'organisme de financement, vous
                    commencerez généralement à rembourser votre prêt 90 jours
                    après la réception des fonds et vos échéances mensuelles de
                    remboursement sont clairement indiquées sur le contrat de
                    prêt. Il est parfois possible d'obtenir un report de
                    paiement ou des pauses si vous connaissez un problème
                    financier passager. Attention une telle demande n' est pas
                    systématiquement acceptée par les organismes de crédit qui
                    fonctionnent au cas par cas.
                  </p>
                </div>
              </div>

              <div className="  my-1" id="Pieces">
                <div
                  className="rounded p-4"
                  style={{
                    fontFamily: 'Century Gothic',
                    backgroundColor: '#ffeeab',
                  }}
                >
                  <h2>Prêt personnel: quelles sont les pièces à fournir ?</h2>
                  <p className="">
                    Généralement, une proposition de prêt personnel inclut les
                    différentes pièces justificatives à fournir. Elles peuvent,
                    bien entendu, varier selon votre projet et l'organisme de
                    crédit. Voici les principales :
                  </p>
                  {PretPersonelListe4}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 ">
              <div className="" style={{ fontFamily: 'Century Gothic' }}>
                <div className="my-5">{BtnJenProfit}</div>
                <div className="my-">
                  <h2 className="text-center ">Sommaire :</h2>
                  <span className="">{PretPersonelSommaireListe}</span>
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

export default PretPersonel

/* 


<div className="  my-5" id="Avantage">
                <div className="" style={{ fontFamily: 'Century Gothic' }}>
                  <h2>Quels sont les avantages d’un prêt personnel ?</h2>
                  <p className="">
                    Les avantages de souscrire à un prêt personnel vont différer
                    d'un organisme de crédit à un autre. Voici ceux qu il faut
                    retenir :
                  </p>
                  {PretPersonelListe3}
                </div>
              </div>

              
<div className="  my-1" id="Obligation">
                <div className="" style={{ fontFamily: 'Century Gothic' }}>
                  <h2>
                    Quels éléments obligatoires figurent sur le contrat d’un
                    prêt personnel ?
                  </h2>
                  <p className="">
                    Pour vous accompagner, n'hésitez pas à faire appel à un
                    courtier en credit.
                  </p>
                  {PretPersonelListe2}
                </div>
              </div> */
