import { Meteor } from "meteor/meteor";
import Schemas from "@reactioncommerce/schemas";
import { Products } from "/lib/collections/index";

const ExtendedSchema = Schemas.Product.extend({
    SKU : {
    optional: true,
    type: String
  },
  Type : {
    optional: true,
    type: String
  },
  Zone : {
    optional: true,
    type: String
  }
});

Products.attachSchema(ExtendedSchema, { replace: true, selector: { type: "simple" } });