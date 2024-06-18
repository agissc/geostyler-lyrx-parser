/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Visual variable info types.
 *
 */
export type ExpressionReturnType = 0 | 1 | 2;
export type CIMRangeDefinition = CIMRangeDefinition1[];

/**
 * Represents a range definition.
 *
 */
export interface CIMRangeDefinition1 {
  /**
   * Gets or sets the name.
   */
  name?: null | string;
  /**
   * Gets or sets the field name.
   */
  fieldName?: null | string;
  /**
   * Gets or sets the current range.
   */
  currentRange?: null | CIMRange;
  /**
   * Gets or sets the custom full extent.
   */
  customFullExtent?: null | CIMRange;
  /**
   * Gets or sets a value indicating whether or not range is exclusion.
   */
  isExclusion?: boolean;
  /**
   * Gets or sets ExpressionInfo that contains the Arcade expression that returns a string representing range alias value.
   */
  aliasExpressionInfo?: null | CIMExpressionInfo;
}
/**
 * Represents a range.
 *
 */
export interface CIMRange {
  /**
   * Gets or sets the minimum.
   */
  min?: number;
  /**
   * Gets or sets the maximum.
   */
  max?: number;
}
/**
 * Represents the properties required for authoring an Arcade expression.
 */
export interface CIMExpressionInfo {
  /**
   * Gets or sets the human readable text that describes the expression.
   */
  title?: null | string;
  /**
   * Gets or sets the Arcade expression used to evaluate and return the value that a property expects.
   */
  expression?: null | string;
  /**
   * Gets or sets the Name of the expression.
   */
  name?: null | string;
  /**
   * Gets or sets the ReturnType of the expression.
   */
  returnType?: ExpressionReturnType;
}
