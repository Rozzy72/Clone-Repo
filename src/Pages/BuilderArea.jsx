// import React, { useContext } from 'react'
// import { Button , useToast } from '@chakra-ui/react';
// import UserDataCollect from '../Components/UserDataCollect/UserDataCollect';
// import './BuilderArea.css'
// import Footer from '../Components/Footer/Footer';
// import ResumeContext from '../Context/ResumeContext';
// import PropagateLoader from "react-spinners/PropagateLoader";
// import { getAuth } from 'firebase/auth';

// const BuilderArea = (props) => {
//     const { showComponent, setShowComponent, loading, handlePrint } = useContext(ResumeContext)
//     const toast = useToast();
//     const auth = getAuth();

//     const handleSelectNewTemplate = () => {
//         setShowComponent(!showComponent)
//     }
//     const handlePrintWithAuth = () => {
//         const user = auth.currentUser;
        
//         if (user) {
         
//             handlePrint();
//         } else {
            
//             toast({
//                 title: "Authentication required",
//                 description: "Please sign in to print your resume",
//                 status: "error",
//                 duration: 5000,
//                 isClosable: true,
//             });
//         }

   
//     };

//     const handleDownloadWithAuth = () => {
//         const user = auth.currentUser;
//         if (user) {
//            handlePrint() 
//         } else {
            
//             toast({
//                 title: "Authentication required",
//                 description: "Please sign in to print your resume",
//                 status: "error",
//                 duration: 5000,
//                 isClosable: true,
//             });
//         }
//     }


//     return (
//         <>
//             {loading && <PropagateLoader id='spinner' color="#319795" size={30} />}

//             <div id='main-box' className="d-flex justify-content-between flex-wrap mt-4 mx-2">
//                 <UserDataCollect />
//                 <div id='theme-box-border'>
//                     {props.theme}
//                 </div>
//             </div>
//             <div className="d-flex flex-wrap justify-content-center">
//                 {/* <Button className='mx-2 my-5' colorScheme={'blue'} variant={'outline'} onClick={handlePrint}>Print</Button> */}
//                 <Button 
//                     className='mx-2 my-5' 
//                     colorScheme={'blue'} 
//                     variant={'outline'} 
//                     onClick={handlePrintWithAuth}
//                 >
//                     Print
//                 </Button>

//                 <Button
//                 className='mx-2 my-5'
//                 colorScheme={'blue'}
//                 variant={'outline'}
//                 onClick={handleDownloadWithAuth}
//                 >
//                     Download
//                 </Button>
//                 <Button className='mx-2 my-5' colorScheme={'blue'} variant={'outline'} onClick={handleSelectNewTemplate}>Select Another Template</Button>
//             </div>
//             <Footer />
//         </>
//     )
// }

// export default BuilderArea

// import React, { useContext } from 'react'
// import { Button, useToast } from '@chakra-ui/react';
// import UserDataCollect from '../Components/UserDataCollect/UserDataCollect';
// import './BuilderArea.css'
// import Footer from '../Components/Footer/Footer';
// import ResumeContext from '../Context/ResumeContext';
// import PropagateLoader from "react-spinners/PropagateLoader";
// import { getAuth } from 'firebase/auth';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// const BuilderArea = (props) => {
//     const { showComponent, setShowComponent, loading, handlePrint } = useContext(ResumeContext)
//     const toast = useToast();
//     const auth = getAuth();

//     const handleSelectNewTemplate = () => {
//         setShowComponent(!showComponent)
//     }
    
//     const handlePrintWithAuth = () => {
//         const user = auth.currentUser;
        
//         if (user) {
//             handlePrint();
//         } else {
//             toast({
//                 title: "Authentication required",
//                 description: "Please sign in to print your resume",
//                 status: "error",
//                 duration: 5000,
//                 isClosable: true,
//             });
//         }
//     };

//     // const generatePDF = () => {
//     //     const input = document.getElementById('theme-box-border');
        
