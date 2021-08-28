import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    const detail = query.detail === 'true';

    return (
        <div>
            <div>About {match.params.name}</div>
            <div>Web for Kany practice ES6 & React</div>
            {detail && 'detail: blahblah'}
        </div>
    );
};

export default About;