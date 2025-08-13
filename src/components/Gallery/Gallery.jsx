import React from "react";
import { useState, useEffect, useRef } from "react";
import "./gallery.scss";

import room from "../../images/room.png";
import cups from "../../images/cups.png";
import girls from "../../images/girls.png";
import lecture from "../../images/lecture.png";
import win from "../../images/win.jpg";
import a from "../../images/a.jpg";

import ImagePopup from "../ImagePopup/ImagePopup";

const images = [
    { src: lecture, alt:"", className: "photo-grid-item size-big-start" },
    { src: girls, alt:"", className: "photo-grid-item" },
    { src: a, alt:"", className: "photo-grid-item" },
    { src: girls, alt:"", className: "photo-grid-item" },
    { 
        isTextBlock: true,
        className: "photo-grid-container size-big-middle",
        text: "У нас происходит много интересного - ждем тебя!",
        image: { src: room, alt:""}
    },
    { src: girls, alt:"", className: "photo-grid-item" },
    { src: win, alt:"", className: "photo-grid-item" },
    { src: girls, alt:"", className: "photo-grid-item" },
    { src: cups, alt:"", className: "photo-grid-item size-large" }
];

export default function Gallery () {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isTextVisible, setIsTextVisible] = useState(false);
    const sectionRef = useRef(null);

    const photoTextBoxClassName = (
        `photo-grid-text-box ${isTextVisible ? "visible" : ""}`
    )

    const photoTextClassName = (
        `photo-grid-text ${isTextVisible ? "visible" : ""}`
    )

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const handleClosePopup = () => {
        setSelectedImage(null);
    };

    useEffect(() => {
        const closeByEscape = (e) => {
            if (e.key === 'Escape') {
                handleClosePopup();
            }
        }
        document.addEventListener('keydown', closeByEscape)
        return () => document.removeEventListener('keydown', closeByEscape)
    }, [])

    useEffect(() => {
        const closeByOverlay = (e) => {
            if(e.target.classList.contains('popup') || e.target.classList.contains('popup__close')) {
                handleClosePopup();
            }
        }
        document.addEventListener('click', closeByOverlay)
        return () => document.removeEventListener('click', closeByOverlay)
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            // (entries) => {
            //     entries.forEach(entry => {
            //         if (entry.isIntersecting) {
            //             setIsTextVisible(true);
            //         }
            //     });
            // },
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsTextVisible(true);
                } else {
                    setIsTextVisible(false);
                }
            },
            { threshold: 0.5 } // 50% блока видно на экране
        );
        const current = sectionRef.current;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);

    return (
        <>
            <div className="photo-grid">
                {images.map((item, index) => {
                    if (item.isTextBlock) {
                        return (
                            <div key={index} className={item.className}>
                                <div
                                    ref={sectionRef}
                                    className={photoTextBoxClassName}
                                >
                                    <p 
                                        className={photoTextClassName}>
                                        {item.text}
                                    </p>
                                </div>
                                <img
                                    className="photo-grid-item"
                                    src={item.image.src}
                                    alt={item.image.alt}
                                    onClick={() => handleImageClick(item.image.src)}
                                />
                            </div>
                        );
                    }

                    return (
                        <img
                            key={index}
                            className={item.className}
                            src={item.src}
                            alt={item.alt}
                            onClick={() => handleImageClick(item.src)}
                        />
                    );
                })}

                <ImagePopup 
                    imageSrc={selectedImage} 
                    onClose={handleClosePopup}
                />
            </div>
        </>
    );

    // return (
    //     <>
    //     <div className="photo-grid">
    //         <img className="photo-grid-item size-big-start" src={lecture} alt="" onClick={() => handleImageClick(lecture)}/>
    //         <img className="photo-grid-item" src={girls} alt="" onClick={() => handleImageClick(girls)}/>
    //         <img className="photo-grid-item" src={a} alt="" onClick={() => handleImageClick(a)}/>
    //         <img className="photo-grid-item" src={girls} alt=""/>
    //         <div className="photo-grid-container size-big-middle">
    //             <div className="photo-grid-text-box">
    //                 <p className="photo-grid-text">У нас происходит много интересного - ждем тебя!</p>
    //             </div>
    //             <img className="photo-grid-item" src={room} alt=""/>
    //         </div>
    //         {/* <img className="photo-grid-item size-big-middle" src={room} alt=""/> */}
    //         <img className="photo-grid-item" src={girls} alt=""/>
    //         <img className="photo-grid-item" src={win} alt=""/>
    //         <img className="photo-grid-item" src={girls} alt=""/>
    //         <img className="photo-grid-item size-large" src={cups} alt=""/>
    //         <ImagePopup 
    //             // card={selectedCard}
    //             // active={isPopupOpen}
    //             // onClose={handlePopupClose}
    //             imageSrc={selectedImage} 
    //             onClose={handleClosePopup}
    //         />
    //     </div>
    //     </>

    // )
}