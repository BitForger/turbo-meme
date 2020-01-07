const { CloudinaryAdapter} = require("@keystonejs/file-adapters");
const S3Adapter = require("@bitforger/keystone-file-adapter-s3");
const {File} = require("@keystonejs/fields");
const s3Adapter = new S3Adapter({
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region: 'us-east-1',
    bucket: 'listing-images-gkovacs',
    folder: 'img',
    publicUrl: ({id, filename, _meta}) => `https://img.georgiakovacsrealty.com/${filename}`
});

const cloudinaryAdapter = new CloudinaryAdapter({
    cloudName: 'dvq0vj606',
    apiKey: '934278191962596',
    apiSecret: 'EdA7fFyPsrCJe4uBEAdyExqkubM'
});

module.exports = {
    fields: {
        image: {
            type: File,
            adapter: s3Adapter,
        }
    }
};