//     //     html2canvas(input, {
//     //         scale: 2, // Higher quality
//     //         logging: false,
//     //         useCORS: true
//     //     }).then((canvas) => {
//     //         const imgData = canvas.toDataURL('image/png');
//     //         const pdf = new jsPDF('p', 'mm', 'a4');
//     //         const imgWidth = 200; // A4 width in mm
//     //         const pageHeight = 200; // A4 height in mm
//     //         const imgHeight = canvas.height * imgWidth / canvas.width;
//     //         let heightLeft = imgHeight;
//     //         let position = 0;

//     //         pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//     //         heightLeft -= pageHeight;

//     //         while (heightLeft >= 0) {
//     //             position = heightLeft - imgHeight;
//     //             pdf.addPage();
//     //             pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//     //             heightLeft -= pageHeight;
//     //         }

//     //         // Automatically download the PDF
//     //         pdf.save('resume.pdf');
//     //     });
//     // };


//     const generatePDF = async () => {
//         const input = document.getElementById('theme-box-border');
        
//         // Create a print-optimized clone
//         const pdfContainer = document.createElement('div');
//         pdfContainer.style.position = 'fixed';
//         pdfContainer.style.top = '0';
//         pdfContainer.style.left = '0';
//         pdfContainer.style.width = '210mm';
//         pdfContainer.style.minHeight = '297mm';
//         pdfContainer.style.padding = '15mm';
//         pdfContainer.style.boxSizing = 'border-box';
//         pdfContainer.style.backgroundColor = '#ffffff';
//         pdfContainer.style.zIndex = '9999';
        
//         // Clone and enhance the content
//         const contentClone = input.cloneNode(true);
//         contentClone.style.width = '100%';
//         contentClone.style.margin = '0';
//         contentClone.style.padding = '0';
//         contentClone.style.fontFamily = 'Arial, sans-serif';
        
//         // Apply print-specific styles
//         contentClone.querySelectorAll('*').forEach(el => {
//             el.style.boxSizing = 'border-box';
//             el.style.maxWidth = '100%';
//         });
        
//         pdfContainer.appendChild(contentClone);
//         document.body.appendChild(pdfContainer);
    
//         try {
//             // Wait for all assets to load
//             await Promise.all([
//                 document.fonts.ready,
//                 new Promise(resolve => setTimeout(resolve, 300))
//             ]);
    
//             const canvas = await html2canvas(pdfContainer, {
//                 scale: 2,
//                 logging: true,
//                 useCORS: true,
//                 letterRendering: true,
//                 backgroundColor: '#ffffff',
//                 windowWidth: pdfContainer.scrollWidth,
//                 windowHeight: pdfContainer.scrollHeight
//             });
    
//             const pdf = new jsPDF({
//                 orientation: 'portrait',
//                 unit: 'mm',
//                 format: 'a4',
//                 hotfixes: ["px_scaling"]
//             });
    
//             const imgWidth = 190; // Account for margins
//             const imgHeight = (canvas.height * imgWidth) / canvas.width;
            
//             pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 10, 10, imgWidth, imgHeight);
//             pdf.save('professional-resume.pdf');
            
//         } catch (error) {
//             console.error('PDF generation error:', error);
//             toast({
//                 title: "PDF Generation Failed",
//                 description: "There was an error generating your PDF",
//                 status: "error",
//                 duration: 5000,
//                 isClosable: true,
//             });
//         } finally {
//             document.body.removeChild(pdfContainer);
//         }
//     };

//     const handleDownloadWithAuth = () => {
//         const user = auth.currentUser;
//         if (user) {
//             generatePDF();
//         } else {
//             toast({
//                 title: "Authentication required",
//                 description: "Please sign in to download your resume",
//                 status: "error",
//                 duration: 5000,
//                 isClosable: true,
//             });
//         }
//     }

//     return (
//         <>
//             {loading && <PropagateLoader id='spinner' color="#319795" size={30} />}

//             <div id='main-box' className="d-flex justify-content-between flex-wrap mt-4 mx-2">
//                 <UserDataCollect />
//                 <div id='theme-box-border'>
//                     {props.theme}
//                 </div>
//             </div>
//             <div className="d-flex flex-wrap justify-content-center">
//                 <Button 
//                     className='mx-2 my-5' 
//                     colorScheme={'blue'} 
//                     variant={'outline'} 
//                     onClick={handlePrintWithAuth}
//                 >
//                     Print
//                 </Button>

