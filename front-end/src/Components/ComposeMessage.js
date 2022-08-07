import { useState, useRef } from 'react';
import styled from 'styled-components';
import { SendBTN } from './ContactInfo';
import SendIcon from '../assets/send.svg';
import CrossIcon from '../assets/cross.svg';
import LoadingIcon from '../assets/loading.svg';
import cogoToast from 'cogo-toast';

const Wrapper = styled.div`
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0px 8px 10px 1px rgb(0 0 0 / 14%),
        0px 3px 14px 2px rgb(0 0 0 / 12%), 0px 5px 5px -3px rgb(0 0 0 / 20%);
    position: fixed;
    bottom: ${({ isSendClicked }) => (isSendClicked ? `1.5rem` : '-400px')};
    right: ${({ isSendClicked }) => (isSendClicked ? `1.5rem` : '-400px')};
    transition: all 0.1s ease-in-out;
    width: 450px;
    p {
        margin-top: 1rem;
    }
    h4 {
        font-weight: 600;
    }

    @media only screen and (max-width: 720px) {
        width: 100%;
        min-height: 50%;
        max-height: 100%;
        /* display: ${({ isSendClicked }) =>
            isSendClicked ? `block` : 'none'}; */
        bottom: ${({ isSendClicked }) => (isSendClicked ? `0` : '-100%')};
        left: 0;
        border-radius: 1rem 1rem 0 0;
    }
`;

const CrossBTN = styled.button`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: transparent;
    padding: 0.5rem;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    transition: background 0.3s ease;
    :hover {
        background-color: antiquewhite;
    }
`;
const Input = styled.input`
    margin-top: 0.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 2px solid lightgray;
    font-size: 1.2rem;
    width: 90%;
`;
const SecondaryBTN = styled.button`
    border: none;
    background: transparent;
    color: #4287f5;
    font-weight: bold;
    padding: 0.5rem;
    cursor: pointer;
`;
function generateOTP() {
    let randomOTP = Math.floor(Math.random() * 1e6);
    if (randomOTP.toString().length <= 5) return generateOTP();
    return randomOTP;
}
function ComposeMessage({ isSendClicked, setisSendClicked, selectedContact }) {
    const [OTP, setOTP] = useState(generateOTP());
    const [additionalMessage, setadditionalMessage] = useState(false);
    const [loading, setloading] = useState(false);
    let messageRef = useRef(null);
    const handleSubmit = async () => {
        setloading(true);

        if (
            additionalMessage &&
            (messageRef.current.value === '' ||
                !messageRef.current.value.trim())
        ) {
            cogoToast.warn(`Additional message can't be empty`, {
                position: 'top-right',
                heading: 'Warning'
            });
            setloading(false);
            return;
        }

        const postResponse = await fetch('/message/send-message', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                fullname: `${selectedContact.firstname} ${selectedContact.lastname}`,
                mobile: selectedContact.mobile.toString(),
                email: selectedContact.email,
                otp: OTP.toString(),
                message: `${messageRef.current?.value || ''}`,
                image: selectedContact.image,
                countryCode: selectedContact.countryCode
            })
        }).then((response) => response.json());

        if (postResponse.error) {
            cogoToast.error(postResponse.error.message, {
                position: 'top-right',
                heading: 'Error'
            });
            setloading(false);
            return;
        }

        cogoToast.success(postResponse.message, {
            position: 'top-right',
            heading: 'Success'
        });
        setloading(false);
    };
    return (
        <Wrapper isSendClicked={isSendClicked}>
            <div style={{ padding: '1.2rem' }}>
                <CrossBTN onClick={() => setisSendClicked(false)}>
                    <img alt="cross" src={CrossIcon} />
                </CrossBTN>
                <h2>Compose</h2>
                <p>Name</p>
                <h4>
                    {selectedContact?.firstname} {selectedContact?.lastname}
                </h4>
                <p>Phone No</p>
                <h4>
                    +{selectedContact?.countryCode} {selectedContact?.mobile}
                </h4>
                <p>Message</p>
                <Input
                    disabled
                    value={`Hi, Your OTP is ${OTP}`}
                    placeholder={`Hi, Your OTP is ${OTP}`}
                />
                <SecondaryBTN onClick={() => setOTP(generateOTP())}>
                    Get Another OTP
                </SecondaryBTN>
                {!additionalMessage && (
                    <SecondaryBTN onClick={() => setadditionalMessage(true)}>
                        Add additional message
                    </SecondaryBTN>
                )}
                {additionalMessage && (
                    <Input ref={messageRef} placeholder="Additional message" />
                )}

                <SendBTN
                    onClick={handleSubmit}
                    style={{
                        float: 'right',
                        marginTop: '1rem',
                        marginBottom: '1rem'
                    }}
                >
                    <img alt="button" src={loading ? LoadingIcon : SendIcon} />
                    <span>Send</span>
                </SendBTN>
            </div>
        </Wrapper>
    );
}

export default ComposeMessage;
