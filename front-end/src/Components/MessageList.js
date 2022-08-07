import cogoToast from 'cogo-toast';
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import MessageListItem from './MessageListItem';

const Wrapper = styled.div`
    width: 30%;
    padding: 1rem;
    border-right: 3px solid lightgray;
    height: 90vh;
    overflow-y: scroll;
    @media only screen and (max-width: 720px) {
        border-right: none;
        flex: 1;
        padding: 0;
    }
    p {
        font-weight: 600;
        color: gray;
        margin-bottom: 1rem;
    }
`;
const LoadingKeyframe = keyframes`
0%{
     background-position: -468px 0
 }
 100%{
     background-position: 468px 0
 }
`;
const ShimmeringCard = styled.div`
    border-radius: 1rem;
    box-shadow: 0px 0px 10px rgba(159, 159, 159, 1);
    padding: 1rem;
    margin-bottom: 1rem;
    height: 50px;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: ${LoadingKeyframe};
    animation-timing-function: linear;
    /* background: white; */
    background: linear-gradient(
        to right,
        #eeeeee 10%,
        #dddddd 18%,
        #eeeeee 33%
    );
`;
function MessageList() {
    const [messages, setmessages] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        async function fetchMessages() {
            const messageListResponse = await fetch('/message/list', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    Accept: 'application/json'
                }
            }).then((res) => res.json());

            if (messageListResponse.error) {
                cogoToast.error(messageListResponse.error.message, {
                    position: 'top-right',
                    heading: 'Error'
                });
            }
            setloading(false);
            setmessages(messageListResponse);
        }

        fetchMessages();
    }, []);

    return (
        <Wrapper>
            <p>List</p>
            {loading ? (
                <>
                    <ShimmeringCard />
                    <ShimmeringCard />
                    <ShimmeringCard />
                    <ShimmeringCard />
                    <ShimmeringCard />
                </>
            ) : (
                messages.map((message, index) => (
                    <MessageListItem
                        name={message.recipient_name}
                        otp={message.otp}
                        key={index}
                        timestamp={message.createdAt}
                        image={message.image}
                    />
                ))
            )}
        </Wrapper>
    );
}

export default MessageList;