//                 <Button
//                     className='mx-2 my-5'
//                     colorScheme={'blue'}
//                     variant={'outline'}
//                     onClick={handleDownloadWithAuth}
//                 >
//                     Download as PDF
//                 </Button>
//                 <Button className='mx-2 my-5' colorScheme={'blue'} variant={'outline'} onClick={handleSelectNewTemplate}>Select Another Template</Button>
//             </div>
//             <Footer />
//         </>
//     )
// }

// export default BuilderArea



// import React, { useContext } from 'react'
// import { Button, useToast } from '@chakra-ui/react';
// import UserDataCollect from '../Components/UserDataCollect/UserDataCollect';
// import './BuilderArea.css'
// import Footer from '../Components/Footer/Footer';
// import ResumeContext from '../Context/ResumeContext';
// import PropagateLoader from "react-spinners/PropagateLoader";
// import { getAuth } from 'firebase/auth';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// const BuilderArea = (props) => {
//     const { showComponent, setShowComponent, loading, handlePrint } = useContext(ResumeContext)
//     const toast = useToast();
//     const auth = getAuth();

//     const handleSelectNewTemplate = () => {
//         setShowComponent(!showComponent)
//     }
    
//     const handlePrintWithAuth = () => {
//         const user = auth.currentUser;
        
//         if (user) {
//             handlePrint();
//         } else {
//             toast({
//                 title: "Authentication required",
//                 description: "Please sign in to print your resume",
//                 status: "error",
//                 duration: 5000,
//                 isClosable: true,
//             });
//         }
//     };

//     const generatePDF = () => {
//         const element = document.getElementById('theme-box-border');
        
//         if (!element) {
//             toast({
//                 title: "Error",
//                 description: "Could not find resume content",
//                 status: "error",
//                 duration: 5000,
//                 isClosable: true,
//             });
//             return;
//         }

//         html2canvas(element, {
//             scale: 2, // Higher scale for better quality
//             logging: false,
//             useCORS: true,
//             allowTaint: true,
//             scrollX: 0,
//             scrollY: 0,
//             windowWidth: element.scrollWidth,
//             windowHeight: element.scrollHeight
//         }).then(canvas => {
//             const imgData = canvas.toDataURL('image/png');
//             const pdf = new jsPDF({
//                 orientation: 'portrait',
//                 unit: 'mm'
//             });

//             // Calculate the PDF dimensions to maintain aspect ratio
//             const imgWidth = 210; // A4 width in mm
//             const imgHeight = canvas.height * imgWidth / canvas.width;
            
//             pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
//             pdf.save('resume.pdf');
//         }).catch(error => {
//             toast({
//                 title: "Error generating PDF",
//                 description: error.message,
//                 status: "error",
//                 duration: 5000,
//                 isClosable: true,
//             });
//         });
//     };

 
//     const handleDownloadWithAuth = () => {
//         const user = auth.currentUser;
//         if (user) {
//             generatePDF();
//         } else {
//             toast({
//                 title: "Authentication required",
//                 description: "Please sign in to download your resume",
//                 status: "error",
//                 duration: 5000,
//                 isClosable: true,
//             });
//         }
//     }

//     return (
//         <>
//             {loading && <PropagateLoader id='spinner' color="#319795" size={30} />}

//             <div id='main-box' className="d-flex justify-content-between flex-wrap mt-4 mx-2">
//                 <UserDataCollect />
//                 <div id='theme-box-border'>
//                     {props.theme}
//                 </div>
//             </div>
//             <div className="d-flex flex-wrap justify-content-center">
//                 <Button 
//                     className='mx-2 my-5' 
//                     colorScheme={'blue'} 
//                     variant={'outline'} 
//                     onClick={handlePrintWithAuth}
//                 >
//                     Print
//                 </Button>

//                 <Button
//                     className='mx-2 my-5'
//                     colorScheme={'blue'}
//                     variant={'outline'}
//                     onClick={handleDownloadWithAuth}
//                 >
//                     Download
//                 </Button>
//                 <Button className='mx-2 my-5' colorScheme={'blue'} variant={'outline'} onClick={handleSelectNewTemplate}>Select Another Template</Button>
//             </div>
//             <Footer />
//         </>
//     )
// }

