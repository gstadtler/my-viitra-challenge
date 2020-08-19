import styled from 'styled-components';

export const Button = styled.button`
  background: #fff;
  border: 0;
  padding: 5px;
  display: flex;
  align-items: center;

  .icon {
    color: #39b100;
    margin-right: 5px;
  }

  .text {
    font-weight: 600;
    color: #3d3d4d;
    transition: background 0.2s;
  }

  .text:hover {
    background: #90EE90;
  }

`;
export const Container = styled.div`
  background: #f0f0f5;
  border-radius: 8px;
  width: fit-content;
  margin: auto;
  text-align: center;

  header {
    background: #ffb84d;
    border-radius: 8px 8px 0px 0px;
    height: 192px;
    overflow: hidden;
    transition: 0.3s opacity;
    text-align: center;

    img {
      pointer-events: none;
      user-select: none;
    }
  }

  section.body {
    padding: 30px;

    h2 {
      color: #3d3d4d;
    }

    p {
      color: #3d3d4d;

      margin-top: 16px;
    }

    .price {
      font-style: normal;
      font-size: 24px;
      line-height: 34px;
      color: #39b100;

      b {
        font-weight: 600;
      }
    }
  }
`;
