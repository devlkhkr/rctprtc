import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    const detail = query.detail === 'true';

    return (
        <div>
            <div>About {match.params.name}</div>
            <div>Web for Kany practice ES6 & React</div>
            <div>Test</div>
            {detail && 'detail: blahblah'}
            <a href="http://3.34.51.151">chattings</a>
        </div>
    );
};

export default About;