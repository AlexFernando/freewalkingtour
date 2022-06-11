import { connect, styled, css, Global } from "frontity";
import React from 'react'
import IndividualQuestion from './IndividualQuestion'

const GroupFaq = ({question}) => {

  return (

    <>
      {Object.keys(question).map( elem => {

          return(
            <IndividualQuestion singleQuestion={question[elem].question} singleAnswer = {question[elem].answer} />    
          )

      })}
    </>
  )
}

export default GroupFaq;