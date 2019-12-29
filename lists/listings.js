const {Text, Relationship} = require("@keystonejs/fields");
const {atTracking} = require("@keystonejs/list-plugins");

module.exports = {
    fields: {
        mlsNumber: {
            type: Text,
            isRequired: true,
            label: 'MLS #'
        },
        title: {
            type: Text,
            isRequired: true,
        },
        images: {
            type: Relationship,
            ref: 'Image',
            many: true
        },
    },
    plugins: [
        atTracking()
    ]
};
