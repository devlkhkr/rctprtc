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
            <a href="http://3.34.51.151">chattings ver 0.1 beta test</a>
            <a href="http://3.34.51.151">chattings ver 0.2 beta test (2021-10-03) update</a>

        </div>
    );
};

export default About;