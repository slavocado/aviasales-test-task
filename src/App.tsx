import { styled } from '@linaria/react'
import { FC } from 'react'

import { Logo } from '@components/logo/Logo'
import { FastFilterContainer as FastFilter } from '@containers/fast-filter'
import { TicketsContainer as Tickets } from '@containers/tickets'
import { TransfersFilterContainer as TransfersFilter } from '@containers/transfers-filter'
import { COLORS } from '@ts/constants/colors'

export const App: FC = () => {
  return (
    <PageContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <TwoColumnLayout>
        <TransfersFilter />
        <SecondColumn>
          <FastFilter />
          <Tickets />
        </SecondColumn>
      </TwoColumnLayout>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  color: ${COLORS.BLACK};
  background-color: ${COLORS.LIGHT_BLUE};
  padding: 40px 20px;
`
const LogoContainer = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 50px;
`

const TwoColumnLayout = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: 1fr 4fr;
  gap: 30px;
  width: 100%;
  max-width: 900px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
