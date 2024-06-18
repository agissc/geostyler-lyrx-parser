/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Block progressions.
 */
export type BlockProgression = 0 | 1 | 2;
/**
 * Font effects.
 */
export type FontEffects = 0 | 1 | 2;
/**
 * Font encodings.
 */
export type FontEncoding = 0 | 1;
/**
 * Font types.
 */
export type FontType = 0 | 1 | 2 | 3 | 4;
/**
 * Glyph hinting options.
 */
export type GlyphHinting = 0 | 1 | 2;
/**
 * Horizontal alignment types.
 */
export type HorizontalAlignment = 0 | 1 | 2 | 3;
/**
 * Specifies the type of line gap (line spacing) that is applied.
 */
export type LineGapType = 0 | 1 | 2;
/**
 * Specifies the dominant size axis types.
 */
export type DominantSizeAxis = 0 | 1 | 2;
/**
 * Rotation order modes.
 */
export type RotationOrder = 0 | 1 | 2;
/**
 * The letter case used to draw text.
 *
 */
export type TextCase = 0 | 1 | 2;
/**
 * Text reading directions.
 *
 */
export type TextReadingDirection = 0 | 1;
/**
 * Vertical alignment types.
 *
 */
export type VerticalAlignment = 0 | 1 | 2 | 3;
/**
 * Vertical glyph orientation.
 *
 */
export type VerticalGlyphOrientation = 0 | 1;
/**
 * A list of different billboard modes.
 */
export type BillboardMode = 0 | 1 | 2;

/**
 * Represents a text symbol which is used to draw text graphics, bleeds, and annotation. Text symbols do not contain any symbol layers but can have callouts.
 *
 */
