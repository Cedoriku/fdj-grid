import styled from 'styled-components';

const Container = styled.div`
  padding: 1em;
  background-color: aliceblue;
  & .first-row {
    margin-bottom: 5px;
    display: flex;
  }
`;

const BetBox = styled.div`
  flex: 1;
  padding: 2em 1em;
`;

const GridContainer = styled.div`
  display: flex;
`;

const StarsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2px;
`;

export {
  BetBox, Container, GridContainer, StarsBox
};
