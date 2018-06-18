import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Logger, Reaction } from "/server/api";
import { Shops, Products, Tags, Shipping, MediaRecords, Packages, Catalog } from "/lib/collections";

function checkForShops() {
  const numShops = Shops.find().count();
  return numShops;
}

const methods = {};
methods.loadShops = function () {
    Logger.info("Starting load Shops");
    if (!checkForShops()) {
      const shops = require("../private/data/Shops.json");
      shops.forEach((shop) => {
        Shops.insert(shop);
        Logger.info(`Inserted shop: ${shop.name}`);
      });
      Logger.info("Shops loaded");
    }
  };

//   methods.importProductImages = function () {
//     Logger.info("Started loading product images");
//     if (!checkForMedia()) {
//       const products = Products.find({ type: "simple" }).fetch();
//       for (const product of products) {
//         const productId = product._id;
//         if (!MediaRecords.findOne({ "metadata.productId": productId })) {
//           const { shopId } = product;
//           const filepath = `plugins/reaction-swag-shop/images/${productId}.jpg`;
//           const uint8array = Assets.getBinary(filepath);
//           const topVariant = getTopVariant(productId);
//           const metadata = {
//             productId,
//             variantId: topVariant._id,
//             toGrid: 1,
//             shopId,
//             priority: 0,
//             workflow: "published"
//           };
//           const fileRecord = new FileRecord({
//             original: {
//               size: uint8array.length,
//               name: `${productId}.jpg`,
//               type: "image/jpeg"
//             }
//           });
//           fileRecord.attachData(new Buffer(uint8array));
//           fileRecord.metadata = metadata;
//           Media.insert(fileRecord);
//           Promise.await(storeFromAttachedBuffer(fileRecord));
//         }
//       }
//       Logger.info("loaded product images");
//     } else {
//       Logger.info("Skipped loading product images");
//     }
//   };

export default methods;