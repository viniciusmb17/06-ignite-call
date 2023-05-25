import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'
import Image from 'next/image'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as={'h1'} size={'4xl'}>
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo
        </Text>
        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          height={400}
          alt="Calendário simbolizando aplicação em funcionamento"
          quality={100}
          priority
        />
      </Preview>
    </Container>
  )
}
