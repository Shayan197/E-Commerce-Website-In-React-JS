import React, { useState } from 'react';
import './DescriptionBox.css'

const DescriptionBox = () => {
    const [description, setDescription] = useState("description");
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-nevigator">
                <div onClick={() => setDescription("description")} className='descriptionbox-nav-box' tabIndex={0}>Description</div>
                <div onClick={() => setDescription("reviews")} className='descriptionbox-nav-box' tabIndex={0}> Reviews (122) </div>
            </div>
            <div className="descriptionbox-description">
                {
                    description === "description" ? (
                        <>
                            <p>
                                E-commerce eum voluptatibus corrupti aspernatur totam quo maiores quia. Deleniti aliquam earum vel sit illo quo obcaecati delectus,
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consectetur adipisci magnam fugiat vel, tempora eligendi ea, vero temporibus nisi
                                eum voluptatibus corrupti aspernatur totam quo maiores quia. Deleniti aliquam earum vel sit illo quo obcaecati delectus, non itaque sunt.
                            </p>
                            <p>
                                Eum voluptatibus corrupti aspernatur totam quo maiores quia. Deleniti aliquam earum vel sit illo quo obcaecati delectus,
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis unde dicta doloremque repellat inventore est iusto illo! Ab, beatae qui.
                            </p>
                        </>
                    ) : (
                        <p>
                            E-commerce Eum voluptatibus corrupti aspernatur totam quo maiores quia. Deleniti aliquam earum vel sit illo quo obcaecati delectus,
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis unde dicta doloremque repellat inventore est iusto illo! Ab, beatae qui.
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default DescriptionBox;
