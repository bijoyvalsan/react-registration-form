import styled from 'styled-components';

export const TextFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;

    input {
        display: block;
        height: 28px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: black;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    }

    label {
        font-weight: bold;
        font-size: 18px;
    }
    
    .error {
        font-weight: normal;
        font-size: 12px;
        color: red;
    }
`;