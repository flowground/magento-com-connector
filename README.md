# ![LOGO](logo.png) Magento Enterprise **flow**ground Connector

## Description

A generated **flow**ground connector for the Magento Enterprise API (version 2.1).

Generated from: https://api.apis.guru/v2/specs/magento.com/2.1/swagger.json<br/>
Generated at: 2019-06-06T16:12:40+03:00

## API Description

Magento Commerce is the leading provider of open omnichannel innovation.

## Authorization

This API does not require authorization.

## Actions

### Delete customer address by ID.

*Tags:* `customerAddressRepositoryV1`

#### Input Parameters
* `addressId` - _required_

### Get all attribute metadata.

*Tags:* `customerCustomerMetadataV1`

### Retrieve attribute metadata.

*Tags:* `customerCustomerMetadataV1`

#### Input Parameters
* `attributeCode` - _required_

### Get custom attributes metadata for the given data interface.

*Tags:* `customerCustomerMetadataV1`

#### Input Parameters
* `dataInterfaceName` - _optional_

### Retrieve all attributes filtered by form code

*Tags:* `customerCustomerMetadataV1`

#### Input Parameters
* `formCode` - _required_

### Get all attribute metadata.

*Tags:* `customerAddressMetadataV1`

### Retrieve attribute metadata.

*Tags:* `customerAddressMetadataV1`

#### Input Parameters
* `attributeCode` - _required_

### Get custom attributes metadata for the given data interface.

*Tags:* `customerAddressMetadataV1`

#### Input Parameters
* `dataInterfaceName` - _optional_

### Retrieve all attributes filtered by form code

*Tags:* `customerAddressMetadataV1`

#### Input Parameters
* `formCode` - _required_

### Add new option for bundle product

*Tags:* `bundleProductOptionManagementV1`

### Get all types for options for bundle products

*Tags:* `bundleProductOptionTypeListV1`

### Add new option for bundle product

*Tags:* `bundleProductOptionManagementV1`

#### Input Parameters
* `optionId` - _required_

### Get all children for Bundle product

*Tags:* `bundleProductLinkManagementV1`

#### Input Parameters
* `productSku` - _required_
* `optionId` - _optional_

### bundleProductLinkManagementV1SaveChildPut

*Tags:* `bundleProductLinkManagementV1`

#### Input Parameters
* `sku` - _required_
* `id` - _required_

### Add child product to specified Bundle option by product sku

*Tags:* `bundleProductLinkManagementV1`

#### Input Parameters
* `sku` - _required_
* `optionId` - _required_

### Get all options for bundle product

*Tags:* `bundleProductOptionRepositoryV1`

#### Input Parameters
* `sku` - _required_

### Remove bundle option

*Tags:* `bundleProductOptionRepositoryV1`

#### Input Parameters
* `sku` - _required_
* `optionId` - _required_

### Get option for bundle product

*Tags:* `bundleProductOptionRepositoryV1`

#### Input Parameters
* `sku` - _required_
* `optionId` - _required_

### Remove product from Bundle product option

*Tags:* `bundleProductLinkManagementV1`

#### Input Parameters
* `sku` - _required_
* `optionId` - _required_
* `childSku` - _required_

### Creates an empty cart and quote for a guest.

*Tags:* `quoteCartManagementV1`

### giftCardAccountGuestGiftCardAccountManagementV1CheckGiftCardGet

*Tags:* `giftCardAccountGuestGiftCardAccountManagementV1`

#### Input Parameters
* `cartId` - _required_
* `giftCardCode` - _required_

### giftCardAccountGuestGiftCardAccountManagementV1AddGiftCardPost

*Tags:* `giftCardAccountGuestGiftCardAccountManagementV1`

#### Input Parameters
* `cartId` - _required_

### Remove GiftCard Account entity

*Tags:* `giftCardAccountGuestGiftCardAccountManagementV1`

#### Input Parameters
* `cartId` - _required_
* `giftCardCode` - _required_

### Lists active checkout agreements.

*Tags:* `checkoutAgreementsCheckoutAgreementsRepositoryV1`

### Returns information for the cart for a specified customer.

*Tags:* `quoteCartManagementV1`

### Creates an empty cart and quote for a specified customer.

*Tags:* `quoteCartManagementV1`

### Save quote

*Tags:* `quoteCartRepositoryV1`

### Apply store credit

*Tags:* `customerBalanceBalanceManagementV1`

### Returns the billing address for a specified quote.

*Tags:* `quoteBillingAddressManagementV1`

### Assigns a specified billing address to a specified cart.

*Tags:* `quoteBillingAddressManagementV1`

### giftCardAccountGiftCardAccountManagementV1CheckGiftCardGet

*Tags:* `giftCardAccountGiftCardAccountManagementV1`

#### Input Parameters
* `giftCardCode` - _required_

### Set shipping/billing methods and additional data for cart and collect totals.

*Tags:* `quoteCartTotalManagementV1`

### Deletes a coupon from a specified cart.

*Tags:* `quoteCouponManagementV1`

### Returns information for a coupon in a specified cart.

*Tags:* `quoteCouponManagementV1`

### Adds a coupon by code to a specified cart.

*Tags:* `quoteCouponManagementV1`

#### Input Parameters
* `couponCode` - _required_ - The coupon code data.

### Estimate shipping by address and return list of available shipping methods

*Tags:* `quoteShipmentEstimationV1`

### Estimate shipping

*Tags:* `quoteShippingMethodManagementV1`

### Return the gift message for a specified order.

*Tags:* `giftMessageCartRepositoryV1`

### Set the gift message for an entire order.

*Tags:* `giftMessageCartRepositoryV1`

### Return the gift message for a specified item in a specified shopping cart.

*Tags:* `giftMessageItemRepositoryV1`

#### Input Parameters
* `itemId` - _required_ - The item ID.

### Set the gift message for a specified item in a specified shopping cart.

*Tags:* `giftMessageItemRepositoryV1`

#### Input Parameters
* `itemId` - _required_ - The item ID.

### giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPost

*Tags:* `giftCardAccountGiftCardAccountManagementV1`

### Remove GiftCard Account entity

