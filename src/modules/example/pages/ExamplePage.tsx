import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { getExampleData } from '../exampleReducer';
import * as ExampleActions from '../exampleActions';

const ExamplePage = () => {
  const exampleMessageFromStore = useSelector(getExampleData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ExampleActions.testAction('Hello Redux!!!'));
  }, [dispatch]);

  return (
    <PageWrapper>
      <span>{exampleMessageFromStore}</span>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.black};

  span {
    color: ${({ theme }) => theme.colors.white};
    font-size: 35px;
  }
`;

export default ExamplePage;
