import React from 'react';
import { graphql } from 'gatsby';
import { Image, Header, List, Paragraph } from 'flotiq-components-react';
import { Helmet } from 'react-helmet';
import Layout from '../layouts/layout';
import RecipeBackButton from '../components/recipe/RecipeBackButton';
import RecipeSteps from '../components/recipe/RecipeSteps';
import HeaderImageWithText from '../components/recipe/HeaderImageWithText';
import RecipeCards from '../sections/RecipeCards';

const RecipeTemplate = ({ data }) => {
    const { recipe } = data;
    const recipes = data.allRecipe.nodes;

    return (
        <Layout additionalClass={['bg-light-gray']}>
            <Helmet>
                <title>{recipe.name}</title>
            </Helmet>
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <RecipeBackButton additionalClass={['mt-12 mb-5 uppercase']} backButtonText="Go back" />
            </div>
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div
                    className="flex basis-full lg:basis-1/2 bg-cover bg-center"
                    style={{ backgroundImage: `url('${recipe.image[0] && recipe.image[0].localFile.publicURL}')` }}
                >
                    <Image
                        url={recipe.image[0] && recipe.image[0].localFile.publicURL}
                        additionalClasses={['lg:hidden']}
                    />
                </div>
                <div className="flex flex-col basis-full lg:basis-1/2 pl-0 lg:pl-12 pt-5 pb-10 bg-white">
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
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <RecipeSteps steps={recipe.steps} additionalClass={['my-5']} headerText="Steps:" />
            </div>
            <HeaderImageWithText
                recipe={recipe}
                headerText1="Enjoy"
                headerText2="your"
                headerText3="meal!"
            />
            <RecipeCards recipes={recipes} headerText="Next recipe to cook:" />
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
                    localFile {
                        publicURL
                    }
                }
                step
            }
        }
        allRecipe(sort: {fields: flotiqInternal___createdAt, order: DESC}, limit: 3, filter: {slug: {ne: $slug}}) {
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

export default RecipeTemplate;