*Tags:* `giftCardAccountGiftCardAccountManagementV1`

#### Input Parameters
* `giftCardCode` - _required_

### Lists items that are assigned to a specified cart.

*Tags:* `quoteCartItemRepositoryV1`

### Add/update the specified cart item.

*Tags:* `quoteCartItemRepositoryV1`

### Removes the specified item from the specified cart.

*Tags:* `quoteCartItemRepositoryV1`

#### Input Parameters
* `itemId` - _required_ - The item ID of the item to be removed.

### Add/update the specified cart item.

*Tags:* `quoteCartItemRepositoryV1`

#### Input Parameters
* `itemId` - _required_

### Places an order for a specified cart.

*Tags:* `quoteCartManagementV1`

### Get payment information

*Tags:* `checkoutPaymentInformationManagementV1`

### Set payment information and place order for a specified cart.

*Tags:* `checkoutPaymentInformationManagementV1`

### Lists available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object's attributes might not be included.  See http://devdocs.magento.com/codelinks/attributes.html#PaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.

*Tags:* `quotePaymentMethodManagementV1`

### Returns the payment method for a specified shopping cart.

*Tags:* `quotePaymentMethodManagementV1`

### Adds a specified payment method to a specified shopping cart.

*Tags:* `quotePaymentMethodManagementV1`

### Set payment information for a specified cart.

*Tags:* `checkoutPaymentInformationManagementV1`

### post_V1_carts_mine_shipping_information

*Tags:* `checkoutShippingInformationManagementV1`

### Lists applicable shipping methods for a specified quote.

*Tags:* `quoteShippingMethodManagementV1`

### Returns quote totals data for a specified cart.

*Tags:* `quoteCartTotalRepositoryV1`

### Calculate quote totals based on address and shipping method.

*Tags:* `checkoutTotalsInformationManagementV1`

### Enables administrative users to list carts that match specified search criteria. This call returns an array of objects, but detailed information about each object's attributes might not be included.  See http://devdocs.magento.com/codelinks/attributes.html#CartRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

*Tags:* `quoteCartRepositoryV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Enables an administrative user to return information for a specified cart.

*Tags:* `quoteCartRepositoryV1`

#### Input Parameters
* `cartId` - _required_

### Assigns a specified customer to a specified shopping cart.

*Tags:* `quoteCartManagementV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Returns the billing address for a specified quote.

*Tags:* `quoteBillingAddressManagementV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Assigns a specified billing address to a specified cart.

*Tags:* `quoteBillingAddressManagementV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Deletes a coupon from a specified cart.

*Tags:* `quoteCouponManagementV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Returns information for a coupon in a specified cart.

*Tags:* `quoteCouponManagementV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Adds a coupon by code to a specified cart.

*Tags:* `quoteCouponManagementV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.
* `couponCode` - _required_ - The coupon code data.

### Estimate shipping by address and return list of available shipping methods

*Tags:* `quoteShipmentEstimationV1`

#### Input Parameters
* `cartId` - _required_

### Estimate shipping

*Tags:* `quoteShippingMethodManagementV1`

#### Input Parameters
* `cartId` - _required_ - The shopping cart ID.

### Return the gift message for a specified order.

*Tags:* `giftMessageCartRepositoryV1`

#### Input Parameters
* `cartId` - _required_ - The shopping cart ID.

### Set the gift message for an entire order.

*Tags:* `giftMessageCartRepositoryV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Return the gift message for a specified item in a specified shopping cart.

*Tags:* `giftMessageItemRepositoryV1`

#### Input Parameters
* `cartId` - _required_ - The shopping cart ID.
* `itemId` - _required_ - The item ID.

### Set the gift message for a specified item in a specified shopping cart.

*Tags:* `giftMessageItemRepositoryV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.
* `itemId` - _required_ - The item ID.

### giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPut

*Tags:* `giftCardAccountGiftCardAccountManagementV1`

#### Input Parameters
* `cartId` - _required_

### Remove GiftCard Account entity

*Tags:* `giftCardAccountGiftCardAccountManagementV1`

#### Input Parameters
* `cartId` - _required_
* `giftCardCode` - _required_

### Lists items that are assigned to a specified cart.

*Tags:* `quoteCartItemRepositoryV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Removes the specified item from the specified cart.

*Tags:* `quoteCartItemRepositoryV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.
* `itemId` - _required_ - The item ID of the item to be removed.

### Add/update the specified cart item.

*Tags:* `quoteCartItemRepositoryV1`

#### Input Parameters
* `cartId` - _required_
* `itemId` - _required_

### Places an order for a specified cart.

*Tags:* `quoteCartManagementV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Lists available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object's attributes might not be included.  See http://devdocs.magento.com/codelinks/attributes.html#PaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.

*Tags:* `quotePaymentMethodManagementV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Returns the payment method for a specified shopping cart.

*Tags:* `quotePaymentMethodManagementV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Adds a specified payment method to a specified shopping cart.

*Tags:* `quotePaymentMethodManagementV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### post_V1_carts__cartId__shipping_information

*Tags:* `checkoutShippingInformationManagementV1`

#### Input Parameters
* `cartId` - _required_

### Lists applicable shipping methods for a specified quote.

*Tags:* `quoteShippingMethodManagementV1`

#### Input Parameters
* `cartId` - _required_ - The shopping cart ID.

### Returns quote totals data for a specified cart.

*Tags:* `quoteCartTotalRepositoryV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Calculate quote totals based on address and shipping method.

*Tags:* `checkoutTotalsInformationManagementV1`

#### Input Parameters
* `cartId` - _required_

### Return GiftCard Account cards

*Tags:* `giftCardAccountGiftCardAccountManagementV1`

#### Input Parameters
* `quoteId` - _required_

### Add/update the specified cart item.

*Tags:* `quoteCartItemRepositoryV1`

#### Input Parameters
* `quoteId` - _required_

### Retrieve list of categories

*Tags:* `catalogCategoryManagementV1`

#### Input Parameters
* `rootCategoryId` - _optional_
* `depth` - _optional_

### Create category service

*Tags:* `catalogCategoryRepositoryV1`

