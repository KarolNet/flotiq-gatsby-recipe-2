import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Announcement, Pagination } from 'flotiq-components-react';
import Layout from '../layouts/layout';
// import CategoriesChoiceBar from '../components/CategoriesChoiceBar';
import RecipeCards from '../sections/RecipeCards';
import RecipeFeaturedCard from '../components/RecipeFeaturedCard';
import RecipeImage from '../assets/recipe-image.jpg';

const IndexPage = ({ data, pageContext }) => {
    const recipes = data.allRecipe.nodes;
    // const categoryTabs = [
    //     { name: 'Breakfast', href: '#', current: true },
    //     { name: 'Dinner', href: '#', current: false },
    //     { name: 'Dessert', href: '#', current: false },
    //     { name: 'Lunch', href: '#', current: false },
    //     { name: 'Snack', href: '#', current: false },
    //     { name: 'Vegan', href: '#', current: false },
    // ];
    return (
        <Layout additionalClass={['bg-light-gray']}>
            <Helmet>
                <title>Flotiq Gatsby recipe starter</title>
            </Helmet>
            <Announcement
                content={(
                    <span className="leading-normal">
                        A blog full of
                        {' '}
                        <span className="text-secondary font-medium">easy to make recipes</span>
                        <br />
                        {' '}
                        that take the stress out of cooking.
                    </span>
                )}
                rounded="none"
                textAlignment="center"
                variant="transparent"
                additionalClasses={['max-w-3xl mx-auto mt-10 !text-3xl md:!text-4xl !font-light !px-4']}
            />
            {/* Uncomment this to add categories to your recipes */}
            {/* <CategoriesChoiceBar additionalClass={['my-5']} categoryTabs={categoryTabs} /> */}
            <RecipeFeaturedCard
                title={(
                    <span className="block text-3xl md:text-5xl mb-4 mx-1 font-normal">
                        Cozy, Little
                        <span className="block text-secondary leading-relaxed"> Chilli Weekend </span>
                    </span>
                )}
                excerpt="Get some protein into a vegan diet with this tasty chickpea curry jacket.
                It's an easy midweek meal, or filling lunch that packs a lot of flavour."
                tags={['#dinner', '#vegan', '#lunch', '#glutenfree']}
                preparationTime="10 min"
                portions="2"
                image={RecipeImage}
            />
            <RecipeCards recipes={recipes} headerText="Newest recipes" />
            <Pagination
                page={pageContext.currentPage}
                numOfPages={pageContext.numPages}
                borderVariant="transparent"
                next="???"
                prev="???"
                rounded="none"
                variant="transparent"
                additionalClasses={['font-light']}
                prevNextAdditionalClasses={['!bg-primary px-3 md:px-4 !w-auto !text-white']}
                activeAdditionalClasses={['!font-semibold before:block before:absolute '
                + 'before:w-2 before:h-2 before:-bottom-2 before:bg-primary']}
            />
        </Layout>
    );
};

export const pageQuery = graphql`
    query indexQuery($skip: Int!, $limit: Int!) {
        site {
            siteMetadata {
                title
            }
        }
        allRecipe(sort: {fields: flotiqInternal___createdAt, order: DESC}, limit: $limit, skip: $skip,) {
            nodes {
                id
                cookingTime
                description
                name
                slug
                servings
                image {
                    extension
                    url
                    width
                    height
                    localFile {
                        publicURL
                        childImageSharp {
                            gatsbyImageData(layout: FULL_WIDTH)
                        }
                    }
                }
            }
        }
    }
`;

export default IndexPage;
