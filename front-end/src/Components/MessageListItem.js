import styled from 'styled-components';

const Wrapper = styled.div`
    border-radius: 1rem;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(159, 159, 159, 0.25);
    padding: 1rem;
    display: flex;
    margin-bottom: 1rem;
    position: relative;
`;

const DP = styled.img`
    height: 2rem;
    width: 2rem;
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

const Timestamp = styled.span`
    position: absolute;
    right: 1rem;
    bottom: 0.5rem;
    font-size: 0.8rem;
    font-weight: bold;
    opacity: 0.8;
`;
const getFullDate = (timestamp) => {
    const date = new Date(timestamp);
    return date;
};
function MessageListItem({ name, otp, image, timestamp }) {
    return (
        <Wrapper>
            <DP alt={name} src={image} />
            <Info>
                <h4>{name}</h4>
                <p>OTP : {otp}</p>
            </Info>
            <Timestamp>
                {`${getFullDate(
                    timestamp
                ).toLocaleTimeString()} | ${getFullDate(
                    timestamp
                ).toLocaleDateString()}`}
            </Timestamp>
        </Wrapper>
    );
}
export default MessageListItem;
