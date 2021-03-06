export class TestData {
  public static apiItem = {
    barcode: 'banana',
    brand: 'Canon',
    brandID: 1,
    model: 'T5i',
    modelID: 1,
    category: 'Camera',
    categoryID: 1,
    available: 1
  };

  public static rentedApiItem = {
    barcode: 'banana',
    brand: 'Canon',
    brandID: 1,
    model: 'T5i',
    modelID: 1,
    category: 'Camera',
    categoryID: 1,
    available: 0
  };

  public static item = {
    barcode: 'banana',
    modelID: 1,
    categoryID: 1
  };

  public static modifiedItem = {
    barcode: 'mango',
    brandID: 2,
    modelID: 3,
    categoryID: 3,
    available: 1
  };

  public static modifiedItems = [{
    barcode: 'banana',
    brandID: 1,
    modelID: 1,
    categoryID: 1,
    available: 1
  },
  {
    barcode: 'apple',
    brandID: 2,
    modelID: 2,
    categoryID: 1,
    available: 0
  },
  {
    barcode: 'mango',
    brandID: 2,
    modelID: 3,
    categoryID: 3,
    available: 1
  },
  {
    barcode: 'orange',
    brandID: 4,
    modelID: 4,
    categoryID: 2,
    available: 0
  }];

  public static items = [{
    barcode: 'banana',
    brandID: 1,
    modelID: 1,
    categoryID: 1,
    available: 1
  },
  {
    barcode: 'apple',
    brandID: 2,
    modelID: 2,
    categoryID: 1,
    available: 0
  },
  {
    barcode: 'mango',
    brandID: 3,
    modelID: 3,
    categoryID: 2,
    available: 1
  },
  {
    barcode: 'orange',
    brandID: 4,
    modelID: 4,
    categoryID: 2,
    available: 0
  }];

  public static itemsMap = {
    ['banana']: {
      barcode: 'banana',
      brandID: 1,
      modelID: 1,
      categoryID: 1,
      available: 1
    },
    ['apple']: {
      barcode: 'apple',
      brandID: 2,
      modelID: 2,
      categoryID: 1,
      available: 0
    },
    ['mango']: {
      barcode: 'mango',
      brandID: 3,
      modelID: 3,
      categoryID: 2,
      available: 1
    },
    ['orange']: {
      barcode: 'orange',
      brandID: 4,
      modelID: 4,
      categoryID: 2,
      available: 0
    }
  };

  public static barcode = 'mango';

  public static itemsMinusOne = [{
    barcode: 'banana',
    brandID: 1,
    modelID: 1,
    categoryID: 1,
    available: 1
  },
  {
    barcode: 'apple',
    brandID: 2,
    modelID: 2,
    categoryID: 1,
    available: 0
  },
  {
    barcode: 'orange',
    brandID: 4,
    modelID: 4,
    categoryID: 2,
    available: 0
  }];

  public static filteredItems = {
    results: [{
      barcode: 'banana',
      brandID: 1,
      modelID: 1,
      categoryID: 1,
      available: 1
    },
    {
      barcode: 'apple',
      brandID: 2,
      modelID: 2,
      categoryID: 1,
      available: 0
    }]
  };

  public static details = {
    start: '2017-01-01 00:00:00',
    end: '2017-01-02 00:00:00',
    notes: 'This is a note'
  };

  public static brands = {
    results: [
      { name: 'Canon', id: 1 },
      { name: 'Nikon', id: 2 },
      { name: 'Sennheiser', id: 3}
    ]
  };

  public static brand = {
    name: 'Canon',
    brandID: 1
  };

  public static filteredBrands = [
    { name: 'Nikon', id: 2 }
  ];

  public static models = {
    results: [
      { name: 'T5i', id: 5, brandID: 1 },
      { name: 'e609', id: 6, brandID: 3 },
      { name: 'MKE 600', id: 7, brandID: 2 },
      { name: 'D5', id: 8, brandID: 2 }
    ]
  };

  public static model = {
    name: 'T5i',
    modelID: 1,
    brandID: 4,
    brand: 'Canon'
  };

  public static filteredModels = [
    { name: 'T5i', id: 5, brandID: 1 }
  ];

  public static categories = {
    results: [
      { name: 'Camera', id: 1 },
      { name: 'Mic', id: 2 },
      { name: 'Light', id: 3 }
    ]
  };

  public static category = {
    name: 'Camera',
    categoryID: 1
  };

  public static status = {
    status: 'available'
  };

  public static credentials = {
    email: 'email@example.com',
    password: 'monkey'
  };

  public static queryText = 'Nik';

  public static loginResponse = {
    id: 1,
    token: '987234.sdf0982347234.hjgsdf89234',
    message: 'organization credentials are valid'
  };

  public static response = {
    message: 'Successful operation',
    id: 1
  };

  public static error = {
    code: 'NotFound',
    message: 'Error message'
  };

  public static barcodeData = {
    text: 'I am a barcode',
    cancelled: false
  };

  public static barcodeDataCancelled = {
    text: 'I am a barcode',
    cancelled: true
  };

  public static user = {
    userID: 1,
    firstName: 'Dark',
    lastName: 'Vader',
    email: 'dark@vader.com',
    organizationID: 1
  };

  public static passwords = {
    currentPassword: 'monkey1',
    newPassword: 'donkey1',
    confirmPassword: 'donkey1'
  };

  public static organization = {
    organizationID: 1,
    name: 'Empire'
  };

  public static token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySUQiOjc0LCJvcmdhbml6YXRpb25JRCI6NTM5LCJyb2xlSUQiOjJ9.6RmCILl0xuZcaRnZpBKn6OR_kFw09yBpB64aXuJYvbo';

  public static decodedToken = {
    userID: 74,
    organizationID: 539
  };

  public static kits = {
    results: [
      { kitID: 1, name: 'Canon T5i', organizationID: 4 },
      { kitID: 2, name: 'Shure SM 58', organizationID: 5 },
      { kitID: 3, name: 'Sennheiser e609', organizationID: 6 }
    ]
  };

  public static kit = {
    kitID: 1,
    name: 'Canon T7i',
    organizationID: 4
  };

  public static modifiedKit = {
    kitID: 1,
    name: 'Canon T5i',
    organizationID: 4
  };

  public static updatedKits = {
    results: [
      { kitID: 1, name: 'Canon T7i', organizationID: 4 },
      { kitID: 2, name: 'Shure SM 58', organizationID: 5 },
      { kitID: 3, name: 'Sennheiser e609', organizationID: 6 }
    ]
  };

  public static addedKits = {
    results: [
      { kitID: 1, name: 'Canon T5i', organizationID: 4 },
      { kitID: 2, name: 'Shure SM 58', organizationID: 5 },
      { kitID: 3, name: 'Sennheiser e609', organizationID: 6 },
      { kitID: 1, name: 'Canon T7i', organizationID: 4 }
    ]
  };

  public static deletedKits = {
    results: [
      { kitID: 2, name: 'Shure SM 58', organizationID: 5 },
      { kitID: 3, name: 'Sennheiser e609', organizationID: 6 }
    ]
  };

  public static kitModels = {
    results: [
      { kitID: 1, modelID: 1, model: 'T5i', brandID: 1, brand: 'Canon', quantity: 2 },
      { kitID: 1, modelID: 2, model: 'SM58', brandID: 2, brand: 'Shure', quantity: 1 },
      { kitID: 1, modelID: 3, model: 'e609', brandID: 3, brand: 'Sennheiser', quantity: 1 }
    ]
  };

  public static addedKitModels = {
    results: [
      { kitID: 1, modelID: 1, model: 'T5i', brandID: 1, brand: 'Canon', quantity: 2 },
      { kitID: 1, modelID: 2, model: 'SM58', brandID: 2, brand: 'Shure', quantity: 1 },
      { kitID: 1, modelID: 3, model: 'e609', brandID: 3, brand: 'Sennheiser', quantity: 1 },
      { kitID: 1, modelID: 4, model: 'T5i', brandID: 4, brand: 'Canon', quantity: 1 }
    ]
  };

  public static deletedKitModels = {
    results: [
      { kitID: 1, modelID: 2, model: 'SM58', brandID: 2, brand: 'Shure', quantity: 1 },
      { kitID: 1, modelID: 3, model: 'e609', brandID: 3, brand: 'Sennheiser', quantity: 1 }
    ]
  };

  public static kitModelsWithBarcode = {
    results: [
      { kitID: 1, modelID: 1, model: 'T5i', brandID: 1, brand: 'Canon', barcode: 'mango', quantity: 1 },
      { kitID: 1, modelID: 2, model: 'SM58', brandID: 2, brand: 'Shure', quantity: 1 },
      { kitID: 1, modelID: 3, model: 'e609', brandID: 3, brand: 'Sennheiser', quantity: 1 }
    ]
  };

  public static kitModelsWithEmptyBarcode = {
    results: [
      { kitID: 1, modelID: 1, model: 'T5i', brandID: 1, brand: 'Canon', barcode: '', quantity: 2 },
      { kitID: 1, modelID: 2, model: 'SM58', brandID: 2, brand: 'Shure', quantity: 1 },
      { kitID: 1, modelID: 3, model: 'e609', brandID: 3, brand: 'Sennheiser', quantity: 1 }
    ]
  };

  public static kitModel = {
    kitID: 1,
    modelID: 4,
    model: 'T5i',
    brandID: 4,
    brand: 'Canon',
    quantity: 2
  };

  public static kitModelNewBrand = {
    brandID: 4,
    brand: 'Canon',
    model: '',
    modelID: null
  };

  public static kitModelNewModel = {
    modelID: 4,
    model: 'T5i'
  };

  public static modelsToDelete = [1, 2, 3, 4];

  public static modelsToCreate = [5, 6, 7];

  public static url = 'https://stockpile.adamvig.com/api';

  public static endpoint = '/test';

  public static body = {
    test: 'test'
  };

  public static limit = 10;

  public static offset = 10;

  public static showAddNew = true;

  public static loadMoreItems = true;

  public static showLoadingSpinner = true;

  public static tempItem = {
    barcode: 'banana',
    brand: 'Canon',
    brandID: 1,
    model: 'T5i',
    modelID: 1,
    category: 'Camera',
    categoryID: 1
  };

  public static state = {
    user: {
      userID: 1,
      firstName: 'Dark',
      lastName: 'Vader',
      email: 'dark@vader.com',
      organizationID: 1,
      archived: '',
      loading: false
    },
    organization: {
      name: 'Empire',
      organizationID: 1,
    },
    kits: {
      results: {
        [1]: { kitID: 1, name: 'Canon T5i', organizationID: 4 },
        [2]: { kitID: 2, name: 'Shure SM 58', organizationID: 5 },
        [3]: { kitID: 3, name: 'Sennheiser e609', organizationID: 6 }
      },
      showLoadingSpinner: false,
    },
    kitModels: {
      results: {
        [1]: [
          { kitID: 1, modelID: 1, model: 'T5i', brandID: 1, brand: 'Canon' },
          { kitID: 1, modelID: 2, model: 'SM58', brandID: 2, brand: 'Shure' },
          { kitID: 1, modelID: 3, model: 'e609', brandID: 3, brand: 'Sennheiser' }
        ]
      },
      showLoadingSpinner: false
    },
    brands: {
      results: {
        [1]: { name: 'Canon', id: 1 },
        [2]: { name: 'Nikon', id: 2 },
        [3]: { name: 'Sennheiser', id: 3 }
      },
      filtered: [
        { name: 'Nikon', id: 2 }
      ],
      showAddNew: false
    },
    models: {
      results: {
        [5]: { name: 'T5i', id: 5, brandID: 1 },
        [6]: { name: 'e609', id: 6, brandID: 3 },
        [7]: { name: 'MKE 600', id: 7, brandID: 2 },
        [8]: { name: 'D5', id: 8, brandID: 2 }
      },
      filtered: [
        { name: 'T5i', id: 5, brandID: 1 }
      ],
      showAddNew: false
    },
    categories: {
      results: {
        [1]: { name: 'Camera', id: 1 },
        [2]: { name: 'Mic', id: 2 },
        [3]: { name: 'Light', id: 3 }
      },
      filtered: [
        { name: 'Camera', id: 1 },
      ],
      showAddNew: false
    },
    items: {
      results: {
        ['banana']: {
          barcode: 'banana',
          brandID: 1,
          modelID: 1,
          categoryID: 1,
          available: 1
        },
        ['apple']: {
          barcode: 'apple',
          brandID: 2,
          modelID: 2,
          categoryID: 1,
          available: 0
        },
        ['mango']: {
          barcode: 'mango',
          brandID: 3,
          modelID: 3,
          categoryID: 2,
          available: 1
        },
        ['orange']: {
          barcode: 'orange',
          brandID: 4,
          modelID: 4,
          categoryID: 2,
          available: 0
        }
      },
      offset: 0,
      loadMoreItems: true,
      showAddNew: false,
      tempItem: {
        barcode: 'banana',
        brand: 'Canon',
        brandID: 1,
        model: 'T5i',
        modelID: 1,
        category: 'Camera',
        categoryID: 1,
        available: 1
      },
      tempItemCustomFields: [
        {
          categoryName: 'Camera',
          customFieldID: 1,
          customFieldName: 'Cost',
          value: '350',
        },
        {
          categoryName: 'Camera',
          customFieldID: 2,
          customFieldName: 'Serial number',
          value: '1234567890',
        },
        {
          categoryName: 'Camera',
          customFieldID: 3,
          customFieldName: 'Notes',
          value: 'This is a note',
        }
      ],
      rentals: {
        ['banana']: {
          barcode: 'banana',
          brandID: 1,
          modelID: 1,
          categoryID: 1,
          available: 1
        },
        ['orange']: {
          barcode: 'orange',
          brandID: 4,
          modelID: 4,
          categoryID: 2,
          available: 0
        }
      },
      display: [
        {
          barcode: 'banana',
          brandID: 1,
          modelID: 1,
          categoryID: 1,
          available: 1
        },
        {
          barcode: 'apple',
          brandID: 2,
          modelID: 2,
          categoryID: 1,
          available: 0
        }
      ],
      showLoadingSpinner: false,
      filters: {
        brandID: 1,
        modelID: 2,
        categoryID: 3,
        available: true,
        search: 'ca'
      }
    },
    layout: {
      loadingMessage: 'Please wait...'
    },
    externalRenters: {
      results: {
        [1]: {
          externalRenterID: 1,
          name: 'Luke',
          email: 'luke@email.com',
          phone: '1234567890'
        },
        [2]: {
          externalRenterID: 2,
          name: 'Anakin',
          email: 'anakin@email.com',
          phone: '0987654321'
        },
        [3]: {
          externalRenterID: 3,
          name: 'Obi Wan',
          email: 'obiwan@email.com',
          phone: '1029384756'
        }
      },
      filtered: [
        {
          externalRenterID: 1,
          name: 'Luke',
          email: 'luke@email.com',
          phone: '1234567890'
        }
      ],
      showAddNew: false
    },
    customFieldCategories: {
      results: [
        {
          categoryID: 1,
          customFieldID: 1,
          name: 'Camera',
          organizationID: 1
        },
        {
          categoryID: 2,
          customFieldID: 1,
          name: 'Mic',
          organizationID: 1
        },
        {
          categoryID: 3,
          customFieldID: 1,
          name: 'Light',
          organizationID: 1
        }
      ],
      showLoadingSpinner: false,
      selectAll: true
    },
    customFields: {
      results: [
        {
          name: 'Cost',
          customFieldID: 1,
          organizationID: 1,
          showTimestamp: true
        },
        {
          name: 'Serial number',
          customFieldID: 2,
          organizationID: 1,
          showTimestamp: true
        },
        {
          name: 'Notes',
          customFieldID: 3,
          organizationID: 1,
          showTimestamp: false
        }
      ],
      showLoadingSpinner: false
    }
  };

  public static pop = true;

  public static externalRenter = {
    externalRenterID: 1,
    name: 'Luke',
    email: 'luke@email.com',
    phone: '1234567890'
  };

  public static externalRenters = {
    results: [
      {
        externalRenterID: 1,
        name: 'Luke',
        email: 'luke@email.com',
        phone: '1234567890'
      },
      {
        externalRenterID: 2,
        name: 'Anakin',
        email: 'anakin@email.com',
        phone: '0987654321'
      },
      {
        externalRenterID: 3,
        name: 'Obi Wan',
        email: 'obiwan@email.com',
        phone: '1029384756'
      }
    ]
  };

  public static customField = {
    name: 'Cost',
    customFieldID: 1,
    organizationID: 1,
    showTimestamp: true
  };

  public static customFields = {
    results: [
      {
        name: 'Cost',
        customFieldID: 1,
        organizationID: 1,
        showTimestamp: true
      },
      {
        name: 'Serial number',
        customFieldID: 2,
        organizationID: 1,
        showTimestamp: true
      },
      {
        name: 'Notes',
        customFieldID: 3,
        organizationID: 1,
        showTimestamp: false
      }
    ]
  };

  public static customFieldCategory = {
    categoryID: 1,
    customFieldID: 1,
    name: 'Camera',
    organizationID: 1
  };

  public static customFieldCategories = {
    results: [
      {
        categoryID: 1,
        customFieldID: 1,
        name: 'Camera',
        organizationID: 1
      },
      {
        categoryID: 2,
        customFieldID: 1,
        name: 'Mic',
        organizationID: 1
      },
      {
        categoryID: 3,
        customFieldID: 1,
        name: 'Light',
        organizationID: 1
      }
    ]
  };

  public static itemCustomField = {
    categoryName: 'Camera',
    customFieldID: 1,
    customFieldName: 'Serial number',
    value: '1234567890',
  };

  public static itemCustomFields = {
    results: [
      {
        categoryName: 'Camera',
        customFieldID: 1,
        customFieldName: 'Cost',
        value: '350',
      },
      {
        categoryName: 'Camera',
        customFieldID: 2,
        customFieldName: 'Serial number',
        value: '1234567890',
      },
      {
        categoryName: 'Camera',
        customFieldID: 3,
        customFieldName: 'Notes',
        value: 'This is a note',
      }
    ]
  };

  public static itemCustomFieldsNullValues = {
    results: [
      {
        categoryName: 'Camera',
        customFieldID: 1,
        customFieldName: 'Cost',
        value: null,
      },
      {
        categoryName: 'Camera',
        customFieldID: 2,
        customFieldName: 'Serial number',
        value: null,
      },
      {
        categoryName: 'Camera',
        customFieldID: 3,
        customFieldName: 'Notes',
        value: null,
      }
    ]
  };

  public static itemCustomFieldsForm = {
    value: {
      1: '350',
      2: '1234567890',
      3: 'This is a note'
    }
  };

  public static itemCustomFieldsValues = [
    {
      customFieldID: '1',
      value: '350',
      shouldUpdate: false
    },
    {
      customFieldID: '2',
      value: '1234567890',
      shouldUpdate: false
    },
    {
      customFieldID: '3',
      value: 'This is a note',
      shouldUpdate: false
    }
  ];

  public static itemFilters = {
    brandID: 1,
    modelID: 2,
    categoryID: 3,
    available: true,
    search: 'ca'
  };
}
