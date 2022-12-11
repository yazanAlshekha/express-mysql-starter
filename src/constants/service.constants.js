module.exports = {
  auth: {
    authLoginProvider: ['LOCAL', 'APPLE', 'GOOGLE'],
    tokenTypes: {
      ACCESS: 'access',
      REFRESH: 'refresh',
      RESET_PASSWORD: 'resetPassword',
      VERIFY_EMAIL: 'verifyEmail',
      VERIFY_MOBILE: 'verifyMobile',
    },
    platform: {
      ANDROID: 'android',
      IOS: 'ios',
      WEB: 'Web',
    },
  },
  catlogs: {
    type: ['Bill', 'Coin', 'Medal', 'Token'],
  },
  storeItem: {
    shippingOptions: ['EMS_MAIL', 'MAIL', 'FedEx', 'DHL', 'UPS'],
    offerStatus: ['APPROVED', 'REJECTED', 'CANCELED', 'PENDING'],
    currency: ['DOLLAR', 'EURO', 'SHEKEL'],
  },
  identificationErrorMessages: {
    NoCatalogId: {
      en: `Our systems are having some internal issues preventing your item from being identified. We advise you to scan the item again. /n If the problem shows up again, please contact us.`,
      he: 'נתקלנו בבעיה פנימית במערכות שלנו שמנעה מאיתנו להשלים את תהליך הזיהוי. אנחנו מציעים לכם לסרוק את הפריט בשנית. אם הבעיה חוזרת, אנא כתבו לנו.',
    },
    PayloadIssue: {
      en: `Our systems are having some internal issues preventing your item from being identified. We advise you to scan the item again. /n If the problem shows up again, please contact us.`,
      he: `נתקלנו בבעיה פנימית במערכות שלנו שמנעה מאיתנו להשלים את תהליך הזיהוי. אנחנו מציעים לכם לסרוק את הפריט בשנית. \n אם הבעיה חוזרת, אנא כתבו לנו.`,
    },
    timeOut: {
      en: 'ttttttt We are taking too long processing your request, for some unknown reason. Sorry about that. We advise you to scan the items again. \n If the problem persists, please contact us.',
      he: 'סליחה, לוקח לנו יותר מדי זמן לזהות את הפריט מסיבה לא ברורה. אנחנו מציעים לכם לסרוק את הפריט בשנית . אם הבעיה נמשכת, אנא כתבו לנו.',
    },
  },
};
