import { createTemplate } from '@api/requests/templates';
import Modal from '@components/Modal';
import React, { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';

function TemplateCreationModal({ onClose }) {
    const nameRef = useRef();
    const descriptionRef = useRef();

    const submit = () => {
        const nameValue = nameRef.current.value;
        const descriptionValue =  descriptionRef.current.value;
        
        if (!nameValue || !descriptionValue) {
            toast.error("Please fill in all the fields");
            return;
        }
        const creationPromise = createTemplate({ name: nameValue, description: descriptionValue});
        toast.promise(creationPromise, {
            loading: "Creating a Template...",
            error: "Failed to create a template",
            success: "Succesfully created a template"
        })
    }

  return <Modal>
        <div className='text-xl font-poppins font-bold'> Create your awesome Template! </div>
        <div className='text-lg mt-4 font-poppins'> Enter a name</div>
        <input ref={nameRef} type="text" className='py-2 px-4 outline-none bg-[#C4C4C4] rounded-sm w-full' placeholder="My amazing template" />
        <div className='text-lg mt-4 font-poppins'> Add a description </div>
        <textarea ref={descriptionRef} className="text" className='mt-2 py-2 px-4 outline-none bg-[#C4C4C4] rounded-sm w-full' /> 

        <div className='flex items-center justify-center mt-4'>
            <button onClick={() => submit()} className='w-full rounded-lg py-2 px-4 outline-none bg-[#702EFD] text-white font-poppins font-bold' > Submit </button>
            <div onClick={() => onClose()} className='w-full cursor-pointer rounded-lg py-2 px-4 outline-none bg-red-500 text-white font-poppins font-bold flex items-center justify-center' > Dismiss </div>
        </div>
  </Modal>;
}

export default TemplateCreationModal;
