// RELATED NEWS

// REACT IMPORTS
import React, { Component } from 'react';
// STYLESHEET
import './RelatedNews.css';
// IMAGE IMPORTS
import News1 from '../../assets/images/news/News1.jpg';
import News2 from '../../assets/images/news/News2.jpg';
import News3 from '../../assets/images/news/News3.jpg';
// CUSTOM COMPONENT IMPORT
import News from "./News";

class RelatedNews extends Component {

    data = [
        {
            img: News1,
            title: "Renewable energy and e-mobility ​Solving Jeju transportation and energy problems",
            date: "10/08/2020"
        },
        {
            img: News2,
            title: "Smart City Challenge business in earnest e-3DA Future City Construction",
            date: "24/08/2020"
        },
        {
            img: News3,
            title: "Jeju Island. 2020 Smart City Selected as a challenge project",
            date: "28/05/2020"
        },
    ]

    render() {
        return (
            <div className='newsMainDiv'>
                <div className='NINDiv'>
                    Related News
                    <hr />
                    <div className='rnDiv'>
                        {this.data.map((item) => {
                            return (<div style={{'padding': '10px'}}>
                                <News img={item.img} title={item.title} date={item.date} />
                            </div>);
                        })}
                    </div>
                </div>
            </div>
        );
    }

}

export default RelatedNews;