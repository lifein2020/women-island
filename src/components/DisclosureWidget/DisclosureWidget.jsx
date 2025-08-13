// import React, { useState, useRef, useEffect } from "react";
import "./disclosureWidget.scss";


const panelData = [
    {
        id: 1,
        question: "Какой формат участия в мероприятиях клуба?", 
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
        id: 2,
        question: "Как оплатить участие в мероприятии?", 
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
        id: 3,
        question: "Что входит в стоимость участия в мероприятии?", 
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
]

export default function DisclosureWidget() {
    return(
        <>
            {panelData.map((panel, ind) => (
                <details className="panel" key={ind}>
                    <summary className="question">
                        {panel.question}
                    </summary>
                    <p className="answer">{panel.answer}</p>
                </details>
            ))}
        </>
    )
}

// work version:
// export default function DisclosureWidget() {

//   const [openIndex, setOpenIndex] = useState(null);
//   const contentRefs = useRef([]);

//   const toggleOpen = (index) => {
//     setOpenIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <>
//       {panelData.map((item, index) => {
//         const isOpen = openIndex === index;
//         const contentRef = (el) => (contentRefs.current[index] = el);
//         const maxHeight = isOpen && contentRefs.current[index]
//           ? `${contentRefs.current[index].scrollHeight}px`
//           : "0px";

//         return (
//           <div key={item.id} className={`panel ${isOpen ? "open" : ""}`}>
//             <div className="question" onClick={() => toggleOpen(index)}>
//               {item.question}
//               <span className="arrow" />
//             </div>
//             <div
//               className="answer-wrap"
//               ref={contentRef}
//               style={{ maxHeight }}
//             >
//               <p className="answer">{item.answer}</p>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
    

// don't work 1 version:
//   const [isOpen, setIsOpen] = useState(false);
//   const contentRef = useRef(null);
//   const [height, setHeight] = useState("0px");
//   const [openIndex, setOpenIndex] = useState(null);

//   useEffect(() => {
//     if (openIndex === index && contentRef.current) {
//       setHeight(`${contentRef.current.scrollHeight}px`);
//     } else {
//       setHeight("0px");
//     }
//   }, [openIndex]);

//   const toggleOpen = (index) => {
//     setOpenIndex(prev => (prev === index ? null : index));
//   };

//   return (
//     <>
//         {panelData.map((item, index) => (
//             <div key={item.id} className={`panel ${openIndex === index ? "open" : ""}`}>
//                 <div className="question" onClick={() => toggleOpen(index)}>
//                     {item.question}
//                     <span className="arrow" />
//                 </div>
//                 <div
//                     className="answer-wrap"
//                     style={{ maxHeight: height }}
//                     ref={contentRef}
//                 >
//                     <p className="answer">{item.answer}</p>
//                 </div>
//             </div>
//         ))}
//     </>


// don't work 2 version:

    // const [isOpen, setIsOpen] = useState(false);
    // const contentRef = useRef(null);
    // const [height, setHeight] = useState("0px");

    // useEffect(() => {
    //     if (isOpen && contentRef.current) {
    //     setHeight(`${contentRef.current.scrollHeight}px`);
    //     } else {
    //     setHeight("0px");
    //     }
    // }, [isOpen]);

    // const toggleOpen = () => {
    //     setIsOpen(prev => !prev);
    // };

    // return (
    //     <>
    //         {panelData.map( (panel, ind) => (
    //             <details className={`panel ${isOpen ? "open" : ""}`} key={ind}>
    //                 <summary className="question" onClick={toggleOpen}>
    //                     {panel.question}
    //                     <span className="arrow" />
    //                 </summary>
    //                 <div
    //                     className="answer-wrap"
    //                     style={{ maxHeight: height }}
    //                     ref={contentRef}
    //                 >
    //                     <p className="answer">{panel.answer}</p>
    //                 </div>
    //             </details>
    //         ))}
    //     </>
    // )
