import styled from 'styled-components';

export const ToastWrapper = styled.div`
    align-items: center;
    border-radius: 25px;
    top: 0px;
    display: flex;
    min-height: 50px;
    max-height: 50px;
    justify-content: space-between;
    left: 50%;
    padding: 0 20px;
    position: fixed;
    transform: translateX(-50%) translateY(-100%);
    transition: transform .35s ease;
    background-color: #16a085;
    height: 40px;
    
    p { 
        color: #fff;
    }

    &.visible {
        transform: translateX(-50%) translateY(40%);
    }
`;