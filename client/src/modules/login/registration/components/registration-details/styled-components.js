import styled from 'styled-components';

import { Card } from '../../../../../shared/styled-components/Card';

export const RegistrationDetailsWrapper = styled.div`
margin: 20px 0;

${Card} {
}

h2 {
    text-align: center;
    font-size: 28px;
}

.details-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px;
}

.details-item-label {
    font-size: 18px;
    font-weight: bold;
}

.details-item-value {

}
`;

