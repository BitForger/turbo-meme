const {Text, Relationship, Slug} = require("@keystonejs/fields");
const {atTracking} = require("@keystonejs/list-plugins");

module.exports = {
    fields: {
        name: {
            type: Text,
            isRequired: true,
        },
        mlsNumber: {
            type: Text,
            isRequired: true,
            label: 'MLS #',
        },
        images: {
            type: Relationship,
            ref: 'Image',
            many: true
        },
        shareableUrl: {
            type: Slug,
            generate: ({resolvedData}) => `https://georgiakovacsrealty.com/listing/${resolvedData.mlsNumber}`
        }
    },
    plugins: [
        atTracking()
    ]
};