export interface CIMTextSymbol {
  /**
   * Gets or sets the amount of rotation applied to the text symbol, measured in degrees, around the geometry.
   */
  angle?: number;
  /**
   * Gets or sets the amount of rotation of the text symbol around the X axis, measured in degrees, around the geometry. This type of rotation is also referred to as tilt. It is applied in 3D.
   */
  angleX?: number;
  /**
   * Gets or sets the amount of rotation of the text symbol around the Y axis, measured in degrees, around the geometry. This type of rotation is also referred to as roll. It is applied in 3D.
   */
  angleY?: number;
  /**
   * Gets or sets the direction in which multi-line text is stacked.
   */
  blockProgression?: BlockProgression;
  /**
   * Gets or sets the callout or background of the text with optional leader lines.
   */
  callout?: null | CIMCallout;
  /**
   * Gets or sets a value indicating whether to draw the text in a fashion compatible with ArcMap.
   */
  compatibilityMode?: boolean;
  /**
   * Gets or sets the ISO code for the base country of the text.
   */
  countryISO?: null | string;
  /**
   * Gets or sets the depth of the glyph when drawn in 3D. This is an extrusion of the characters of the text in the Z axis.
   */
  depth3D?: number;
  /**
   * Gets or sets a value indicating whether fonts that are drawn as rasters at some scales to draw as vectors instead.
   */
  drawGlyphsAsGeometry?: boolean;
  /**
   * Gets or sets a value indicating whether soft hyphens should be drawn. Soft hyphens are invisible markers that indicate where a hyphenated break is allowed within the text. They are only drawn if there is word wrapping at the end of a line.
   */
  drawSoftHyphen?: boolean;
  /**
   * Gets or sets a value indicating whether the baseline of the text geometry should be expanded in the same manner as the existing geometry if the text extends beyond the baseline.
   */
  extrapolateBaselines?: boolean;
  /**
   * Gets or sets the angle (in degrees from vertical) at which point rotated text is flipped (mirrored) in place.
   */
  flipAngle?: number;
  /**
   * Gets or sets whether the text is drawn as subscript or superscript.
   */
  fontEffects?: FontEffects;
  /**
   * Gets or sets the font encoding.
   */
  fontEncoding?: FontEncoding;
  /**
   * Gets or sets the font family name of the font. e.g. Comic Sans.
   */
  fontFamilyName?: null | string;
  /**
   * Gets or sets the style name for the font family. e.g. Regular, Bold, or Italic.
   */
  fontStyleName?: null | string;
  /**
   * Gets or sets the type of font that the font family/style name reference.
   */
  fontType?: FontType;
  /**
   * Gets or sets an array of CIM font variation objects, describing a particular instance of a variable font through the font axis tags and their values. The number of CIM font variations will correspond to the number of variation axes specified by the font. This is only used for variable fonts.
   */
  fontVariationSettings?: CIMFontVariation[] | null;
  /**
   * Gets or sets an additional rotation that is applied to the individual glyphs contained in the text. This is applied to the individual glyphs whereas Angle, AngleX and AngleY are affect how the entire text string is oriented.
   */
  glyphRotation?: number;
  /**
   * Gets or sets the size of the halo that extends beyond the symbol shape.
   */
  haloSize?: number;
  /**
   * Gets or sets the polygon symbol that is used to draw the halo for a text symbol.
   */
  haloSymbol?: null | CIMPolygonSymbol;
  /**
   * Gets or sets the size of the text in points.
   */
  height?: number;
  /**
   * Gets or sets if hinting from the font is used for text rendering. Hinting is information included with most fonts to effectively fit the vector glyphs of the font into the raster grid onto which they are displayed.
   */
  hinting?: GlyphHinting;
  /**
   * Gets or sets the alignment type used to align the text to the geometry horizontally. Affects which side of a point geometry the point text is drawn or which end of a line it is drawn close to. Commonly used to define how stacked text appears.
   */
  horizontalAlignment?: HorizontalAlignment;
  /**
   * Gets or sets how many points to indent the text back from the end of the baseline.
   */
  indentAfter?: number;
  /**
   * Gets or sets how many points to indent the text from the beginning of the baseline.
   */
  indentBefore?: number;
  /**
   * Gets or sets how many points to indent the text from the beginning of the baseline for the first line only.
   */
  indentFirstLine?: number;
  /**
   * Gets or sets a value indicating whether the text is drawn with metric kerning, which adjusts the spacing between individual letter forms.
   */
  kerning?: boolean;
  /**
   * Gets or sets whether the ISO code for the base language of the text.
   */
  languageISO?: null | string;
  /**
   * Gets or sets the additional spacing that is added to each glyph beyond what is defined by its character box in the font. Value indicates the percentage of a glyph's width. Also known as tracking.
   */
  letterSpacing?: number;
  /**
   * Gets or sets the width that is added to each glyph beyond what is defined by its character box in its font. This is a percentage of the original glyph.
   */
  letterWidth?: number;
  /**
   * Gets or sets a value indicating whether text is to be drawn with ligatures, which occur when two or more letters or portions of letters are joined to form a single glyph.
   */
  ligatures?: boolean;
  /**
   * Gets or sets the spacing between lines of text. This is also known as leading or line spacing.
   */
  lineGap?: number;
  /**
   * Gets or sets the type of line gap that is applied.
   */
  lineGapType?: LineGapType;
  /**
   * Gets or sets the X offset.
   */
  offsetX?: number;
  /**
   * Gets or sets the Y offset.
   */
  offsetY?: number;
  /**
   * Gets or sets the Z offset.
   */
  offsetZ?: number;
  /**
   * Gets or sets the color of the shadow that is defined for the text symbol. The shadow is drawn as an offset copy of the text.
   */
  shadowColor?: null | CIMColor;
  /**
   * Gets or sets the shadow offset from the text symbol in the horizontal direction. If X and Y are zero, no shadow is drawn.
   */
  shadowOffsetX?: number;
  /**
   * Gets or sets the shadow offset from the text symbol in the vertical direction. If X and Y are zero, no shadow is drawn.
   */
  shadowOffsetY?: number;
  /**
   * Gets or sets a value indicating whether the text should be drawn as Small Capitals, where lower case text is converted to small caps and upper case text is left as upper case.
   */
  smallCaps?: boolean;
  /**
   * Gets or sets a value indicating whether to draw the text with a strike through it.
   */
  strikethrough?: boolean;
  /**
   * Gets or sets the polygon symbol that is used to draw the glyphs of the text.
   */
  symbol?: null | CIMPolygonSymbol;
  /**
   * Gets or sets the collection of properties that are applied to the text symbol only in a 3D context.
   */
  symbol3DProperties?: null | CIM3DSymbolProperties;
  /**
   * Gets or sets the letter case used to draw the text.
   */
  textCase?: TextCase;
  /**
   * Gets or sets the base text direction to draw the text.
   */
  textDirection?: TextReadingDirection;
  /**
   * Gets or sets a value indicating whether to draw the text with an underline.
   */
  underline?: boolean;
  /**
   * Gets or sets the vertical alignment of the text.
   */
  verticalAlignment?: VerticalAlignment;
  /**
   * Gets or sets the orientation for the non-vertical text in a vertical layout. For example, an English fragment in a Japanese text.
   */
  verticalGlyphOrientation?: VerticalGlyphOrientation;
  /**
   * Gets or sets the additional spacing that is added to between the words of the text string. 100% indicates that regular spacing is used.
   */
  wordSpacing?: number;
  /**
   * Gets or sets the billboard mode of the text symbol.
   */
  billboardMode3D?: BillboardMode;
  /**
   * Gets or sets a value indicating whether or not the symbol should overprint in press printing.
   */
  overprint?: boolean;
}
/**
 * Represents a callout.
 */
