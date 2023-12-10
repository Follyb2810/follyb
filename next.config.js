// // next.config.js
// module.exports = {
//     webpack: (config) => {
//       config.module.rules.push({
//         test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2|docx)$/i,
//         use: [
//           {
//             loader: 'file-loader',
//           },
//         ],
//       });
  
//       return config;
//     },
//   };
  
/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
      domains: ['lh3.googleusercontent.com','cdn.coinranking.com','www.coindesk.com', 'cloudfront-us-east-1.images.arcpublishing.com'],
    },
    env: {
      customKey: 'my-value',
      X_RapidAPI_Key:'0da537d340mshc80cdfd3774d48ep1fb564jsnbf1c0de925d6'
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config
    }
  }
  
  module.exports = nextConfig