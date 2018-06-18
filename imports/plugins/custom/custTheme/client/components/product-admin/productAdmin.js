import React from "react";
import { Components, replaceComponent } from "@reactioncommerce/reaction-components";
import CoreProductAdmin from "/imports/plugins/included/product-admin/client/components/productAdmin";


class ProductAdmin extends CoreProductAdmin {
  render() {
    return (
      // -------------- %< --------------------
      //             more stuff
      // -------------- %< --------------------
      <Components.Divider />
      <div className="row">
        <div className="col-sm-12">
          <Components.TextField
            i18nKeyLabel="productVariant.SKU"
            i18nKeyPlaceholder=""
            placeholder=""
            label="SKU"
            name="SKU"
            ref="SKU"
            value={this.product.SKU}
            onBlur={this.handleFieldBlur}
            onChange={this.handleFieldChange}
            onReturnKeyDown={this.handleFieldBlur}
          />
        </div>
      </div>
            <Components.Divider />
            <div className="row">
              <div className="col-sm-12">
                <Components.TextField
                  i18nKeyLabel="productVariant.Type"
                  i18nKeyPlaceholder=""
                  placeholder=""
                  label="Type"
                  name="Type"
                  ref="Type"
                  value={this.product.Type}
                  onBlur={this.handleFieldBlur}
                  onChange={this.handleFieldChange}
                  onReturnKeyDown={this.handleFieldBlur}
                />
              </div>
            </div>
                  <Components.Divider />
                  <div className="row">
                    <div className="col-sm-12">
                      <Components.TextField
                        i18nKeyLabel="productVariant.Zone"
                        i18nKeyPlaceholder=""
                        placeholder=""
                        label="Zone"
                        name="Zone"
                        ref="Zone"
                        value={this.product.Zone}
                        onBlur={this.handleFieldBlur}
                        onChange={this.handleFieldChange}
                        onReturnKeyDown={this.handleFieldBlur}
                      />
                    </div>
                  </div>
      // -------------- %< --------------------
      //             more stuff
      // -------------- %< --------------------
    );
  }
}

replaceComponent("ProductAdmin", ProductAdmin);

export default ProductAdmin;