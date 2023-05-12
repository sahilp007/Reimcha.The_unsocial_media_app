// import React, { useContext } from 'react';
// import { render, screen } from '@testing-library/react';
// import UserImage from '../../../../client/src/components/UserImage.jsx';
//
// test('renders user image with correct size and source', () => {
//     const image = 'user.jpg';
//     const size = '80px';
//
//     const { getByAltText } = render(<UserImage image={image} size={size} />);
//
//     const imgElement = getByAltText('user');
//     expect(imgElement).toBeInTheDocument();
//     expect(imgElement).toHaveAttribute('src', `http://localhost:3001/assets/${image}`);
//     expect(imgElement).toHaveStyle(`width: ${size}`);
//     expect(imgElement).toHaveStyle(`height: ${size}`);
//     expect(imgElement).toHaveStyle('object-fit: cover');
//     expect(imgElement).toHaveStyle('border-radius: 50%');
// });

import React from 'react';
import { render } from '@testing-library/react';
import FlexBetween from '../../../../client/src/components/FlexBetween.jsx';

describe('FlexBetween', () => {
    test('renders correctly with the expected styles', () => {
        const { container } = render(<FlexBetween>Content</FlexBetween>);
        const flexBetweenElement = container.firstChild;

        expect(flexBetweenElement).toBeInTheDocument();
        expect(flexBetweenElement).toHaveStyle('display: flex;');
        expect(flexBetweenElement).toHaveStyle('justify-content: space-between;');
        expect(flexBetweenElement).toHaveStyle('align-items: center;');
    });
});
