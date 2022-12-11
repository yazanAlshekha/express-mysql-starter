const chooseContent = type => {
  switch (type) {
    case 'newOffer':
      return {
        heading: 'New Offer',
        content: 'You have an offer Placed on',
      };
    case 'offerApproved':
      return {
        heading: 'Offer Approved',
        content: 'Your offer is now approved',
      };
    case 'offerRejected':
      return {
        heading: 'Offer Rejected',
        content: 'Your offer is rejected',
      };
    case 'offerCanceled':
      return {
        heading: 'Offer Canceled',
        content: 'Offer place on store item is canceled',
      };
    case 'newBuyingOrder':
      return {
        heading: 'New Order',
        content: 'You have an order Placed on',
      };
    case 'orderApproved':
      return {
        heading: 'Order Approved',
        content: 'Your order is now approved',
      };
    case 'orderRejected':
      return {
        heading: 'Order Rejected',
        content: 'Your order is rejected',
      };
    case 'rateSeller':
      return {
        heading: 'Rate Seller',
        content: 'Please rate the seller',
      };
    case 'rateBuyer':
      return {
        heading: 'Rate Buyer',
        content: 'Please rate the Buyer',
      };
    case 'WishListItemAddedToStore':
      return {
        heading: 'new store item added',
        content: 'wish list item added to store that is in your wish list',
      };
    default:
      return {
        heading: 'Your account is blocked',
        content: 'your account is blocked by system administrator',
      };
  }
};

exports.message = (id, type, itemName) => {
  const { heading, content } = chooseContent(type);
  return {
    id,
    content: `${content} ${itemName || ''}`,
    headings: heading,
    type,
  };
};

exports.pushNotifications = message => {
  return {
    name: {
      en: 'Numa',
    },
    contents: {
      en: message?.content,
    },
    headings: {
      en: message?.headings,
    },
    data: {
      type: message?.type,
      id: message?.id,
    },
  };
};
