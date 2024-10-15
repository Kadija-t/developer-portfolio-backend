import type { Struct, Schema } from '@strapi/strapi';

export interface TagTag extends Struct.ComponentSchema {
  collectionName: 'components_tag_tags';
  info: {
    displayName: 'Tag';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'tag.tag': TagTag;
    }
  }
}
