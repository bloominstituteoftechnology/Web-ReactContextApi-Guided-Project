import styled from 'styled-components';

export const StyledWidget = styled.div`
  border-radius: 8px;
  padding: 8px;
  border: 4px solid ${pr => pr.color};
  margin: 8px;
  margin-top: 16px;

  button {
    margin: 4px;
    margin-top: 8px;
  }

  span.bold {
    font-weight: bold;
  }
`;
