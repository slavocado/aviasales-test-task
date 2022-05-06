import { FC } from 'react'
import { styled } from '@linaria/react'
import { Logo } from '@components/logo/Logo'
import { Colors } from '@ts/enums/colors'
import { TransfersFilterContainer as TransfersFilter } from '@containers/transfers-filter'
import { FastFilterContainer as FastFilter } from '@containers/fast-filter'
import { TicketsContainer as Tickets } from '@containers/tickets'

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
  color: ${Colors.black};
  background-color: ${Colors.lightBlue};
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
