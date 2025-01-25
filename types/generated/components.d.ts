import type { Schema, Struct } from '@strapi/strapi';

export interface SharedList extends Struct.ComponentSchema {
  collectionName: 'components_shared_lists';
  info: {
    description: '';
    displayName: 'List';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface UniqueDateRange extends Struct.ComponentSchema {
  collectionName: 'components_unique_date_ranges';
  info: {
    displayName: 'Date Range';
    icon: 'calendar';
  };
  attributes: {
    end: Schema.Attribute.Date & Schema.Attribute.Required;
    start: Schema.Attribute.Date & Schema.Attribute.Required;
  };
}

export interface UniqueProviderQuotation extends Struct.ComponentSchema {
  collectionName: 'components_unique_provider_quotations';
  info: {
    description: '';
    displayName: 'Provider Quotation';
  };
  attributes: {
    currency: Schema.Attribute.Enumeration<['PHP', 'USD']>;
    emailRemarks: Schema.Attribute.Text;
    exchangeRate: Schema.Attribute.Decimal;
    includeInEmail: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    phpEquivalent: Schema.Attribute.Decimal;
    price: Schema.Attribute.Decimal;
    provider: Schema.Attribute.Relation<'oneToOne', 'api::provider.provider'>;
    providerStatus: Schema.Attribute.Enumeration<
      ['pending', 'received', 'not_available', 'no_response']
    >;
    remarks: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.list': SharedList;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'unique.date-range': UniqueDateRange;
      'unique.provider-quotation': UniqueProviderQuotation;
    }
  }
}
