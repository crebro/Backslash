import { useEffect, useState } from "react";
import DeveloperRoute from '@components/DeveloperRoute';
import DevelopmentNavigation from '../../components/pages/Development/Navigation';
import TemplateCreationModal from "@components/pages/Development/TemplateCreationModal";
import { getTemplates } from "@api/requests/templates";
import Template from "@components/pages/Development/Template";

function DeveloperTemplates() {
    const [showTemplateCreationModal, setShowTemplateCreationModal] = useState(false);
    const [templateItems, setTemplateItems] = useState(false);

    useEffect(() => {
        getTemplates().then((response) => {
            if (response.values) {
                setTemplateItems(response.values);
            }
        })
    }, [])

  return <div className='min-w-screen min-h-screen bg-[#343A40] flex flex-col items-center'>
      <DevelopmentNavigation inProject={false} />
    <div className='lg:mt-10 xl:mt-20 lg:w-[80%] xl:w-[70%]'>
        <div className='flex items-center justify-between'>
            <div className='text-3xl font-poppins font-bold text-white'> Your Templates</div>
            <div onClick={() => setShowTemplateCreationModal(true)} className='cursor-pointer text-xl text-white px-4 py-2 bg-[#702EFD] rounded-sm font-bold'> Create </div>
        </div>
        <div className='mt-4'>
            {
                templateItems ? 
                templateItems.map((template) => <div key={templateItems.indexOf(template)}> <Template title={template['name']} description={template['description']} id={template['id']} /> </div>) : ""
            }
        </div>
    </div>
    {
        showTemplateCreationModal ? 
        <TemplateCreationModal onClose={() => setShowTemplateCreationModal(false)} /> : ""
    }
  </div>;
}

export default function () { return <DeveloperRoute><DeveloperTemplates/> </DeveloperRoute>};
