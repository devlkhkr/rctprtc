import React from 'react';

const Post = ({match},props) => {
    return (
        <div>
            포스트 {match.params.id}
        </div>
    );
};

export default Post;