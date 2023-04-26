import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  font-size: 18px;
`;

export const Head = styled.span`
  font-weight: 700;
`;

export const Value = styled.span`
  font-weight: 500;
  color: #3f3f3f;
`;
