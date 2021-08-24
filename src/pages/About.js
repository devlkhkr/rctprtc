import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    const detail = query.detail === 'true';

    return (
        <div>
            <div>About {match.params.name}</div>
            {detail && 'detail: blahblah'}
        </div>
    );
};

export default About;