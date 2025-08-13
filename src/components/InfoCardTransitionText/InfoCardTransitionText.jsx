import React, {useEffect, useRef, useState} from "react";
import "./infocardTransitionText.scss";
import paint4 from "../../images/paint4.png";
import cup4 from "../../images/cup4.png";
import psychology from "../../images/psychology.png";
import aromo from "../../images/aromo.png";
import book from "../../images/book.png";
import practise from "../../images/practise.png";
import master from "../../images/master.png";
import stream from "../../images/stream.png";

const dataBenefits =[
    {
        title: "Творческие мастер-классы",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        imgSrc: paint4,
        alt: "",
    },
        {
        title: "Звуковая терапия",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        imgSrc: cup4,
        alt: "",
    },
        {
        title: "Психология",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        imgSrc: psychology,
        alt: "",
    },
        {
        title: "Аромопсихология",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        imgSrc: aromo,
        alt: "",
    },
        {
        title: "Книжный клуб",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        imgSrc: book,
        alt: "",
    },
        {
        title: "Полезные и развивающие практики",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        imgSrc: practise,
        alt: "",
    },
        {
        title: "Приглашенные мастера",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        imgSrc: master,
        alt: "",
    },
        {
        title: "Тематические эфиры",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        imgSrc: stream,
        alt: "",
    },

]

// export default function InfoCard() {
//     const [isTextVisible, setIsTextVisible] = useState(false);
//     const sectionRef = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             // (entries) => {
//             //     entries.forEach(entry => {
//             //         if (entry.isIntersecting) {
//             //             setIsTextVisible(true);
//             //         }
//             //     });
//             // },
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsTextVisible(true);
//                 } else {
//                     setIsTextVisible(false);
//                 }
//             },
//             { threshold: 0.5 } // 50% блока видно на экране
//         );
//         const current = sectionRef.current;
//         if (current) {
//             observer.observe(current);
//         }

//         return () => {
//             if (current) {
//                 observer.unobserve(current);
//             }
//         };
//     }, []);

//     return (
//         // <ul className="benefits-cards">
//         //     {dataBenefits.map((item, ind) => (
//         //             <li className="benefits-cards-item" key={ind}>
//         //                 <div className="card-text-box">
//         //                     <h3 className="card-title">{item.title}</h3>
//         //                     <p className="card-description">{item.description}</p>
//         //                 </div>
//         //                 <img src={item.imgSrc} alt={item.alt} className="card-image"/>
//         //             </li>
//         //     ))}
//         // </ul>
//         <ul className="cards">
//             {dataBenefits.map((item, ind) => (
//                     <li className="cards-item" key={ind} ref={sectionRef}>
//                         <div className="cards-item-text-box">
//                             <h3 ref={sectionRef} className={`cards-item-title ${isTextVisible ? "visible" : ""}`}>{item.title}</h3>
//                             <p ref={sectionRef} className={`cards-item-description ${isTextVisible ? "visible" : ""}`}>{item.description}</p>
//                         </div>
//                         <img src={item.imgSrc} alt={item.alt} className="cards-item-image"/>
//                     </li>
//             ))}
//         </ul>
//     )
// }


//  Основные исправления:
// 1)Создадим отдельный ref и IntersectionObserver для каждой карточки.
// 2)Сделаем локальный стейт видимости для каждой карточки.

export default function InfoCardTransitionText() {

  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {

    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const newSet = new Set(prev);
              newSet.add(index);
              return Array.from(newSet);
            });
          }
        },
        { threshold: 0.4 }
      );

      observer.observe(ref);

      return observer;
    });

    return () => {
      observers.forEach((observer, i) => {
        if (observer && itemRefs.current[i]) {
          observer.unobserve(itemRefs.current[i]);
        }
      });
    };
  }, []);

  return (
    <ul className="cards">
      {dataBenefits.map((item, index) => (
        <li className="cards-item" key={index} ref={(el) => (itemRefs.current[index] = el)}>
          <div className="cards-item-text-box">
            <h3 className={`cards-item-title ${visibleItems.includes(index) ? "visible" : ""}`}>
              {item.title}
            </h3>
            <p className={`cards-item-description ${visibleItems.includes(index) ? "visible" : ""}`}>
              {item.description}
            </p>
          </div>
          <img src={item.imgSrc} alt={item.alt} className="cards-item-image" />
        </li>
      ))}
    </ul>
  );
}
