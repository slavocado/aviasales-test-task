import { styled } from '@linaria/react'
import { Colors } from '@styles/colors'

export const Ticket = () => {
  return (
    <>
      <TicketContainer></TicketContainer>
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
`
