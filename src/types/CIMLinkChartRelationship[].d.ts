/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Link chart link dash style.
 */
export type LinkChartLinkDashStyle = 0 | 1 | 2 | 3 | 4;
/**
 * Font types.
 */
export type FontType = 0 | 1 | 2 | 3 | 4;
/**
 * Link chart link label placement.
 */
export type LinkChartLinkLabelPlacement = 0 | 1;
/**
 * Link chart relationship key type.
 */
export type LinkChartRelationshipKeyType = 0 | 1 | 2;
export type CIMLinkChartRelationship = CIMLinkChartRelationship1[];

/**
 * Represents a link chart relationship.
 */
export interface CIMLinkChartRelationship1 {
  /**
   * Gets or sets the Id of for the relationship.
   */
  id?: null | string;
  /**
   * Gets or sets the name of the relationship.
   */
  name?: null | string;
  /**
   * Gets or sets the source entity id for the relationship.
   */
  sourceEntityId?: null | string;
  /**
   * Gets or sets the source entity backing field for the relationship.
   */
  sourceEntityBackingField?: null | string;
  /**
   * Gets or sets the target entity id for the relationship.
   */
  targetEntityId?: null | string;
  /**
   * Gets or sets the target entity backing field for the relationship.
   */
  targetEntityBackingField?: null | string;
  /**
   * Gets or sets the link drawing information. This specifies the link color, width, and dash style.
   */
  drawingInfo?: null | CIMLinkChartLinkDrawingInfo;
  /**
   * Gets or sets the link labeling information.
   */
  labelingInfo?: null | CIMLinkChartLinkLabelingInfo;
  /**
   * Gets or sets a value indicating whether this relationship is expanded in the contents pane.
   */
  expanded?: boolean;
  /**
   * Gets or sets the KeyType.  This specifies where the key fields are located.
   */
  keyType?: LinkChartRelationshipKeyType;
  /**
   * Gets or sets the path to the foreign table or layer used to create the relationship.
   */
  mapMemberURI?: null | string;
  /**
   * Gets or sets the source entity key field for the relationship.
   */
  sourceEntityKeyField?: null | string;
  /**
   * Gets or sets the target entity key field for the relationship.
   */
  targetEntityKeyField?: null | string;
}
/**
 * Represents the link chart link drawing information.
 */
export interface CIMLinkChartLinkDrawingInfo {
  /**
   * Gets or sets link color.
   */
  linkColor?: null | CIMColor;
  /**
   * Gets or sets a value for the link width.
   */
  linkWidth?: number;
  /**
   * Gets or sets a value for the link dash style.
   */
  linkDashStyle?: LinkChartLinkDashStyle;
  /**
   * Gets or sets a value indicating whether to show the directional arrowhead of a link.
   */
  showDirection?: boolean;
}
/**
 * Supports colors in the CIM model by providing low level access to properties common amongst all color types.
 */
export interface CIMColor {
  /**
   * Gets and sets alpha.
   */
  alpha?: number;
  /**
   * Gets or sets the color spaced used defined by an ICC color profile.
   */
  colorSpace?: null | CIMColorSpace;
  /**
   * Gets or sets the values for the color and alpha channels as defined by the color model. Alpha is the last value in the array for all colors.
   */
  values?: number[] | null;
}
/**
 * Supports colors spaces by providing a common base type for all color spaces.
 */
export interface CIMColorSpace {}
/**
 * Represents the link chart link labeling information.
 */
export interface CIMLinkChartLinkLabelingInfo {
  /**
   * Gets or sets a value indicating whether the labels are shown.
   */
  showLabels?: boolean;
  /**
   * Gets or sets the link label font family name of the font. e.g. Comic Sans.
   */
  labelFontFamilyName?: null | string;
  /**
   * Gets or sets the style name for the link label font family. e.g. Regular, Bold, or Italic.
   */
  labelFontStyleName?: null | string;
  /**
   * Gets or sets Link label font type.
   */
  labelFontType?: FontType;
  /**
   * Gets or sets Link label font size.
   */
  labelFontSize?: number;
  /**
   * Gets or sets Link Label font color.
   */
  labelFontColor?: null | CIMColor;
  /**
   * Gets or sets Link label background color.
   */
  labelBackgroundColor?: null | CIMColor;
  /**
   * Gets or sets the link label placement.
   */
  labelPlacement?: LinkChartLinkLabelPlacement;
  /**
   * Gets or sets the default label.
   */
  defaultLabel?: null | string;
}
