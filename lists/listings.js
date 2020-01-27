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
            isUnique: true
        },
        images: {
            type: Relationship,
            ref: 'Image',
            many: true
        },
        shareableUrl: {
            type: Slug,
            generate: ({resolvedData, existingItem}) => {
                if (resolvedData.mlsNumber) {
                    return `https://georgiakovacsrealty.com/listing/${resolvedData.mlsNumber}`;
                } else {
                    return existingItem.shareableUrl;
                }

            }
        }
    },
    plugins: [
        atTracking()
    ],
    queryLimits: {
        maxResults: 100,
    },
    cacheControl: {
        scope: 'PUBLIC',
        defaultMaxAge: 3600,
    }
};