export interface CIMCallout {
  /**
   * Gets or sets the leader tolerance which is the closest distance (in points) to the text the anchor point can be for the callout to draw.
   */
  leaderTolerance?: number;
  /**
   * Gets or sets the leader offset which is an offset value defining the distance (in points) between the anchor point and the beginning of the drawn leader.
   */
  leaderOffset?: number;
}
/**
 * Represents a font variation tag name and value. This is sometimes referred to as a variation-axis tag and variation-axis value.
 */
export interface CIMFontVariation {
  /**
   * Gets or sets the font variation tag name. This is a four letter identifier for a particular axis of variation, specified in the font.
   */
  tagName?: null | string;
  /**
   * Gets or sets the numeric value representing a particular font variation value.
   */
  value?: number;
}
/**
 * Represents a polygon symbol which is used to draw polygon features or polygon graphics.
 *
 */
export interface CIMPolygonSymbol {
  /**
   * Gets or sets the geometric effects that are applied to the symbol.
   */
  effects?: CIMGeometricEffect[] | null;
  /**
   * Gets or sets the symbol layers. Symbol layers are the components that make up a symbol. A symbol layer is represented by a stroke, fill, marker, or procedural symbol layer.
   */
  symbolLayers?: CIMSymbolLayer[] | null;
  /**
   * Gets or sets the representative image of the symbol as a base64 encoded string.
   */
  thumbnailURI?: null | string;
  /**
   * Gets or sets a value indicating whether the symbol size properties are rendered using real world units or page units. When set to true the symbol will draw using real world units (e.g. meters).
   */
  useRealWorldSymbolSizes?: boolean;
}
/**
 * Represents a geometric effect, this is base class for all geometric effects.
 */
export interface CIMGeometricEffect {
  /**
   * Gets or sets the primitive name.
   */
  primitiveName?: null | string;
}
/**
 * Represents a symbol layer. Symbol layers are the components that make up a symbol. A symbol layer is represented by a stroke, fill, marker, or procedural symbol layer.
 *
 */
export interface CIMSymbolLayer {
  /**
   * Gets or sets whether the geometric effects that are applied to the symbol layer. Effects dynamically alter the feature geometry when the symbology is applied. Multiple effects applied to a symbol layer are rendered sequentially.
   */
  effects?: CIMGeometricEffect[] | null;
  /**
   * Gets or sets a value indicating whether the symbol layer is visible. The symbol layer draws only when enabled. Currently, an invisible layer is not considered in any transformations when in a 3D context.
   */
  enable?: boolean;
  /**
   * Gets or sets the internal name of the symbol layer used for symbol level drawing.
   */
  name?: null | string;
  /**
   * Gets or sets a value indicating whether the color set at the basic properties level is applied to the symbol layer. If the symbol layer is color locked then changes made to the color in the basic properties will not be applied to the symbol layer.
   */
  colorLocked?: boolean;
  /**
   * Gets or sets the primitive name.
   */
  primitiveName?: null | string;
  /**
   * Gets or sets a value indicating whether or not the symbol layer should overprint in press printing.
   */
  overprint?: boolean;
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
 * Represents 3D symbol properties, a collection of symbol properties that apply when the symbol is used in a 3D context.
 */
export interface CIM3DSymbolProperties {
  /**
   * Gets or sets the dominant size axis.
   */
  dominantSizeAxis3D?: DominantSizeAxis;
  /**
   * Gets or sets the rotation order 3D.
   */
  rotationOrder3D?: RotationOrder;
  /**
   * Gets or sets the scale Z.
   */
  scaleZ?: number;
  /**
   * Gets or sets the scale Y.
   */
  scaleY?: number;
}
