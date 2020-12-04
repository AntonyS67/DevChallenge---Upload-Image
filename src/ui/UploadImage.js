import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Form = styled.form`
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(0,0,0,.1);
  border-radius: 12px;
  padding: 32px;
  width: 402px;
  height: 469px;
  margin: 0 auto;
  margin-top: 6rem;
  text-align: center;
  & h2{
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #4f4f4f;
    line-height: 27px;
    margin-bottom:1.5rem;
  }
  & p{
    color: #828282;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
  }
`;

const InputDiv = styled.div`
  margin: 1.5rem auto;
  margin-top: 2rem;
  background-color: #f6f8fb;
  border: 1px dashed #97bef4;
  border-radius: 12px;
  width: 338px;
  height: 218px;
  & img{
    width:10rem;
    height:10rem;
  }
  & p{
    font-size: 13px;
    font-weight: 500;
    line-height: 18px;
    color: #BDBDBD;
  }
`;

const FileInput = styled.div`
  background-color: #2f80ed;
  border-radius: 12px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  margin: 1.5rem auto;
  padding: 10px;
  width: 100px;
  & input{
    cursor: pointer;
    margin: 0;
    opacity: 0;
    padding: 0;
    position: absolute;
  }
`;


export {Container,Form,InputDiv,FileInput};