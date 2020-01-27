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

module.exports = {
    fields: {
        image: {
            type: File,
            adapter: s3Adapter,
        }
    }
};