// export default BuilderArea











// RESPONSIVE ONE 

import React, { useContext } from 'react'
import { Button, useToast } from '@chakra-ui/react';
import UserDataCollect from '../Components/UserDataCollect/UserDataCollect';
import './BuilderArea.css'
import Footer from '../Components/Footer/Footer';
import ResumeContext from '../Context/ResumeContext';
import PropagateLoader from "react-spinners/PropagateLoader";
import { getAuth } from 'firebase/auth';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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

    const generatePDF = async () => {
        const element = document.getElementById('theme-box-border');
        
        if (!element) {
            toast({
                title: "Error",
                description: "Could not find resume content",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        // Create a clone for PDF generation
        const originalDisplay = element.style.display;
        element.style.display = 'block';
        
        // try {
        //     const canvas = await html2canvas(element, {
        //         scale: 2,
        //         logging: false,
        //         useCORS: true,
        //         allowTaint: true,
        //         scrollX: 0,
        //         scrollY: 0,
        //         windowWidth: element.scrollWidth,
        //         windowHeight: element.scrollHeight,
        //         backgroundColor: '#FFFFFF'
        //     });

        //     const imgData = canvas.toDataURL('image/png');
        //     const pdf = new jsPDF({
        //         orientation: 'portrait',
        //         unit: 'mm',
        //         format: 'a4'
        //     });

        //     const imgWidth = 210;
        //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
            
        //     pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        //     pdf.save('resume.pdf');
        try {
      const canvas = await html2canvas(element, {
        // scale: 2,
        // logging: false,
        // useCORS: true,
        // allowTaint: true,
        // scrollX: 0,
        // scrollY: 0,
        // windowWidth: element.scrollWidth,
        // windowHeight: element.scrollHeight,
        // backgroundColor: '#FFFFFF'

        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
        scrollX: 0,
        scrollY: -window.scrollY, // Try this
        width: element.scrollWidth,
        height: element.scrollHeight, // Explicitly set height
      });

      const imgData = canvas.toDataURL("image/png");
    //   const pdf = new jsPDF({
    //     orientation: "portrait",
    //     unit: "mm",
    //     format: "a4",
    //   });

    //   const imgWidth = 210;
    //   const imgHeight = (canvas.height * imgWidth) / canvas.width;

    //   pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    //   pdf.save("resume.pdf");

    const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });
    
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    // If content is taller than A4 height (297mm), split into multiple pages
    const pageHeight = 297; // A4 height in mm
    let position = 0;
    let remainingHeight = imgHeight;
    
    while (remainingHeight > 0) {
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        remainingHeight -= pageHeight;
        position -= pageHeight;
        
        if (remainingHeight > 0) {
            pdf.addPage();
        }
    }
    
    pdf.save('resume.pdf');   //added

        } catch (error) {
            toast({
                title: "Error generating PDF",
                description: error.message,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } finally {
            element.style.display = originalDisplay;
        }
    };

    const handleDownloadWithAuth = () => {
        const user = auth.currentUser;
        if (user) {
            generatePDF();
        } else {
            toast({
                title: "Authentication required",
                description: "Please sign in to download your resume",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    }

    return (
        <>
            {loading && <PropagateLoader id='spinner' color="#319795" size={30} />}

            <div id='main-box'>
                <div className="user-data-collect">
                    <UserDataCollect />
                </div>
                <div id='theme-box-border'>
                    {props.theme}
                </div>
            </div>
            <div className="button-container">
                <Button 
                    colorScheme={'blue'} 
                    variant={'outline'} 
                    onClick={handlePrintWithAuth}
                >
                    Print
                </Button>

                <Button
                    colorScheme={'blue'}
                    variant={'outline'}
                    onClick={handleDownloadWithAuth}
                >
                    Download PDF
                </Button>
                <Button 
                    colorScheme={'blue'} 
                    variant={'outline'} 
                    onClick={handleSelectNewTemplate}
                >
                    Select Another Template
                </Button>
            </div>
            <Footer />
        </>
    )
}

export default BuilderArea;