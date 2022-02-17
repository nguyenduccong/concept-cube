import React from 'react';


const ListCard = (props) => {
    const { data } = props;

    return (
        <div className="workContainer">
            <div className="card">
                {
                    data
                        ?
                        data.map((item, idx) => (
                            <div key={idx} className="boxCard">
                                <img src={item.image} alt="" />
                                <div className="imghover">
                                    <div className="imghover_content">
                                        <div className="desc">{item.desc}</div>
                                        <div className="partners">{item.partners}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        ""
                }

            </div>
        </div>
    )
}

export default ListCard;