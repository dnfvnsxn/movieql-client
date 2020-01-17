import gql from "graphql-tag";

export const HOME_PAGE = gql`
    query {
        movies(limit: 50, rating: 8.5) {
            id
            title
            genres
            rating
            medium_cover_image
        }
    }
`;

//export const MOVIE_DETAIL = gql``;
