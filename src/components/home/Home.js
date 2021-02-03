import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;

//스타일 상속
const StyledAddButton = styled(StyledDeleteButton)`
  background-color: green;
`;

const Home = (props) => {
  // 구조분할 할당
  const { boards, setBoards, numbers, setNumbers, user } = props;

  return (
    <div>
      <div>페이지 : {numbers}</div>
      <Button>부트</Button>
      <StyledAddButton user={user} onClick={() => setNumbers(numbers + 1)}>
        증가
      </StyledAddButton>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3>
          제목 : {board.title} 내용:{board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
