import { styled } from '@linaria/react'
import { Colors } from '@ts/enums/colors'
import { Ticket } from '@ts/types/ticket'
import { getHHMMfromMinutes, getTimeInterval } from 'helpers'
import { FC } from 'react'
import s7Logo from '@assets/images/seven-logo.png'

export const TicketComponent: FC<Ticket> = ({ price, segments }) => {
  return (
    <>
      <TicketContainer>
        <Row className="mb20">
          <Price> {price} P</Price>
          <img src={s7Logo} alt="S seven logo" />
        </Row>

        {segments.map((segment, index) => (
          <Row key={index}>
            <InfoBlock>
              <InfoName>
                {segment.origin + ' - ' + segment.destination}
              </InfoName>
              <InfoData>
                {getTimeInterval(segment.date, segment.duration)}
              </InfoData>
            </InfoBlock>

            <InfoBlock>
              <InfoName>В пути</InfoName>
              <InfoData>{getHHMMfromMinutes(segment.duration)}</InfoData>
            </InfoBlock>

            <InfoBlock>
              <InfoName>
                {segment.stops.length === 0 ? (
                  <span>Нет пересадок</span>
                ) : (
                  <span>Пересадки</span>
                )}
              </InfoName>
              <InfoData>
                {segment.stops.map((stop, index) => (
                  <span key={index}>{stop} </span>
                ))}
              </InfoData>
            </InfoBlock>
          </Row>
        ))}
      </TicketContainer>
    </>
  )
}
const TicketContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 180px;
  width: 100%;
  background-color: ${Colors.white};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;

  &.mb20 {
    margin-bottom: 20px;
  }
`

const Price = styled.span`
  font-size: 24px;
  color: ${Colors.blue};
  margin-top: 5px;
`

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 140px;

  @media (max-width: 520px) {
    min-width: 0;
  }
`

const InfoName = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${Colors.textGray};
  margin-bottom: 5px;
`

const InfoData = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${Colors.black};
`
