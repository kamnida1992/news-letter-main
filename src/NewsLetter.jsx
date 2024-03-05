import SignupMobile from './assets/images/illustration-sign-up-mobile.svg';
import SignupDesktop from './assets/images/illustration-sign-up-desktop.svg';
import CheckLogoSm from './assets/images/icon-list.svg';
import SuccessComponent from './SuccessComponent.jsx';
import React, {useState} from 'react';

const NewsLetter = () => {
    
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);


    const handleEmail = (e) =>{
        setEmail(e.target.value);
        setError(false);
    }

    const handleSubmit = () => {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (validRegex.test(email)) {
            setSuccess(true);
          
        } else {
            
            setError(true);
        }
    }
  return (
    <div>
        {!success && (

     <div className='lg:flex lg:flex-row-reverse lg:justify-center  bg-slate-800 lg:text-center
     h-[100%] '>

        <div className='h-[100%] rounded-xl bg-white lg:m-20 lg:flex
         lg:flex-row-reverse lg:items-center lg:w-auto
        '>
        
        <img src={SignupMobile} className='lg:hidden w-[100%]'/>
        <img src={SignupDesktop} className='lg:flex mx-3 sm:hidden h-[80vh] my-10 hidden' />

        <div className='p-5 lg:p-0 lg:mx-[30px] lg:my-[40px] lg:ml-[50px] lg:w-[390px]'>

        <div className='mt-10'>
        <h1 className='text-4xl lg:text-5xl font-bold text-gray-800 lg:text-left'>Stay Updated!</h1>
        <h2 className='my-5 font-semibold text-gray-800
        lg:text-left'>Join 60,000+ product managers receiving monthly updates on:</h2>
        </div>

        <div className='flex items-center text-md gap-2 my-5 text-gray-800 font-semibold'>
        <img src={CheckLogoSm} alt="" /><span>Product discovery and building what matters</span>
        </div>

        <div className='flex text-md gap-2  my-5 text-gray-800 font-semibold'>
        <img src={CheckLogoSm} alt="" /><span>Measuring to ensure updates are a success</span>
        </div>

        <div className='flex text-md gap-2  my-5 text-gray-800 font-semibold'>
        <img src={CheckLogoSm} alt="" /><span>And much more!</span>
        </div>

        <div className='mt-12'>
            <div className='flex justify-between'>
            <h2 className='text-xs font-bold text-gray-800 lg:text-left'>Email address</h2>
            {error && <p className='text-red-500 text-xs font-semibold'>Valid Email Required</p>}
    
            </div>
            <input type="text" placeholder='email@company.com' onChange={handleEmail} 
            className={` border border-${error ? 'red-500' : 'green-500'}
            w-[100%] p-4 rounded-lg mt-2 `} />

            <button onClick={handleSubmit} className='py-4 px-[35px] text-center bg-blue-950
            mt-2 text-white font-semibold text-sm w-[100%] rounded-lg
            hover:bg-red-500'>Subscribe to monthly news letter</button>
            
        </div>
        </div>
        </div>
    </div>
    )}
            <div>
                <SuccessComponent success={success} email={email} />
                
            </div>
</div>
  )
}

export default NewsLetter