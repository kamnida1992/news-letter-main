
import CheckSuccess from './assets/images/icon-success.svg';
import NewsLetter from './NewsLetter.jsx';
import React, {useState} from 'react';

const SuccessComponent = ({success, email}) => {
    const [dismiss, setDismiss] = useState(false);

    const handleDismiss = () =>{
        setDismiss(true);
        
    }
  return (
    success &&  (
    <div className='flex justify-center items-center bg-slate-800 h-[130vh] lg:p-0 '>
        {!dismiss ? (
        <div className='bg-white rounded-xl border p-10  h-auto w-[100%] lg:w-96'>
            <img src={CheckSuccess} />
            <h1 className='text-4xl font-bold mt-5'>Thanks for subscribing</h1>
            <h2 className='mt-5'>A confirmation email has been sent to <span className='font-semibold'>{`${email}`}</span>, Please open
                it and click the button inside to confirm your subscription.
            </h2>
            <button onClick={handleDismiss} className='text-white font-semibold mt-5 p-2 bg-blue-950
            text-center hover:bg-red-500 w-[100%] rounded-lg'>Dismiss Message</button>
            
        </div>
        ) : (
        <div className=''><NewsLetter/></div>
        )}
        </div>)
  )
  
}

export default SuccessComponent