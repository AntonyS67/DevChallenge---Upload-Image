import styled from 'styled-components';

const ContainerUploaded = styled.div`
    background-color: #ffffff;
    box-shadow: 0 4px 12px rgba(0,0,0,.1);
    border-radius: 12px;
    margin: 0 auto;
    width: 400px;
    height: 450px;
    margin-top: 8rem;
    text-align: center;
    padding: 32px;
    & h2{
        color: #4f4f4f;
        font-weight: 500;
        font-size: 18px;
        line-height: 18px;
    }
`;

const Check = styled.span`
    background: #219653;
    border-radius: 100%;
    padding: .8rem;
    width: 42px;
    height: 42px;
    & i{
        margin-bottom: 2rem;
        color: white;
        font-size: 20px;
    }
`;

const ContainerImage = styled.div`
    & img{
        width: 100%;
        margin-top: 1.5rem;
        height: 200px;
        border-radius: 12px;
    }
`;

const ContainerLink = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 100%;
    height: 34px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: .1rem;
    & p{
        text-align: left; 
        align-self: center;
        overflow: hidden;
    }
    & button{
        background-color: #2f80ed;
        border-radius: 8px;
        width: 74px;
        height: 30px;
        border: none;
        outline:none;
        cursor:pointer;
        align-self: center;
        color: white;
        font-size: 10px;
        line-height: 12px;
        font-weight: 500;
    }
`;

const LinkCopied = styled.p`
    margin-top:.5rem;
    color: #4f4f4f;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
`;

const Href = styled.a`
    background-color: #2f80ed;
    text-decoration: none;
    color: white;
    padding: .3rem;
    border-radius: .4rem;
`;

export {ContainerUploaded,ContainerImage,ContainerLink,Check,LinkCopied,Href};