import styled from 'styled-components';
import { colors } from './colors';
import { responsive } from './responsive';

export const Outer = styled.div`
  margin-bottom: 30px;
  max-width: 1600px;
  padding: 0 0;
  margin: 0 auto;
  display: block;
  min-height: 75vh;
  ${responsive.smAndLess} {
    padding: 0 1rem;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  padding: 100px 50px 50px;
  max-width: 800px;
  text-align: ${(p) => (p.centerContent ? 'center' : 'under')};
  margin: ${(p) => (p.centerContent ? '0 auto' : '0 0 50px 0')};
  ${responsive.xs} {
    padding: 80px 0 40px;
  }
  h1 {
    font-size: 2.4rem;
    margin-bottom: 10px;
    font-family: 'Vipps Display', sans-serif;
    text-transform: uppercase;
  }

  p {
    text-align: ${(p) => (p.centerContent ? 'center !important' : 'under')};
    font-size: 18px;
    line-height: 1.8rem;
    color: ${colors.darkText};
    margin: 0;
  }
`;
