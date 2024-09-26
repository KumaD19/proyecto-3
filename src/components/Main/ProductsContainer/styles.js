import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, max-content));
  grid-gap: 30px;
  height: fit-content;
  justify-content: center;
  background-color: #8F9690;
  padding: 50px 0;
`;

const Hero = styled.section`
  background-color:#889489;
  padding-bottom:100px;

`

const ImageDesign = styled.img`
  width: 30%;
  height: 500px;
  border-radius: 10px;

  @media screen and (max-width: 65.5rem) {
    height: 400px;
  }

  @media screen  and (max-width:40.688rem){
    width:100%;
    height:500px;
    margin-bottom:20px;
    
  }
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 20px;
  justify-content: space-between;

  @media screen and (max-width:40.688rem){
    flex-direction:column;
  }
`;

const ImageDesignMiddle = styled.img`
  width: 30%;
  height: 500px;
  border-radius: 10px;
  transform: translateY(-15px);
  @media screen and (max-width: 65.5rem) {
    height: 400px;
  }
  @media screen  and (max-width:40.688rem){
    width:100%;
    transform: translateY(0px);
    height:500px;
    margin-bottom:20px;
    
  }
`;

const Title = styled.h1`
  letter-spacing: 2px;
  margin: 0 auto;
  width: fit-content;
  font-size: clamp(3rem, 2.5vw, 2rem);
`;

const Description = styled.p`
  font-size: clamp(1.4rem, 2.5vw, 1.8rem);
  width: fit-content;
  margin: 30px auto;
`;

export {
  Section,
  ImageDesign,
  ImageContainer,
  ImageDesignMiddle,
  Title,
  Description,
  Hero
};
