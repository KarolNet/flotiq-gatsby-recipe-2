import React from 'react';
import { graphql } from 'gatsby';
import { Header, List, Paragraph } from 'flotiq-components-react';
import Layout from '../layouts/layout';

const RecipeTemplate = ({ data }) => {
    const { recipe } = data;
    return (
        <Layout additionalClass={['bg-light-gray']}>
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 bg-white">
                <div className="flex basis-full md:basis-1/2">
                    Header image
                </div>
                <div className="flex flex-col basis-full md:basis-1/2 pl-0 md:pl-12 pt-5 pb-10 bg-white">
                    <div className="flex flex-wrap justify-start text-sm font-light space-x-5 py-5">
                        <p className="px-4 py-3 bg-light-gray">
                            Time:
                            {' '}
                            <span className="font-semibold">
                                {recipe.cookingTime}
                                {' '}
                            </span>
                            min
                        </p>
                        <p className="px-4 py-3 bg-light-gray">
                            Portions:
                            {' '}
                            <span className="font-semibold">{recipe.servings}</span>
                        </p>
                    </div>
                    <Header
                        additionalClasses={['text-xl md:text-5xl text-secondary !font-normal']}
                        text={recipe.name}
                    />
                    <Paragraph text={recipe.description} />
                    <Header
                        level={4}
                        additionalClasses={['uppercase mt-16 mb-10']}
                        text="Ingredients:"
                    />
                    <List
                        items={recipe.ingredients.map((ingredient) => (
                            { content: `${ingredient.amount} ${ingredient.unit} ${ingredient.product}` }
                        ))}
                    />
                </div>
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query PortfolioProjectBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        recipe( slug: { eq: $slug } ) {
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
            ingredients {
                amount
                unit
                product
            }
            steps {
                image {
                    extension
                    id
                }
            }
        }
    }
`;

export default RecipeTemplate;
