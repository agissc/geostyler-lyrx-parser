/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type CIMSceneDataConnection = CIMDataConnection & {
  /**
   * Gets or sets vendor specific parameters.
   */
  customParameters?: CIMStringMap[] | null;
  /**
   * Gets or sets the URI.
   */
  uri?: null | string;
};
export type CIMDataConnection = CIMObject;
export type CIMStringMap = CIMObject & {
  /**
   * Gets or sets the key.
   */
  key?: null | string;
  /**
   * Gets or sets the value.
   */
  value?: null | string;
};

/**
 * Represents the base CIM object class.
 *
 */
export interface CIMObject {}
