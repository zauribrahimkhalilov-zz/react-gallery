import React from 'react';

const Image = (props) => {

    return (
        <div className="row align-items-stretch">
            {props.images.map(m =>
                <div key={m.id} className="col-6 col-md-6 col-lg-4" data-aos="fade-up">
                    <a href={m.urls.full} className="d-block photo-item" data-fancybox="gallery">
                        <img src={m.urls.full} alt="" className="img-fluid" />
                        <div className="photo-text-more">
                            <span className="icon icon-eye"></span>
                        </div>
                    </a>
                </div>
            )}
        </div>
    );

}
export default Image;