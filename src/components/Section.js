import React from 'react'
import styled from 'styled-components';

function Section() {
    return (
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>Order Onlline for Touchless Delivery</p>
            </ItemText>
        </Wrap>
    )
}

export default Section
const ItemText = styled.div`
    padding-top:  20vh;
    text-align: center;
`;
const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image:url('https://doc-0c-24-docs.googleusercontent.com/docs/securesc/flfuo8nt764jnasaol88ulrt7tsds2ap/8bp2thfasvf0l6osafp2f4guttgg6d36/1636417725000/00002566555868716473/09110010676256278234/1rMeRfE2OEktMOGVlgA1TwJKNj1teuLtG?e=download&authuser=0&nonce=gur2u7as428ts&user=09110010676256278234&hash=trb4obrsbo97o30uuods7tst3ic0h083');
     background-size: cover;
   background-position: center;
    background-repeat: no-repeat;
`
