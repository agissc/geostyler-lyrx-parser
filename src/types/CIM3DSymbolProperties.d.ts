/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type CIM3DSymbolProperties = CIMObject & {
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
};
/**
 * Specifies the dominant size axis types.
 */
export type DominantSizeAxis = 0 | 1 | 2;
/**
 * Rotation order modes.
 */
export type RotationOrder = 0 | 1 | 2;

/**
 * Represents the base CIM object class.
 *
 */
export interface CIMObject {}
