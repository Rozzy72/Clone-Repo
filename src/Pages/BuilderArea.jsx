import React, { useContext } from 'react'
import { Button , useToast } from '@chakra-ui/react';
import UserDataCollect from '../Components/UserDataCollect/UserDataCollect';
import './BuilderArea.css'
import Footer from '../Components/Footer/Footer';
import ResumeContext from '../Context/ResumeContext';
import PropagateLoader from "react-spinners/PropagateLoader";
import { getAuth } from 'firebase/auth';

const BuilderArea = (props) => {
    const { showComponent, setShowComponent, loading, handlePrint } = useContext(ResumeContext)
    const toast = useToast();
    const auth = getAuth();

    const handleSelectNewTemplate = () => {
        setShowComponent(!showComponent)
    }
    const handlePrintWithAuth = () => {
        const user = auth.currentUser;
        
        if (user) {
         
            handlePrint();
        } else {
            
            toast({
                title: "Authentication required",
                description: "Please sign in to print your resume",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };
    return (
        <>
            {loading && <PropagateLoader id='spinner' color="#319795" size={30} />}

            <div id='main-box' className="d-flex justify-content-between flex-wrap mt-4 mx-2">
                <UserDataCollect />
                <div id='theme-box-border'>
                    {props.theme}
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {/* <Button className='mx-2 my-5' colorScheme={'blue'} variant={'outline'} onClick={handlePrint}>Print</Button> */}
                <Button 
                    className='mx-2 my-5' 
                    colorScheme={'blue'} 
                    variant={'outline'} 
                    onClick={handlePrintWithAuth}
                >
                    Print
                </Button>
                <Button className='mx-2 my-5' colorScheme={'blue'} variant={'outline'} onClick={handleSelectNewTemplate}>Select Another Template</Button>
            </div>
            <Footer />
        </>
    )
}

export default BuilderArea
