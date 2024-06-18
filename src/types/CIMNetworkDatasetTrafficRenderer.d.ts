/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Patch shapes.
 *
 */
export type PatchShape =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23;
/**
 * Visual variable info types.
 *
 */
export type ExpressionReturnType = 0 | 1 | 2;

/**
 * Represents a network dataset traffic renderer.
 */
export interface CIMNetworkDatasetTrafficRenderer {
  /**
   * Gets or sets the renderer label.
   */
  label?: null | string;
  /**
   * Gets or sets a value indicating whether or not the renderer is visible.
   */
  visible?: boolean;
  /**
   * Gets or sets the renderer class breaks.
   */
  breaks?: CIMClassBreak[] | null;
  /**
   * Gets or sets the default description.
   */
  defaultDescription?: null | string;
  /**
   * Gets or sets the default label.
   */
  defaultLabel?: null | string;
  /**
   * Gets or sets the default symbol.
   */
  defaultSymbol?: null | CIMSymbolReference;
  /**
   * Gets or sets a value indicating whether or not to show only live traffic.
   */
  showLiveTrafficOnly?: boolean;
  /**
   * Gets or sets a value indicating whether or not to use the default symbol.
   */
  useDefaultSymbol?: boolean;
  /**
   * Gets or sets a value indicating whether of not to draw line width by hierarchy level index.
   */
  drawLineWidthByHierarchyLevelIndex?: boolean;
  /**
   * Gets or sets the exterior line width increment.
   */
  exteriorLineWidthIncrement?: number;
  /**
   * Gets or sets the interior line widths by hierarchy level index.
   */
  interiorLineWidthsByHierarchyLevelIndex?: number[] | null;
  /**
   * Gets or sets the line casings color.
   */
  lineCasingsColor?: null | CIMColor;
  /**
   * Gets or sets the scale filters.
   */
  scaleFilters?: number[] | null;
  /**
   * Gets or sets a value indicating whether of not to use a derived line casing color.
   */
  useDerivedLineCasingsColor?: boolean;
  /**
   * Gets or sets a value indicating whether of not to use line casings.
   */
  useLineCasings?: boolean;
  /**
   * Gets or sets a value indicating whether of not to use scale filters.
   */
  useScaleFilters?: boolean;
}
/**
 * Represents a class break.
 *
 */
export interface CIMClassBreak {
  /**
   * Gets or sets a value indicating whether or not this is a critical break.
   */
  criticalBreak?: boolean;
  /**
   * Gets or sets the description.
   */
  description?: null | string;
  /**
   * Gets or sets the label.
   */
  label?: null | string;
  /**
   * Gets or sets the patch shape for this class.
   */
  patch?: PatchShape;
  /**
   * Gets or sets the symbol for the class.
   */
  symbol?: null | CIMSymbolReference;
  /**
   * Gets or sets the upper bound of the class.
   */
  upperBound?: number;
  /**
   * Gets or sets an array of symbol references that are intended to be used at specific scale ranges.
   */
  alternateSymbols?: CIMSymbolReference[] | null;
}
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