### Retrieve all attributes for entity type

*Tags:* `catalogCategoryAttributeRepositoryV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Retrieve specific attribute

*Tags:* `catalogCategoryAttributeRepositoryV1`

#### Input Parameters
* `attributeCode` - _required_

### Retrieve list of attribute options

*Tags:* `catalogCategoryAttributeOptionManagementV1`

#### Input Parameters
* `attributeCode` - _required_

### Delete category by identifier

*Tags:* `catalogCategoryRepositoryV1`

#### Input Parameters
* `categoryId` - _required_

### Get info about category by category id

*Tags:* `catalogCategoryRepositoryV1`

#### Input Parameters
* `categoryId` - _required_
* `storeId` - _optional_

### Move category

*Tags:* `catalogCategoryManagementV1`

#### Input Parameters
* `categoryId` - _required_

### Get products assigned to category

*Tags:* `catalogCategoryLinkManagementV1`

#### Input Parameters
* `categoryId` - _required_

### Assign a product to the required category

*Tags:* `catalogCategoryLinkRepositoryV1`

#### Input Parameters
* `categoryId` - _required_

### Assign a product to the required category

*Tags:* `catalogCategoryLinkRepositoryV1`

#### Input Parameters
* `categoryId` - _required_

### Remove the product assignment from the category by category id and sku

*Tags:* `catalogCategoryLinkRepositoryV1`

#### Input Parameters
* `categoryId` - _required_
* `sku` - _required_

### Create category service

*Tags:* `catalogCategoryRepositoryV1`

#### Input Parameters
* `id` - _required_

### Save block.

*Tags:* `cmsBlockRepositoryV1`

### Retrieve blocks matching the specified criteria.

*Tags:* `cmsBlockRepositoryV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Delete block by ID.

*Tags:* `cmsBlockRepositoryV1`

#### Input Parameters
* `blockId` - _required_

### Retrieve block.

*Tags:* `cmsBlockRepositoryV1`

#### Input Parameters
* `blockId` - _required_

### Save block.

*Tags:* `cmsBlockRepositoryV1`

#### Input Parameters
* `id` - _required_

### Save page.

*Tags:* `cmsPageRepositoryV1`

### Retrieve pages matching the specified criteria.

*Tags:* `cmsPageRepositoryV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Save page.

*Tags:* `cmsPageRepositoryV1`

#### Input Parameters
* `id` - _required_

### Delete page by ID.

*Tags:* `cmsPageRepositoryV1`

#### Input Parameters
* `pageId` - _required_

### Retrieve page.

*Tags:* `cmsPageRepositoryV1`

#### Input Parameters
* `pageId` - _required_

### Generate variation based on same product

*Tags:* `configurableProductConfigurableProductManagementV1`

### configurableProductLinkManagementV1AddChildPost

*Tags:* `configurableProductLinkManagementV1`

#### Input Parameters
* `sku` - _required_

### Get all children for Configurable product

*Tags:* `configurableProductLinkManagementV1`

#### Input Parameters
* `sku` - _required_

### Remove configurable product option

*Tags:* `configurableProductLinkManagementV1`

#### Input Parameters
* `sku` - _required_
* `childSku` - _required_

### Save option

*Tags:* `configurableProductOptionRepositoryV1`

#### Input Parameters
* `sku` - _required_

### Get all options for configurable product

*Tags:* `configurableProductOptionRepositoryV1`

#### Input Parameters
* `sku` - _required_

### Remove option from configurable product

*Tags:* `configurableProductOptionRepositoryV1`

#### Input Parameters
* `sku` - _required_
* `id` - _required_

### Get option for configurable product

*Tags:* `configurableProductOptionRepositoryV1`

#### Input Parameters
* `sku` - _required_
* `id` - _required_

### Save option

*Tags:* `configurableProductOptionRepositoryV1`

#### Input Parameters
* `sku` - _required_
* `id` - _required_

### Save a coupon.

*Tags:* `salesRuleCouponRepositoryV1`

### Delete coupon by coupon codes.

*Tags:* `salesRuleCouponManagementV1`

### Delete coupon by coupon ids.

*Tags:* `salesRuleCouponManagementV1`

### Generate coupon for a rule

*Tags:* `salesRuleCouponManagementV1`

### Retrieve a coupon using the specified search criteria. This call returns an array of objects, but detailed information about each object's attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#CouponRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

*Tags:* `salesRuleCouponRepositoryV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Delete coupon by coupon id.

*Tags:* `salesRuleCouponRepositoryV1`

#### Input Parameters
* `couponId` - _required_

### Get coupon by coupon id.

*Tags:* `salesRuleCouponRepositoryV1`

#### Input Parameters
* `couponId` - _required_

### Save a coupon.

*Tags:* `salesRuleCouponRepositoryV1`

#### Input Parameters
* `couponId` - _required_

### Performs persist operations for a specified credit memo.

*Tags:* `salesCreditmemoRepositoryV1`

### Prepare creditmemo to refund and save it.

*Tags:* `salesCreditmemoManagementV1`

### Loads a specified credit memo.

*Tags:* `salesCreditmemoRepositoryV1`

#### Input Parameters
* `id` - _required_ - The credit memo ID.

### Cancels a specified credit memo.

*Tags:* `salesCreditmemoManagementV1`

#### Input Parameters
* `id` - _required_ - The credit memo ID.

### Lists comments for a specified credit memo.

*Tags:* `salesCreditmemoManagementV1`

#### Input Parameters
* `id` - _required_ - The credit memo ID.

### Performs persist operations for a specified entity.

*Tags:* `salesCreditmemoCommentRepositoryV1`

#### Input Parameters
* `id` - _required_

### Emails a user a specified credit memo.

*Tags:* `salesCreditmemoManagementV1`

#### Input Parameters
* `id` - _required_ - The credit memo ID.

### Lists credit memos that match specified search criteria. This call returns an array of objects, but detailed information about each object's attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#CreditmemoRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

