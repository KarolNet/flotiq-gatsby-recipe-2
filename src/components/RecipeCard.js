import React from 'react';
import { Card } from 'flotiq-components-react';

const CustomRecipeCard = ({ cookingTime, servings, onClick, name, image, tags }) => (
    <Card
        standard
        onClick={onClick}
        bordered={false}
        additionalClasses={['mb-4 cursor-pointer basis-full md:basis-1/2 lg:basis-1/3 px-2 !bg-transparent']}
    >
        <Card.Img src={image} alt={name} additionalContainerClasses={['w-full']} />
        <Card.Body
            additionalClasses={[
                'flex flex-col items-start justify-between order-2 lg:order-1 px-5 pt-10 pb-2 border-b-4 bg-white',
            ]}
        >
            <div className="flex flex-wrap justify-start text-xs font-light space-x-5 pb-3">
                <p className="px-4 py-2 bg-light-gray">
                    Time:
                    {' '}
                    <span className="font-semibold text-sm">{cookingTime}</span>
                </p>
                <p className="px-4 py-2 bg-light-gray">
                    Portions:
                    {' '}
                    <span className="font-semibold text-sm">{servings}</span>
                </p>
            </div>
            <Card.Title additionalClasses={['font-normal']}>
                {name}
            </Card.Title>
            <div className="flex flex-wrap justify-start text-sm font-light mt-5">
                {tags && tags.map((tag) => (
                    <a
                        href="/"
                        className="mr-5 my-1 py-2 inline-flex items-center justify-center
                        rounded-md underline text-xs font-light hover:text-secondary"
                    >
                        {tag}
                    </a>
                ))}
            </div>
        </Card.Body>
    </Card>
)

// <div className="px2 basis-full md:basis-1/2 lg:basis-1/3 cursor-pointer">
//     <div
//         className="bg-white mx-2 mb-5 border-b-4"
//         onClick={onClick}
//     >
//         {image && (
//             <img className="w-full" src={image} alt={name} />
//         )}
//         <div className="flex flex-wrap justify-start text-sm font-light space-x-5 px-5 pt-5">
//             <p className="px-4 py-3 bg-light-gray">
//                 Time:
//                 {' '}
//                 <span className="font-semibold">{cookingTime}</span>
//             </p>
//             <p className="px-4 py-3 bg-light-gray">
//                 Portions:
//                 {' '}
//                 <span className="font-semibold">{servings}</span>
//             </p>
//         </div>
//         <h1 className="my-2 px-5 text-xl md:text-2xl">{name}</h1>
//         <div className="flex flex-wrap justify-start text-sm font-light mt-5 px-5">
//             {tags && tags.map((tag) => (
//                 <a
//                     href="/"
//                     className="mr-7 my-1 py-2 inline-flex items-center justify-center
//                     rounded-md underline text-xs font-light hover:text-secondary"
//                 >
//                     {tag}
//                 </a>
//             ))}
//         </div>
//     </div>
// </div>

;

export default CustomRecipeCard;