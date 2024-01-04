import styled from 'styled-components'

const TopLeft = styled.div`
  position: absolute;
  top: 12vw;
  left: 12vw;
  font-family: 'Playfair Display', serif;
  font-weight: 1100;
  color: yellow;
  font-size: min(14vw, 7em);
  line-height: 0.9em;
`

const BottomLeft = styled.div`
  position: absolute;
  bottom: 6vw;
  left: 12vw;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: min(18vw, 24em);
  line-height: 0.9em;
`

const BottomRight = styled.div`
  position: absolute;
  bottom: 8vw;
  right: 8vw;
  font-family: 'Inter';
  font-weight: 400;
  line-height: 1em;
  letter-spacing: -0.01em;
  font-size: 24px;
  text-align: right;
`

const LeftMiddle = styled.div`
  position: absolute;
  bottom: 50%;
  left: 22vw;
  font-family: 'Inter';
  font-weight: 400;
  line-height: 1em;
  letter-spacing: -0.01em;
  font-size: 24px;
  transform: rotate(90deg) translate3d(50%, 0, 0);
  transform-origin: 100% 50%;
`

const Bar = styled.div`
  position: absolute;
  top: ${(props) => (props.vertical ? '0px' : '50%')};
  left: ${(props) => (props.vertical ? '50%' : '0px')};
  width: ${(props) => (props.vertical ? '2px' : '150px')};
  height: ${(props) => (props.vertical ? '150px' : '2px')};
  background: #252525;
`

const Hamburger = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 12vw;
  right: 12vw;
  & > div {
    position: relative;
    width: 24px;
    height: 2px;
    background: #252525;
    margin-bottom: 6px;
  }
`

export default function Overlay() {
  return (
    <>
      <TopLeft>
        <i>Design</i>
        <br />
        Type
      </TopLeft>
      <BottomLeft>B</BottomLeft>
      <BottomRight>
        2021
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        <br /> 
        Nam beatae corporis veritatis maiores, dicta laudantium 
        <br />
        odio officia maxime deserunt mollitia quibusdam aliquam, 
        <br />
        aperiam amet illo magni rerum nisi sit hic?
        <br />
        dev collective
      </BottomRight>
      <LeftMiddle>A flight of stairs
      2021
        <br />
        Lorem ipsum dolor, sit amet 
        <br />
        consectetur adipisicing elit.
        <br /> 
        Nam beatae corporis veritatis 
        <br />
        maiores, dicta laudantium 
        <br />
        odio officia maxime deserunt 
        <br />
        mollitia quibusdam aliquam, 
        <br />
        aperiam amet illo magni rerum 
        <br />
        nisi sit hic?
        <br />



      </LeftMiddle>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
      <Bar />
      <Bar vertical />
    </>
  )
}