*Tags:* `salesCreditmemoRepositoryV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Save customer group.

*Tags:* `customerGroupRepositoryV1`

### Get default customer group.

*Tags:* `customerGroupManagementV1`

#### Input Parameters
* `storeId` - _optional_

### Get default customer group.

*Tags:* `customerGroupManagementV1`

#### Input Parameters
* `storeId` - _required_

### Retrieve customer groups. The list of groups can be filtered to exclude the NOT_LOGGED_IN group using the first parameter and/or it can be filtered by tax class. This call returns an array of objects, but detailed information about each object's attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#GroupRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

*Tags:* `customerGroupRepositoryV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Delete customer group by ID.

*Tags:* `customerGroupRepositoryV1`

#### Input Parameters
* `id` - _required_

### Get customer group by group ID.

*Tags:* `customerGroupRepositoryV1`

#### Input Parameters
* `id` - _required_

### Save customer group.

*Tags:* `customerGroupRepositoryV1`

#### Input Parameters
* `id` - _required_

### Check if customer group can be deleted.

*Tags:* `customerGroupManagementV1`

#### Input Parameters
* `id` - _required_

### Create customer account. Perform necessary business operations like sending email.

*Tags:* `customerAccountManagementV1`

### Retrieve customer address.

*Tags:* `customerAddressRepositoryV1`

#### Input Parameters
* `addressId` - _required_

### Resend confirmation email.

*Tags:* `customerAccountManagementV1`

### Check if given email is associated with a customer account in given website.

*Tags:* `customerAccountManagementV1`

### Get customer by customer ID.

*Tags:* `customerCustomerRepositoryV1`

### Create or update a customer.

*Tags:* `customerCustomerRepositoryV1`

### Activate a customer account using a key that was sent in a confirmation email.

*Tags:* `customerAccountManagementV1`

### Retrieve default billing address for the given customerId.

*Tags:* `customerAccountManagementV1`

### Change customer password.

*Tags:* `customerAccountManagementV1`

### Retrieve default shipping address for the given customerId.

*Tags:* `customerAccountManagementV1`

### Send an email to the customer with a password reset link.

*Tags:* `customerAccountManagementV1`

### Retrieve customers which match a specified criteria. This call returns an array of objects, but detailed information about each object's attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#CustomerRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

*Tags:* `customerCustomerRepositoryV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Validate customer data.

*Tags:* `customerAccountManagementV1`

### Delete customer by ID.

*Tags:* `customerCustomerRepositoryV1`

#### Input Parameters
* `customerId` - _required_

### Get customer by customer ID.

*Tags:* `customerCustomerRepositoryV1`

#### Input Parameters
* `customerId` - _required_

### Retrieve default billing address for the given customerId.

*Tags:* `customerAccountManagementV1`

#### Input Parameters
* `customerId` - _required_

### Creates an empty cart and quote for a specified customer.

*Tags:* `quoteCartManagementV1`

#### Input Parameters
* `customerId` - _required_ - The customer ID.

### Gets the account confirmation status.

*Tags:* `customerAccountManagementV1`

#### Input Parameters
* `customerId` - _required_

### Check if password reset token is valid.

*Tags:* `customerAccountManagementV1`

#### Input Parameters
* `customerId` - _required_
* `resetPasswordLinkToken` - _required_

### Check if customer can be deleted.

*Tags:* `customerAccountManagementV1`

#### Input Parameters
* `customerId` - _required_

### Retrieve default shipping address for the given customerId.

*Tags:* `customerAccountManagementV1`

#### Input Parameters
* `customerId` - _required_

### Activate a customer account using a key that was sent in a confirmation email.

*Tags:* `customerAccountManagementV1`

#### Input Parameters
* `email` - _required_

### Create or update a customer.

*Tags:* `customerCustomerRepositoryV1`

#### Input Parameters
* `id` - _required_

### Get all countries and regions information for the store.

*Tags:* `directoryCountryInformationAcquirerV1`

### Get country and region information for the store.

*Tags:* `directoryCountryInformationAcquirerV1`

#### Input Parameters
* `countryId` - _required_

### Get currency information for the store.

*Tags:* `directoryCurrencyInformationAcquirerV1`

### Create attribute set from data

*Tags:* `eavAttributeSetManagementV1`

### Retrieve list of Attribute Sets This call returns an array of objects, but detailed information about each object's attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#AttributeSetRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

*Tags:* `eavAttributeSetRepositoryV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Remove attribute set by given ID

*Tags:* `eavAttributeSetRepositoryV1`

#### Input Parameters
* `attributeSetId` - _required_

### Retrieve attribute set information based on given ID

*Tags:* `eavAttributeSetRepositoryV1`

#### Input Parameters
* `attributeSetId` - _required_

### Save attribute set data

*Tags:* `eavAttributeSetRepositoryV1`

#### Input Parameters
* `attributeSetId` - _required_

### Return list of gift wrapping data objects based on search criteria

*Tags:* `giftWrappingWrappingRepositoryV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Create/Update new gift wrapping with data object values

*Tags:* `giftWrappingWrappingRepositoryV1`

### Delete gift wrapping

*Tags:* `giftWrappingWrappingRepositoryV1`

#### Input Parameters
* `id` - _required_

### Return data object for specified wrapping ID and store.

*Tags:* `giftWrappingWrappingRepositoryV1`

#### Input Parameters
* `id` - _required_
* `storeId` - _optional_

### Create/Update new gift wrapping with data object values

*Tags:* `giftWrappingWrappingRepositoryV1`

#### Input Parameters
* `wrappingId` - _required_

### Estimate shipping

*Tags:* `giftRegistryShippingMethodManagementV1`

### Enable an customer or guest user to create an empty cart and quote for an anonymous customer.

*Tags:* `quoteGuestCartManagementV1`

### Enable a guest user to return information for a specified cart.

*Tags:* `quoteGuestCartRepositoryV1`

#### Input Parameters
* `cartId` - _required_

### Assign a specified customer to a specified shopping cart.

*Tags:* `quoteGuestCartManagementV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Return the billing address for a specified quote.

*Tags:* `quoteGuestBillingAddressManagementV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Assign a specified billing address to a specified cart.

*Tags:* `quoteGuestBillingAddressManagementV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Set shipping/billing methods and additional data for cart and collect totals for guest.

