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

/**
 * Represents a symbol reference.
 *
 */
export interface CIMSymbolReference {
  /**
   * Gets or sets the primitive overrides. Typically set by renderers at draw time.
   */
  primitiveOverrides?: CIMPrimitiveOverride[] | null;
  /**
   * Gets or sets the style path. Reserved for future use.
   */
  stylePath?: null | string;
  /**
   * Gets or sets the symbol.
   */
  symbol?: null | CIMSymbol;
  /**
   * Gets or sets the symbol name.
   */
  symbolName?: null | string;
  /**
   * Gets or sets the minimum scale range the symbol reference should be displayed at.
   */
  minScale?: number;
  /**
   * Gets or sets the maximum scale range the symbol reference should be displayed at.
   */
  maxScale?: number;
  /**
   * Gets or sets an array of scale dependent sizes.
   */
  scaleDependentSizeVariation?: CIMScaleDependentSizeVariation[] | null;
  /**
   * Gets or sets the minimum distance at which symbols are visible. Objects closer than this don't get rendered.
   */
  minDistance?: number;
  /**
   * Gets or sets the maximum distance at which symbols are visible. Objects beyond this point don't get rendered.
   */
  maxDistance?: number;
}
/**
 * Represents a primitive override.
 *
 */
export interface CIMPrimitiveOverride {
  /**
   * Gets or sets the primitive name this override applies to.
   */
  primitiveName?: null | string;
  /**
   * Gets or sets the property name in the primitive this override applies to.
   */
  propertyName?: null | string;
  /**
   * Gets or sets the expression.
   */
  expression?: null | string;
  /**
   * Gets or sets ExpressionInfo that contains the Arcade expression that returns value as a number or a string depending on the PropertyName.
   */
  valueExpressionInfo?: null | CIMExpressionInfo;
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
/**
 * Represents a symbol. A symbol is used to describe how a geometric shape, such as that from a graphic or feature, is displayed.
 *
 */
export interface CIMSymbol {}
/**
 * Represents the scale dependent size variations for a symbol reference.
 *
 */
export interface CIMScaleDependentSizeVariation {
  /**
   * Gets or sets the scale the size is associated with.
   */
  scale?: number;
  /**
   * Gets or sets the size for the associated scale.
   */
  size?: number;
}
