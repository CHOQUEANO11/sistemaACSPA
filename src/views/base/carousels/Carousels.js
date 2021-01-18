import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CCol
} from '@coreui/react'
import foto01 from '../../../assets/img01.jpeg'
import foto02 from '../../../assets/img02.jpeg'
import foto03 from '../../../assets/img03.jpeg'


const Carousels = () => {
  
  return (
      <CCol xs="12">
        <CCard style={{backgroundColor: '#7159c1'}}>
          <CCardHeader style={{textAlign: 'center', fontSize: 20}}>
            Trabalhando para oferecer o melhor para você!
          </CCardHeader>
          <CCardBody>
            <CCarousel animate autoSlide={3000}>
              <CCarouselIndicators/>
              <CCarouselInner>
                <CCarouselItem>
                  <img  style={{width: '100%', height: '500px'}} src={foto01} alt="slide 1"/>
                  <CCarouselCaption><h3>TEXTO</h3><p>Texto 01</p></CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img style={{width: '100%', height: '500px'}} src={foto02} alt="slide 2"/>
                  <CCarouselCaption><h3>TEXTO</h3><p>Texto 02</p></CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img style={{width: '100%', height: '500px'}} src={foto03} alt="slide 3"/>
                  <CCarouselCaption><h3>TEXTO</h3><p>Texto 03</p></CCarouselCaption>
                </CCarouselItem>
              </CCarouselInner>
              <CCarouselControl direction="prev"/>
              <CCarouselControl direction="next"/>
            </CCarousel>
          </CCardBody>
        </CCard>
      </CCol>
  )
}

export default Carousels