*Tags:* `quoteGuestCartTotalManagementV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Delete a coupon from a specified cart.

*Tags:* `quoteGuestCouponManagementV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Return information for a coupon in a specified cart.

*Tags:* `quoteGuestCouponManagementV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Add a coupon by code to a specified cart.

*Tags:* `quoteGuestCouponManagementV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.
* `couponCode` - _required_ - The coupon code data.

### Estimate shipping by address and return list of available shipping methods

*Tags:* `quoteGuestShipmentEstimationV1`

#### Input Parameters
* `cartId` - _required_

### Return the gift message for a specified order.

*Tags:* `giftMessageGuestCartRepositoryV1`

#### Input Parameters
* `cartId` - _required_ - The shopping cart ID.

### Set the gift message for an entire order.

*Tags:* `giftMessageGuestCartRepositoryV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Return the gift message for a specified item in a specified shopping cart.

*Tags:* `giftMessageGuestItemRepositoryV1`

#### Input Parameters
* `cartId` - _required_ - The shopping cart ID.
* `itemId` - _required_ - The item ID.

### Set the gift message for a specified item in a specified shopping cart.

*Tags:* `giftMessageGuestItemRepositoryV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.
* `itemId` - _required_ - The item ID.

### List items that are assigned to a specified cart.

*Tags:* `quoteGuestCartItemRepositoryV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Add the specified item to the specified cart.

*Tags:* `quoteGuestCartItemRepositoryV1`

#### Input Parameters
* `cartId` - _required_

### Remove the specified item from the specified cart.

*Tags:* `quoteGuestCartItemRepositoryV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.
* `itemId` - _required_ - The item ID of the item to be removed.

### Add the specified item to the specified cart.

*Tags:* `quoteGuestCartItemRepositoryV1`

#### Input Parameters
* `cartId` - _required_
* `itemId` - _required_

### Place an order for a specified cart.

*Tags:* `quoteGuestCartManagementV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Get payment information

*Tags:* `checkoutGuestPaymentInformationManagementV1`

#### Input Parameters
* `cartId` - _required_

### Set payment information and place order for a specified cart.

*Tags:* `checkoutGuestPaymentInformationManagementV1`

#### Input Parameters
* `cartId` - _required_

### List available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object's attributes might not be included.  See http://devdocs.magento.com/codelinks/attributes.html#GuestPaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.

*Tags:* `quoteGuestPaymentMethodManagementV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Return the payment method for a specified shopping cart.

*Tags:* `quoteGuestPaymentMethodManagementV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Add a specified payment method to a specified shopping cart.

*Tags:* `quoteGuestPaymentMethodManagementV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Set payment information for a specified cart.

*Tags:* `checkoutGuestPaymentInformationManagementV1`

#### Input Parameters
* `cartId` - _required_

### checkoutGuestShippingInformationManagementV1SaveAddressInformationPost

*Tags:* `checkoutGuestShippingInformationManagementV1`

#### Input Parameters
* `cartId` - _required_

### List applicable shipping methods for a specified quote.

*Tags:* `quoteGuestShippingMethodManagementV1`

#### Input Parameters
* `cartId` - _required_ - The shopping cart ID.

### Return quote totals data for a specified cart.

*Tags:* `quoteGuestCartTotalRepositoryV1`

#### Input Parameters
* `cartId` - _required_ - The cart ID.

### Calculate quote totals based on address and shipping method.

*Tags:* `checkoutGuestTotalsInformationManagementV1`

#### Input Parameters
* `cartId` - _required_

### Estimate shipping

*Tags:* `giftRegistryGuestCartShippingMethodManagementV1`

#### Input Parameters
* `cartId` - _required_ - The shopping cart ID.

### Create access token for admin given the admin credentials.

*Tags:* `integrationAdminTokenServiceV1`

### Create access token for admin given the customer credentials.

*Tags:* `integrationCustomerTokenServiceV1`

### Create refund for invoice

*Tags:* `salesRefundInvoiceV1`

#### Input Parameters
* `invoiceId` - _required_

### Lists invoices that match specified search criteria. This call returns an array of objects, but detailed information about each object's attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#InvoiceRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

*Tags:* `salesInvoiceRepositoryV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Performs persist operations for a specified invoice.

*Tags:* `salesInvoiceRepositoryV1`

### Performs persist operations for a specified invoice comment.

*Tags:* `salesInvoiceCommentRepositoryV1`

### Loads a specified invoice.

*Tags:* `salesInvoiceRepositoryV1`

#### Input Parameters
* `id` - _required_ - The invoice ID.

### Sets invoice capture.

*Tags:* `salesInvoiceManagementV1`

#### Input Parameters
* `id` - _required_

### Lists comments for a specified invoice.

*Tags:* `salesInvoiceManagementV1`

#### Input Parameters
* `id` - _required_ - The invoice ID.

### Emails a user a specified invoice.

*Tags:* `salesInvoiceManagementV1`

#### Input Parameters
* `id` - _required_ - The invoice ID.

### Voids a specified invoice.

*Tags:* `salesInvoiceManagementV1`

#### Input Parameters
* `id` - _required_ - The invoice ID.

### Returns an array of enabled modules

*Tags:* `backendModuleServiceV1`

### salesInvoiceOrderV1ExecutePost

*Tags:* `salesInvoiceOrderV1`

#### Input Parameters
* `orderId` - _required_

### Create offline refund for order

*Tags:* `salesRefundOrderV1`

#### Input Parameters
* `orderId` - _required_

### Creates new Shipment for given Order.

*Tags:* `salesShipOrderV1`

#### Input Parameters
* `orderId` - _required_

### Lists orders that match specified search criteria. This call returns an array of objects, but detailed information about each object's attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#OrderRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

*Tags:* `salesOrderRepositoryV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Performs persist operations for a specified order.

*Tags:* `salesOrderRepositoryV1`

### Performs persist operations for a specified order.

*Tags:* `salesOrderRepositoryV1`

### Lists order items that match specified search criteria. This call returns an array of objects, but detailed information about each object's attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#OrderItemRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

