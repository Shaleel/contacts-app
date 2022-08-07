import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border-radius: 1rem;
    background-color: ${({ selected, mobile }) =>
        selected === mobile ? 'rgba(208, 255, 216, 0.38)' : 'white'};

    box-shadow: 0px 0px 10px rgba(159, 159, 159, 0.25);
    padding: 1rem;
    display: flex;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;
`;

const DP = styled.img`
    height: 3rem;
    width: 3rem;
    border: 2px solid gray;
    border-radius: 50%;
    margin-right: 1rem;
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    h4 {
        font-weight: 600;
    }
    p {
        color: gray;
        font-weight: bold;
    }
`;
function ContactListItem({
    firstName,
    image,
    mobile,
    countryCode,
    handleClick,
    selectedContact
}) {
    return (
        <Wrapper
            mobile={mobile}
            selected={selectedContact}
            onClick={handleClick}
        >
            <DP alt={firstName} src={image} />
            <Info>
                <h4>{firstName}</h4>
                <p>
                    +{countryCode} {mobile}
                </p>
            </Info>
        </Wrapper>
    );
}

export default ContactListItem;
