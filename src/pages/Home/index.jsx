import React from 'react'
import { useEffect } from 'react'
import Section1 from '../../components/Sections/Section 1'
import Section2 from '../../components/Sections/Section 2'
import Section3 from '../../components/Sections/Section 3'
import Section4 from '../../components/Sections/Section 4'
import Section5 from '../../components/Sections/Section 5'

export default function Home() {
  useEffect(() => {
    document.title = `ZETO `
  }, [])
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  )
}