*Tags:* `salesOrderItemRepositoryV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Loads a specified order item.

*Tags:* `salesOrderItemRepositoryV1`

#### Input Parameters
* `id` - _required_ - The order item ID.

### Loads a specified order.

*Tags:* `salesOrderRepositoryV1`

#### Input Parameters
* `id` - _required_ - The order ID.

### Cancels a specified order.

*Tags:* `salesOrderManagementV1`

#### Input Parameters
* `id` - _required_ - The order ID.

### Lists comments for a specified order.

*Tags:* `salesOrderManagementV1`

#### Input Parameters
* `id` - _required_ - The order ID.

### Adds a comment to a specified order.

*Tags:* `salesOrderManagementV1`

#### Input Parameters
* `id` - _required_ - The order ID.

### Emails a user a specified order.

*Tags:* `salesOrderManagementV1`

#### Input Parameters
* `id` - _required_ - The order ID.

### Holds a specified order.

*Tags:* `salesOrderManagementV1`

#### Input Parameters
* `id` - _required_ - The order ID.

### Gets the status for a specified order.

*Tags:* `salesOrderManagementV1`

#### Input Parameters
* `id` - _required_ - The order ID.

### Releases a specified order from hold status.

*Tags:* `salesOrderManagementV1`

#### Input Parameters
* `id` - _required_ - The order ID.

### Performs persist operations for a specified order address.

*Tags:* `salesOrderAddressRepositoryV1`

#### Input Parameters
* `parent_id` - _required_

### Get product list

*Tags:* `catalogProductRepositoryV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Create product

*Tags:* `catalogProductRepositoryV1`

### Create attribute set from data

*Tags:* `catalogAttributeSetManagementV1`

### Assign attribute to attribute set

*Tags:* `catalogProductAttributeManagementV1`

### Save attribute group

*Tags:* `catalogProductAttributeGroupRepositoryV1`

### Retrieve list of attribute groups

*Tags:* `catalogProductAttributeGroupRepositoryV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Remove attribute group by id

*Tags:* `catalogProductAttributeGroupRepositoryV1`

#### Input Parameters
* `groupId` - _required_

### Retrieve list of Attribute Sets

*Tags:* `catalogAttributeSetRepositoryV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Remove attribute set by given ID

*Tags:* `catalogAttributeSetRepositoryV1`

#### Input Parameters
* `attributeSetId` - _required_

### Retrieve attribute set information based on given ID

*Tags:* `catalogAttributeSetRepositoryV1`

#### Input Parameters
* `attributeSetId` - _required_

### Save attribute set data

*Tags:* `catalogAttributeSetRepositoryV1`

#### Input Parameters
* `attributeSetId` - _required_

### Retrieve related attributes based on given attribute set ID

*Tags:* `catalogProductAttributeManagementV1`

#### Input Parameters
* `attributeSetId` - _required_

### Remove attribute from attribute set

*Tags:* `catalogProductAttributeManagementV1`

#### Input Parameters
* `attributeSetId` - _required_
* `attributeCode` - _required_

### Save attribute group

*Tags:* `catalogProductAttributeGroupRepositoryV1`

#### Input Parameters
* `attributeSetId` - _required_

### Retrieve all attributes for entity type

