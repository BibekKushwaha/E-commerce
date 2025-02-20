import React from 'react';
import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({text}) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'isSubmitting';

  return (
    <button type='submit' className='btn btn-primary btn-block' disabled = {isSubmitting}>{
        isSubmitting ? <> <span className='loading loading-spinner'></span>
         Sending..
        </> : (text || 'Submit')
    }</button>
  )
}

export default SubmitBtn