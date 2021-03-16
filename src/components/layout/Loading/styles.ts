import styled from 'styled-components';

export const Spinner = styled.div`
  margin: auto;
  border: 16px solid #f3f3f3;
  border-top: 16px solid #212121;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
