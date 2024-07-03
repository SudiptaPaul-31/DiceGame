import React from 'react'
import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>After the click on dice if selected number is equal to dice number you will get some points dice{" "}</p>
            <p>If you get wrong guess then 2 points will be deducted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
    
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 5px;
    background-color: #fBf1f1;
    padding: 20px;
    max-height: 500px;
    overflow-y: auto;

    
    h2 {
    font-size: 24px;
    }
    .text {
    margin-top: 24px;
    }
`;