*Tags:* `catalogProductAttributeRepositoryV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Save attribute data

*Tags:* `catalogProductAttributeRepositoryV1`

### Retrieve list of product attribute types

*Tags:* `catalogProductAttributeTypesListV1`

### Delete Attribute by id

*Tags:* `catalogProductAttributeRepositoryV1`

#### Input Parameters
* `attributeCode` - _required_

### Retrieve specific attribute

*Tags:* `catalogProductAttributeRepositoryV1`

#### Input Parameters
* `attributeCode` - _required_

### Save attribute data

*Tags:* `catalogProductAttributeRepositoryV1`

#### Input Parameters
* `attributeCode` - _required_

### Retrieve list of attribute options

*Tags:* `catalogProductAttributeOptionManagementV1`

#### Input Parameters
* `attributeCode` - _required_

### Add option to attribute

*Tags:* `catalogProductAttributeOptionManagementV1`

#### Input Parameters
* `attributeCode` - _required_

### Delete option from attribute

*Tags:* `catalogProductAttributeOptionManagementV1`

#### Input Parameters
* `attributeCode` - _required_
* `optionId` - _required_

### Delete downloadable sample

*Tags:* `downloadableSampleRepositoryV1`

#### Input Parameters
* `id` - _required_

### Delete downloadable link

*Tags:* `downloadableLinkRepositoryV1`

#### Input Parameters
* `id` - _required_

### Retrieve information about available product link types

*Tags:* `catalogProductLinkTypeListV1`

### Provide a list of the product link type attributes

*Tags:* `catalogProductLinkTypeListV1`

#### Input Parameters
* `type` - _required_

### Retrieve the list of media attributes (fronted input type is media_image) assigned to the given attribute set.

*Tags:* `catalogProductMediaAttributeManagementV1`

#### Input Parameters
* `attributeSetName` - _required_

### Save Custom Option

*Tags:* `catalogProductCustomOptionRepositoryV1`

### Get custom option types

*Tags:* `catalogProductCustomOptionTypeListV1`

### Save Custom Option

*Tags:* `catalogProductCustomOptionRepositoryV1`

#### Input Parameters
* `optionId` - _required_

### Retrieve available product types

*Tags:* `catalogProductTypeListV1`

### catalogInventoryStockRegistryV1UpdateStockItemBySkuPut

*Tags:* `catalogInventoryStockRegistryV1`

#### Input Parameters
* `productSku` - _required_
* `itemId` - _required_

### catalogProductRepositoryV1DeleteByIdDelete

*Tags:* `catalogProductRepositoryV1`

#### Input Parameters
* `sku` - _required_

### Get info about product by product SKU

*Tags:* `catalogProductRepositoryV1`

#### Input Parameters
* `sku` - _required_
* `editMode` - _optional_
* `storeId` - _optional_
* `forceReload` - _optional_

### Create product

*Tags:* `catalogProductRepositoryV1`

#### Input Parameters
* `sku` - _required_

### List of links with associated samples

*Tags:* `downloadableLinkRepositoryV1`

#### Input Parameters
* `sku` - _required_

### Update downloadable link of the given product (link type and its resources cannot be changed)

*Tags:* `downloadableLinkRepositoryV1`

#### Input Parameters
* `sku` - _required_

### List of samples for downloadable product

*Tags:* `downloadableSampleRepositoryV1`

#### Input Parameters
* `sku` - _required_

### Update downloadable sample of the given product

*Tags:* `downloadableSampleRepositoryV1`

#### Input Parameters
* `sku` - _required_

### Update downloadable sample of the given product

*Tags:* `downloadableSampleRepositoryV1`

#### Input Parameters
* `sku` - _required_
* `id` - _required_

### Update downloadable link of the given product (link type and its resources cannot be changed)

*Tags:* `downloadableLinkRepositoryV1`

#### Input Parameters
* `sku` - _required_
* `id` - _required_

### Get tier price of product

*Tags:* `catalogProductTierPriceManagementV1`

#### Input Parameters
* `sku` - _required_
* `customerGroupId` - _required_ - 'all' can be used to specify 'ALL GROUPS'

### Remove tier price from product

*Tags:* `catalogProductTierPriceManagementV1`

#### Input Parameters
* `sku` - _required_
* `customerGroupId` - _required_ - 'all' can be used to specify 'ALL GROUPS'
* `qty` - _required_

### Create tier price for product

*Tags:* `catalogProductTierPriceManagementV1`

#### Input Parameters
* `sku` - _required_
* `customerGroupId` - _required_ - 'all' can be used to specify 'ALL GROUPS'
* `price` - _required_
* `qty` - _required_

### Assign a product link to another product

*Tags:* `catalogProductLinkManagementV1`

#### Input Parameters
* `sku` - _required_

### Save product link

*Tags:* `catalogProductLinkRepositoryV1`

#### Input Parameters
* `sku` - _required_

### Provide the list of links for a specific product

*Tags:* `catalogProductLinkManagementV1`

#### Input Parameters
* `sku` - _required_
* `type` - _required_

### catalogProductLinkRepositoryV1DeleteByIdDelete

*Tags:* `catalogProductLinkRepositoryV1`

#### Input Parameters
* `sku` - _required_
* `type` - _required_
* `linkedProductSku` - _required_

### Retrieve the list of gallery entries associated with given product

*Tags:* `catalogProductAttributeMediaGalleryManagementV1`

#### Input Parameters
* `sku` - _required_

### Create new gallery entry

*Tags:* `catalogProductAttributeMediaGalleryManagementV1`

#### Input Parameters
* `sku` - _required_

### Remove gallery entry

*Tags:* `catalogProductAttributeMediaGalleryManagementV1`

#### Input Parameters
* `sku` - _required_
* `entryId` - _required_

### Return information about gallery entry

*Tags:* `catalogProductAttributeMediaGalleryManagementV1`

#### Input Parameters
* `sku` - _required_
* `entryId` - _required_

### Update gallery entry

*Tags:* `catalogProductAttributeMediaGalleryManagementV1`

#### Input Parameters
* `sku` - _required_
* `entryId` - _required_

### Get the list of custom options for a specific product

*Tags:* `catalogProductCustomOptionRepositoryV1`

#### Input Parameters
* `sku` - _required_

### catalogProductCustomOptionRepositoryV1DeleteByIdentifierDelete

*Tags:* `catalogProductCustomOptionRepositoryV1`

#### Input Parameters
* `sku` - _required_
* `optionId` - _required_

### Get custom option for a specific product

*Tags:* `catalogProductCustomOptionRepositoryV1`

#### Input Parameters
* `sku` - _required_
* `optionId` - _required_

### Assign a product to the website

*Tags:* `catalogProductWebsiteLinkRepositoryV1`

#### Input Parameters
* `sku` - _required_

### Assign a product to the website

*Tags:* `catalogProductWebsiteLinkRepositoryV1`

#### Input Parameters
* `sku` - _required_

### Remove the website assignment from the product by product sku

*Tags:* `catalogProductWebsiteLinkRepositoryV1`

#### Input Parameters
* `sku` - _required_
* `websiteId` - _required_

### Return list of rma data objects based on search criteria

*Tags:* `rmaRmaManagementV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Save RMA

*Tags:* `rmaRmaManagementV1`

### Delete RMA

*Tags:* `rmaRmaRepositoryV1`

#### Input Parameters
* `id` - _required_

### Return data object for specified RMA id

*Tags:* `rmaRmaRepositoryV1`

#### Input Parameters
* `id` - _required_

### Save RMA

*Tags:* `rmaRmaManagementV1`

#### Input Parameters
* `id` - _required_

### Comments list

*Tags:* `rmaCommentManagementV1`

#### Input Parameters
* `id` - _required_

### Add comment

*Tags:* `rmaCommentManagementV1`

#### Input Parameters
* `id` - _required_

### Get shipping label int the PDF format

*Tags:* `rmaTrackManagementV1`

#### Input Parameters
* `id` - _required_

### Get track list

*Tags:* `rmaTrackManagementV1`

#### Input Parameters
* `id` - _required_

### Add track

*Tags:* `rmaTrackManagementV1`

#### Input Parameters
* `id` - _required_

### Remove track by id

*Tags:* `rmaTrackManagementV1`

#### Input Parameters
* `id` - _required_
* `trackId` - _required_

### Get all attribute metadata.

*Tags:* `rmaRmaAttributesManagementV1`

### Get custom attribute metadata for the given Data object's attribute set

*Tags:* `rmaRmaAttributesManagementV1`

#### Input Parameters
* `dataObjectClassName` - _optional_ - Data object class name

### Retrieve all attributes filtered by form code

*Tags:* `rmaRmaAttributesManagementV1`

#### Input Parameters
* `formCode` - _required_

### Retrieve attribute metadata.

*Tags:* `rmaRmaAttributesManagementV1`

#### Input Parameters
* `attributeCode` - _required_

### Set reward points to quote

*Tags:* `rewardRewardManagementV1`

### Save sales rule.

*Tags:* `salesRuleRuleRepositoryV1`

