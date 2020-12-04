import styled from 'styled-components';

// Component Uploading
const Loading = styled.div`
    width: 400px;
    height: 143px;
    margin: 0 auto;
    background-color: #ffffff;
    box-shadow: 0 4px 12px rgba(0,0,0,.1);
    border-radius: 12px;
    padding: 2rem;
    margin-top: 10rem;
    & p{
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        color: #4f4f4f;
        line-height: 27px;
    }
`;

const ProgressLoading = styled.div`
    overflow: hidden;
    line-height: 0;
    font-size:.75rem;
    background-color: #e9ecef;
    border-radius: .25rem;
    height: 1rem;
    & div{
        display: flex;
        width: 0%;
        align-self: center;
        overflow: hidden;
        color: white;
        height: 1rem;
        white-space: nowrap;
        background-color: #2f80ed;
        transition: width .6s ease;
        & p{
            display: flex;
            align-self: center;
            margin-left: .4rem;
            color: white;
            font-size: 12px;
        }
    }
`;


export {Loading,ProgressLoading};