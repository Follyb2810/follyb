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
      domains: ['lh3.googleusercontent.com'],
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