### Retrieve sales rules that match te specified criteria. This call returns an array of objects, but detailed information about each object's attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#RuleRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

*Tags:* `salesRuleRuleRepositoryV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Delete rule by ID.

*Tags:* `salesRuleRuleRepositoryV1`

#### Input Parameters
* `ruleId` - _required_

### Get rule by ID.

*Tags:* `salesRuleRuleRepositoryV1`

#### Input Parameters
* `ruleId` - _required_

### Save sales rule.

*Tags:* `salesRuleRuleRepositoryV1`

#### Input Parameters
* `ruleId` - _required_

### Make Full Text Search and return found Documents

*Tags:* `searchV1`

#### Input Parameters
* `searchCriteria[requestName]` - _optional_
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Performs persist operations for a specified shipment.

*Tags:* `salesShipmentRepositoryV1`

### Performs persist operations for a specified shipment track.

*Tags:* `salesShipmentTrackRepositoryV1`

### Deletes a specified shipment track by ID.

*Tags:* `salesShipmentTrackRepositoryV1`

#### Input Parameters
* `id` - _required_ - The shipment track ID.

### Loads a specified shipment.

*Tags:* `salesShipmentRepositoryV1`

#### Input Parameters
* `id` - _required_ - The shipment ID.

### Lists comments for a specified shipment.

*Tags:* `salesShipmentManagementV1`

#### Input Parameters
* `id` - _required_ - The shipment ID.

### Performs persist operations for a specified shipment comment.

*Tags:* `salesShipmentCommentRepositoryV1`

#### Input Parameters
* `id` - _required_

### Emails user a specified shipment.

*Tags:* `salesShipmentManagementV1`

#### Input Parameters
* `id` - _required_ - The shipment ID.

### Gets a specified shipment label.

*Tags:* `salesShipmentManagementV1`

#### Input Parameters
* `id` - _required_ - The shipment label ID.

### Lists shipments that match specified search criteria. This call returns an array of objects, but detailed information about each object's attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#ShipmentRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

*Tags:* `salesShipmentRepositoryV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Retrieves a list of SKU's with low inventory qty

*Tags:* `catalogInventoryStockRegistryV1`

#### Input Parameters
* `scopeId` - _required_
* `qty` - _required_
* `currentPage` - _optional_
* `pageSize` - _optional_

### catalogInventoryStockRegistryV1GetStockItemBySkuGet

*Tags:* `catalogInventoryStockRegistryV1`

#### Input Parameters
* `productSku` - _required_
* `scopeId` - _optional_

### catalogInventoryStockRegistryV1GetStockStatusBySkuGet

*Tags:* `catalogInventoryStockRegistryV1`

#### Input Parameters
* `productSku` - _required_
* `scopeId` - _optional_

### storeStoreConfigManagerV1GetStoreConfigsGet

*Tags:* `storeStoreConfigManagerV1`

#### Input Parameters
* `storeCodes` - _optional_

### Retrieve list of all groups

*Tags:* `storeGroupRepositoryV1`

### Retrieve list of all stores

*Tags:* `storeStoreRepositoryV1`

### Retrieve list of all websites

*Tags:* `storeWebsiteRepositoryV1`

### Create a Tax Class

*Tags:* `taxTaxClassRepositoryV1`

### Retrieve tax classes which match a specific criteria. This call returns an array of objects, but detailed information about each object's attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#TaxClassRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

*Tags:* `taxTaxClassRepositoryV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Create a Tax Class

*Tags:* `taxTaxClassRepositoryV1`

#### Input Parameters
* `classId` - _required_

### Delete a tax class with the given tax class id.

*Tags:* `taxTaxClassRepositoryV1`

#### Input Parameters
* `taxClassId` - _required_

### Get a tax class with the given tax class id.

*Tags:* `taxTaxClassRepositoryV1`

#### Input Parameters
* `taxClassId` - _required_

### Create or update tax rate

*Tags:* `taxTaxRateRepositoryV1`

### Create or update tax rate

*Tags:* `taxTaxRateRepositoryV1`

### Search TaxRates This call returns an array of objects, but detailed information about each object's attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#TaxRateRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

*Tags:* `taxTaxRateRepositoryV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Delete tax rate

*Tags:* `taxTaxRateRepositoryV1`

#### Input Parameters
* `rateId` - _required_

### Get tax rate

*Tags:* `taxTaxRateRepositoryV1`

#### Input Parameters
* `rateId` - _required_

### Save TaxRule

*Tags:* `taxTaxRuleRepositoryV1`

### Save TaxRule

*Tags:* `taxTaxRuleRepositoryV1`

### Search TaxRules This call returns an array of objects, but detailed information about each object's attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#TaxRuleRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

*Tags:* `taxTaxRuleRepositoryV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Delete TaxRule

*Tags:* `taxTaxRuleRepositoryV1`

#### Input Parameters
* `ruleId` - _required_

### Get TaxRule

*Tags:* `taxTaxRuleRepositoryV1`

#### Input Parameters
* `ruleId` - _required_

### Lists transactions that match specified search criteria. This call returns an array of objects, but detailed information about each object's attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#TransactionRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

*Tags:* `salesTransactionRepositoryV1`

#### Input Parameters
* `searchCriteria[filterGroups][][filters][][field]` - _optional_ - Field
* `searchCriteria[filterGroups][][filters][][value]` - _optional_ - Value
* `searchCriteria[filterGroups][][filters][][conditionType]` - _optional_ - Condition type
* `searchCriteria[sortOrders][][field]` - _optional_ - Sorting field.
* `searchCriteria[sortOrders][][direction]` - _optional_ - Sorting direction.
* `searchCriteria[pageSize]` - _optional_ - Page size.
* `searchCriteria[currentPage]` - _optional_ - Current page.

### Loads a specified transaction.

*Tags:* `salesTransactionRepositoryV1`

#### Input Parameters
* `id` - _required_ - The transaction ID.

### Proxy handler for guest place order

*Tags:* `worldpayGuestPaymentInformationManagementProxyV1`

#### Input Parameters
* `cartId` - _required_

## License

**flow**ground :- Telekom iPaaS / magento-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
