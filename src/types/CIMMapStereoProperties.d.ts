/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Stereo source types.
 */
export type StereoSourceType = 0 | 1;
/**
 * Raster resampling types.
 */
export type RasterResamplingType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
/**
 * Stereo model display modes.
 */
export type StereoModelDisplayMode = 0 | 1 | 2 | 3;
/**
 * Stereo model orientation.
 */
export type StereoOrientation = 0 | 1 | 2 | 3;

/**
 * Represents map stereo properties.
 *
 */
export interface CIMMapStereoProperties {
  /**
   * Gets or sets the left image of the stereo pair.
   */
  leftImage?: null | CIMDataConnection;
  /**
   * Gets or sets the right image of the stereo pair.
   */
  rightImage?: null | CIMDataConnection;
  /**
   * Gets or sets the stereo source type.
   */
  sourceType?: StereoSourceType;
  /**
   * Gets or sets the data connection to the source stereo model collection.
   */
  stereoModelCollection?: null | CIMDataConnection;
  /**
   * Gets or sets the OID of the left image of the current stereo model in a collection.
   */
  leftImageID?: number;
  /**
   * Gets or sets the OID of the right image of the current stereo model in a collection.
   */
  rightImageID?: number;
  /**
   * Gets or sets the colorizer for the left image.
   */
  leftImageColorizer?: null | CIMRasterColorizer;
  /**
   * Gets or sets the colorizer for the right image.
   */
  rightImageColorizer?: null | CIMRasterColorizer;
  /**
   * Gets or sets a value indicating whether adjustments to either colorizer should be synced to the other.
   */
  adjustColorizersInSync?: boolean;
  /**
   * Gets or sets a value indicating whether the left and right images of the stereo model should be swapped.
   */
  isInverted?: boolean;
  /**
   * Gets or sets the stereo model display mode.
   */
  stereoModelDisplayMode?: StereoModelDisplayMode;
  /**
   * Gets or sets the stereo model display orientation.
   */
  orientation?: StereoOrientation;
}
/**
 * Represents a data connection.
 */
export interface CIMDataConnection {}
/**
 * Represents a raster colorizer.
 *
 */
export interface CIMRasterColorizer {
  /**
   * Gets or sets the raster resampling type.
   */
  resamplingType?: RasterResamplingType;
  /**
   * Gets or sets the contrast value.
   */
  contrast?: number;
  /**
   * Gets or sets the brightness value.
   */
  brightness?: number;
  /**
   * Gets or sets the no data color.
   */
  noDataColor?: null | CIMColor;
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
